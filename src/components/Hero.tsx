import heroImg from "@/assets/hero-editorial.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule bg-paper">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-0 md:grid-cols-12">
        {/* Left text block */}
        <div className="relative z-10 col-span-1 flex flex-col justify-between px-6 py-10 md:col-span-7 md:px-12 md:py-20">
          <div className="small-caps flex items-center gap-3 text-ink/60">
            <span>N°01</span>
            <span className="h-px w-8 bg-ink/30" />
            <span>The Motion Issue</span>
          </div>

          <div className="reveal-up mt-10 md:mt-0">
            <h2 className="display-mega">
              In <span className="italic-serif text-primary">motion</span>,
              <br />
              we are <span className="italic-serif">honest.</span>
            </h2>
            <p className="mt-8 max-w-md font-body text-base leading-relaxed text-ink/75 md:text-lg">
              A spring collection built for the way we actually move. Tailored softness,
              athletic geometry, and one warm tone of orange that refuses to sit still.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#shop"
                className="group inline-flex items-center gap-3 border border-ink bg-ink px-7 py-4 small-caps text-paper transition-colors hover:bg-primary hover:border-primary"
              >
                Shop the Issue
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#editorial" className="small-caps text-ink/70 underline-offset-4 hover:text-primary hover:underline">
                Read the editorial
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-rule pt-6 md:mt-0">
            <Stat n="36" label="New pieces" />
            <Stat n="12" label="Editorial stories" />
            <Stat n="01" label="Singular vision" />
          </div>
        </div>

        {/* Right image block */}
        <div className="relative col-span-1 md:col-span-5">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream md:aspect-auto md:h-full">
            <img
              src={heroImg}
              alt="Editorial portrait — model in oversized cream coat with burnt orange scarf, MAISON NORTH SS26"
              className="h-full w-full object-cover"
              width={1080}
              height={1920}
            />
            {/* Caption sticker */}
            <div className="absolute bottom-6 left-6 max-w-[220px] bg-paper px-4 py-3 small-caps text-ink shadow-[6px_6px_0_0_rgba(0,0,0,0.08)]">
              Cover · Look 01 — The Cocoon Coat €890
            </div>
            {/* Issue stamp */}
            <div className="absolute right-6 top-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-paper">
              <div className="text-center font-display leading-none">
                <div className="text-2xl">01</div>
                <div className="small-caps text-[10px]">Issue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-ink md:text-4xl">{n}</div>
      <div className="small-caps mt-1 text-ink/60">{label}</div>
    </div>
  );
}
