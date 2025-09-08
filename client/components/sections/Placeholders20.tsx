import { useState } from "react";

type Slot = {
  id: number;
  name: string;
  price: string;
};

export default function Placeholders20() {
  const initial: Slot[] = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    name: "",
    price: "",
  }));

  const [slots, setSlots] = useState<Slot[]>(initial);

  const update = (id: number, key: keyof Slot, value: string) => {
    setSlots((s) => s.map((x) => (x.id === id ? { ...x, [key]: value } : x)));
  };

  const exportJSON = () => {
    // For now just print to console; user can copy-paste
    console.log(JSON.stringify(slots, null, 2));
    alert("Product data copied to console. Use exportJSON() or implement backend saving.");
  };

  return (
    <section className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="font-display text-2xl">Create 20 Product Slots</h3>
        <p className="mt-2 text-sm text-muted-foreground">Fill name and price for each product. These are local placeholders for now.</p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {slots.map((slot) => (
          <div key={slot.id} className="rounded-2xl border bg-card p-4 shadow-sm">
            <div className="relative overflow-hidden rounded-xl aspect-square bg-muted flex items-center justify-center">
              <div className="h-full w-full rounded-xl border-2 border-dashed border-border bg-background/50" />
              <div className="absolute left-3 top-3 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">#{slot.id}</div>
            </div>

            <label className="mt-4 block text-sm">
              <span className="text-muted-foreground">Name</span>
              <input
                value={slot.name}
                onChange={(e) => update(slot.id, "name", e.target.value)}
                placeholder="e.g. Sunflower Melt"
                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
            </label>

            <label className="mt-3 block text-sm">
              <span className="text-muted-foreground">Price (INR)</span>
              <input
                value={slot.price}
                onChange={(e) => update(slot.id, "price", e.target.value)}
                placeholder="e.g. 199"
                inputMode="numeric"
                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
            </label>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button onClick={exportJSON} className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90">
          Export JSON
        </button>
        <button onClick={() => setSlots(initial)} className="inline-flex h-11 items-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-semibold hover:bg-muted">
          Reset
        </button>
      </div>
    </section>
  );
}
