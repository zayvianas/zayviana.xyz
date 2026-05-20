"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import Navbar from "./Navbar"

export type Mode = "light" | "dark" | "base" | "dark-base"

const order: Mode[] = ["light", "dark", "base", "dark-base"]

export const ColorModeContext = createContext<{ colorMode: Mode; cycleMode: () => void }>({
  colorMode: "light",
  cycleMode: () => {},
})

export function useColorMode() {
  return useContext(ColorModeContext)
}

function getA11yVars(mode: Mode): React.CSSProperties {
  if (mode === "base")      return { "--accent-red": "#f472b6", "--accent-green": "#000000" } as React.CSSProperties
  if (mode === "dark-base") return { "--accent-red": "#f472b6", "--accent-green": "#ffffff" } as React.CSSProperties
  return {}
}

export default function ColorModeProvider({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = useState<Mode>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("colorMode") as Mode | null
    if (saved && order.includes(saved)) setColorMode(saved)
  }, [])

  const cycleMode = () => {
    setColorMode(prev => {
      const next = order[(order.indexOf(prev) + 1) % order.length]
      localStorage.setItem("colorMode", next)
      return next
    })
  }

  const activeMode = mounted ? colorMode : "light"

  return (
    <ColorModeContext.Provider value={{ colorMode: activeMode, cycleMode }}>
      <Navbar colorMode={activeMode} onToggle={cycleMode} />
      <div style={getA11yVars(activeMode)}>
        {children}
      </div>
    </ColorModeContext.Provider>
  )
}
