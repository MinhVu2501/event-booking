export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Annual Tech Conference 2025</h1>
          <p className="mt-4 text-lg text-gray-600">Dec 12–14 • San Francisco, CA</p>
          <p className="mt-4 text-gray-700">Join developers, founders, and designers for three days of talks, workshops, and networking.</p>
          <div className="mt-6 flex gap-3">
            <a href="/tickets" className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700">Buy Tickets</a>
            <a href="/schedule" className="px-5 py-2.5 rounded-md border hover:bg-gray-50">View Schedule</a>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-xl bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" aria-label="Conference hero image" />
      </div>
    </section>
  )
}


