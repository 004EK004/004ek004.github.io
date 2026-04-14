import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react'

const objectives = [
  'To investigate the relationship between [Variable A] and [Variable B] in the context of [Domain]',
  'To develop a novel [framework/model/algorithm] for [purpose]',
  'To evaluate the effectiveness of [proposed solution] against existing benchmarks',
  'To identify key factors influencing [phenomenon] through empirical analysis',
  'To contribute actionable recommendations for [practitioners/policymakers/researchers]',
]

export default function ResearchProblem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="problem" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Foundation</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">Research Problem & Objectives</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30">
                <Target className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">The Problem</h3>
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Despite significant advancements in [Field], a critical understanding gap persists regarding
                [Specific Problem]. Current approaches fail to adequately address [Challenge], resulting in
                [Consequence] that impacts [Stakeholders].
              </p>
              <p>
                Existing literature reveals that [Gap in Knowledge]. This lack of understanding has led to
                [Practical Problem], creating an urgent need for rigorous empirical investigation and the
                development of evidence-based solutions.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-blue-900/30 border border-blue-500/20">
                <p className="text-blue-300 font-medium text-sm">
                  Research Question: "How does [Variable] influence [Outcome] within the context of [Setting]?"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/30">
                <Lightbulb className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Objectives</h3>
            </div>
            <ul className="space-y-4">
              {objectives.map((obj, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                >
                  <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={18} />
                  {obj}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
