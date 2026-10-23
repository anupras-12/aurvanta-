import { motion, useReducedMotion } from 'framer-motion'

const COMMITMENTS = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-8 w-8">
        <path d="M8 17 16 8h16l8 9-16 23L8 17Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="m8 17 32 0M16 8l4 9 4 23 4-23 4-9M16 8l-8 9m24-9 8 9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Conflict-free diamonds',
    description:
      'We believe the beauty of a diamond should never come at the cost of people. We prioritise diamonds represented as conflict-free and value clear sourcing information.',
    note: 'People before sparkle',
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-8 w-8">
        <path d="M24 6v8m0 20v8M6 24h8m20 0h8M11.3 11.3l5.7 5.7m14 14 5.7 5.7m0-25.4L31 17m-14 14-5.7 5.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 24h8m-4-4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Recycled gold',
    description:
      'Choosing recycled gold can reduce the demand for newly mined material while giving precious metal another life in a beautifully made piece.',
    note: 'A material with another story',
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-8 w-8">
        <path d="M24 40s-16-9-16-21a9 9 0 0 1 16-5 9 9 0 0 1 16 5c0 12-16 21-16 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m18 24 4 4 8-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Made to be kept',
    description:
      'Thoughtful design and care services help jewellery stay in your life longer. Repairing and restoring a favourite piece is another way to value what you own.',
    note: 'Care over throwaway',
  },
]

const SustainbilityResourcing = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="sustainability"
      aria-labelledby="sustainability-heading"
      className="relative overflow-hidden bg-[#100f0d] px-5 py-12 text-[#f7f1e8] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-36 top-20 h-96 w-96 rounded-full border border-[#c5a46d]/10" />
      <div className="pointer-events-none absolute -left-20 top-36 h-64 w-64 rounded-full border border-[#c5a46d]/10" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.32em] text-[#c5a46d]">
            <span className="h-px w-10 bg-[#c5a46d]" />
            Sourcing with intention
            <span className="h-px w-10 bg-[#c5a46d]" />
          </p>
          <h2
            id="sustainability-heading"
            className="text-4xl font-light leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          >
            A little more care
            <br />
            <span className="font-serif italic text-[#d2b783]">in every choice.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Beautiful jewellery should feel good to wear and good to choose. We value considered
            materials, responsible sourcing, and making pieces that are cared for over time.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-3 md:gap-5">
          {COMMITMENTS.map(({ number, icon, title, description, note }, index) => (
            <motion.article
              key={number}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.1, ease: 'easeOut' }}
              className="group relative flex min-h-80 flex-col border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 hover:border-[#c5a46d]/40 hover:bg-white/[0.045] sm:p-8"
            >
              <div className="mb-9 flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c5a46d]/35 text-[#d2b783] transition-colors group-hover:bg-[#c5a46d]/10">
                  {icon}
                </div>
                <span className="font-serif text-lg text-white/35">{number}</span>
              </div>
              <h3 className="font-serif text-2xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>
              <p className="mt-auto pt-7 text-[10px] uppercase tracking-[0.22em] text-[#c5a46d]">
                {note}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-white/40">
          Sourcing practices and material availability can vary by piece. Contact us for details
          about the materials and sourcing information available for a specific design.
        </p>
      </div>
    </section>
  )
}

export default SustainbilityResourcing
