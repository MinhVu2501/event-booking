import { useMemo, useState } from 'react'

const SESSIONS = [
  { id: 1, day: 'Day 1', time: '10:00', title: 'Keynote: The Future of DevTools', speaker: 'Ava Chen' },
  { id: 2, day: 'Day 1', time: '11:30', title: 'Designing for Motion', speaker: 'Noah Kim' },
  { id: 3, day: 'Day 2', time: '10:00', title: 'Building with Edge AI', speaker: 'Diego Martinez' },
  { id: 4, day: 'Day 2', time: '14:00', title: 'Modern Data Pipelines', speaker: 'Priya Nair' },
]

export default function Schedule() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(
    () => SESSIONS.filter(s =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.speaker.toLowerCase().includes(query.toLowerCase())
    ),
    [query]
  )

  const grouped = useMemo(() => {
    return filtered.reduce((acc, s) => {
      if (!acc[s.day]) acc[s.day] = []
      acc[s.day].push(s)
      return acc
    }, {})
  }, [filtered])

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Schedule</h2>
          <p className="text-gray-600 mt-1">Plan your conference days.</p>
        </div>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search sessions or speakers"
          className="border rounded-md px-3 py-2 w-80"
        />
      </div>

      <div className="mt-8 space-y-10">
        {Object.entries(grouped).map(([day, items]) => (
          <div key={day}>
            <h3 className="text-xl font-semibold">{day}</h3>
            <div className="mt-4 divide-y border rounded-lg overflow-hidden">
              {items.map(s => (
                <div key={s.id} className="grid grid-cols-[90px_1fr_1fr] gap-4 p-4 hover:bg-gray-50 transition-colors">
                  <div className="font-mono text-sm text-gray-600">{s.time}</div>
                  <div className="font-medium">{s.title}</div>
                  <div className="text-gray-600">{s.speaker}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


