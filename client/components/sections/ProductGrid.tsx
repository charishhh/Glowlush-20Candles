import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  badge?: string;
  description?: string;
  imagePosition?: string;
  imageUrl?: string;
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
    imageUrl:"https://images.search.yahoo.com/images/view;_ylt=Awr93m44db5oHz0g5zOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzI3MTllODljMjFmNzIwODI4ZTNjNTNkNTEyMzFiM2E4BGdwb3MDNARpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsunflower%2Bcandles%26type%3DE210US1274G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D4&w=800&h=800&imgurl=i.etsystatic.com%2F40670920%2Fr%2Fil%2Fd7ce27%2F4776046749%2Fil_800x800.4776046749_5455.jpg&rurl=https%3A%2F%2Fwww.etsy.com%2Fmarket%2Fsunflower_candles&size=93KB&p=sunflower+candles&oid=2719e89c21f720828e3c53d51231b3a8&fr2=piv-web&fr=mcafee&tt=Sunflower+Candles+-+Etsy&b=0&ni=21&no=4&ts=&tab=organic&sigr=7p885k6IlbUd&sigb=tV.PE2aW2fef&sigi=ojbYxAr.YdYj&sigt=4V56W2g3qtOG&.crumb=H6qlJa6SSFv&fr=mcafee&fr2=piv-web&type=E210US1274G0"
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

const extraImages = [
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F714b78487c3d473b94da75dcfc6ebcaa?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F7274fea74c1846d595c4f1e72d0199b4?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2Fadc945aff52542a8b706f4ed0925876a?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2Fa384721ae796474d9af33928dfb62630?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2Fc76a0f2cf31d4eab8624f8ffa22deff5?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F938587a5ddbd4eb797bd771c4253b6f6?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F0f6668705dfc4f01a6bc2a1b678ffdc3?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F8fa84221f5284624a5e28fe3d58d8183?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F096ae6b1f62b460fb6fccd5d96ee299b?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F543e5abfa9ef41ef80038f9bedcec407?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F9551eef070ab471480fdbef35c5a6046?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2Fc0b40fa6595f4bbd91ad3766c70cf4d0?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F8a6033b3a033421780c45b0deb0dd6c9?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F6291643e059b46668952107bb2a7023c?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F61f90c05af204f33aa39bdac3bb20147?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F4eeaa4adb51544219f9d2c3e5d6d655e?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2Fea4c428e5ad64f6388ee4a88844a414a?format=webp&width=800",
];

const extraNames = [
  "Sunflower Mini Box",
  "Assorted Decorative Balls",
  "Rose Gift Pair",
  "Pastel Rose Set",
  "Mixed Tealights & Squares",
  "Glass Flower Votive Set",
  "Sunflower Box (yellow)",
  "Heart Textured Candles",
  "Lotus Tea Light Set",
  "Rose Gift Pair (alt)",
  "Rose 6-Pack",
  "Colorful Glass Votive Set",
  "Sunflower 6-Pack (Yellow)",
  "Two-Tone Ribbed Pillar",
  "Ribbed Pillar Set (Assorted)",
  "Floral Tealight Collection",
  "Pastel Rose Pair",
];

type Slot = {
  id: number;
  name: string;
  price: string;
  badge?: string | null;
  description?: string | null;
  imageUrl?: string | null;
};

export default function ProductGrid() {
  // initialize 20 slots: prefill with existing products where available
  const initial: Slot[] = Array.from({ length: 20 }).map((_, i) => {
    const prod = products[i];
    const extra = extraImages[i - products.length];
    if (prod) {
      return {
        id: i + 1,
        name: prod.name,
        price: String(prod.price),
        badge: prod.badge || null,
        description: prod.description || null,
        imageUrl: prod.imageUrl || null,
      };
    }
    return {
      id: i + 1,
      name: extra ? extraNames[i - products.length] || "" : "",
      price: "",
      badge: null,
      description: null,
      imageUrl: extra || null,
    };
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {slots.filter((s) => !!s.imageUrl).map((p) => (
          <article key={p.id} className="group rounded-2xl border bg-card p-3 shadow-sm transition hover:shadow-md">
            <div className="relative overflow-hidden rounded-xl bg-muted flex items-center justify-center" style={{paddingTop: '100%'}}>
              <div className="absolute inset-0">
                {p.imageUrl ? (
                  <img src={p.imageUrl} alt={p.name || `product-${p.id}`} className="h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-105" />
                ) : (
                  <div className="h-full w-full rounded-xl border-2 border-dashed border-border bg-background/50" />
                )}

                {p.badge && (
                  <span className="absolute left-2 top-2 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                    {p.badge}
                  </span>
                )}

                <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between rounded-lg bg-background/70 px-2 py-1 text-sm backdrop-blur-sm ring-1 ring-border">
                  <span className="font-medium text-sm truncate max-w-[70%]">{p.name || "Add name"}</span>
                  <span className="rounded-md bg-primary px-2 py-0.5 text-xs md:text-sm font-semibold">{p.price ? `₹${p.price}` : "Add price"}</span>
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <label className="block text-xs">
                <span className="text-muted-foreground">Name</span>
                <input value={p.name} onChange={(e) => update(p.id, "name", e.target.value)} placeholder="Product name" className="mt-1 block w-full rounded-md border border-input bg-background px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-primary/30" />
              </label>

              <label className="block text-xs">
                <span className="text-muted-foreground">Price (INR)</span>
                <input value={p.price} onChange={(e) => update(p.id, "price", e.target.value)} placeholder="e.g. 199" inputMode="numeric" className="mt-1 block w-full rounded-md border border-input bg-background px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-primary/30" />
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
