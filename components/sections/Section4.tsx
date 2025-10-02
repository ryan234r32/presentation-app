'use client'

import { motion } from 'framer-motion'
import { content } from '@/lib/content'

export default function Section4() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#95E1D3] to-[#4ECDC4] px-8 py-16">
      <div className="max-w-6xl w-full mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-black text-white text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {content.section4.title}
        </motion.h2>

        {/* Central question mark */}
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <div className="w-40 h-40 rounded-full bg-white shadow-2xl flex items-center justify-center">
            <span className="text-8xl font-black text-[#FF6B35]">{content.section4.question}</span>
          </div>
        </motion.div>

        {/* Cards radiating from center */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.section4.cards.map((card, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center transition-all group-hover:shadow-2xl">
                <motion.div
                  className="text-7xl mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{card.description}</p>

                {/* Hidden details on hover */}
                <motion.div
                  className="mt-4 text-[#4ECDC4] font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  了解更多 →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional visual elements */}
        <motion.div
          className="flex justify-center items-center gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-4xl">📚</div>
          <div className="text-4xl">💡</div>
          <div className="text-4xl">🌟</div>
        </motion.div>
      </div>
    </section>
  )
}
