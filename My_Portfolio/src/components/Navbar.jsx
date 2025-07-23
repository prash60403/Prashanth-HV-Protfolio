import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow">
      <div className="text-xl font-bold">Prashanth</div>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
