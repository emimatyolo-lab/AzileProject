import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { services } from '../siteData.js'

export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" subtitle="Tutorial packages and academic support designed for law students." />
      <section className="section">
        <div className="container grid-3">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="center mt">
          <Link to="/pricing" className="btn btn-navy">See pricing</Link>
        </div>
      </section>
    </>
  )
}
