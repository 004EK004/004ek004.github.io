import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Abstract from './components/Abstract'
import ResearchProblem from './components/ResearchProblem'
import Methodology from './components/Methodology'
import Results from './components/Results'
import Impact from './components/Impact'
import Publications from './components/Publications'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-inter relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Abstract />
        <ResearchProblem />
        <Methodology />
        <Results />
        <Impact />
        <Publications />
        <Contact />
      </main>
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800">
        <p>© 2024 004EK004 · Dissertation Showcase · Built with React & Vite</p>
      </footer>
    </div>
  )
}
