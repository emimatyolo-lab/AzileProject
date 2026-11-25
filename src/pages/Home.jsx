import { Link } from 'react-router-dom'
import { founder, services } from '../siteData.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Excellence in Legal Education</p>
          <h1>Your graduation journey begins here.</h1>
          <p className="lead">Building confident, knowledgeable and competent future legal professionals.</p>
          <p className="tagline">LEARN • UNDERSTAND • EXCEL</p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-gold">Register Now</Link>
            <Link to="/services" className="btn btn-outline-light">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow center">
          <h2>Welcome to the School of Legal Mastery</h2>
          <div className="gold-rule center" />
          <p>
            Law is demanding, but you do not have to face it alone. We offer focused tutorials,
            academic support and mentorship for law students who want more than a pass: we want
            you to understand the law and apply it with confidence.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container two-col">
          <div className="card">
            <h3>Our Mission</h3>
            <p>{founder.mission}</p>
          </div>
          <div className="card">
            <h3>Our Vision</h3>
            <p>{founder.vision}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="center">How we help</h2>
          <div className="gold-rule center" />
          <div className="grid-3">
            {services.slice(0, 3).map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="center mt">
            <Link to="/services" className="btn btn-navy">View all services</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container center">
          <h2>Ready to master your modules?</h2>
          <p>Enrol today or send us an enquiry. We will get back to you shortly.</p>
          <Link to="/register" className="btn btn-gold">Start Registration</Link>
        </div>
      </section>
    </>
  )
}
