import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";

export function Masthead() {
  const { count, openBag } = useCart();

  return (
    <header className="relative z-20 border-b border-rule bg-paper">
      {/* Top strip */}
      <div className="border-b border-rule">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-2 small-caps text-ink/70">
          <span>Issue 01 — Spring/Summer 26</span>
          <span className="hidden md:inline">Free shipping over €150 — Worldwide</span>
          <span>EN / EUR</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="mx-auto max-w-[1600px] px-6 py-6 md:py-8">
        <div className="grid grid-cols-3 items-center gap-4">
          <nav className="hidden gap-8 small-caps text-ink md:flex">
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            <Link to="/" hash="editorial" className="hover:text-primary">Editorial</Link>
            <Link to="/" hash="lookbook" className="hover:text-primary">Lookbook</Link>
          </nav>

          <Link
            to="/"
            className="font-display text-center text-3xl tracking-tight md:text-5xl"
          >
            MAISON&nbsp;NORTH
          </Link>

          <div className="flex items-center justify-end gap-6 small-caps">
            <Link to="/shop" className="hidden hover:text-primary md:inline">Search</Link>
            <span className="hidden text-ink/40 md:inline">Account</span>
            <button
              type="button"
              onClick={openBag}
              className="relative hover:text-primary"
              aria-label="Open bag"
            >
              Bag <sup className="ml-1 text-primary">({count})</sup>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
