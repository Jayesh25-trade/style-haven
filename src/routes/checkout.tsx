import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import { useCart, formatPrice } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — MAISON NORTH" },
      { name: "description", content: "Complete your MAISON NORTH order." },
    ],
  }),
  component: CheckoutPage,
});

type Step = "address" | "payment";

function CheckoutPage() {
  const { resolved, subtotal, count, clear } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("address");
  const [submitting, setSubmitting] = useState(false);

  const [address, setAddress] = useState({
    email: "",
    firstName: "",
    lastName: "",
    line1: "",
    line2: "",
    city: "",
    postal: "",
    country: "France",
    phone: "",
  });

  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 12;
  const tax = Math.round(subtotal * 0.2);
  const total = subtotal + shipping + tax;

  if (resolved.length === 0) {
    return (
      <div className="bg-paper">
        <Masthead />
        <div className="mx-auto max-w-2xl px-6 py-32 text-center">
          <div className="italic-serif text-3xl text-ink/50">No pieces to check out.</div>
          <Link
            to="/shop"
            className="mt-6 inline-block small-caps border-b border-ink pb-1 hover:text-primary hover:border-primary"
          >
            Enter the shop →
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  function handleAddressSubmit(e: FormEvent) {
    e.preventDefault();
    setStep("payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePaymentSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const orderId = `MN-${Date.now().toString(36).toUpperCase()}`;
    setTimeout(() => {
      const summary = {
        orderId,
        email: address.email,
        firstName: address.firstName,
        total,
        items: resolved.length,
      };
      try {
        sessionStorage.setItem("maison-north-last-order", JSON.stringify(summary));
      } catch {
        // ignore
      }
      clear();
      navigate({ to: "/order-confirmed", search: { id: orderId } });
    }, 1100);
  }

  return (
    <div className="bg-paper">
      <Masthead />

      <header className="border-b border-rule">
        <div className="mx-auto max-w-[1600px] px-6 py-10">
          <div className="small-caps text-ink/60">Checkout · Issue 01</div>
          <h1 className="mt-2 display-xl">
            {step === "address" ? "Shipping" : "Payment"}
          </h1>
          <ol className="mt-6 flex gap-6 small-caps">
            <li className={step === "address" ? "text-primary" : "text-ink/40"}>
              01 — Address
            </li>
            <li className={step === "payment" ? "text-primary" : "text-ink/40"}>
              02 — Payment
            </li>
            <li className="text-ink/30">03 — Confirmation</li>
          </ol>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Form column */}
          <div className="md:col-span-7">
            {step === "address" ? (
              <form onSubmit={handleAddressSubmit} className="space-y-8">
                <fieldset className="space-y-4">
                  <legend className="small-caps text-ink/60">Contact</legend>
                  <Field
                    label="Email"
                    type="email"
                    required
                    value={address.email}
                    onChange={(v) => setAddress({ ...address, email: v })}
                  />
                </fieldset>

                <fieldset className="space-y-4">
                  <legend className="small-caps text-ink/60">Delivery address</legend>
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      label="First name"
                      required
                      value={address.firstName}
                      onChange={(v) => setAddress({ ...address, firstName: v })}
                    />
                    <Field
                      label="Last name"
                      required
                      value={address.lastName}
                      onChange={(v) => setAddress({ ...address, lastName: v })}
                    />
                  </div>
                  <Field
                    label="Address line 1"
                    required
                    value={address.line1}
                    onChange={(v) => setAddress({ ...address, line1: v })}
                  />
                  <Field
                    label="Address line 2 (optional)"
                    value={address.line2}
                    onChange={(v) => setAddress({ ...address, line2: v })}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      label="City"
                      required
                      value={address.city}
                      onChange={(v) => setAddress({ ...address, city: v })}
                    />
                    <Field
                      label="Postal code"
                      required
                      value={address.postal}
                      onChange={(v) => setAddress({ ...address, postal: v })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <SelectField
                      label="Country"
                      value={address.country}
                      onChange={(v) => setAddress({ ...address, country: v })}
                      options={[
                        "France",
                        "Italy",
                        "Spain",
                        "Germany",
                        "United Kingdom",
                        "Netherlands",
                        "United States",
                        "Japan",
                      ]}
                    />
                    <Field
                      label="Phone"
                      type="tel"
                      required
                      value={address.phone}
                      onChange={(v) => setAddress({ ...address, phone: v })}
                    />
                  </div>
                </fieldset>

                <div className="flex items-center justify-between border-t border-rule pt-6">
                  <Link
                    to="/cart"
                    className="small-caps text-ink/60 hover:text-primary"
                  >
                    ← Back to bag
                  </Link>
                  <button
                    type="submit"
                    className="bg-ink px-8 py-4 small-caps text-paper hover:bg-primary"
                  >
                    Continue to payment →
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="space-y-8">
                <div className="border border-rule bg-cream/40 p-4 text-xs text-ink/70">
                  This is a demonstration storefront. No real payment will be processed —
                  any test card number works.
                </div>

                <fieldset className="space-y-4">
                  <legend className="small-caps text-ink/60">Payment</legend>
                  <Field
                    label="Name on card"
                    required
                    value={payment.cardName}
                    onChange={(v) => setPayment({ ...payment, cardName: v })}
                  />
                  <Field
                    label="Card number"
                    required
                    placeholder="4242 4242 4242 4242"
                    value={payment.cardNumber}
                    onChange={(v) =>
                      setPayment({
                        ...payment,
                        cardNumber: v.replace(/[^\d ]/g, "").slice(0, 19),
                      })
                    }
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      label="Expiry (MM/YY)"
                      required
                      placeholder="04/28"
                      value={payment.expiry}
                      onChange={(v) =>
                        setPayment({ ...payment, expiry: v.replace(/[^\d/]/g, "").slice(0, 5) })
                      }
                    />
                    <Field
                      label="CVC"
                      required
                      placeholder="123"
                      value={payment.cvc}
                      onChange={(v) =>
                        setPayment({ ...payment, cvc: v.replace(/\D/g, "").slice(0, 4) })
                      }
                    />
                  </div>
                </fieldset>

                <div className="border-t border-rule pt-4 small-caps text-ink/60">
                  <div>Shipping to</div>
                  <div className="mt-1 text-ink/80 normal-case tracking-normal" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", letterSpacing: 0 }}>
                    {address.firstName} {address.lastName}, {address.line1}
                    {address.line2 ? `, ${address.line2}` : ""}, {address.city} {address.postal},{" "}
                    {address.country}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep("address")}
                    className="mt-2 small-caps text-primary hover:underline"
                  >
                    Edit address
                  </button>
                </div>

                <div className="flex items-center justify-between border-t border-rule pt-6">
                  <button
                    type="button"
                    onClick={() => setStep("address")}
                    className="small-caps text-ink/60 hover:text-primary"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-ink px-8 py-4 small-caps text-paper transition-colors hover:bg-primary disabled:opacity-60"
                  >
                    {submitting ? "Processing…" : `Pay ${formatPrice(total)} →`}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Summary */}
          <aside className="md:col-span-5">
            <div className="border border-rule p-6 md:sticky md:top-6">
              <h2 className="font-display text-2xl">Order — {count} pieces</h2>

              <ul className="mt-4 divide-y divide-rule">
                {resolved.map(({ item, product, lineTotal }) => (
                  <li
                    key={`${item.slug}-${item.size}`}
                    className="flex gap-3 py-3"
                  >
                    <div className="h-20 w-16 shrink-0 overflow-hidden bg-cream">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 items-start justify-between gap-2">
                      <div>
                        <div className="font-display text-base leading-tight">
                          {product.name}
                        </div>
                        <div className="text-xs text-ink/60">{product.piece}</div>
                        <div className="mt-1 text-xs small-caps text-ink/60">
                          Size {item.size} · Qty {item.qty}
                        </div>
                      </div>
                      <div className="font-display text-sm">{formatPrice(lineTotal)}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="mt-6 space-y-2 border-t border-rule pt-4 text-sm">
                <Row label="Subtotal" value={formatPrice(subtotal)} />
                <Row
                  label="Shipping"
                  value={shipping === 0 ? "Complimentary" : formatPrice(shipping)}
                />
                <Row label="VAT (20%)" value={formatPrice(tax)} />
                <div className="flex justify-between border-t border-rule pt-3 font-display text-xl">
                  <dt>Total</dt>
                  <dd>{formatPrice(total)}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-ink/70">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="small-caps text-ink/60">{label}</span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full border border-rule bg-paper px-3 py-3 text-base text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="small-caps text-ink/60">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full border border-rule bg-paper px-3 py-3 text-base text-ink focus:border-ink focus:outline-none"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
