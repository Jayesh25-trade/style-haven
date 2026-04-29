export function Marquee() {
  const items = [
    "SS26 — In Motion",
    "Free shipping over €150",
    "New arrivals weekly",
    "Made in Portugal & Italy",
    "Issue 01 out now",
    "Editorial drop · 04.26",
  ];
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-rule bg-ink py-4 text-paper">
      <div className="marquee flex w-max gap-12 whitespace-nowrap small-caps">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{it}</span>
            <span className="text-primary">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
