import { motion } from 'framer-motion'

const CRAFT_IMAGE =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Hand_Filing_a_Ring_at_Olertis.jpg/1280px-Hand_Filing_a_Ring_at_Olertis.jpg'

const PRINCIPLES = [
  { number: '01', title: 'Thoughtful design', detail: 'Modern forms with a personal feel.' },
  { number: '02', title: 'Skilled hands', detail: 'Care in every curve and finish.' },
  { number: '03', title: 'Made to keep', detail: 'Enduring pieces for everyday moments.' },
]

const AboutUs = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#100f0d] px-5 py-12 text-[#f7f1e8] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full border border-[#c5a46d]/10" />
      <div className="pointer-events-none absolute -right-24 top-26 h-64 w-64 rounded-full border border-[#c5a46d]/10" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#c5a46d]">
            <span className="h-px w-10 bg-[#c5a46d]" />
            The Aurvanta story
          </p>

          <h2
            id="about-heading"
            className="max-w-xl text-4xl font-light leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          >
            Jewellery with
            <br />
            <span className="font-serif italic text-[#d2b783]">meaning in every detail.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            At Aurvanta, we believe the pieces we wear should feel personal, thoughtfully made,
            and worth keeping. We bring modern design together with the patience of skilled
            hands—shaping every detail from the first idea to the final polish.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            The result is jewellery made to become part of your story: considered enough for
            special moments, and comfortable enough to wear every day.
          </p>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3 sm:gap-4">
            {PRINCIPLES.map(({ number, title, detail }) => (
              <div key={number}>
                <span className="font-serif text-2xl text-[#c5a46d]">{number}</span>
                <h3 className="mt-3 text-sm font-medium tracking-wide text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative mx-auto w-full max-w-2xl lg:ml-auto"
        >
          <div className="absolute -inset-3 border border-[#c5a46d]/25 sm:-inset-5" />
          <div className="relative aspect-[4/5] overflow-hidden bg-[#29231a] sm:aspect-[5/4]">
            <img
              src={CRAFT_IMAGE}
              alt="A jeweller carefully files and shapes a ring by hand"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
              <p className="max-w-xs font-serif text-2xl italic leading-tight text-white sm:text-3xl">
                Made with care.
                <br />
                Meant to be treasured.
              </p>
              <span className="hidden text-[10px] uppercase tracking-[0.24em] text-white/70 sm:block">
                Aurvanta · Since day one
              </span>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-3 hidden h-20 w-20 items-center justify-center rounded-full border border-[#c5a46d]/50 bg-[#100f0d] text-center font-serif text-xs italic leading-4 text-[#d2b783] sm:flex sm:-right-10">
            crafted
            <br />
            with care
          </div>
          <p className="relative mt-3 text-right text-[10px] tracking-wide text-white/45">
          Photo:{' '}
          <a
            href="https://commons.wikimedia.org/wiki/File:Hand_Filing_a_Ring_at_Olertis.jpg"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-white/25 underline-offset-2 hover:text-white/75"
          >
            Olertis LLC
          </a>{' '}
          ·{' '}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-white/25 underline-offset-2 hover:text-white/75"
          >
            CC BY-SA 4.0
          </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs