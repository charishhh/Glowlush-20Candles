import { Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl h-40" />
      </div>
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border bg-card p-8 text-center shadow-md">
          <h3 className="font-display text-2xl md:text-3xl">Ready to make your space glow?</h3>
          <p className="mt-2 text-muted-foreground">Message us for quick orders, gifting ideas, or custom requests.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="https://wa.me/919880885792" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-md bg-secondary px-6 text-sm font-semibold text-secondary-foreground shadow-sm hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="tel:+919880885792" className="inline-flex h-11 items-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-semibold hover:bg-muted">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
