import { Link, NavLink } from "react-router-dom";
import { Flame, Instagram, ShoppingBag } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
            <Flame className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-xl tracking-tight">
              Glowlush Candles
            </div>
            <div className="text-xs text-muted-foreground">
              Handmade • Scented • Cozy
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="#products"
            className="text-muted-foreground hover:text-foreground"
          >
            Products
          </NavLink>
          <NavLink
            to="#about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </NavLink>
          <NavLink
            to="#contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm text-foreground/70 hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">Instagram</span>
          </a>
          <a
            href="#contact"
            className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90"
          >
            <ShoppingBag className="h-4 w-4" />
            Order
          </a>
        </div>
      </div>
    </header>
  );
}
