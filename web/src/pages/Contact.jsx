import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus("Thanks! We'll get back to you soon.")
  }

  return (
    <section className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-gray-600 mt-1">Have a question? Send us a message.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input required placeholder="Name" className="w-full border rounded-md px-3 py-2" />
        <input required type="email" placeholder="Email" className="w-full border rounded-md px-3 py-2" />
        <textarea required placeholder="Message" rows={5} className="w-full border rounded-md px-3 py-2" />
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700">Send</button>
        {status && <p className="text-green-700 bg-green-50 rounded-md p-3 text-sm">{status}</p>}
      </form>
    </section>
  )
}


