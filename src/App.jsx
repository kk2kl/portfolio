import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Contact from './components/Contact'
import './App.css'

function App() {
  // Force dark mode by default and persist toggle preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'light') {
        document.documentElement.classList.remove('dark')
      } else {
        // default to dark
        document.documentElement.classList.add('dark')
      }
    } catch (e) {
      // fallback: always add dark
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400 text-sm">
        © 2025 Yi Yang
      </footer>
    </div>
  )
}

export default App
