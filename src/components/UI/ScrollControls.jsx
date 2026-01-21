'use client'

import { useState, useEffect } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

const ScrollControls = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sections = ['hero', 'skills', 'projects', 'services', 'testimonials']

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const scrollToNextSection = () => {
        const currentScroll = window.scrollY

        // Find the next section that is below the current viewport center
        for (const id of sections) {
            const element = document.getElementById(id)
            if (element) {
                const rect = element.getBoundingClientRect()
                const absoluteTop = rect.top + currentScroll

                // If the section top is further down than current scroll + small buffer
                if (absoluteTop > currentScroll + 50) {
                    element.scrollIntoView({ behavior: 'smooth' })
                    return
                }
            }
        }

        // If at the end, go back to top
        scrollToTop()
    }

    return (
        <div
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 rounded-full bg-secondary/80 border border-border backdrop-blur-md shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
                }`}
        >
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="p-2 rounded-full hover:bg-accent hover:text-secondary text-neutral transition-all duration-300 group"
            >
                <ChevronUp size={20} className="group-hover:translate-y-[-2px] transition-transform" />
            </button>
            <div className="w-[1px] h-4 bg-border mx-1" />
            <button
                onClick={scrollToNextSection}
                aria-label="Scroll to next section"
                className="p-2 rounded-full hover:bg-accent hover:text-secondary text-neutral transition-all duration-300 group"
            >
                <ChevronDown size={20} className="group-hover:translate-y-[2px] transition-transform" />
            </button>
        </div>
    )
}

export default ScrollControls
