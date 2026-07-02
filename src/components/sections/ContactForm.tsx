"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle, Upload, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  tradeType: z.string().min(1, "Please select a trade"),
  projectState: z.string().min(1, "Please select a state"),
  budget: z.string().optional(),
  message: z.string().min(20, "Please provide more detail about your project"),
  honeypot: z.string().max(0, "Bot detected"),
});

type FormData = z.infer<typeof formSchema>;

const projectTypes = [
  "New Construction",
  "Renovation / Remodel",
  "Addition",
  "Tenant Improvement",
  "Site Development",
  "Other",
];

const trades = [
  "Full Estimate (All Trades)",
  "General Construction",
  "Concrete",
  "Steel / Structural",
  "MEP (Mechanical, Electrical, Plumbing)",
  "Electrical",
  "Mechanical / HVAC",
  "Plumbing",
  "Drywall / Framing",
  "Roofing",
  "Painting",
  "Earthwork / Civil",
  "Other",
];

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError?: boolean) =>
    cn(
      "w-full h-11 px-4 rounded-xl border text-sm text-[#1B1F24] bg-white transition-all duration-200 focus:outline-none focus:ring-4",
      hasError
        ? "border-red-400 focus:ring-red-100"
        : "border-[#E6EAF0] hover:border-[#1565D8]/30 focus:border-[#1565D8] focus:ring-[#1565D8]/10"
    );

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-green-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-[#1B1F24] mb-3">
          Estimate Request Received!
        </h3>
        <p className="text-[#6B7280] max-w-md mb-8">
          Thank you for reaching out to BluePeak Estimation. Our team will review your
          project and respond within 2–4 business hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 bg-[#1565D8] text-white font-semibold rounded-xl hover:bg-[#0E4DB3] transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot - hidden from humans */}
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#1B1F24] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="John Smith"
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1B1F24] mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#1B1F24] mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1B1F24] mb-1.5">
            Company Name
          </label>
          <input
            {...register("company")}
            type="text"
            placeholder="Your Company LLC"
            className={inputClass()}
          />
        </div>
      </div>

      {/* Project Type + Trade */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#1B1F24] mb-1.5">
            Project Type <span className="text-red-500">*</span>
          </label>
          <select {...register("projectType")} className={inputClass(!!errors.projectType)}>
            <option value="">Select project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1B1F24] mb-1.5">
            Trade / Scope <span className="text-red-500">*</span>
          </label>
          <select {...register("tradeType")} className={inputClass(!!errors.tradeType)}>
            <option value="">Select trade</option>
            {trades.map((trade) => (
              <option key={trade} value={trade}>{trade}</option>
            ))}
          </select>
          {errors.tradeType && (
            <p className="text-red-500 text-xs mt-1">{errors.tradeType.message}</p>
          )}
        </div>
      </div>

      {/* State + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#1B1F24] mb-1.5">
            Project State <span className="text-red-500">*</span>
          </label>
          <select {...register("projectState")} className={inputClass(!!errors.projectState)}>
            <option value="">Select state</option>
            {US_STATES.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {errors.projectState && (
            <p className="text-red-500 text-xs mt-1">{errors.projectState.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1B1F24] mb-1.5">
            Estimated Budget
          </label>
          <select {...register("budget")} className={inputClass()}>
            <option value="">Select budget range</option>
            <option>Under $100K</option>
            <option>$100K – $500K</option>
            <option>$500K – $1M</option>
            <option>$1M – $5M</option>
            <option>$5M – $20M</option>
            <option>$20M+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-[#1B1F24] mb-1.5">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Briefly describe your project — scope, timeline, any specific requirements..."
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-sm text-[#1B1F24] bg-white resize-none transition-all duration-200 focus:outline-none focus:ring-4",
            errors.message
              ? "border-red-400 focus:ring-red-100"
              : "border-[#E6EAF0] hover:border-[#1565D8]/30 focus:border-[#1565D8] focus:ring-[#1565D8]/10"
          )}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* File upload hint */}
      <div className="flex items-center gap-3 p-4 bg-[#F6F8FB] border border-[#E6EAF0] rounded-xl">
        <Upload size={18} className="text-[#1565D8] flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-[#1B1F24]">Have plans ready?</p>
          <p className="text-xs text-[#6B7280]">
            Email your plans directly to{" "}
            <a href="mailto:EMAIL_PLACEHOLDER" className="text-[#1565D8] font-medium">
              EMAIL_PLACEHOLDER
            </a>{" "}
            and reference your submission.
          </p>
        </div>
      </div>

      {/* Error state */}
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
          <AlertCircle size={18} className="text-red-500" />
          <p className="text-sm text-red-600">
            Something went wrong. Please try again or email us directly.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-13 flex items-center justify-center gap-2 bg-[#1565D8] hover:bg-[#0E4DB3] disabled:opacity-60 disabled:hover:scale-100 disabled:active:scale-100 text-white font-bold text-base rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-blue-sm py-4 cursor-pointer"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send size={18} />
            Submit Estimate Request
          </>
        )}
      </button>

      <p className="text-xs text-[#9CA3AF] text-center">
        By submitting, you agree to our Privacy Policy. We never share your data.
      </p>
    </form>
  );
}
