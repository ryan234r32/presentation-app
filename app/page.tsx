'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import Section2 from '@/components/sections/Section2'
import Section3 from '@/components/sections/Section3'
import Section4 from '@/components/sections/Section4'
import Section5 from '@/components/sections/Section5'
import Section6 from '@/components/sections/Section6'
import Section7 from '@/components/sections/Section7'
import Section8 from '@/components/sections/Section8'
import Section9 from '@/components/sections/Section9'

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const totalSections = 9

  // Smooth scroll to section
  const scrollToSection = useCallback((index: number) => {
    if (index >= 0 && index < totalSections && !isScrolling) {
      setIsScrolling(true)
      sectionsRef.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      setTimeout(() => {
        setCurrentSection(index)
        setIsScrolling(false)
      }, 600)
    }
  }, [isScrolling, totalSections])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        scrollToSection(currentSection + 1)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        scrollToSection(currentSection - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSection, isScrolling, scrollToSection])

  // Wheel/touch navigation
  useEffect(() => {
    let touchStartY = 0
    let lastWheelTime = 0

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const now = Date.now()

      // Throttle wheel events
      if (now - lastWheelTime < 1000 || isScrolling) return

      lastWheelTime = now

      if (e.deltaY > 0) {
        scrollToSection(currentSection + 1)
      } else if (e.deltaY < 0) {
        scrollToSection(currentSection - 1)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY - touchEndY

      if (Math.abs(diff) > 50 && !isScrolling) {
        if (diff > 0) {
          scrollToSection(currentSection + 1)
        } else {
          scrollToSection(currentSection - 1)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSection, isScrolling, scrollToSection])

  // Intersection Observer to track current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setCurrentSection(index)
            }
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const sections = [
    Hero,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
  ]

  return (
    <main className="relative">
      <Navigation
        currentSection={currentSection}
        totalSections={totalSections}
        onNavigate={scrollToSection}
      />

      {sections.map((Section, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) sectionsRef.current[index] = el
          }}
        >
          <Section />
        </div>
      ))}
    </main>
  )
}
