import { FormEvent, useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  badge?: string;
  description?: string;
  imagePosition?: string;
  imageUrl?: string;
};

const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_TOKEN ?? "";
const ADMIN_PASSWORD = ADMIN_TOKEN || "candles123";
const MIN_PASSWORD_LENGTH = 6;

const products: Product[] = [
  {
    id: "sunflower-melt",
    name: "Sunflower Melt (pair)",
    price: 199,
    badge: "Bestseller",
    description: "Sunflower shaped melts",
    imagePosition: "16% 8%",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F4912c2a7aa7b4ed7a9767f8cd3ee4246?format=webp&width=800",
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
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2Fbeef9bb959f84a008e66915f4cb0db5b?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F2c234e27353e425e99bce2cee42dd7cd?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F83ad5e164c74438c8114c97c3af25d71?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2Fb4381ccb207945978a9e24e1873c13a9?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F8a21a8e24062487790f7553775cbfaee?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2Fce8836d989944a9d91b2a74fa6f14ec3?format=webp&width=800",
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
  "Blue Daisy Votive",
  "Orange Festive Ball Set",
  "Dual Glass Flower Votives",
  "Sunflower Clay Diya Pack",
  "Sunflower Double Diya",
  "Colorful Diya & Flower Set",
  "Festive Orange Roli Balls",
];

type Slot = {
  id: number;
  name: string;
  price: string;
  badge?: string | null;
  description?: string | null;
  imageUrl?: string | null;
};

const STORAGE_KEY = "product_slots_v1";
const ADMIN_STORAGE_KEY = "product_grid_admin_access";

function makeInitialSlots(): Slot[] {
  const total = Math.max(20, products.length + extraImages.length);
  return Array.from({ length: total }).map((_, i) => {
    const prod = products[i];
    const extraIndex = i - products.length;
    const extra = extraImages[extraIndex];
    if (prod) {
      return {
        id: i + 1,
        name: prod.name,
        price: String(prod.price ?? ""),
        badge: prod.badge || null,
        description: prod.description || null,
        imageUrl: prod.imageUrl || null,
      };
    }

    return {
      id: i + 1,
      name: extra ? extraNames[extraIndex] || "" : "",
      price: "",
      badge: null,
      description: null,
      imageUrl: extra || null,
    };
  });
}

export default function ProductGrid() {
  const initial = makeInitialSlots();
  const [slots, setSlots] = useState<Slot[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      // fallthrough to defaults
    }
    return initial;
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const [editorOpenId, setEditorOpenId] = useState<number | null>(null);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slots));
    } catch (e) {
      // ignore storage errors
    }
  }, [slots]);

  useEffect(() => {
    try {
      if (localStorage.getItem(ADMIN_STORAGE_KEY) === "true") {
        setIsAdmin(true);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (isAdmin) {
      setAdminPassword("");
      setAdminError("");
    } else {
      setEditorOpenId(null);
    }
  }, [isAdmin]);

  const update = (id: number, key: keyof Slot, value: string) => {
    setSlots((s) => s.map((x) => (x.id === id ? { ...x, [key]: value } : x)));
  };

  const isHiddenName = (n: string) => {
    const key = (n || "").toLowerCase().trim();
    return key === "rose gift pair" || key === "heart textured candles" || key === "heart texture";
  };

  const handleAdminLogin = () => {
    if (!ADMIN_TOKEN) {
      alert("Admin access is not configured. Set VITE_ADMIN_TOKEN in the environment.");
      return;
    }
    const input = prompt("Enter admin passcode:");
    if (input === null) return;
    if (input === ADMIN_TOKEN) {
      setIsAdmin(true);
      try {
        localStorage.setItem(ADMIN_STORAGE_KEY, "true");
      } catch (e) {
        // ignore
      }
      alert("Admin editing enabled.");
    } else {
      alert("Incorrect passcode.");
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setEditorOpenId(null);
    try {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  };

  const resetDefaults = () => {
    if (
      !confirm(
        "Reset product slots to defaults? This will overwrite current changes.",
      )
    )
      return;
    const def = makeInitialSlots();
    setSlots(def);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="products" className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          Handmade Fancy Scented Candles
        </h2>
        <p className="mt-3 text-muted-foreground">
          Simple, elegant designs inspired by your reference catalog — now with
          clear pricing.
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        {isAdmin ? (
          <button
            onClick={handleAdminLogout}
            className="inline-flex h-9 items-center rounded-md border px-3 text-sm font-semibold"
          >
            Disable admin editing
          </button>
        ) : (
          <button
            onClick={handleAdminLogin}
            className="inline-flex h-9 items-center rounded-md border px-3 text-sm font-semibold"
          >
            Admin login
          </button>
        )}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {slots
          .filter((s) => !!s.imageUrl && !isHiddenName(s.name))
          .slice(1)
          .map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl border bg-card p-3 shadow-sm transition hover:shadow-md"
            >
              <div
                className="relative overflow-hidden rounded-xl bg-muted flex items-center justify-center"
                style={{ paddingTop: "100%" }}
              >
                <div className="absolute inset-0">
                  {p.imageUrl ? (
                    <img
                      src={p.imageUrl}
                      alt={p.name || `product-${p.id}`}
                      className="h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full rounded-xl border-2 border-dashed border-border bg-background/50" />
                  )}

                  {p.badge && (
                    <span className="absolute left-2 top-2 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                      {p.badge}
                    </span>
                  )}

                  <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between rounded-lg bg-background/70 px-2 py-1 text-sm backdrop-blur-sm ring-1 ring-border">
                    <span className="font-medium text-sm truncate max-w-[70%]">
                      {p.name || "Add name"}
                    </span>
                    <span className="rounded-md bg-primary px-2 py-0.5 text-xs md:text-sm font-semibold">
                      {p.price ? `₹${p.price}` : "Add price"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                {isAdmin ? (
                  editorOpenId === p.id ? (
                    <div className="space-y-1">
                      <label className="block text-xs">
                        <span className="text-muted-foreground">Name</span>
                        <input
                          value={p.name}
                          onChange={(e) => update(p.id, "name", e.target.value)}
                          placeholder="Product name"
                          className="mt-1 block w-full rounded-md border border-input bg-background px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      </label>

                      <label className="block text-xs">
                        <span className="text-muted-foreground">Price (INR)</span>
                        <input
                          value={p.price}
                          onChange={(e) => update(p.id, "price", e.target.value)}
                          placeholder="e.g. 199"
                          inputMode="numeric"
                          className="mt-1 block w-full rounded-md border border-input bg-background px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      </label>

                      <div className="mt-2 flex gap-2">
                        <button
                          onClick={() => setEditorOpenId(null)}
                          className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditorOpenId(null)}
                          className="inline-flex h-8 items-center rounded-md border px-3 text-xs font-semibold"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditorOpenId(p.id)}
                      className="inline-flex h-9 w-full items-center justify-center rounded-md border px-3 text-sm font-semibold"
                    >
                      {!p.name || !p.price
                        ? "Add name & price"
                        : "Edit name & price"}
                    </button>
                  )
                ) : (
                  <p className="text-center text-xs text-muted-foreground">
                    Admin login required to edit.
                  </p>
                )}
              </div>

              {p.description && (
                <p className="mt-4 text-base text-muted-foreground">
                  {p.description}
                </p>
              )}
            </article>
          ))}
      </div>

      {isAdmin && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={resetDefaults}
            className="inline-flex h-11 items-center gap-2 rounded-md border px-4 text-sm font-semibold"
          >
            Reset to defaults
          </button>
        </div>
      )}

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Note: Custom scents, colors and bulk pricing available on request.
      </p>
    </section>
  );
}
