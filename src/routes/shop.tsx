import { createFileRoute, Link } from "@tanstack/react-router";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/cart";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop SS26 — MAISON NORTH" },
      {
        name: "description",
        content:
          "Shop the SS26 collection from MAISON NORTH — knitwear, tailoring, outerwear and shirting photographed in motion.",
      },
      { property: "og:title", content: "Shop SS26 — MAISON NORTH" },
      {
        property: "og:description",
        content: "The full Issue 01 collection. Tailored softness, photographed in motion.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="bg-paper">
      <Masthead />

      <header className="border-b border-rule">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:py-24">
          <div className="small-caps text-ink/60">Issue 01 · The Catalogue</div>
          <h1 className="mt-4 display-xl">
            The full <span className="italic-serif text-primary">SS26</span> collection.
          </h1>
          <p className="mt-6 max-w-xl text-ink/70">
            Ten pieces. One issue. Each photographed in motion — because clothing is meant
            to be worn, not posed.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-6 py-12 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <Link
              key={p.slug}
              to="/product/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="overflow-hidden bg-cream">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[420px]"
                />
              </div>
              <div className="mt-4">
                <div className="small-caps text-ink/50">{p.category}</div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="font-display text-xl">{p.name}</span>
                  <span className="small-caps text-ink/70">{formatPrice(p.price)}</span>
                </div>
                <div className="mt-1 text-sm text-ink/60">{p.piece}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
