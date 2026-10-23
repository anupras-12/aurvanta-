const REVIEWS = [
  {
    quote:
      'I wanted something personal but still easy to wear every day. The finished piece felt considered in every detail.',
    product: 'Bespoke design',
    initials: 'BD',
  },
  {
    quote:
      'The team helped me find a gift that felt just right. It arrived beautifully presented, and the whole experience felt special.',
    product: 'Gift shopping',
    initials: 'GS',
  },
  {
    quote:
      'They took the time to explain the options and helped me choose a piece I know I will keep for years.',
    product: 'Personal service',
    initials: 'PS',
  },
  {
    quote:
      'The ring feels beautiful without being too delicate to wear. It has quickly become part of my everyday favourites.',
    product: 'Everyday pieces',
    initials: 'EP',
  },
  {
    quote:
      'I brought in a piece that had been in my family for years. The care and attention during the restoration meant a lot to us.',
    product: 'Repair & restoration',
    initials: 'RR',
  },
  {
    quote:
      'Choosing the right necklace was easy with their guidance. The design is simple, elegant, and goes with everything.',
    product: 'Necklaces',
    initials: 'NK',
  },
  {
    quote:
      'A lovely experience from start to finish. The small details in the finish and presentation made it feel truly special.',
    product: 'Made to order',
    initials: 'MO',
  },
  {
    quote:
      'I appreciated having the materials explained clearly before choosing. The piece feels personal and thoughtfully made.',
    product: 'Material guidance',
    initials: 'MG',
  },
]

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-[#100f0d] px-5 py-12 text-[#f7f1e8] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.32em] text-[#c5a46d]">
            <span className="h-px w-10 bg-[#c5a46d]" />
            The Aurvanta experience
            <span className="h-px w-10 bg-[#c5a46d]" />
          </p>
          <h2
            id="testimonials-heading"
            className="text-4xl font-light leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          >
            Made for moments
            <br />
            <span className="font-serif italic text-[#d2b783]">worth remembering.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Thoughtful design, personal service, and jewellery to treasure.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-5 lg:mt-16 lg:grid-cols-3">
          {REVIEWS.map(({ quote, product, initials }) => (
            <article
              key={product}
              className="flex min-h-72 flex-col border border-white/10 bg-white/[0.025] p-6 sm:p-8"
            >
              <div aria-hidden="true" className="font-serif text-4xl leading-none text-[#d2b783]">
                “
              </div>
              <blockquote className="mt-6 flex-1 font-serif text-xl leading-8 text-white/90">
                “{quote}”
              </blockquote>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a46d]/35 font-serif text-sm text-[#d2b783]"
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Sample customer review</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                    {product}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-xs leading-6 text-white/40">
          Sample review copy for preview only. Replace with verified customer feedback before
          publishing as real testimonials.
        </p>
      </div>
    </section>
  )
}

export default Testimonials
