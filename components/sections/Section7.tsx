'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { content } from '@/lib/content'
import { useState } from 'react'

export default function Section7() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center px-8 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
                          url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-black text-white text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {content.section7.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {content.section7.cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.button
                className="w-full bg-white rounded-3xl shadow-xl p-8 text-center cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <motion.div
                  className="text-8xl mb-6"
                  animate={{
                    rotate: expandedCard === index ? 360 : 0,
                    scale: expandedCard === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {card.emoji}
                </motion.div>

                <h3 className="text-3xl font-black text-gray-800 mb-4">{card.title}</h3>
                <p className="text-xl text-gray-600 mb-4 leading-relaxed">{card.description}</p>

                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      className="mt-6 pt-6 border-t-2 border-gray-200"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg font-bold text-[#4ECDC4] mb-3">具體建議：</h4>
                      <ul className="text-left space-y-2">
                        {card.tips.map((tip, tipIndex) => (
                          <motion.li
                            key={tipIndex}
                            className="flex items-start gap-2 text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: tipIndex * 0.1 }}
                          >
                            <span className="text-[#FF6B35] font-bold">•</span>
                            <span>{tip}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 text-sm text-gray-400 font-medium">
                  {expandedCard === index ? '點擊收起' : '點擊展開更多'}
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom encouragement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-3xl font-bold text-white drop-shadow-lg">
            從今天開始,選一個建議試試看! ✨
          </p>
        </motion.div>
      </div>
    </section>
  )
}
