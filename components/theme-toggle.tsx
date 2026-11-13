'use client'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@/components/ui/icon'

export function ThemeToggle() {
  const toggleTheme = () => {
    const nextTheme =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    try {
      window.localStorage.setItem('theme', nextTheme)
    } catch {}
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Alternar tema claro ou escuro"
      onClick={toggleTheme}
    >
      <MoonIcon aria-hidden="true" className="theme-icon-moon" />
      <SunIcon aria-hidden="true" className="theme-icon-sun" />
    </Button>
  )
}
