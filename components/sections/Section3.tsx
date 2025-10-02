'use client'

import { motion } from 'framer-motion'
import { content } from '@/lib/content'
import { useState } from 'react'

export default function Section3() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center px-8 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 210, 63, 0.8), rgba(255, 107, 53, 0.8)),
                          url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1920&q=80')`,
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
          {content.section3.title}
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {content.section3.cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative h-80 cursor-pointer perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center ${
                    index === 0 ? 'bg-gray-300' : index === 1 ? 'bg-gradient-to-br from-gray-200 to-white' : 'bg-white'
                  }`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-7xl mb-6">{card.emoji}</div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{card.title}</h3>
                  <p className="text-xl text-gray-600">{card.description}</p>
                  <p className="text-sm text-gray-500 mt-4">點擊查看更多</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl shadow-2xl p-8 flex items-center justify-center text-center bg-gradient-to-br from-[#4ECDC4] to-[#95E1D3]"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <p className="text-2xl font-semibold text-white leading-relaxed">{card.detail}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Growth curve visualization */}
        <motion.div
          className="flex items-center justify-center gap-4 text-6xl mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span>😞</span>
          <span className="text-white">→</span>
          <span>🤔</span>
          <span className="text-white">→</span>
          <span>😊</span>
        </motion.div>

        {/* Quote highlight */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">💡</div>
            <h3 className="text-2xl font-bold text-gray-800">重要領悟</h3>
          </div>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] leading-relaxed">
            「{content.section3.quote}」
          </p>
        </motion.div>
      </div>
    </section>
  )
}
