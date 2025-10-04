import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [ok, setOk] = useState(false)

  function submit(e) {
    e.preventDefault()
    setOk(true)
  }

  return (
    <section className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold">Newsletter</h2>
      <p className="text-gray-600 mt-1">Get updates on speakers and schedule.</p>
      <form onSubmit={submit} className="mt-6 flex gap-3">
        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 border rounded-md px-3 py-2" />
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700">Subscribe</button>
      </form>
      {ok && <p className="text-green-700 bg-green-50 rounded-md p-3 text-sm mt-4">Thanks for subscribing!</p>}
    </section>
  )
}


