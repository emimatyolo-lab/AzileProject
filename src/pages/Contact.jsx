import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { contact, whatsappLink } from '../siteData.js'

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you." />
      <section className="section">
        <div className="container grid-3">
          <div className="card center">
            <h3>WhatsApp</h3>
            <p>{contact.whatsappDisplay}</p>
            <a className="btn btn-gold" href={whatsappLink} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
          <div className="card center">
            <h3>Email</h3>
            <p>{contact.email}</p>
            <a className="btn btn-navy" href={`mailto:${contact.email}`}>Send an email</a>
          </div>
          <div className="card center">
            <h3>Social Media</h3>
            <div className="socials">
              {contact.socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="center mt">
          <p>Ready to enrol?</p>
          <Link to="/register" className="btn btn-outline">Go to Student Registration</Link>
        </div>
      </section>
    </>
  )
}
