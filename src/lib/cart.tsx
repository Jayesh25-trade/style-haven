import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getProduct, type Product } from "./products";

export type CartItem = {
  slug: string;
  size: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (slug: string, size: string, qty?: number) => void;
  removeItem: (slug: string, size: string) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  clear: () => void;
  isOpen: boolean;
  openBag: () => void;
  closeBag: () => void;
  resolved: Array<{ item: CartItem; product: Product; lineTotal: number }>;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "maison-north-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const resolved = items
      .map((item) => {
        const product = getProduct(item.slug);
        if (!product) return null;
        return { item, product, lineTotal: product.price * item.qty };
      })
      .filter((x): x is { item: CartItem; product: Product; lineTotal: number } => x !== null);

    const subtotal = resolved.reduce((s, r) => s + r.lineTotal, 0);
    const count = items.reduce((s, i) => s + i.qty, 0);

    return {
      items,
      count,
      subtotal,
      resolved,
      isOpen,
      openBag: () => setIsOpen(true),
      closeBag: () => setIsOpen(false),
      addItem: (slug, size, qty = 1) => {
        setItems((prev) => {
          const idx = prev.findIndex((p) => p.slug === slug && p.size === size);
          if (idx >= 0) {
            const next = [...prev];
            next[idx] = { ...next[idx], qty: next[idx].qty + qty };
            return next;
          }
          return [...prev, { slug, size, qty }];
        });
        setIsOpen(true);
      },
      removeItem: (slug, size) => {
        setItems((prev) => prev.filter((p) => !(p.slug === slug && p.size === size)));
      },
      setQty: (slug, size, qty) => {
        setItems((prev) =>
          prev
            .map((p) => (p.slug === slug && p.size === size ? { ...p, qty } : p))
            .filter((p) => p.qty > 0),
        );
      },
      clear: () => setItems([]),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function formatPrice(amount: number) {
  return `€${amount.toLocaleString("en-IE")}`;
}
