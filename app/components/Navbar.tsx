"use client"
import { useState } from "react"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"
import type { Mode } from "./ColorModeProvider"

const navLinks = [
  { label: "Believer",  href: "/believer" },
  { label: "Builder",   href: "/professional" },
  { label: "Creator",   href: "/creative" },
  { label: "Educator",  href: "/learner" },
  { label: "Founder",   href: "/ventures" },
  { label: "Memos",     href: "/writings" },
  { label: "Connect",   href: "/connect" },
]

const nextLabel: Record<Mode, string> = {
  "light":     "Dark",
  "dark":      "Base",
  "base":      "Dark Base",
  "dark-base": "Light",
}

type NavConfig = {
  bg: string
  logo: string
  text: string
  linkMuted: string
  iconMuted: string
  iconHover: string
  border: string
  btnHover: string
  mobileBg: string      // mobile drawer background
  mobileDivide: string  // divider between mobile links
}

const configs: Record<Mode, NavConfig> = {
  light: {
    bg:          "bg-[#e11d48]",
    logo:        "/favicon-z.png",
    text:        "text-white",
    linkMuted:   "text-white/70 hover:text-white",
    iconMuted:   "text-white/70",
    iconHover:   "hover:text-[var(--accent-green)]",
    border:      "border-white/40",
    btnHover:    "hover:bg-white hover:text-[#e11d48]",
    mobileBg:    "bg-[#c4173f]",
    mobileDivide:"divide-white/10",
  },
  dark: {
    bg:          "bg-white",
    logo:        "/Crimson Z.png",
    text:        "text-[#e11d48]",
    linkMuted:   "text-[#e11d48]/70 hover:text-[#e11d48]",
    iconMuted:   "text-[#e11d48]/70",
    iconHover:   "hover:text-[var(--accent-green)]",
    border:      "border-[#e11d48]/40",
    btnHover:    "hover:bg-[#e11d48] hover:text-white",
    mobileBg:    "bg-gray-50",
    mobileDivide:"divide-[#e11d48]/10",
  },
  base: {
    bg:          "bg-black",
    logo:        "/logo.svg",
    text:        "text-white",
    linkMuted:   "text-white/70 hover:text-white",
    iconMuted:   "text-white/70",
    iconHover:   "hover:text-white",
    border:      "border-white/40",
    btnHover:    "hover:bg-white hover:text-black",
    mobileBg:    "bg-neutral-900",
    mobileDivide:"divide-white/10",
  },
  "dark-base": {
    bg:          "bg-white",
    logo:        "/logo-light.svg",
    text:        "text-black",
    linkMuted:   "text-black/60 hover:text-black",
    iconMuted:   "text-black/60",
    iconHover:   "hover:text-black",
    border:      "border-black/30",
    btnHover:    "hover:bg-black hover:text-white",
    mobileBg:    "bg-gray-50",
    mobileDivide:"divide-black/10",
  },
}

export default function Navbar({
  colorMode = "light",
  onToggle,
}: {
  colorMode?: Mode
  onToggle?: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const c = configs[colorMode]

  return (
    <nav className={`w-full ${c.bg} sticky top-0 z-50 transition-colors duration-300`}>
      {/* Main bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img src={c.logo} alt="Zayviana" className="h-9 w-9 rounded-lg" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-xs font-semibold uppercase tracking-[0.15em] transition ${c.linkMuted}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side: icons + mode toggle + hamburger */}
        <div className="flex items-center gap-4">
          {/* Icons — hidden on mobile to keep bar clean */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/zayvianas" target="_blank" rel="noopener noreferrer"
              className={`text-lg transition hover:scale-110 ${c.iconMuted} ${c.iconHover}`}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/zayviana" target="_blank" rel="noopener noreferrer"
              className={`text-lg transition hover:scale-110 ${c.iconMuted} ${c.iconHover}`}>
              <FaLinkedin />
            </a>
            <a href="mailto:hello@zayviana.xyz"
              className={`text-lg transition hover:scale-110 ${c.iconMuted} ${c.iconHover}`}>
              <FaEnvelope />
            </a>
          </div>

          {onToggle !== undefined && (
            <button
              onClick={onToggle}
              className={`rounded-full border ${c.border} ${c.text} px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] transition ${c.btnHover}`}
            >
              {nextLabel[colorMode]}
            </button>
          )}

          {/* Hamburger — mobile only */}
          <button
            className={`text-xl md:hidden transition ${c.text}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={`md:hidden ${c.mobileBg} divide-y ${c.mobileDivide}`}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition ${c.linkMuted}`}
            >
              {label}
            </Link>
          ))}
          {/* Social icons row in mobile menu */}
          <div className="flex items-center gap-6 px-6 py-4">
            <a href="https://github.com/zayvianas" target="_blank" rel="noopener noreferrer"
              className={`text-lg transition ${c.iconMuted} ${c.iconHover}`}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/zayviana" target="_blank" rel="noopener noreferrer"
              className={`text-lg transition ${c.iconMuted} ${c.iconHover}`}>
              <FaLinkedin />
            </a>
            <a href="mailto:hello@zayviana.xyz"
              className={`text-lg transition ${c.iconMuted} ${c.iconHover}`}>
              <FaEnvelope />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
