export function AnimatedMarqueeHero({
  tagline = 'Join over 100,000 happy creators',
  title = (
    <>
      Engage Audiences
      <br />
      with Stunning Videos
    </>
  ),
  description = 'Boost Your Brand with High-Impact Short Videos from our expert content creators. Our team is ready to propel your business forward.',
  ctaText = 'Get Started',
  ctaHref = '#contact',
  images = [],
}) {
  return (
    <section className="relative overflow-hidden bg-[#09090b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,166,88,0.25),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-24 sm:px-8 lg:px-10 lg:pb-16 lg:pt-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a85a]/40 bg-[#d4a85a]/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#f5d48b] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#f5d48b] shadow-[0_0_18px_rgba(245,212,139,0.9)]" />
              {tagline}
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#f6f0ea] sm:text-6xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-300 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-[#d4a85a] px-6 py-3 text-sm font-medium text-[#14110d] transition hover:bg-[#efc66b]"
              >
                {ctaText}
              </a>
              <a
                href="#collections"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-[#d4a85a]/60 hover:text-[#f5d48b]"
              >
                Explore Craft
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-xl lg:ml-auto">
            <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-stone-400">
              <span>Our signature work</span>
              <span>Luxury finishes</span>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <div className="marquee-viewport">
                <div className="marquee-track">
                  {[0, 1].map((group) => (
                    <div className="marquee-group" key={group} aria-hidden={group === 1}>
                      {images.map((image, index) => (
                        <div
                          key={`${image}-${index}`}
                          className="h-44 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-stone-900 sm:h-52 sm:w-32"
                        >
                          <img
                            src={image}
                            alt="Jewelry design and craftsmanship"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedMarqueeHero
