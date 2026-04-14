import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, TrendingUp, Users, Star, Globe, BookMarked } from 'lucide-react'

function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { icon: BookMarked, value: 3, suffix: '', label: 'Publications', desc: 'Peer-reviewed journals and conferences' },
  { icon: Users, value: 500, suffix: '+', label: 'Participants', desc: 'Research subjects in study' },
  { icon: TrendingUp, value: 94, suffix: '%', label: 'Accuracy', desc: 'Model validation performance' },
  { icon: Globe, value: 12, suffix: '', label: 'Conferences', desc: 'Presentations and workshops' },
]

const achievements = [
  { icon: Award, title: '[Best Paper Award / Distinction]', desc: 'Recognised by [Institution / Conference] for outstanding contribution to [field]' },
  { icon: Star, title: '[Novel Framework Contribution]', desc: 'Introduced the [Name] framework, now cited in [N] subsequent studies' },
  { icon: TrendingUp, title: '[Practical Impact]', desc: 'Findings adopted by [organisation/industry] to improve [process/outcome]' },
]

export default function Impact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="impact" className="py-24 px-4 relative z-10 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Significance</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">Impact & Contributions</h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center glow-blue"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30">
                    <Icon className="text-blue-400" size={22} />
                  </div>
                </div>
                <div className="text-4xl font-black text-gradient mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-slate-500 text-xs">{stat.desc}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements */}
        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((ach, i) => {
            const Icon = ach.icon
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="glass rounded-2xl p-6 hover:glow-blue transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 w-fit mb-4">
                  <Icon className="text-blue-400" size={22} />
                </div>
                <h3 className="text-white font-bold mb-2">{ach.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{ach.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
