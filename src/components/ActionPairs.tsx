import { Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";

type Pair = { index: string; title: string; leftSlug: string; rightSlug: string };

const pairs: Pair[] = [
  { index: "01", title: "The Pass", leftSlug: "atlas-cream-linen-shirt", rightSlug: "venera-ivory-wool-suit" },
  { index: "02", title: "The Strike", leftSlug: "birch-camel-knit-set", rightSlug: "pleat-linen-shirt-skirt" },
  { index: "03", title: "The Toss", leftSlug: "drape-camel-cocoon-coat", rightSlug: "oxide-tan-leather-jacket" },
];

export function ActionPairs() {
  return (
    <section id="shop" className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-20 md:pb-16 md:pt-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="small-caps text-ink/60">Editorial · Pp. 12 — 24</div>
          </div>
          <div className="md:col-span-8">
            <h3 className="display-xl">
              Throw &amp; <span className="italic-serif text-primary">catch</span> —
              <br />a study in clothed motion.
            </h3>
            <p className="mt-6 max-w-2xl text-ink/70">
              Six pieces. Three moments. We photographed them mid-air to prove that
              tailoring still moves with the body — even when the body is reaching.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px]">
        {pairs.map((pair, i) => (
          <PairBlock key={pair.index} pair={pair} flipped={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function PairBlock({ pair, flipped }: { pair: Pair; flipped: boolean }) {
  const left = products.find((p) => p.slug === pair.leftSlug)!;
  const right = products.find((p) => p.slug === pair.rightSlug)!;

  return (
    <article className="border-t border-rule">
      <div className="flex items-baseline justify-between px-6 py-6 md:px-12">
        <div className="flex items-baseline gap-6">
          <span className="font-display text-5xl text-primary md:text-6xl">{pair.index}</span>
          <span className="small-caps text-ink/60">{pair.title}</span>
        </div>
        <span className="small-caps hidden text-ink/50 md:inline">Look pair · 02 pieces</span>
      </div>

      <div className="relative grid grid-cols-1 gap-0 md:grid-cols-2">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary md:block"
          style={{ animation: "ball-arc-anim 5s cubic-bezier(0.42, 0, 0.58, 1) infinite" }}
          aria-hidden="true"
        />
        <ProductBox product={flipped ? right : left} side="left" />
        <ProductBox product={flipped ? left : right} side="right" />
      </div>
    </article>
  );
}

function ProductBox({
  product,
  side,
}: {
  product: (typeof products)[number];
  side: "left" | "right";
}) {
  const { addItem } = useCart();
  const defaultSize = product.sizes[2] ?? product.sizes[0];

  return (
    <div
      className={`relative border-rule px-6 py-8 md:px-10 md:py-12 ${
        side === "left" ? "md:border-r" : ""
      }`}
    >
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden bg-cream"
      >
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          width={1024}
          height={1280}
          className="grain-hover h-auto w-full object-cover"
        />
      </Link>

      <div className="mt-6 grid grid-cols-12 items-baseline gap-4">
        <div className="col-span-7">
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="font-display text-3xl text-ink hover:text-primary md:text-4xl"
          >
            {product.name}
          </Link>
          <p className="mt-2 text-sm text-ink/70 md:text-base">{product.piece}</p>
        </div>
        <div className="col-span-5 text-right">
          <div className="font-display text-2xl text-ink md:text-3xl">{product.priceLabel}</div>
          <button
            onClick={() => addItem(product.slug, defaultSize, 1)}
            className="mt-3 small-caps text-ink/70 underline-offset-4 hover:text-primary hover:underline"
          >
            Add to bag →
          </button>
        </div>
      </div>
    </div>
  );
}
