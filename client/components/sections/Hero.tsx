import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -inset-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
      </div>
      <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
            <Sparkles className="h-3.5 w-3.5" /> Hand-poured with love
          </div>
          <h1 className="mt-5 font-display text-4xl leading-tight tracking-tight md:text-6xl">
            Fancy, scented candles for cozy moments
          </h1>
          <p className="mt-4 max-w-prose text-muted-foreground">
            Discover artisanal candles inspired by flowers and festive shapes.
            Clean burn, lovely aroma, beautifully gift-ready.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90">
              Browse products
            </a>
            <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-semibold hover:bg-muted">
              Custom order
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {/** Use uploaded catalog image in a few tiles for immediate visual showcase */}
          <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-sm">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F3d3b460c2e0e473aad2b7313150e262b?format=webp&width=800" alt="catalog" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-2xl shadow-sm">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F3d3b460c2e0e473aad2b7313150e262b?format=webp&width=800" alt="catalog" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-sm">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F3d3b460c2e0e473aad2b7313150e262b?format=webp&width=800" alt="catalog" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-2 aspect-video overflow-hidden rounded-2xl shadow-sm">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F3d3b460c2e0e473aad2b7313150e262b?format=webp&width=1200" alt="catalog" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-2xl shadow-sm">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Ff1bf68ad12a64d17b2ad0d87413795f6%2F3d3b460c2e0e473aad2b7313150e262b?format=webp&width=800" alt="catalog" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
