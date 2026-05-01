import { Link } from "@tanstack/react-router";
import { products } from "@/lib/products";

const slugs = [
  "knit-no-04",
  "drape-camel-cocoon-coat",
  "folded-cashmere",
  "oxide-tan-leather-jacket",
  "camel-trench",
  "chalk-pleated-trouser",
];

export function Lookbook() {
  const items = slugs.map((s) => products.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <section id="lookbook" className="border-b border-rule bg-paper">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between px-6 pb-8 pt-20 md:px-12 md:pt-32">
        <div>
          <div className="small-caps text-ink/60">Pp. 30 — The Lookbook</div>
          <h3 className="display-xl mt-4">
            Scroll the <span className="italic-serif text-primary">collection</span>.
          </h3>
        </div>
        <div className="hidden small-caps text-ink/50 md:block">Drag · Swipe → →</div>
      </div>

      <div className="overflow-x-auto pb-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-6 px-6 md:gap-8 md:px-12">
          {items.map((p) => (
            <Link
              key={p.slug}
              to="/product/$slug"
              params={{ slug: p.slug }}
              className="block w-[280px] shrink-0 md:w-[380px]"
            >
              <figure>
                <div className="overflow-hidden bg-cream">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="grain-hover h-[400px] w-full object-cover md:h-[520px]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between">
                  <span className="font-display text-xl">{p.name}</span>
                  <span className="small-caps text-ink/60">{p.priceLabel}</span>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
