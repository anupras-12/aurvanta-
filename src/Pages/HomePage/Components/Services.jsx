import { useRef } from 'react'

const SERVICES = [
  {
    number: '01',
    title: 'Bespoke design',
    description:
      'Bring us an idea, a sketch, or a story. We will help shape it into a one-of-a-kind piece made around you.',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85',
    alt: 'Close-up of a carefully designed gemstone ring',
    category: 'Designed for you',
  },
  {
    number: '02',
    title: 'Made to order',
    description:
      'Choose a design and make it yours with a considered selection of details, finishes, and personal touches.',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85',
    alt: 'Gold jewellery finished with an elegant, refined detail',
    category: 'Your piece, your way',
  },
  {
    number: '03',
    title: 'Repairs & restoration',
    description:
      'Give a well-loved piece another chapter with careful repairs and detail-led restoration.',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Hand_Filing_a_Ring_at_Olertis.jpg/1280px-Hand_Filing_a_Ring_at_Olertis.jpg',
    alt: 'A jeweller carefully filing and shaping a ring by hand',
    category: 'Care for keepsakes',
  },
  {
    number: '04',
    title: 'Resizing & adjustments',
    description:
      'From a more comfortable fit to small adjustments, we help make your jewellery feel right for you.',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    alt: 'A close-up of gold jewellery and its fine details',
    category: 'A fit that feels right',
  },
  {
    number: '05',
    title: 'Cleaning & polishing',
    description:
      'Refresh the finish and bring back the glow with attentive cleaning and polishing care.',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85',
    alt: 'Gold necklace displayed in warm light',
    category: 'Keep its glow',
  },
  {
    number: '06',
    title: 'Styling & gifting',
    description:
      'Find a thoughtful gift or the finishing touch for your look with personal guidance from our team.',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85',
    alt: 'A selection of jewellery ready to style or give as a gift',
    category: 'A little something special',
  },
]

const Services = () => {
  const carouselRef = useRef(null)

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return

    carousel.scrollBy({
      left: direction * carousel.clientWidth * 0.82,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="overflow-hidden bg-[#09090b] px-5 py-12 text-[#f7f1e8] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-8 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#927345]">
              <span className="h-px w-10 bg-[#927345]" />
              The Aurvanta experience
            </p>
            <h2
              id="services-heading"
              className="max-w-2xl text-4xl font-light leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              Thoughtful care,
              <br />
              <span className="font-serif italic text-[#927345]">
                from first idea to forever.
              </span>
            </h2>
          </div>

          <div className="flex items-end justify-between gap-6 sm:max-w-sm sm:flex-col sm:items-start sm:gap-5">
            <p className="max-w-sm text-sm leading-7 text-white/60 sm:text-base">
              Discover the ways we help you create, personalise, and care for jewellery worth
              keeping.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                aria-label="Scroll to previous services"
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-lg transition-colors hover:border-[#927345] hover:bg-[#927345] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#927345]"
              >
                <span aria-hidden="true">&larr;</span>
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                aria-label="Scroll to next services"
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-lg transition-colors hover:border-[#927345] hover:bg-[#927345] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#927345]"
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={carouselRef}
          role="region"
          aria-label="Aurvanta jewellery services"
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#927345] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
        >
          {SERVICES.map(({ number, title, description, image, alt, category }) => (
            <article
              key={number}
              className="group relative aspect-[4/5] w-[82vw] max-w-[390px] shrink-0 snap-start overflow-hidden bg-[#2a251f] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <img
                src={image}
                alt={alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 transition-colors group-hover:from-black/90" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
                <span className="text-xs uppercase tracking-[0.2em] text-white/75">{category}</span>
                <span className="font-serif text-lg text-[#e0c18b]">{number}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <h3 className="font-serif text-2xl text-white sm:text-3xl">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
          Swipe or use the arrows to explore
        </p>
      </div>
    </section>
  )
}

export default Services
