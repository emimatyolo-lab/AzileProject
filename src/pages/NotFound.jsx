import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" subtitle="The page you are looking for does not exist." />
      <section className="section center"><Link to="/" className="btn btn-navy">Back to Home</Link></section>
    </>
  )
}
