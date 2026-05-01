import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import { formatPrice } from "@/lib/cart";

const searchSchema = z.object({
  id: z.string().optional(),
});

export const Route = createFileRoute("/order-confirmed")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Order confirmed — MAISON NORTH" },
      { name: "description", content: "Thank you. Your MAISON NORTH order has been received." },
    ],
  }),
  component: ConfirmedPage,
});

type OrderSummary = {
  orderId: string;
  email: string;
  firstName: string;
  total: number;
  items: number;
};

function ConfirmedPage() {
  const { id } = Route.useSearch();
  const [summary, setSummary] = useState<OrderSummary | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("maison-north-last-order");
      if (raw) setSummary(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  const orderId = id ?? summary?.orderId ?? "—";

  return (
    <div className="bg-paper">
      <Masthead />

      <main className="mx-auto max-w-3xl px-6 py-20 md:py-32">
        <div className="small-caps text-primary">Issue 01 · Confirmation</div>
        <h1 className="mt-4 display-xl">
          Thank you{summary?.firstName ? `, ${summary.firstName}` : ""}.
        </h1>
        <p className="mt-6 text-lg text-ink/70 italic-serif">
          Your order has been received and is being prepared by hand.
        </p>

        <div className="mt-12 border-y border-rule">
          <dl className="grid grid-cols-2 divide-x divide-rule md:grid-cols-4">
            <Cell label="Order N°" value={orderId} />
            <Cell label="Pieces" value={summary?.items?.toString() ?? "—"} />
            <Cell
              label="Total"
              value={summary ? formatPrice(summary.total) : "—"}
            />
            <Cell label="Confirmation sent to" value={summary?.email ?? "—"} mono={false} />
          </dl>
        </div>

        <p className="mt-10 max-w-prose text-ink/70">
          A receipt has been sent to your email. Production typically takes 2 business days,
          followed by complimentary worldwide delivery. You may track your shipment from the
          link in your confirmation email.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/shop"
            className="bg-ink px-6 py-4 small-caps text-paper hover:bg-primary"
          >
            Continue shopping →
          </Link>
          <Link
            to="/"
            className="border border-ink px-6 py-4 small-caps text-ink hover:border-primary hover:text-primary"
          >
            Return to Issue 01
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Cell({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="px-4 py-5">
      <div className="small-caps text-ink/60">{label}</div>
      <div
        className={`mt-2 break-words text-ink ${mono ? "font-display text-xl" : "text-sm"}`}
      >
        {value}
      </div>
    </div>
  );
}
