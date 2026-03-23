'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <nav
      id="main-nav"
      aria-label="Hoofdnavigatie"
      className={`fixed top-0 inset-x-0 z-50${scrolled ? ' scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        <Link href="#top" aria-label="Eden Roc home">
          <Image
            id="nav-logo"
            src="/brand-assets/logo-eden-roc/logo-eden-roc@4x.png"
            alt="Eden Roc"
            width={160}
            height={40}
            className="h-10 w-auto logo-nav"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#project"   className="nav-link text-white text-sm font-semibold uppercase tracking-widest transition-colors duration-200">Project</Link>
          <Link href="#voordelen" className="nav-link text-white text-sm font-semibold uppercase tracking-widest transition-colors duration-200">Voordelen</Link>
          <Link href="#aanbod"    className="nav-link text-white text-sm font-semibold uppercase tracking-widest transition-colors duration-200">Aanbod</Link>
          <Link href="#ligging"   className="nav-link text-white text-sm font-semibold uppercase tracking-widest transition-colors duration-200">Ligging</Link>
          <Link
            id="nav-cta"
            href="#contact"
            className={`btn text-xs px-6 py-3 ml-2 ${scrolled ? 'btn-green' : 'btn-white'}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Menu openen"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 text-white"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-forest border-t border-white/10 px-6 pb-6 pt-4">
          <Link href="#project"   onClick={closeMenu} className="block py-3 text-white text-sm font-semibold uppercase tracking-widest border-b border-white/10">Project</Link>
          <Link href="#voordelen" onClick={closeMenu} className="block py-3 text-white text-sm font-semibold uppercase tracking-widest border-b border-white/10">Voordelen</Link>
          <Link href="#aanbod"    onClick={closeMenu} className="block py-3 text-white text-sm font-semibold uppercase tracking-widest border-b border-white/10">Aanbod</Link>
          <Link href="#ligging"   onClick={closeMenu} className="block py-3 text-white text-sm font-semibold uppercase tracking-widest border-b border-white/10">Ligging</Link>
          <Link href="#contact"   onClick={closeMenu} className="btn btn-white w-full text-center mt-5">Contact</Link>
        </div>
      )}
    </nav>
  )
}
