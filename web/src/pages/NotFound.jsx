import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-600 mt-2">Page not found.</p>
      <Link to="/" className="inline-block mt-6 px-5 py-2.5 rounded-md border hover:bg-gray-50">Go Home</Link>
    </section>
  )
}


