import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-margin-mobile md:px-margin-desktop text-center">
      <div className="font-display-lg text-display-lg text-secondary mb-4">404</div>
      <h1 className="font-headline-lg text-headline-lg text-primary mb-4">Page Not Found</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-10 max-w-md">
        The page you are looking for does not exist or has been moved. Let us help you find what you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="bg-primary text-on-primary py-4 px-10 rounded font-label-md text-label-md hover:bg-secondary transition-all duration-300">
          Return Home
        </Link>
        <Link href="/contact" className="border-2 border-primary text-primary py-4 px-10 rounded font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all duration-300">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
