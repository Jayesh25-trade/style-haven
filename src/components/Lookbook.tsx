import look1 from "@/assets/look-1.jpg";
import look3 from "@/assets/look-3.jpg";
import throw3 from "@/assets/action-throw-3.jpg";
import catch3 from "@/assets/action-catch-3.jpg";
import look2 from "@/assets/look-2.jpg";

const items = [
  { img: look1, name: "Knit N°04", price: "€295" },
  { img: throw3, name: "Cocoon Coat", price: "€890" },
  { img: look2, name: "Folded Cashmere", price: "€340" },
  { img: catch3, name: "Tan Leather", price: "€1,150" },
  { img: look3, name: "Camel Trench", price: "€720" },
];

export function Lookbook() {
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
          {items.map((it, i) => (
            <figure key={i} className="w-[280px] shrink-0 md:w-[380px]">
              <div className="overflow-hidden bg-cream">
                <img src={it.img} alt={it.name} loading="lazy" width={1024} height={1280}
                  className="grain-hover h-[400px] w-full object-cover md:h-[520px]" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="font-display text-xl">{it.name}</span>
                <span className="small-caps text-ink/60">{it.price}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
