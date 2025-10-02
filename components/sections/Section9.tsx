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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Star rain easter egg */}
      {showStars && (
        <div className="absolute inset-0 pointer-events-none z-50">
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
                y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
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

      {/* Main content - Only text */}
      <div className="text-center px-8 relative z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-black text-white mb-12 leading-tight cursor-pointer"
          onClick={handleEasterEgg}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textShadow: '3px 3px 8px rgba(0,0,0,0.7)' }}
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
        </motion.h1>

        <motion.p
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}
        >
          {content.section9.subtitle}
        </motion.p>

        <motion.p
          className="text-3xl md:text-4xl text-white font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}
        >
          {content.section9.quote}
        </motion.p>

        {/* Easter egg hint */}
        <motion.p
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          💡 小提示: 點擊標題有驚喜!
        </motion.p>
      </div>
    </section>
  )
}
