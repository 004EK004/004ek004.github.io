import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, FileText, BarChart2 } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Radial gradient backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-900/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-blue-300 text-sm font-medium mb-8 border border-blue-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          PhD / Master's Dissertation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
        >
          <span className="text-white">Advancing the</span>
          <br />
          <span className="text-gradient">Frontiers of Knowledge</span>
          <br />
          <span className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">Through Rigorous Research</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-blue-300 font-medium mb-4 italic"
        >
          "[Your Dissertation Title Here]"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-12"
        >
          A comprehensive investigation into [Your Research Domain], presenting novel findings,
          methodological innovations, and significant contributions to the field of [Your Field].
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#abstract"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-700/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            <FileText size={20} />
            Read Abstract
          </a>
          <a
            href="#results"
            className="flex items-center justify-center gap-2 px-8 py-4 glass-light hover:bg-blue-900/40 text-blue-300 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <BarChart2 size={20} />
            View Results
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={28} className="text-blue-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
