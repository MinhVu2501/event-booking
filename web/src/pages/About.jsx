export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <div>
        <h2 className="text-3xl font-bold">About TechConf</h2>
        <p className="text-gray-600 mt-1">Our mission is to empower builders through community and craft.</p>
      </div>
      <p className="text-gray-700">TechConf brings together developers, designers, and founders to share ideas, explore new tools, and collaborate on the future of technology. We focus on practical talks and hands-on workshops.</p>
      <div>
        <h3 className="text-xl font-semibold">Sponsors</h3>
        <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
          <li>CloudNine</li>
          <li>EdgeAI</li>
          <li>DataForge</li>
        </ul>
      </div>
    </section>
  )
}


