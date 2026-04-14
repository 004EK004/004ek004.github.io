import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Download, Mail, ExternalLink } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Connect</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">Get in Touch</h2>
          <p className="text-slate-400 mt-4">
            Interested in this research? Have questions or collaboration opportunities?
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl p-8 sm:p-10 glow-blue"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href="https://github.com/004EK004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 glass-light hover:bg-blue-900/40 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <Github size={22} className="text-blue-400 group-hover:text-blue-300" />
              View on GitHub
              <ExternalLink size={14} className="text-slate-500 group-hover:text-slate-400" />
            </a>

            <a
              href="/dissertation.pdf"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-700/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <Download size={22} />
              Download Full PDF
            </a>
          </div>

          <div className="border-t border-slate-700/50 pt-6 text-center">
            <p className="text-slate-400 text-sm mb-3">Or reach out directly:</p>
            <a
              href="mailto:your.email@university.ac.uk"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <Mail size={18} />
              your.email@university.ac.uk
            </a>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-blue-950/50 border border-blue-500/10 text-center">
            <p className="text-slate-500 text-xs">
              This research was submitted in partial/full fulfilment of the requirements for the degree of
              [PhD / MSc / MEng] at [University Name], [Year].
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
