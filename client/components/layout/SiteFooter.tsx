export default function SiteFooter() {
  return (
    <footer className="border-t bg-background" id="contact">
      <div className="container grid gap-6 py-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl">Glowlush Candles</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-prose">
            Small-batch, hand-poured candles made with premium fragrances and a
            whole lot of love. Custom colors, scents and gift boxes available.
          </p>
        </div>
        <div className="grid gap-2 text-sm">
          <p>
            WhatsApp:{" "}
            <a
              className="font-medium underline decoration-primary/40 underline-offset-4 hover:text-foreground"
              href="https://wa.me/919880885792"
              target="_blank"
              rel="noreferrer"
            >
              +91 98808 85792
            </a>
          </p>
          <p>
            Call:{" "}
            <a
              className="font-medium underline decoration-primary/40 underline-offset-4 hover:text-foreground"
              href="tel:+919880885792"
            >
              +91 98808 85792
            </a>
          </p>
          <p className="text-muted-foreground">
            Open to bulk and custom orders.
          </p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Glowlush Candles. All rights reserved.
      </div>
    </footer>
  );
}
