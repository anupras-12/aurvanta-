import React from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Collections', href: '#collections' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

const Navbar02 = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: '#f8f1ea',
      borderBottom: '1px solid #e9dccb',
      color: '#3a2b1f',
      fontFamily: 'sans-serif',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        minWidth: '180px',
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          color: '#3a2b1f',
        }}>
          AURVANTA
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              color: '#3a2b1f',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <button
        type='button'
        style={{
          background: '#3a2b1f',
          color: '#fff',
          border: 'none',
          borderRadius: '999px',
          padding: '0.75rem 1.25rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Book a Visit
      </button>
    </nav>
  )
}

export default Navbar02
