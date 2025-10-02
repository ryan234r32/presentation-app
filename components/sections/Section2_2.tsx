'use client'

import { motion } from 'framer-motion'
import { content } from '@/lib/content'

export default function Section2_2() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
                          url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Main title */}
        <motion.h2
          className="text-6xl md:text-7xl font-black text-white mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.6)' }}
        >
          {content.section2_2.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-4xl md:text-5xl font-semibold text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)' }}
        >
          {content.section2_2.subtitle}
        </motion.p>
      </div>
    </section>
  )
}
