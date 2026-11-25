import { useState, useEffect } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { contact, whatsappLink } from '../siteData.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/modules', label: 'Modules' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <span className="brand-name">AZILE MHLOPHE'S</span>
            <span className="brand-sub">School of Legal Mastery</span>
          </Link>
          <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? '✕' : '☰'}
          </button>
          <nav className={`nav ${open ? 'open' : ''}`}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}>{l.label}</NavLink>
            ))}
            <NavLink to="/register" className="btn btn-gold btn-sm">Register</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-name">AZILE MHLOPHE</div>
            <div className="brand-sub">School of Legal Mastery</div>
            <p className="tagline">LEARN • UNDERSTAND • EXCEL</p>
          </div>
          <div>
            <h4>Pages</h4>
            {links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
            <Link to="/register">Student Registration</Link>
          </div>
          <div>
            <h4>Get in touch</h4>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp: {contact.whatsappDisplay}</a>
            {contact.socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
            ))}
          </div>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} Azile Mhlophe – School of Legal Mastery. All rights reserved.
          <span> Website by Emihle Matyolo.</span>
        </div>
      </footer>

      <a className="wa-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff"><path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.8-3.9-1.8-6 0-5.9 4.9-10.6 10.9-10.6S26.9 9.6 26.9 15.6 22 26.4 16 26.4zm6-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.4 3.6 5.7 5 2.8 1.1 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>
      </a>
    </>
  )
}
