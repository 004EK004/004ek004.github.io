import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database, FlaskConical, BarChart, FileSearch } from 'lucide-react'

const steps = [
  {
    phase: '01',
    icon: FileSearch,
    title: 'Literature Review',
    description: 'Systematic review of [N=XXX] peer-reviewed publications across [databases]. Identified key themes, gaps, and theoretical frameworks underpinning the research.',
    color: 'blue',
  },
  {
    phase: '02',
    icon: Database,
    title: 'Data Collection',
    description: 'Multi-source data collection from [sources]. Deployed [surveys/instruments] to [N=XXX] participants. Ensured ethical compliance with [IRB/ethics board] approval.',
    color: 'indigo',
  },
  {
    phase: '03',
    icon: FlaskConical,
    title: 'Experimental Design',
    description: 'Controlled experimental framework with [randomised/quasi-experimental] design. Defined dependent and independent variables, control conditions, and validation protocols.',
    color: 'violet',
  },
  {
    phase: '04',
    icon: BarChart,
    title: 'Analysis & Validation',
    description: 'Applied [statistical methods, e.g., regression, ML algorithms, qualitative coding]. Model validated against holdout dataset achieving [XX]% accuracy / reliability coefficient.',
    color: 'sky',
  },
]

const colorMap = {
  blue: { bg: 'bg-blue-600/20', border: 'border-blue-500/30', icon: 'text-blue-400', badge: 'text-blue-300' },
  indigo: { bg: 'bg-indigo-600/20', border: 'border-indigo-500/30', icon: 'text-indigo-400', badge: 'text-indigo-300' },
  violet: { bg: 'bg-violet-600/20', border: 'border-violet-500/30', icon: 'text-violet-400', badge: 'text-violet-300' },
  sky: { bg: 'bg-sky-600/20', border: 'border-sky-500/30', icon: 'text-sky-400', badge: 'text-sky-300' },
}

export default function Methodology() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="methodology" className="py-24 px-4 relative z-10 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Approach</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">Methodology</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A rigorous, multi-phase research methodology combining quantitative and qualitative approaches
            to ensure comprehensive, validated findings.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const c = colorMap[step.color]
            const Icon = step.icon
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass rounded-2xl p-6 hover:glow-blue transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${c.bg} border ${c.border}`}>
                    <Icon className={c.icon} size={22} />
                  </div>
                  <span className={`text-3xl font-black ${c.badge} opacity-40 group-hover:opacity-70 transition-opacity`}>
                    {step.phase}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
