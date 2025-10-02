'use client'

import { motion } from 'framer-motion'
import { content } from '@/lib/content'
import { useEffect, useState } from 'react'

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{count}</span>
}

export default function Section6() {
  const [startCounting, setStartCounting] = useState(false)

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-8 py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                          url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-4xl w-full mx-auto">
        {/* 標題 */}
        <motion.h2
          className="text-5xl md:text-6xl font-black text-white text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
        >
          {content.section6.title}
        </motion.h2>

        {/* SDGs 標誌區 */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🎯</div>
              <p className="text-2xl font-bold text-gray-800">{content.section6.subtitle}</p>
            </div>
          </div>
        </motion.div>

        {/* 垂直流程 */}
        <div className="flex flex-col items-center gap-6">
          {/* 步驟 1: 發現問題 */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-3xl font-bold mb-2 text-gray-800">發現問題</h3>
            <p className="text-xl text-gray-600">注意到身心健康的重要性</p>
          </motion.div>

          <motion.div
            className="text-5xl text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            ↓
          </motion.div>

          {/* 步驟 2: 團隊規模 */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, onViewportEnter: () => setStartCounting(true) }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">團隊規模</h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-6xl font-black text-[#4ECDC4] mb-2">
                  {startCounting && <AnimatedCounter target={content.section6.stats.teachers} />}
                </div>
                <p className="text-2xl font-semibold text-gray-700">位老師</p>
              </div>
              <div>
                <div className="text-6xl font-black text-[#FF6B35] mb-2">
                  {startCounting && <AnimatedCounter target={content.section6.stats.friends} />}
                </div>
                <p className="text-2xl font-semibold text-gray-700">位朋友</p>
              </div>
              <div>
                <div className="text-6xl font-black text-[#FFD23F] mb-2">
                  {startCounting && <AnimatedCounter target={content.section6.stats.students} />}
                </div>
                <p className="text-2xl font-semibold text-gray-700">位學生</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-5xl text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            ↓
          </motion.div>

          {/* 步驟 3: 持續努力 */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="text-6xl mb-4">⏱️</div>
            <h3 className="text-3xl font-bold mb-2 text-gray-800">持續努力</h3>
            <p className="text-xl text-gray-600">投入 {content.section6.stats.months} 個月的時間</p>
          </motion.div>

          <motion.div
            className="text-5xl text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            ↓
          </motion.div>

          {/* 成果 */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">創造改變</h3>
            <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4]">
              一起為更好的世界努力! 🌍
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
