import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { monthlyPackages, individualPackages } from '../siteData.js'

const packageOptions = [...monthlyPackages, ...individualPackages].map((p) => p.name)

const encode = (data) => new URLSearchParams(data).toString()

export default function Registration() {
  const [params] = useSearchParams()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', institution: '', yearOfStudy: '',
    package: params.get('package') || '', modules: '', enquiryType: 'Registration', message: '',
  })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'registration', ...form }),
      })
      if (!res.ok) throw new Error(res.statusText)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <>
        <PageHeader title="Student Registration" />
        <section className="section">
          <div className="container narrow center card">
            <h2>Thank you, {form.fullName.split(' ')[0]}!</h2>
            <p>Your submission has been received. We will contact you within 24 hours.</p>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader title="Student Registration" subtitle="Enrol or send us an enquiry. We will get back to you within 24 hours." />
      <section className="section">
        <div className="container narrow">
          <form className="form card" name="registration" method="POST" onSubmit={submit}>
            <input type="hidden" name="form-name" value="registration" />
            <p hidden><label>Don't fill this in: <input name="bot-field" /></label></p>

            <div className="field-row">
              <label>I would like to
                <select name="enquiryType" value={form.enquiryType} onChange={update}>
                  <option>Registration</option>
                  <option>General enquiry</option>
                </select>
              </label>
              <label>Package
                <select name="package" value={form.package} onChange={update}>
                  <option value="">Not sure yet</option>
                  {packageOptions.map((p) => <option key={p}>{p}</option>)}
                </select>
              </label>
            </div>
            <div className="field-row">
              <label>Full name *<input name="fullName" required value={form.fullName} onChange={update} /></label>
              <label>Email *<input type="email" name="email" required value={form.email} onChange={update} /></label>
            </div>
            <div className="field-row">
              <label>Phone / WhatsApp *<input type="tel" name="phone" required value={form.phone} onChange={update} /></label>
              <label>University / Institution<input name="institution" value={form.institution} onChange={update} /></label>
            </div>
            <div className="field-row">
              <label>Year of study
                <select name="yearOfStudy" value={form.yearOfStudy} onChange={update}>
                  <option value="">Select</option>
                  <option>1st year</option><option>2nd year</option><option>3rd year</option>
                  <option>4th year</option><option>Postgraduate</option><option>Other</option>
                </select>
              </label>
              <label>Module(s) you need help with<input name="modules" value={form.modules} onChange={update} placeholder="e.g. Law of Contract, Delict" /></label>
            </div>
            <label>Message<textarea name="message" rows="4" value={form.message} onChange={update} /></label>

            {status === 'error' && <p className="error">Something went wrong. Please try again or contact us on WhatsApp.</p>}
            <button className="btn btn-gold full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
