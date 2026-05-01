import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import { getProduct, products } from "@/lib/products";
import { useCart, formatPrice } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — ${loaderData.product.piece} · MAISON NORTH` },
          { name: "description", content: loaderData.product.description },
          {
            property: "og:title",
            content: `${loaderData.product.name} — MAISON NORTH`,
          },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="bg-paper">
      <Masthead />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <div className="small-caps text-ink/60">404</div>
        <h1 className="mt-4 display-xl">Piece not found.</h1>
        <Link to="/shop" className="mt-8 inline-block small-caps border-b border-ink pb-1 hover:text-primary hover:border-primary">
          Return to shop →
        </Link>
      </div>
      <Footer />
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [size, setSize] = useState<string>(product.sizes[2] ?? product.sizes[0]);
  const [error, setError] = useState<string | null>(null);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="bg-paper">
      <Masthead />

      <nav className="border-b border-rule">
        <div className="mx-auto max-w-[1600px] px-6 py-3 small-caps text-ink/60">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2 text-ink/30">/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span className="mx-2 text-ink/30">/</span>
          <span className="text-ink">{product.name}</span>
        </div>
      </nav>

      <article className="mx-auto max-w-[1600px] px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          {/* Image */}
          <div className="md:col-span-7">
            <div className="overflow-hidden bg-cream">
              <img
                src={product.image}
                alt={product.alt}
                className="h-auto w-full object-cover"
                width={1024}
                height={1280}
              />
            </div>
            <div className="mt-3 small-caps text-ink/50">Photographed for Issue 01</div>
          </div>

          {/* Info */}
          <div className="md:col-span-5 md:sticky md:top-6 md:self-start">
            <div className="small-caps text-primary">{product.category}</div>
            <h1 className="mt-3 font-display text-5xl leading-none md:text-6xl">{product.name}</h1>
            <p className="mt-3 italic-serif text-xl text-ink/70">{product.piece}</p>
            <div className="mt-6 font-display text-3xl">{product.priceLabel}</div>

            <p className="mt-8 max-w-prose text-ink/80">{product.description}</p>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-baseline justify-between">
                <span className="small-caps text-ink/70">Select size</span>
                <button className="small-caps text-ink/50 hover:text-primary">Size guide</button>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSize(s);
                      setError(null);
                    }}
                    className={`border py-3 small-caps transition-colors ${
                      size === s
                        ? "border-ink bg-ink text-paper"
                        : "border-rule text-ink hover:border-ink"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
            </div>

            {/* Actions */}
            <div className="mt-8 space-y-3">
              <button
                onClick={() => {
                  if (!size) {
                    setError("Please select a size.");
                    return;
                  }
                  addItem(product.slug, size, 1);
                }}
                className="w-full bg-ink py-4 small-caps text-paper transition-colors hover:bg-primary"
              >
                Add to bag — {product.priceLabel}
              </button>
              <button
                onClick={() => {
                  if (!size) {
                    setError("Please select a size.");
                    return;
                  }
                  addItem(product.slug, size, 1);
                  navigate({ to: "/checkout" });
                }}
                className="w-full border border-ink py-4 small-caps text-ink hover:border-primary hover:text-primary"
              >
                Buy now →
              </button>
            </div>

            {/* Details */}
            <dl className="mt-12 divide-y divide-rule border-y border-rule">
              <div className="py-4">
                <dt className="small-caps text-ink/60">Composition</dt>
                <dd className="mt-1 text-sm text-ink/80">{product.composition}</dd>
              </div>
              <div className="py-4">
                <dt className="small-caps text-ink/60">Details</dt>
                <dd className="mt-2">
                  <ul className="space-y-1 text-sm text-ink/80">
                    {product.details.map((d) => (
                      <li key={d}>— {d}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="py-4">
                <dt className="small-caps text-ink/60">Shipping & returns</dt>
                <dd className="mt-1 text-sm text-ink/80">
                  Complimentary worldwide shipping over €150. 30-day returns on unworn pieces.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1600px] px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="display-xl">
              From the <span className="italic-serif text-primary">same issue</span>.
            </h2>
            <Link to="/shop" className="small-caps text-ink/70 hover:text-primary">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {related.map((p) => (
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
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-96"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="font-display text-lg">{p.name}</span>
                  <span className="small-caps text-ink/60">{formatPrice(p.price)}</span>
                </div>
                <div className="text-xs text-ink/60">{p.piece}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
