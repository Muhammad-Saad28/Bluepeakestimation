"use client";

export function NewsletterForm() {
  return (
    <form className="flex gap-3 w-full lg:w-auto" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 lg:w-72 h-11 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#2A7FFF] transition-colors"
      />
      <button
        type="submit"
        className="h-11 px-6 bg-[#1565D8] hover:bg-[#0E4DB3] text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
