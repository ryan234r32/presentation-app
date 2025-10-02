'use client'

import { motion } from 'framer-motion'
import { content } from '@/lib/content'

export default function Section8() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center px-8 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                          url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            {content.section8.title}
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-white/90">
            {content.section8.subtitle}
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl p-4 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-2xl"
              src={content.section8.videoUrl}
              title="AI 影片"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center items-center gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="text-5xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🤖
          </motion.div>
          <motion.div
            className="text-5xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <motion.div
            className="text-5xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💡
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-3xl font-bold text-white drop-shadow-lg">
            {content.section8.cta}
          </p>
        </motion.div>

        {/* Celebration ribbons */}
        <div className="absolute top-10 left-10 text-6xl animate-bounce">🎉</div>
        <div className="absolute top-20 right-10 text-6xl animate-bounce delay-100">🎊</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-bounce delay-200">🌟</div>
        <div className="absolute bottom-10 right-20 text-6xl animate-bounce delay-300">⭐</div>
      </div>
    </section>
  )
}
