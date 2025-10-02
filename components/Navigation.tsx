'use client'

import { motion } from 'framer-motion'

interface NavigationProps {
  currentSection: number
  totalSections: number
  onNavigate: (section: number) => void
}

export default function Navigation({ currentSection, totalSections, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className="group relative w-4 h-4 flex items-center justify-center"
          aria-label={`跳到第 ${index + 1} 頁`}
        >
          <motion.div
            className={`w-3 h-3 rounded-full border-2 transition-all ${
              currentSection === index
                ? 'bg-[#FF6B35] border-[#FF6B35] scale-125'
                : 'bg-transparent border-gray-400 hover:border-[#FF6B35]'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <span className="absolute right-6 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm px-2 py-1 rounded">
            第 {index + 1} 頁
          </span>
        </button>
      ))}
    </nav>
  )
}
