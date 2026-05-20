"use client"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import type { Mode } from "./ColorModeProvider"

const navLinks = [
  { label: "Believer",  href: "/believer" },
  { label: "Builder",   href: "/professional" },
  { label: "Creator",   href: "/creative" },
  { label: "Educator",  href: "/learner" },
  { label: "Founder",   href: "/ventures" },
  { label: "Writings",  href: "/writings" },
  { label: "Connect",   href: "/connect" },
]

// Button shows the name of the NEXT mode you'll switch into
const nextLabel: Record<Mode, string> = {
  "light":     "Dark",
  "dark":      "Base",
  "base":      "Dark Base",
  "dark-base": "Light",
}

type NavConfig = {
  bg: string        // nav background
  logo: string      // logo file
  text: string      // primary text colour class
  linkMuted: string // muted link + hover
  iconMuted: string // muted icon colour
  iconHover: string // icon hover colour
  border: string    // button border
  btnHover: string  // button hover
}

const configs: Record<Mode, NavConfig> = {
  // Light — crimson nav, white text
  light: {
    bg:        "bg-[#e11d48]",
    logo:      "/favicon-z.png",
    text:      "text-white",
    linkMuted: "text-white/70 hover:text-white",
    iconMuted: "text-white/70",
    iconHover: "hover:text-[var(--accent-green)]",
    border:    "border-white/40",
    btnHover:  "hover:bg-white hover:text-[#e11d48]",
  },
  // Dark — white nav, crimson text, green icon hover
  dark: {
    bg:        "bg-white",
    logo:      "/Crimson Z.png",
    text:      "text-[#e11d48]",
    linkMuted: "text-[#e11d48]/70 hover:text-[#e11d48]",
    iconMuted: "text-[#e11d48]/70",
    iconHover: "hover:text-[var(--accent-green)]",
    border:    "border-[#e11d48]/40",
    btnHover:  "hover:bg-[#e11d48] hover:text-white",
  },
  // Base — black nav, white text, pink-only accent
  base: {
    bg:        "bg-black",
    logo:      "/logo.svg",
    text:      "text-white",
    linkMuted: "text-white/70 hover:text-white",
    iconMuted: "text-white/70",
    iconHover: "hover:text-white",
    border:    "border-white/40",
    btnHover:  "hover:bg-white hover:text-black",
  },
  // Dark Base — white nav, black text, pink-only accent
  "dark-base": {
    bg:        "bg-white",
    logo:      "/logo-light.svg",
    text:      "text-black",
    linkMuted: "text-black/60 hover:text-black",
    iconMuted: "text-black/60",
    iconHover: "hover:text-black",
    border:    "border-black/30",
    btnHover:  "hover:bg-black hover:text-white",
  },
}

export default function Navbar({
  colorMode = "light",
  onToggle,
}: {
  colorMode?: Mode
  onToggle?: () => void
}) {
  const c = configs[colorMode]

  return (
    <nav className={`w-full ${c.bg} sticky top-0 z-50 transition-colors duration-300`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        <Link href="/" className="flex items-center">
          <img src={c.logo} alt="Zayviana" className="h-9 w-9 rounded-lg" />
        </Link>

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

        <div className="flex items-center gap-4">
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
          {onToggle !== undefined && (
            <button
              onClick={onToggle}
              className={`rounded-full border ${c.border} ${c.text} px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] transition ${c.btnHover}`}
            >
              {nextLabel[colorMode]}
            </button>
          )}
        </div>

      </div>
    </nav>
  )
}
