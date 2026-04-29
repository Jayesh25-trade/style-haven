export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
        {/* Newsletter */}
        <div className="grid grid-cols-1 gap-12 border-b border-paper/15 pb-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <h3 className="display-xl">
              Subscribe to the <span className="italic-serif text-primary">letter</span>.
            </h3>
            <p className="mt-4 max-w-md text-paper/70">
              Each issue: new pieces, behind-the-shoot, and one essay. Quarterly. Quiet.
            </p>
          </div>
          <form className="md:col-span-6 md:self-end">
            <div className="flex border-b border-paper/40 pb-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent text-lg text-paper placeholder:text-paper/40 focus:outline-none"
              />
              <button className="small-caps text-primary hover:text-paper" type="submit">
                Subscribe →
              </button>
            </div>
          </form>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <div className="font-display text-3xl">MAISON NORTH</div>
            <p className="mt-4 max-w-xs text-sm text-paper/60">
              An editorial fashion house from Lisbon. Made slowly, in Portugal & Italy.
            </p>
          </div>
          <FootCol title="Shop" links={["Women", "Men", "Knitwear", "Outerwear"]} />
          <FootCol title="Maison" links={["About", "Editorial", "Stockists", "Press"]} />
          <FootCol title="Care" links={["Shipping", "Returns", "Contact", "FAQ"]} />
        </div>

        {/* Colophon */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-8 small-caps text-paper/50 md:flex-row md:items-center">
          <span>© 2026 Maison North · Issue N°01</span>
          <span>Set in Fraunces & Inter · Photographed in Lisbon</span>
          <span>Lisbon — Paris — Tokyo</span>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="small-caps text-paper/50">{title}</div>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-paper/85 hover:text-primary">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
