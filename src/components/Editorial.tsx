import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";

export function Editorial() {
  return (
    <section id="editorial" className="border-b border-rule bg-cream">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left: pull quote */}
          <div className="md:col-span-5">
            <div className="small-caps text-ink/60">Pp. 26 — Manifesto</div>
            <blockquote className="mt-8 font-display text-3xl leading-tight text-ink md:text-5xl">
              <span className="text-primary">“</span>
              We design clothes that don't ask permission to{" "}
              <span className="italic-serif">breathe</span>.
              <span className="text-primary">”</span>
            </blockquote>
            <p className="mt-8 small-caps text-ink/60">— Editor's letter, Issue 01</p>

            <div className="mt-10 space-y-4 text-ink/75">
              <p>
                MAISON NORTH was built on a quiet rebellion: that elegance and movement are
                not opposites. Our pieces are cut to be lived in — slept in, danced in,
                caught mid-air in.
              </p>
              <p className="italic-serif">
                Cream, ink, a single stripe of orange. The rest is silence.
              </p>
            </div>
          </div>

          {/* Right: editorial collage */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-6 gap-3 md:gap-4">
              <div className="col-span-4 row-span-2 overflow-hidden bg-paper">
                <img src={look1} alt="Editorial close-up of model in cream knit sweater"
                  loading="lazy" width={1024} height={1280}
                  className="grain-hover h-full w-full object-cover" />
              </div>
              <div className="col-span-2 overflow-hidden bg-paper">
                <img src={look2} alt="Stack of folded cream and burnt orange knitwear"
                  loading="lazy" width={1024} height={1024}
                  className="grain-hover h-full w-full object-cover" />
              </div>
              <div className="col-span-2 overflow-hidden bg-paper">
                <img src={look4} alt="Detail of ivory shirt cuff with gold watch"
                  loading="lazy" width={1280} height={1024}
                  className="grain-hover h-full w-full object-cover" />
              </div>
              <div className="col-span-6 overflow-hidden bg-paper">
                <img src={look3} alt="Model walking in camel coat with burnt orange bag"
                  loading="lazy" width={1024} height={1280}
                  className="grain-hover h-[420px] w-full object-cover md:h-[520px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
