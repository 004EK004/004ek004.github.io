import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ZoomIn } from 'lucide-react'

const figures = [
  { id: 1, caption: 'Figure 1: [Distribution of Results Across Sample Groups]', color: 'from-blue-900/60 to-indigo-900/60' },
  { id: 2, caption: 'Figure 2: [Performance Comparison – Proposed vs. Baseline Methods]', color: 'from-indigo-900/60 to-violet-900/60' },
  { id: 3, caption: 'Figure 3: [Temporal Analysis – Longitudinal Data Trends]', color: 'from-violet-900/60 to-blue-900/60' },
  { id: 4, caption: 'Figure 4: [Correlation Matrix of Key Variables]', color: 'from-sky-900/60 to-blue-900/60' },
  { id: 5, caption: 'Figure 5: [Proposed Framework / Conceptual Model]', color: 'from-blue-900/60 to-sky-900/60' },
  { id: 6, caption: 'Figure 6: [Statistical Significance – Hypothesis Test Results]', color: 'from-indigo-900/60 to-sky-900/60' },
]

export default function Results() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="results" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Findings</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">Key Results & Visualizations</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Significant findings illustrated through data visualizations, charts, and figures.
            Replace placeholders with your actual research figures.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {figures.map((fig, i) => (
            <motion.div
              key={fig.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden cursor-pointer hover:glow-blue transition-all duration-300"
            >
              {/* Placeholder image area */}
              <div className={`h-52 bg-gradient-to-br ${fig.color} flex items-center justify-center relative overflow-hidden`}>
                {/* Decorative grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`grid-${fig.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60A5FA" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${fig.id})`} />
                </svg>

                {/* Chart placeholder shapes */}
                <div className="flex items-end gap-2 opacity-40">
                  {[60, 85, 45, 70, 90, 55, 75].map((h, j) => (
                    <div
                      key={j}
                      className="w-6 bg-blue-400 rounded-t opacity-80"
                      style={{ height: `${h * 0.7}px` }}
                    />
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white" size={32} />
                </div>

                {/* Figure number badge */}
                <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-black/40 text-blue-300 text-xs font-bold">
                  Fig. {fig.id}
                </div>
              </div>

              <div className="p-4">
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {fig.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
