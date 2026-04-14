import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function Abstract() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="abstract" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Overview</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">Abstract</h2>
          </div>

          <div className="glass rounded-2xl p-8 sm:p-12 glow-blue relative overflow-hidden">
            <div className="absolute top-6 left-6 text-blue-500/20">
              <Quote size={80} />
            </div>

            <div className="relative z-10 space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                This dissertation presents a comprehensive investigation into <em className="text-blue-300">[Your Research Topic]</em>,
                an area of growing significance within [Your Academic Field]. The study addresses a critical gap in existing literature
                by examining the relationship between [Variable A] and [Variable B] under conditions of [Research Context].
              </p>
              <p>
                Employing a mixed-methods research design incorporating both quantitative analysis and qualitative case studies,
                this research gathered data from [N=XXX participants/samples] across [time period/geographic scope].
                Advanced statistical modelling, including [Methodology 1] and [Methodology 2], was applied to identify
                patterns and correlations not previously documented in the literature.
              </p>
              <p>
                The findings demonstrate that <strong className="text-white">[Key Finding 1]</strong>, with statistically significant
                results (p &lt; 0.001) suggesting a strong correlation between [variables]. Furthermore, the qualitative component
                revealed nuanced insights into [secondary finding], contributing to a more holistic understanding of the phenomenon.
              </p>
              <p>
                The theoretical and practical implications of this research extend to [practical applications], with direct relevance
                to [stakeholders/industry/policy]. This work contributes a novel <em className="text-blue-300">[Framework/Model/Algorithm]</em> that
                can be applied in [contexts], advancing both academic knowledge and real-world practice.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['[Keyword 1]', '[Keyword 2]', '[Keyword 3]', '[Keyword 4]', '[Keyword 5]'].map(kw => (
                <span key={kw} className="px-3 py-1 rounded-full glass-light text-blue-300 text-sm font-medium border border-blue-500/20">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
