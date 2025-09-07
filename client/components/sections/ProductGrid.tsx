type Product = {
  id: string;
  name: string;
  price: number;
  badge?: string;
  description?: string;
};

const IMAGE_URL = "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F3d3b460c2e0e473aad2b7313150e262b?format=webp&width=800";

const products: Product[] = [
  { id: "sunflower-melt", name: "Sunflower Melt (pair)", price: 199, badge: "Bestseller" },
  { id: "rose-blossom", name: "Rose Blossom Candle", price: 249 },
  { id: "lotus-white", name: "Lotus Aroma Candle", price: 299 },
  { id: "heart-bubble", name: "Heart Bubble Set", price: 229 },
  { id: "ribbed-pillar", name: "Ribbed Pillar", price: 279 },
  { id: "tealight-mix", name: "Assorted Tealights (6)", price: 199 },
  { id: "flower-wax-cups", name: "Floral Wax Cups (2)", price: 259 },
  { id: "gift-box", name: "Festive Gift Box", price: 599, badge: "Gift Pick" },
];

export default function ProductGrid() {
  return (
    <section id="products" className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">Handmade Fancy Scented Candles</h2>
        <p className="mt-3 text-muted-foreground">Simple, elegant designs inspired by your reference catalog — now with clear pricing.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article key={p.id} className="group rounded-2xl border bg-card p-4 shadow-sm transition hover:shadow-md">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-100 to-rose-100 aspect-square">
              {p.badge && (
                <span className="absolute left-2 top-2 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                  {p.badge}
                </span>
              )}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg bg-background/80 p-2 text-sm backdrop-blur ring-1 ring-border">
                <span className="font-medium">{p.name}</span>
                <span className="rounded-md bg-primary px-2 py-0.5 text-primary-foreground">₹{p.price}</span>
              </div>
            </div>
            {p.description && <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>}
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Note: Custom scents, colors and bulk pricing available on request.
      </p>
    </section>
  );
}
