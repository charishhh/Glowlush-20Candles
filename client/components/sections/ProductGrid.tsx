import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  badge?: string;
  description?: string;
  imagePosition?: string;
};

const IMAGE_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F3d3b460c2e0e473aad2b7313150e262b?format=webp&width=800";

const products: Product[] = [
  {
    id: "sunflower-melt",
    name: "Sunflower Melt (pair)",
    price: 199,
    badge: "Bestseller",
    description: "Sunflower shaped melts",
    imagePosition: "16% 8%",
  },
  {
    id: "rose-blossom",
    name: "Rose Blossom Candle",
    price: 249,
    description: "Delicate rose design",
    imagePosition: "50% 12%",
  },
  {
    id: "lotus-white",
    name: "Lotus Aroma Candle",
    price: 299,
    description: "Calming lotus petals",
    imagePosition: "84% 8%",
  },
  {
    id: "heart-bubble",
    name: "Heart Bubble Set",
    price: 229,
    description: "Playful heart shapes",
    imagePosition: "16% 52%",
  },
  {
    id: "ribbed-pillar",
    name: "Ribbed Pillar",
    price: 279,
    description: "Elegant ribbed pillar",
    imagePosition: "50% 52%",
  },
  {
    id: "tealight-mix",
    name: "Assorted Tealights (6)",
    price: 199,
    description: "Variety pack",
    imagePosition: "84% 52%",
  },
  {
    id: "flower-wax-cups",
    name: "Floral Wax Cups (2)",
    price: 259,
    description: "Flower topped wax cups",
    imagePosition: "30% 86%",
  },
  {
    id: "gift-box",
    name: "Festive Gift Box",
    price: 599,
    badge: "Gift Pick",
    description: "Perfect for gifting",
    imagePosition: "70% 86%",
  },
];

type Slot = {
  id: number;
  name: string;
  price: string;
  badge?: string | null;
  description?: string | null;
};

export default function ProductGrid() {
  // initialize 20 slots: prefill with existing products where available
  const initial: Slot[] = Array.from({ length: 20 }).map((_, i) => {
    const prod = products[i];
    if (prod) {
      return { id: i + 1, name: prod.name, price: String(prod.price), badge: prod.badge || null, description: prod.description || null };
    }
    return { id: i + 1, name: "", price: "", badge: null, description: null };
  });

  const [slots, setSlots] = useState<Slot[]>(initial);

  const update = (id: number, key: keyof Slot, value: string) => {
    setSlots((s) => s.map((x) => (x.id === id ? { ...x, [key]: value } : x)));
  };

  const exportJSON = () => {
    const out = slots.map((s) => ({ id: s.id, name: s.name, price: s.price }));
    navigator.clipboard?.writeText(JSON.stringify(out, null, 2));
    alert("Copied product slots JSON to clipboard.");
  };

  return (
    <section id="products" className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">Handmade Fancy Scented Candles</h2>
        <p className="mt-3 text-muted-foreground">Simple, elegant designs inspired by your reference catalog — now with clear pricing.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {slots.map((p) => (
          <article key={p.id} className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md">
            <div className="relative overflow-hidden rounded-xl aspect-square bg-muted flex items-center justify-center">
              <div className="h-full w-full rounded-xl border-2 border-dashed border-border bg-background/50" />

              {p.badge && (
                <span className="absolute left-2 top-2 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                  {p.badge}
                </span>
              )}

              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg bg-background/90 p-3 text-base backdrop-blur ring-1 ring-border">
                <span className="font-semibold text-lg">{p.name || "Add name"}</span>
                <span className="rounded-md bg-primary px-3 py-1 text-sm md:text-base font-semibold">{p.price ? `₹${p.price}` : "Add price"}</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="block text-sm">
                <span className="text-muted-foreground">Name</span>
                <input value={p.name} onChange={(e) => update(p.id, "name", e.target.value)} placeholder="Product name" className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </label>

              <label className="block text-sm">
                <span className="text-muted-foreground">Price (INR)</span>
                <input value={p.price} onChange={(e) => update(p.id, "price", e.target.value)} placeholder="e.g. 199" inputMode="numeric" className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </label>
            </div>

            {p.description && (
              <p className="mt-4 text-base text-muted-foreground">{p.description}</p>
            )}
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button onClick={exportJSON} className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90">Export Slots</button>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">Note: Custom scents, colors and bulk pricing available on request.</p>
    </section>
  );
}
