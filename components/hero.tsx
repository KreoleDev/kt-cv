const stats = [
  { title: "Ponta a Ponta", desc: "Entrega de produto" },
  { title: "Cloud-Native", desc: "Arquitetura em primeiro lugar" },
  { title: "Multiplataforma", desc: "Mobile & web" },
]

export function Hero() {
  return (
    <section className="relative flex h-[100svh] flex-col overflow-hidden">
      <div className="relative w-full flex-1 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      </div>

      <div className="border-y border-border bg-background/60">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.title}>
              <h2 className="text-xl font-bold text-primary sm:text-2xl">
                {stat.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
