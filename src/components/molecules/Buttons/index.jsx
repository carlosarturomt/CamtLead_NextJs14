"use client"
import { useState } from "react"
import useDarkMode from "@/hooks/useDarkMode"
import { ICONS } from "@/assets/icons"

function Switcher() {
  const [colorTheme, setTheme] = useDarkMode()
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  )

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkMode(checked)
  }


  return (
    <div className="flex items-center w-fit cursor-pointer" onClick={toggleDarkMode}>
      <div className="flex items-center justify-center w-6">
        {ICONS.theme.simple}
      </div>
    </div>
  )
}

export { Switcher }