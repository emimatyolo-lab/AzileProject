import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { modules } from '../siteData.js'

export default function Modules() {
  return (
    <>
      <PageHeader title="Modules" subtitle="Areas of law we cover. Don't see your module? Send us an enquiry." />
      <section className="section">
        <div className="container grid-3">
          {modules.map((m) => (
            <div className="card" key={m.area}>
              <h3>{m.area}</h3>
              <ul className="list">
                {m.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="center mt">
          <Link to="/register" className="btn btn-gold">Enquire about a module</Link>
        </div>
      </section>
    </>
  )
}
