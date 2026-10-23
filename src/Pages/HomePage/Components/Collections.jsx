import { useState } from 'react'

const COLLECTIONS = [
  {
    name: 'Solitaire ring',
    category: 'Rings',
    material: 'Diamonds',
    description: 'A timeless setting with a brilliant centre stone.',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85',
    alt: 'Diamond solitaire ring in a classic setting',
  },
  {
    name: 'Sculpted band',
    category: 'Rings',
    material: 'Gold',
    description: 'A polished gold band with a softly sculpted profile.',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    alt: 'Sculptural gold ring with a polished finish',
  },
  {
    name: 'Classic silver ring',
    category: 'Rings',
    material: 'Silver',
    description: 'An understated silver design made for everyday wear.',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85',
    alt: 'Minimal silver ring shown in close-up',
  },
  {
    name: 'Fine chain',
    category: 'Necklaces',
    material: 'Gold',
    description: 'A delicate gold chain to wear alone or layer.',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85',
    alt: 'Fine gold necklace displayed in warm light',
  },
  {
    name: 'Silver pendant',
    category: 'Necklaces',
    material: 'Silver',
    description: 'A considered silver pendant with a clean, modern line.',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85',
    alt: 'Silver pendant necklace styled against a dark background',
  },
  {
    name: 'Diamond drop',
    category: 'Necklaces',
    material: 'Diamonds',
    description: 'A delicate diamond detail that catches the light.',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85',
    alt: 'Fine necklace with a bright diamond detail',
  },
  {
    name: 'Everyday bangle',
    category: 'Bracelets',
    material: 'Gold',
    description: 'A smooth gold bangle with an effortless, timeless shape.',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    alt: 'Gold bangle with a smooth polished surface',
  },
  {
    name: 'Silver chain bracelet',
    category: 'Bracelets',
    material: 'Silver',
    description: 'A refined silver chain designed for easy everyday styling.',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85',
    alt: 'Silver chain bracelet with delicate links',
  },
  {
    name: 'Diamond line bracelet',
    category: 'Bracelets',
    material: 'Diamonds',
    description: 'A graceful line of diamonds for a little extra occasion.',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85',
    alt: 'Diamond bracelet with stones set in a fine row',
  },
]

const CATEGORIES = ['All pieces', 'Rings', 'Necklaces', 'Bracelets']
const MATERIALS = ['All materials', 'Gold', 'Silver', 'Diamonds']

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('All pieces')
  const [activeMaterial, setActiveMaterial] = useState('All materials')

  const filteredCollections = COLLECTIONS.filter((piece) => {
    const matchesCategory = activeCategory === 'All pieces' || piece.category === activeCategory
    const matchesMaterial = activeMaterial === 'All materials' || piece.material === activeMaterial

    return matchesCategory && matchesMaterial
  })

  return (
    <section
      id="collections"
      aria-labelledby="collections-heading"
      className="bg-[#09090b] px-5 py-12 text-[#f7f1e8] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.32em] text-[#c5a46d]">
            <span className="h-px w-10 bg-[#c5a46d]" />
            Find your piece
            <span className="h-px w-10 bg-[#c5a46d]" />
          </p>
          <h2
            id="collections-heading"
            className="text-4xl font-light leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          >
            The collection
            <span className="font-serif italic text-[#d2b783]">, your way.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Browse by the pieces you love or the materials you are drawn to.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5">
          <div
            role="group"
            aria-label="Filter by jewellery type"
            className="flex max-w-full flex-wrap justify-center gap-2"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a46d] sm:px-5 sm:text-sm ${
                  activeCategory === category
                    ? 'border-[#c5a46d] bg-[#c5a46d] text-[#100f0d]'
                    : 'border-white/15 text-white/65 hover:border-[#c5a46d]/60 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            role="group"
            aria-label="Filter by material"
            className="flex max-w-full flex-wrap justify-center gap-2"
          >
            {MATERIALS.map((material) => (
              <button
                key={material}
                type="button"
                aria-pressed={activeMaterial === material}
                onClick={() => setActiveMaterial(material)}
                className={`border-b px-3 py-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a46d] sm:text-sm ${
                  activeMaterial === material
                    ? 'border-[#d2b783] text-[#d2b783]'
                    : 'border-transparent text-white/45 hover:text-white/80'
                }`}
              >
                {material}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {filteredCollections.length} pieces
          {activeCategory !== 'All pieces' ? ` in ${activeCategory}` : ''}
          {activeMaterial !== 'All materials' ? ` made with ${activeMaterial}` : ''}.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-10">
          {filteredCollections.map(({ name, category, material, description, image, alt }) => (
            <article key={name} className="group">
              <div className="relative aspect-square overflow-hidden bg-[#1a1815]">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 bg-black/65 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm sm:left-4 sm:top-4 sm:text-[10px]">
                  {material}
                </span>
              </div>
              <div className="pt-4 sm:pt-5">
                <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                  <h3 className="font-serif text-lg text-white sm:text-xl">{name}</h3>
                  <span className="text-[9px] uppercase tracking-[0.16em] text-[#c5a46d] sm:text-[10px]">
                    {category}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-white/50 sm:text-sm sm:leading-6">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {filteredCollections.length === 0 && (
          <p className="py-16 text-center text-sm text-white/60">
            No pieces match both filters. Try another combination.
          </p>
        )}

        <aside className="mt-16 border border-white/10 bg-white/[0.025] px-6 py-8 text-center sm:mt-20 sm:px-10 sm:py-10">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#c5a46d]">
            For retail partners
          </p>
          <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
            Wholesale enquiries
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/55">
            B2B manufacturing and wholesale pricing are handled privately. Get in touch with the
            Aurvanta team to discuss a trade account.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default Collections
