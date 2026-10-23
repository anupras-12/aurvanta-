const FOOTER_COLUMNS = [
  {
    title: 'Discover',
    links: [
      { label: 'Collections', href: '#collections' },
      { label: 'Our services', href: '#services' },
      { label: 'Customer stories', href: '#testimonials' },
    ],
  },
  {
    title: 'Our approach',
    links: [
      { label: 'About Aurvanta', href: '#about' },
      { label: 'Responsible sourcing', href: '#sustainability' },
    ],
  },
  {
    title: 'Get in touch',
    links: [{ label: 'Contact our team', href: '#contact' }],
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#09090b] px-5 py-14 text-[#f7f1e8] sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <a
              href="/"
              className="font-serif text-2xl tracking-[0.16em] text-white transition-colors hover:text-[#d2b783]"
            >
              AURVANTA
            </a>
            <p className="mt-5 text-sm leading-7 text-white/55">
              Thoughtfully designed jewellery, shaped by skilled hands and made to be treasured.
            </p>
          </div>

          {FOOTER_COLUMNS.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-xs uppercase tracking-[0.22em] text-[#c5a46d]">{title}</h2>
              <ul className="mt-5 space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a46d]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurvanta Jewels. All rights reserved.</p>
          <a
            href="/"
            className="w-fit uppercase tracking-[0.18em] transition-colors hover:text-[#d2b783] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a46d]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
