const MAISON_WORDMARKS = [
  { name: 'Tiffany & Co.', className: 'font-serif text-2xl tracking-[-0.04em]' },
  { name: 'CARTIER', className: 'font-serif text-2xl tracking-[0.12em]' },
  { name: 'BVLGARI', className: 'font-serif text-2xl tracking-[0.14em]' },
  { name: 'SWAROVSKI', className: 'text-xl font-light tracking-[0.18em]' },
  { name: 'PANDORA', className: 'text-xl font-semibold tracking-[0.12em]' },
  { name: 'VAN CLEEF & ARPELS', className: 'font-serif text-lg tracking-[0.08em]' },
]

const CompaniesTrust = () => {
  return (
    <section
      aria-labelledby="maison-heading"
      className="overflow-hidden border-y border-white/10 bg-[#09090b] px-5 py-8 text-[#f7f1e8] sm:px-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 text-center">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#c5a46d]">
            A world of fine jewellery
          </p>
          <h2
            id="maison-heading"
            className="mt-3 font-serif text-xl font-light tracking-wide text-white/80 sm:text-2xl"
          >
            Inspired by iconic maisons
          </h2>
        </div>

        <div
          aria-label="Jewellery maisons that inspire us"
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:gap-x-14 lg:gap-x-20"
        >
          {MAISON_WORDMARKS.map(({ name, className }) => (
            <span
              key={name}
              aria-label={name}
              className={`whitespace-nowrap text-white/55 transition-colors duration-300 hover:text-[#d2b783] ${className}`}
            >
              {name}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-[10px] leading-5 text-white/35">
          Independent jewellery houses shown for inspiration only; no affiliation or endorsement is implied.
        </p>
      </div>
    </section>
  )
}

export default CompaniesTrust
