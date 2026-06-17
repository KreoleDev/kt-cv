export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-1 text-lg font-bold tracking-tight text-foreground">
          KreoleTech
          <sup className="text-[0.55rem] text-muted-foreground">TM</sup>
        </div>
        <p className="text-sm text-muted-foreground">
          {"\u00A9"} 2026 KreoleTech. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
