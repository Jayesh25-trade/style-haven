import { Link } from "@tanstack/react-router";
import { useCart, formatPrice } from "@/lib/cart";

export function BagDrawer() {
  const { isOpen, closeBag, resolved, subtotal, setQty, removeItem, count } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeBag}
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-rule bg-paper transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between border-b border-rule px-6 py-5">
          <div>
            <div className="small-caps text-ink/60">The Bag</div>
            <h2 className="mt-1 font-display text-2xl">
              {count} {count === 1 ? "piece" : "pieces"}
            </h2>
          </div>
          <button
            onClick={closeBag}
            className="small-caps text-ink/70 hover:text-primary"
            aria-label="Close bag"
          >
            Close ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {resolved.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <div className="italic-serif text-3xl text-ink/50">Your bag is empty.</div>
              <p className="mt-3 text-sm text-ink/60">
                Begin with the SS26 collection — pieces photographed in motion.
              </p>
              <Link
                to="/shop"
                onClick={closeBag}
                className="mt-6 small-caps border-b border-ink pb-1 text-ink hover:border-primary hover:text-primary"
              >
                Enter the shop →
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-rule">
              {resolved.map(({ item, product, lineTotal }) => (
                <li key={`${item.slug}-${item.size}`} className="flex gap-4 px-6 py-5">
                  <Link
                    to="/product/$slug"
                    params={{ slug: product.slug }}
                    onClick={closeBag}
                    className="block w-24 shrink-0 overflow-hidden bg-cream"
                  >
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="h-32 w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-baseline justify-between gap-3">
                      <Link
                        to="/product/$slug"
                        params={{ slug: product.slug }}
                        onClick={closeBag}
                        className="font-display text-lg leading-tight hover:text-primary"
                      >
                        {product.name}
                      </Link>
                      <span className="font-display text-base">{formatPrice(lineTotal)}</span>
                    </div>
                    <div className="mt-1 text-xs text-ink/60">{product.piece}</div>
                    <div className="mt-1 small-caps text-ink/60">Size · {item.size}</div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-rule">
                        <button
                          onClick={() => setQty(item.slug, item.size, item.qty - 1)}
                          className="px-2 py-1 text-ink/70 hover:text-primary"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-3 text-sm">{item.qty}</span>
                        <button
                          onClick={() => setQty(item.slug, item.size, item.qty + 1)}
                          className="px-2 py-1 text-ink/70 hover:text-primary"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.slug, item.size)}
                        className="small-caps text-ink/50 hover:text-primary"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {resolved.length > 0 && (
          <div className="border-t border-rule px-6 py-5">
            <div className="flex items-baseline justify-between">
              <span className="small-caps text-ink/60">Subtotal</span>
              <span className="font-display text-2xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-ink/50">
              Tax & shipping calculated at checkout.
            </p>
            <Link
              to="/checkout"
              onClick={closeBag}
              className="mt-4 block bg-ink py-4 text-center small-caps text-paper transition-colors hover:bg-primary"
            >
              Checkout →
            </Link>
            <Link
              to="/cart"
              onClick={closeBag}
              className="mt-2 block border border-ink py-4 text-center small-caps text-ink hover:border-primary hover:text-primary"
            >
              View full bag
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
