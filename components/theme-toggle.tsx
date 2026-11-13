'use client'

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
    <button
      type="button"
      aria-label="Alternar tema claro ou escuro"
      onClick={toggleTheme}
      className="text-text-supporting focus-visible:outline-focus-ring border-border-header hover:border-action-primary hover:text-text-hero flex size-11 items-center justify-center rounded-xl border bg-transparent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <MoonIcon aria-hidden="true" className="theme-icon-moon" />
      <SunIcon aria-hidden="true" className="theme-icon-sun" />
    </button>
  )
}
