'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { content } from '@/lib/content'
import { useState } from 'react'

export default function Section5() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)

  const colorMap = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', gradient: 'from-blue-400 to-blue-600' },
    green: { bg: 'bg-green-500', text: 'text-green-500', gradient: 'from-green-400 to-green-600' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', gradient: 'from-orange-400 to-orange-600' },
  }

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center px-8 py-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                          url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background game map elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🗺️</div>
        <div className="absolute top-20 right-20 text-6xl">⭐</div>
        <div className="absolute bottom-20 left-20 text-6xl">🎮</div>
        <div className="absolute bottom-10 right-10 text-6xl">🏆</div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            {content.section5.title}
          </h2>
          <p className="text-2xl text-white/80 font-semibold">{content.section5.subtitle}</p>
        </motion.div>

        {/* Game levels path */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {content.section5.levels.map((level, index) => {
            const colors = colorMap[level.color as keyof typeof colorMap]

            return (
              <div key={index} className="flex items-center w-full md:w-auto">
                {/* Level card */}
                <motion.div
                  className="relative flex-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <motion.button
                    className={`w-full bg-gradient-to-br ${colors.gradient} rounded-3xl shadow-2xl p-8 text-white cursor-pointer`}
                    whileHover={{ scale: 1.05, y: -10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedLevel(selectedLevel === index ? null : index)}
                  >
                    <div className="text-8xl mb-4">{level.emoji}</div>
                    <div className="text-sm font-bold mb-2">關卡 {level.number}</div>
                    <h3 className="text-3xl font-black mb-2">{level.title}</h3>
                    {level.subtitle && (
                      <p className="text-xl font-semibold mb-4 text-white/90">{level.subtitle}</p>
                    )}

                    {/* Icons */}
                    <div className="flex justify-center gap-3 mb-4">
                      <div className="text-3xl">⚔️</div>
                      <div className="text-3xl">🛡️</div>
                      <div className="text-3xl">📖</div>
                    </div>

                    <p className="text-lg font-medium">{level.description}</p>

                    {/* Level number badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className={`text-2xl font-black ${colors.text}`}>{level.number}</span>
                    </div>
                  </motion.button>
                </motion.div>

                {/* Connecting path */}
                {index < content.section5.levels.length - 1 && (
                  <motion.div
                    className="hidden md:block mx-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.3 }}
                  >
                    <div className="text-5xl text-white">→</div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        {/* Level detail modal */}
        <AnimatePresence>
          {selectedLevel !== null && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLevel(null)}
            >
              <motion.div
                className="bg-white rounded-3xl p-12 max-w-2xl w-full"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-8xl text-center mb-6">
                  {content.section5.levels[selectedLevel].emoji}
                </div>
                <h3 className="text-4xl font-black text-center mb-4 text-gray-800">
                  {content.section5.levels[selectedLevel].title}
                </h3>
                <p className="text-2xl text-center text-gray-600">
                  {content.section5.levels[selectedLevel].description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
