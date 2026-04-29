import throw1 from "@/assets/action-throw-1.jpg";
import catch1 from "@/assets/action-catch-1.jpg";
import throw2 from "@/assets/action-throw-2.jpg";
import catch2 from "@/assets/action-catch-2.jpg";
import throw3 from "@/assets/action-throw-3.jpg";
import catch3 from "@/assets/action-catch-3.jpg";

type Pair = {
  index: string;
  title: string;
  left: { img: string; name: string; piece: string; price: string; alt: string };
  right: { img: string; name: string; piece: string; price: string; alt: string };
};

const pairs: Pair[] = [
  {
    index: "01",
    title: "The Pass",
    left: {
      img: throw1,
      name: "ATLAS",
      piece: "Cream Linen Throwing Shirt",
      price: "€240",
      alt: "Model mid-throw in cream linen shirt and wide trousers",
    },
    right: {
      img: catch1,
      name: "VENERA",
      piece: "Ivory Wool Reaching Suit",
      price: "€780",
      alt: "Model catching a basketball in ivory wool tailored suit",
    },
  },
  {
    index: "02",
    title: "The Strike",
    left: {
      img: throw2,
      name: "BIRCH",
      piece: "Camel Knit & Cargo Set",
      price: "€420",
      alt: "Model kicking a ball in camel knit sweater and cargo trousers",
    },
    right: {
      img: catch2,
      name: "PLEAT",
      piece: "Linen Shirt & Pleated Skirt",
      price: "€365",
      alt: "Model receiving a ball with foot in pleated cream skirt",
    },
  },
  {
    index: "03",
    title: "The Toss",
    left: {
      img: throw3,
      name: "DRAPE",
      piece: "Wool Camel Cocoon Coat",
      price: "€890",
      alt: "Model tossing ball upward in draped camel wool coat",
    },
    right: {
      img: catch3,
      name: "OXIDE",
      piece: "Tan Leather Catch Jacket",
      price: "€1,150",
      alt: "Model leaning back catching ball in tan leather jacket",
    },
  },
];

export function ActionPairs() {
  return (
    <section id="shop" className="border-b border-rule bg-paper">
      {/* Section header */}
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

      {/* Pairs */}
      <div className="mx-auto max-w-[1600px]">
        {pairs.map((pair, i) => (
          <PairBlock key={pair.index} pair={pair} flipped={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function PairBlock({ pair, flipped }: { pair: Pair; flipped: boolean }) {
  return (
    <article className="border-t border-rule">
      {/* Pair header */}
      <div className="flex items-baseline justify-between px-6 py-6 md:px-12">
        <div className="flex items-baseline gap-6">
          <span className="font-display text-5xl text-primary md:text-6xl">{pair.index}</span>
          <span className="small-caps text-ink/60">{pair.title}</span>
        </div>
        <span className="small-caps hidden text-ink/50 md:inline">Look pair · 02 pieces</span>
      </div>

      {/* Two boxes with ball arc */}
      <div className="relative grid grid-cols-1 gap-0 md:grid-cols-2">
        {/* Animated ball trail (decorative, between cards) */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary md:block"
          style={{ animation: "ball-arc-anim 5s cubic-bezier(0.42, 0, 0.58, 1) infinite" }}
          aria-hidden="true"
        />

        <ProductBox item={flipped ? pair.right : pair.left} side="left" />
        <ProductBox item={flipped ? pair.left : pair.right} side="right" />
      </div>
    </article>
  );
}

function ProductBox({
  item,
  side,
}: {
  item: Pair["left"];
  side: "left" | "right";
}) {
  return (
    <div
      className={`relative border-rule px-6 py-8 md:px-10 md:py-12 ${
        side === "left" ? "md:border-r" : ""
      }`}
    >
      <div className="overflow-hidden bg-cream">
        <img
          src={item.img}
          alt={item.alt}
          loading="lazy"
          width={1024}
          height={1280}
          className="grain-hover h-auto w-full object-cover"
        />
      </div>

      <div className="mt-6 grid grid-cols-12 items-baseline gap-4">
        <div className="col-span-7">
          <h4 className="font-display text-3xl text-ink md:text-4xl">{item.name}</h4>
          <p className="mt-2 text-sm text-ink/70 md:text-base">{item.piece}</p>
        </div>
        <div className="col-span-5 text-right">
          <div className="font-display text-2xl text-ink md:text-3xl">{item.price}</div>
          <button className="mt-3 small-caps text-ink/70 underline-offset-4 hover:text-primary hover:underline">
            Add to bag →
          </button>
        </div>
      </div>
    </div>
  );
}
