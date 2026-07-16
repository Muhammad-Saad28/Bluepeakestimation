import { NextRequest, NextResponse } from "next/server";

// Rate limiting store (in-memory, for production use Redis)
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);
  if (!record || now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60_000 }); // 1 min window
    return false;
  }
  if (record.count >= 5) return true; // max 5 per minute
  record.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, company, service, projectValue, message, honeypot } = body;

    // Honeypot check
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true }); // Silently succeed for bots
    }

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // --------------------------------------------------------
    // Resend integration
    // --------------------------------------------------------
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY || RESEND_API_KEY === "YOUR_RESEND_API_KEY") {
      console.error("RESEND_API_KEY is missing or not configured.");
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(RESEND_API_KEY);

    // Send notification email to BluePeak
    const notifyResult = await resend.emails.send({
      // Using Resend's shared domain — works without custom domain verification.
      // Once bluepeakestimation.com is verified in Resend, change this to:
      // from: "BluePeak Estimation <no-reply@bluepeakestimation.com>"
      from: "BluePeak Estimation <onboarding@resend.dev>",
      to: ["bluepeakestimation@gmail.com"],
      replyTo: email,
      subject: `New Estimate Request — ${service} | ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #082B6B; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">📋 New Estimate Request</h1>
          </div>
          <div style="background: #F6F8FB; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #E6EAF0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151; width: 40%;">Name</td><td style="color: #1B1F24;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td><td><a href="mailto:${email}" style="color: #1565D8;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone</td><td style="color: #1B1F24;">${phone || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Company</td><td style="color: #1B1F24;">${company || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Service Needed</td><td style="color: #1B1F24;">${service}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Project Value</td><td style="color: #1B1F24;">${projectValue || "Not specified"}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #E6EAF0;">
              <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Project Details</p>
              <p style="color: #6B7280; margin: 0; line-height: 1.6;">${message}</p>
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: #9CA3AF;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    if (notifyResult.error) {
      console.error("Resend error (notify):", notifyResult.error);
      return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
    }

    console.log("Notification email sent:", notifyResult.data?.id);

    // Send auto-reply to the client
    const autoReplyResult = await resend.emails.send({
      from: "BluePeak Estimation <onboarding@resend.dev>",
      to: [email],
      subject: "We Received Your Estimate Request — BluePeak Estimation",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #082B6B; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Thank You, ${name}!</h1>
          </div>
          <div style="padding: 24px; border: 1px solid #E6EAF0; border-radius: 0 0 8px 8px;">
            <p style="color: #374151;">Thank you for requesting an estimate from BluePeak Estimation.</p>
            <p style="color: #374151;">Our team will review your project details and get back to you within <strong>2–4 business hours</strong>.</p>
            <div style="margin: 20px 0; padding: 16px; background: #EBF2FF; border-radius: 8px; border-left: 4px solid #1565D8;">
              <p style="margin: 0; color: #1565D8; font-weight: bold;">Next Steps</p>
              <p style="margin: 8px 0 0; color: #374151; font-size: 14px;">If you have plans ready, please email them to <a href="mailto:bluepeakestimation@gmail.com" style="color:#1565D8;">bluepeakestimation@gmail.com</a> to speed up the process.</p>
            </div>
            <p style="color: #6B7280; font-size: 14px;">Questions? Reply to this email and we'll get back to you promptly.</p>
          </div>
        </div>
      `,
    });

    if (autoReplyResult.error) {
      // Non-critical — notify was already sent successfully
      console.warn("Auto-reply failed:", autoReplyResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
