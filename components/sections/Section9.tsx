'use client'

import { motion } from 'framer-motion'
import { content } from '@/lib/content'
import { useState, useEffect } from 'react'

export default function Section9() {
  const [showText, setShowText] = useState('')
  const [showStars, setShowStars] = useState(false)
  const fullText = content.section9.title

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setShowText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText])

  const handleEasterEgg = () => {
    setShowStars(true)
    setTimeout(() => setShowStars(false), 3000)
  }

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center px-8 py-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(45, 49, 66, 0.85), rgba(78, 205, 196, 0.8)),
                          url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* World map background */}
      <div className="absolute inset-0 opacity-10">
        <div className="text-9xl absolute top-20 left-10">🌍</div>
        <div className="text-9xl absolute top-40 right-20">🌎</div>
        <div className="text-9xl absolute bottom-20 left-1/4">🌏</div>
      </div>

      {/* Star rain easter egg */}
      {showStars && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: -50,
              }}
              initial={{ y: -50, opacity: 1, rotate: 0 }}
              animate={{
                y: window.innerHeight + 50,
                opacity: [1, 1, 0],
                rotate: 360,
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: Math.random() * 0.5,
              }}
            >
              ⭐
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-5xl w-full mx-auto relative z-10">
        {/* Main quote with typewriter effect */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight cursor-pointer"
            onClick={handleEasterEgg}
            whileHover={{ scale: 1.05 }}
          >
            {showText}
            <motion.span
              className="inline-block"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-4xl md:text-5xl font-bold text-[#FFD23F] drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {content.section9.subtitle}
          </motion.p>
        </motion.div>

        {/* Supporting quote */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-6xl">💫</div>
            <div className="text-6xl">✨</div>
            <div className="text-6xl">🌟</div>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#4ECDC4] to-[#95E1D3] text-center leading-relaxed">
            {content.section9.quote}
          </p>
        </motion.div>

        {/* Q&A section */}
        <motion.div
          className="bg-gradient-to-br from-[#FFD23F] to-[#FF6B35] rounded-3xl shadow-2xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <motion.div
            className="text-8xl mb-6"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {content.section9.qna.emoji}
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
            {content.section9.qna.title}
          </h3>
          <p className="text-2xl text-white/90 font-semibold">
            有任何問題都可以舉手發問喔!
          </p>
        </motion.div>

        {/* Kids illustration */}
        <motion.div
          className="flex justify-center gap-4 mt-12 text-6xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 3 }}
        >
          {['👦', '👧', '👦🏻', '👧🏻', '👦🏽', '👧🏽'].map((emoji, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* Easter egg hint */}
        <motion.p
          className="text-center mt-8 text-white/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          💡 小提示: 點擊標題有驚喜!
        </motion.p>
      </div>
    </section>
  )
}
