import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Speakers from './pages/Speakers.jsx'
import Schedule from './pages/Schedule.jsx'
import Tickets from './pages/Tickets.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Newsletter from './pages/Newsletter.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'speakers', element: <Speakers /> },
      { path: 'schedule', element: <Schedule /> },
      { path: 'tickets', element: <Tickets /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'newsletter', element: <Newsletter /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
