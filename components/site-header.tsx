"use client"

import type { MouseEvent } from "react"
import Link from "next/link"

export function SiteHeader() {
  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    window.history.pushState(null, "", "/")
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-background/70 to-transparent backdrop-blur-sm">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-1 text-lg font-bold tracking-tight text-foreground"
        >
          KreoleTech
          <sup className="text-[0.55rem] text-muted-foreground">TM</sup>
        </Link>

        <Link
          href="#contato"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Entre em contato
        </Link>
      </div>
    </header>
  )
}
