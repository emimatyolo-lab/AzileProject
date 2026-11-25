import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { monthlyPackages, individualPackages } from '../siteData.js'

export default function Pricing() {
  return (
    <>
      <PageHeader title="Pricing" subtitle="Flexible monthly packages and pay-as-you-go options." />
      <section className="section">
        <div className="container">
          <h2 className="center">Monthly Packages</h2>
          <div className="gold-rule center" />
          <div className="grid-3">
            {monthlyPackages.map((p) => (
              <div className={`card price-card ${p.featured ? 'featured' : ''}`} key={p.name}>
                {p.featured && <span className="badge">Most popular</span>}
                <h3>{p.name}</h3>
                <div className="price">{p.price}<span>{p.period}</span></div>
                <ul className="list">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link to={`/register?package=${encodeURIComponent(p.name)}`} className="btn btn-navy full">Choose {p.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2 className="center">Individual Packages</h2>
          <div className="gold-rule center" />
          <div className="grid-4">
            {individualPackages.map((p) => (
              <div className="card center" key={p.name}>
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <p className="muted">{p.unit}</p>
                <Link to={`/register?package=${encodeURIComponent(p.name)}`} className="btn btn-outline">Book</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
