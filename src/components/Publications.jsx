import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, BookOpen, FileText } from 'lucide-react'

const publications = [
  {
    type: 'journal',
    title: '[Author, A.], [Author, B.] (20XX). "[Your Journal Paper Title Here]." Journal of [Field], [Volume](Issue), pp. XX–XX. DOI: 10.XXXX/XXXXX',
    venue: 'Journal of [Your Field]',
    year: '20XX',
  },
  {
    type: 'conference',
    title: '[Author, A.] (20XX). "[Conference Paper Title]." In Proceedings of [Conference Name] (pp. XX–XX). [Publisher].',
    venue: '[Conference Name]',
    year: '20XX',
  },
  {
    type: 'conference',
    title: '[Author, A.], [Author, C.] (20XX). "[Workshop/Poster Title]." Workshop on [Topic], [Conference].',
    venue: '[Workshop / Conference]',
    year: '20XX',
  },
]

const references = [
  '[Author, X.] (20XX). [Book / Article Title]. [Publisher/Journal]. DOI: XX.XXXX',
  '[Author, Y.], & [Author, Z.] (20XX). "[Paper Title]." [Journal], [Vol](N), XX–XX.',
  '[Author, W.] et al. (20XX). "[Title of Foundational Work]." [Venue].',
  '[Author, V.] (20XX). [Textbook or Key Reference]. [Edition]. [Publisher].',
  '[Author, U.] (20XX). "[Important Citation]." [Conference Proceedings], pp. XX–XX.',
]

export default function Publications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="publications" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Academic Output</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">Publications & References</h2>
        </motion.div>

        {/* Publications */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-blue-300 mb-6 flex items-center gap-2">
            <BookOpen size={20} /> My Publications
          </h3>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:glow-blue transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 shrink-0 mt-0.5">
                  <FileText className="text-blue-400" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-300 text-sm leading-relaxed">{pub.title}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-blue-400 text-xs font-medium">{pub.venue}</span>
                    <span className="text-slate-600 text-xs">{pub.year}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      pub.type === 'journal'
                        ? 'bg-blue-900/50 text-blue-300 border border-blue-500/20'
                        : 'bg-indigo-900/50 text-indigo-300 border border-indigo-500/20'
                    }`}>
                      {pub.type === 'journal' ? 'Journal' : 'Conference'}
                    </span>
                  </div>
                </div>
                <ExternalLink className="text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" size={16} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key References */}
        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-6 flex items-center gap-2">
            <FileText size={20} /> Key References
          </h3>
          <div className="glass rounded-2xl p-6">
            <ol className="space-y-3">
              {references.map((refItem, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex gap-3 text-slate-400 text-sm leading-relaxed"
                >
                  <span className="text-blue-500 font-bold shrink-0">[{i + 1}]</span>
                  {refItem}
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
