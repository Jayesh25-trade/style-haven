import { createFileRoute, Link } from "@tanstack/react-router";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import { useCart, formatPrice } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag — MAISON NORTH" },
      { name: "description", content: "Review the pieces in your bag before checkout." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { resolved, subtotal, setQty, removeItem, count } = useCart();
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 12;
  const total = subtotal + shipping;

  return (
    <div className="bg-paper">
      <Masthead />

      <header className="border-b border-rule">
        <div className="mx-auto max-w-[1600px] px-6 py-12">
          <div className="small-caps text-ink/60">Pp. 99 — The Bag</div>
          <h1 className="mt-3 display-xl">
            Your <span className="italic-serif text-primary">selection</span>.
          </h1>
        </div>
      </header>

      {resolved.length === 0 ? (
        <div className="mx-auto max-w-2xl px-6 py-32 text-center">
          <div className="italic-serif text-3xl text-ink/50">Your bag is empty.</div>
          <p className="mt-3 text-ink/60">
            Begin with the SS26 collection — pieces photographed in motion.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-block small-caps border-b border-ink pb-1 hover:text-primary hover:border-primary"
          >
            Enter the shop →
          </Link>
        </div>
      ) : (
        <section className="mx-auto max-w-[1600px] px-6 py-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="border-y border-rule">
                <div className="hidden grid-cols-12 gap-4 border-b border-rule py-3 small-caps text-ink/60 md:grid">
                  <div className="col-span-6">Piece</div>
                  <div className="col-span-2 text-center">Size</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
                <ul className="divide-y divide-rule">
                  {resolved.map(({ item, product, lineTotal }) => (
                    <li
                      key={`${item.slug}-${item.size}`}
                      className="grid grid-cols-12 gap-4 py-6"
                    >
                      <div className="col-span-12 flex gap-4 md:col-span-6">
                        <Link
                          to="/product/$slug"
                          params={{ slug: product.slug }}
                          className="block w-24 shrink-0 overflow-hidden bg-cream"
                        >
                          <img
                            src={product.image}
                            alt={product.alt}
                            className="h-32 w-full object-cover"
                          />
                        </Link>
                        <div>
                          <Link
                            to="/product/$slug"
                            params={{ slug: product.slug }}
                            className="font-display text-2xl hover:text-primary"
                          >
                            {product.name}
                          </Link>
                          <div className="mt-1 text-sm text-ink/60">{product.piece}</div>
                          <button
                            onClick={() => removeItem(item.slug, item.size)}
                            className="mt-3 small-caps text-ink/50 hover:text-primary"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="col-span-4 small-caps text-ink/70 md:col-span-2 md:text-center">
                        {item.size}
                      </div>

                      <div className="col-span-4 md:col-span-2 md:flex md:justify-center">
                        <div className="inline-flex items-center border border-rule">
                          <button
                            onClick={() => setQty(item.slug, item.size, item.qty - 1)}
                            className="px-3 py-1 hover:text-primary"
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="px-3 text-sm">{item.qty}</span>
                          <button
                            onClick={() => setQty(item.slug, item.size, item.qty + 1)}
                            className="px-3 py-1 hover:text-primary"
                            aria-label="Increase"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="col-span-4 text-right font-display text-xl md:col-span-2">
                        {formatPrice(lineTotal)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="md:col-span-4">
              <div className="border border-rule p-6">
                <h2 className="font-display text-2xl">Order summary</h2>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-ink/70">Items ({count})</dt>
                    <dd>{formatPrice(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink/70">Shipping</dt>
                    <dd>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</dd>
                  </div>
                  <div className="flex justify-between border-t border-rule pt-3 font-display text-xl">
                    <dt>Total</dt>
                    <dd>{formatPrice(total)}</dd>
                  </div>
                </dl>
                <Link
                  to="/checkout"
                  className="mt-6 block bg-ink py-4 text-center small-caps text-paper hover:bg-primary"
                >
                  Proceed to checkout →
                </Link>
                <Link
                  to="/shop"
                  className="mt-3 block py-3 text-center small-caps text-ink/70 hover:text-primary"
                >
                  Continue shopping
                </Link>
              </div>
            </aside>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
