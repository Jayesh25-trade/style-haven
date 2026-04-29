export function Masthead() {
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
            <a href="#shop" className="hover:text-primary">Shop</a>
            <a href="#editorial" className="hover:text-primary">Editorial</a>
            <a href="#lookbook" className="hover:text-primary">Lookbook</a>
          </nav>

          <h1 className="font-display text-center text-3xl tracking-tight md:text-5xl">
            MAISON&nbsp;NORTH
          </h1>

          <div className="flex items-center justify-end gap-6 small-caps">
            <a href="#" className="hidden hover:text-primary md:inline">Search</a>
            <a href="#" className="hidden hover:text-primary md:inline">Account</a>
            <a href="#" className="relative hover:text-primary">
              Bag <sup className="ml-1 text-primary">(0)</sup>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
