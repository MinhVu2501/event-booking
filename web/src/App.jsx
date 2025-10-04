import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">TechConf</Link>
          <nav className="flex gap-4">
            <Link to="/speakers" className="hover:text-blue-600">Speakers</Link>
            <Link to="/schedule" className="hover:text-blue-600">Schedule</Link>
            <Link to="/tickets" className="hover:text-blue-600">Tickets</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            <Link to="/newsletter" className="hover:text-blue-600">Newsletter</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500">© {new Date().getFullYear()} TechConf</div>
      </footer>
    </div>
  )
}

export default App
