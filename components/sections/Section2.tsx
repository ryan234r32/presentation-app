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
    <section
      className="relative h-screen w-full flex items-center justify-center px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
                          url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-5xl w-full mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-black text-white mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.4)' }}
        >
          {content.section2.title}
        </motion.h2>

        {/* Runner emoji */}
        <motion.div
          className="text-9xl mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          🏃
        </motion.div>

        {/* Time progress - Large display */}
        <motion.div
          className="flex items-center justify-center gap-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="text-7xl md:text-8xl font-black text-white"
            initial={{ scale: 1 }}
            animate={{ scale: progress > 50 ? 0.95 : 1 }}
            style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}
          >
            {content.section2.timeProgress.start}
          </motion.div>

          <div className="text-6xl text-white font-bold">→</div>

          <motion.div
            className="text-7xl md:text-8xl font-black text-[#FF6B35]"
            initial={{ scale: 1 }}
            animate={{ scale: progress > 50 ? 1.1 : 1 }}
            style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}
          >
            {content.section2.timeProgress.end}
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-full h-6 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-white to-[#FF6B35]"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>
          <p className="text-2xl text-white font-bold mt-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            進步的軌跡
          </p>
        </motion.div>
      </div>
    </section>
  )
}
