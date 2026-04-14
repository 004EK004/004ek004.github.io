import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Menu, X } from 'lucide-react'

const links = [
  { label: 'Abstract', href: '#abstract' },
  { label: 'Problem', href: '#problem' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Results', href: '#results' },
  { label: 'Impact', href: '#impact' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-blue-950/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 text-blue-400 font-bold text-lg">
            <BookOpen size={22} />
            <span className="hidden sm:block">004EK004</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-blue-400 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
            >
              Get PDF
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass px-4 pb-4"
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-slate-300 hover:text-blue-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
