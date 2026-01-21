'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { BurgerIcon, CloseIcon } from '../../utils/icons'
import Logo from './Logo'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Services', href: '/#services' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Resume', href: '/resume' },
]

export default function Navbar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('')
    const [indicatorStyle, setIndicatorStyle] = useState({
        width: 0,
        left: 0,
        opacity: 0,
    })

    const navRef = useRef(null)

    useEffect(() => {
        // Set initial active state based on current path and hash
        if (typeof window !== 'undefined') {
            const currentHash = window.location.hash || '/'
            // Simple logic: if hash exists, try to match it. Else use pathname.

            const match = navItems.find((item) => item.href === pathname + window.location.hash) ||
                navItems.find((item) => item.href === pathname) ||
                navItems[0]

            if (match) setActive(match.href)
        }
    }, [pathname])

    // Move active background smoothly
    useEffect(() => {
        if (!navRef.current) return

        const activeLink = navRef.current.querySelector(`[data-active="true"]`)

        if (activeLink) {
            setIndicatorStyle({
                width: activeLink.offsetWidth,
                left: activeLink.offsetLeft,
                opacity: 1,
            })
        } else {
            setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }))
        }
    }, [active])

    return (
        <>
            {/* ===== NAVBAR ===== */}
            <header className="fixed inset-x-0 top-6 z-50 px-4">
                <nav className="mx-auto max-w-[1200px] rounded-2xl border border-border/40 bg-primary/80 backdrop-blur-xl shadow-lg">
                    <div className="flex h-14 items-center justify-between px-5">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <Logo />
                            <span className="text-primary-content font-semibold tracking-wide">
                                Muthyala Nayudu
                            </span>
                        </Link>

                        {/* ===== DESKTOP NAV ===== */}
                        <ul
                            ref={navRef}
                            className="relative hidden md:flex items-center rounded-full bg-primary-content/5 p-1"
                        >
                            {/* Animated Active Background */}
                            <span
                                className="absolute top-1 bottom-1 rounded-full bg-primary-content shadow-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                                style={{
                                    width: indicatorStyle.width,
                                    transform: `translateX(${indicatorStyle.left}px)`,
                                    opacity: indicatorStyle.opacity,
                                }}
                            />

                            {navItems.map(({ label, href }) => {
                                const isActive = active === href

                                return (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            onClick={() => setActive(href)}
                                            data-active={isActive}
                                            className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-300
                        ${isActive
                                                    ? 'text-primary'
                                                    : 'text-primary-content/70 hover:text-primary-content'
                                                }`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setOpen(true)}
                            className="text-primary-content md:hidden"
                            aria-label="Open Menu"
                        >
                            <BurgerIcon />
                        </button>
                    </div>
                </nav>
            </header>

            {/* ===== MOBILE MENU ===== */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 md:hidden
        ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setOpen(false)}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                />

                {/* Sheet */}
                <div
                    className={`absolute bottom-0 left-0 right-0 rounded-t-3xl bg-primary px-6 pb-8 pt-6 transition-transform duration-300
          ${open ? 'translate-y-0' : 'translate-y-full'}`}
                >
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Logo />
                            <span className="text-primary-content font-semibold">
                                Muthyala Nayudu
                            </span>
                        </div>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-primary-content"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    <ul className="space-y-2">
                        {navItems.map(({ label, href }) => {
                            const isActive = active === href

                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        onClick={() => {
                                            setActive(href)
                                            setOpen(false)
                                        }}
                                        className={`block rounded-2xl px-5 py-4 text-lg font-medium transition
                      ${isActive
                                                ? 'bg-primary-content text-primary'
                                                : 'text-primary-content/80 hover:bg-primary-content/10'
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
