'use client'

import { motion } from 'framer-motion'
import { content } from '@/lib/content'
import { useEffect, useState } from 'react'

export default function Section2() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#4ECDC4] to-[#95E1D3] px-8">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Illustration */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-9xl">🏃</div>

          {/* Time progress animation */}
          <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <motion.div
                className="text-3xl font-bold text-gray-600"
                initial={{ scale: 1 }}
                animate={{ scale: progress > 50 ? 0.9 : 1 }}
              >
                {content.section2.timeProgress.start}
              </motion.div>
              <div className="text-2xl">→</div>
              <motion.div
                className="text-3xl font-bold text-[#FF6B35]"
                initial={{ scale: 1 }}
                animate={{ scale: progress > 50 ? 1.2 : 1 }}
              >
                {content.section2.timeProgress.end}
              </motion.div>
            </div>

            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#FF6B35]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </div>

            <p className="text-center mt-4 text-gray-600 font-medium">進步軌跡</p>
          </div>

          {/* Stopwatch icon */}
          <div className="text-6xl">⏱️</div>
        </motion.div>

        {/* Right side - Story content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            {content.section2.title}
          </h2>

          {content.section2.story.map((line, index) => (
            <motion.p
              key={index}
              className="text-2xl md:text-3xl text-white/90 font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {line}
            </motion.p>
          ))}

          {/* Alert card */}
          <motion.div
            className="mt-8 bg-orange-100 border-l-4 border-[#FF6B35] p-6 rounded-r-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-xl font-bold text-[#FF6B35] flex items-center gap-2">
              ⚠️ {content.section2.alert}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
