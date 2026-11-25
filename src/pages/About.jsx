import PageHeader from '../components/PageHeader.jsx'
import { founder } from '../siteData.js'

export default function About() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Meet the founder and the vision behind the school." />
      <section className="section">
        <div className="container about-grid">
          <div className="founder-photo" aria-hidden="true">
            {/* TODO: replace with <img src="/founder.jpg" alt="Azile Mhlophe" /> once you have a photo in /public */}
            <span>AM</span>
          </div>
          <div>
            <h2>{founder.name}</h2>
            <p className="muted">{founder.title}</p>
            <div className="gold-rule" />
            {founder.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container two-col">
          <div className="card"><h3>Our Vision</h3><p>{founder.vision}</p></div>
          <div className="card"><h3>Our Mission</h3><p>{founder.mission}</p></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="center">Our Values</h2>
          <div className="gold-rule center" />
          <div className="grid-3">
            <div className="card"><h3>Learn</h3><p>Clear, structured teaching that makes complex legal principles accessible.</p></div>
            <div className="card"><h3>Understand</h3><p>We focus on genuine understanding, not memorisation, so you can apply the law.</p></div>
            <div className="card"><h3>Excel</h3><p>Exam technique, practice and support that turn understanding into results.</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
