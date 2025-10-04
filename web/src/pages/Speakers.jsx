import { useMemo, useState } from 'react'
import { speakers as SPEAKERS } from '../data/speakers.js'

export default function Speakers() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(
    () => SPEAKERS.filter(s => s.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  )

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Speakers</h2>
          <p className="text-gray-600 mt-1">Meet the minds behind the sessions.</p>
        </div>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search speakers"
          className="border rounded-md px-3 py-2 w-64"
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {filtered.map(s => (
          <article key={s.id} className="group border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
            <img src={s.photo} alt={s.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{s.name}</h3>
              <p className="text-sm text-gray-600">{s.title}</p>
              <p className="text-sm mt-2 text-gray-700">{s.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


