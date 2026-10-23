const CONTACT_PATHS = [
  {
    number: '01',
    title: 'Bespoke & custom',
    description: 'Have an idea or a special occasion in mind?',
    href: '#services',
    link: 'Explore our services',
  },
  {
    number: '02',
    title: 'Jewellery care',
    description: 'Need help with a repair, resize, or refresh?',
    href: '#services',
    link: 'See how we can help',
  },
  {
    number: '03',
    title: 'Trade enquiries',
    description: 'Interested in working with Aurvanta?',
    href: '#collections',
    link: 'Wholesale information',
  },
]

const ContactUs = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#100f0d] px-5 py-12 text-[#f7f1e8] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-40 top-12 h-96 w-96 rounded-full border border-[#c5a46d]/10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#c5a46d]">
              <span className="h-px w-10 bg-[#c5a46d]" />
              We would love to hear from you
            </p>
            <h2
              id="contact-heading"
              className="max-w-xl text-4xl font-light leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              Let’s make
              <br />
              <span className="font-serif italic text-[#d2b783]">something meaningful.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/60">
              Whether you are choosing a gift, imagining a custom piece, or caring for a favourite,
              find the right place to start.
            </p>

          </div>

          <div className="flex flex-wrap gap-4">
            {CONTACT_PATHS.map(({ number, title, description, href, link }) => (
              <article
                key={number}
                className="flex min-h-56 flex-[1_1_16rem] flex-col border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-[#c5a46d]/40 sm:p-7"
              >
                <span className="font-serif text-sm text-[#c5a46d]">{number}</span>
                <h3 className="mt-5 font-serif text-xl text-white">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-white/55">{description}</p>
                <a
                  href={href}
                  className="mt-5 inline-flex w-fit text-xs uppercase tracking-[0.16em] text-[#d2b783] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a46d]"
                >
                  {link} <span aria-hidden="true" className="ml-2">↗</span>
                </a>
              </article>
            ))}
          </div>

          <div className="mx-auto w-full max-w-4xl border border-white/10 bg-white/[0.025] p-6 sm:p-9 lg:p-10">
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#c5a46d]">
              Start a conversation
            </p>
            <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">Send an enquiry</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">
              Share a little about what you are looking for and we will be in touch.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs text-white/70">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Name"
                    className="w-full border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c5a46d] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs text-white/70">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c5a46d] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-interest" className="mb-2 block text-xs text-white/70">
                  What can we help with?
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  defaultValue=""
                  className="w-full border border-white/15 bg-[#100f0d] px-4 py-3 text-sm text-white/75 focus:border-[#c5a46d] focus:outline-none"
                >
                  <option value="" disabled>
                    Select an enquiry type
                  </option>
                  <option value="custom">Bespoke or custom design</option>
                  <option value="product">A product or collection</option>
                  <option value="care">Repair or jewellery care</option>
                  <option value="trade">Trade or wholesale</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs text-white/70">
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us a little more..."
                  className="w-full resize-y border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c5a46d] focus:outline-none"
                />
              </div>

              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed bg-[#c5a46d]/50 px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-[#100f0d]/75"
              >
                Online enquiries coming soon
              </button>
              <p className="text-xs leading-5 text-white/40">
                This form is a preview and is not connected to an inbox yet. Please connect a
                recipient email or form service before enabling submissions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
