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
      className="relative h-screen w-full flex items-center justify-center px-8 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 107, 53, 0.8), rgba(78, 205, 196, 0.8)),
                          url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            {content.section6.title}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-5xl">🎯</div>
            <p className="text-2xl md:text-3xl font-bold text-white">{content.section6.subtitle}</p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto mb-16">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/30 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {content.section6.timeline.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-white rounded-2xl shadow-xl p-6 inline-block">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-lg text-gray-600">{item.description}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg z-10">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats counter */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setStartCounting(true)}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">團隊規模</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-[#4ECDC4] mb-2">
                {startCounting && <AnimatedCounter target={content.section6.stats.teachers} />}
              </div>
              <div className="text-xl font-semibold text-gray-600">位老師</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#FF6B35] mb-2">
                {startCounting && <AnimatedCounter target={content.section6.stats.friends} />}
              </div>
              <div className="text-xl font-semibold text-gray-600">位朋友</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#FFD23F] mb-2">
                {startCounting && <AnimatedCounter target={content.section6.stats.students} />}
              </div>
              <div className="text-xl font-semibold text-gray-600">位學生</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#95E1D3] mb-2">
                {content.section6.stats.months}
              </div>
              <div className="text-xl font-semibold text-gray-600">個月</div>
            </div>
          </div>

          <motion.div
            className="mt-8 text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            一起為更好的世界努力! 🌍
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
