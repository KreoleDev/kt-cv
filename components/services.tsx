type Service = {
  index: string
  id: string
  eyebrow: string
  title: string
  desc: string
  image: string
}

const services: Service[] = [
  {
    index: "01",
    id: "mobile",
    eyebrow: "Desenvolvimento Mobile",
    title: "Apps nativos que as pessoas amam usar",
    desc: "Aplicativos nativos e multiplataforma para iOS e Android, rápidos, fluidos e confiáveis.",
    image: "/sections/mobile.png",
  },
  {
    index: "02",
    id: "web",
    eyebrow: "Desenvolvimento Web",
    title: "Experiências web modernas e velozes",
    desc: "Sites e aplicações web acessíveis, escaláveis e de alta performance, do front-end ao back-end.",
    image: "/sections/web.png",
  },
  {
    index: "03",
    id: "cloud",
    eyebrow: "Serviços de Nuvem",
    title: "Infraestrutura pronta para escalar",
    desc: "Arquitetura cloud-native segura, otimizada para custo e preparada para crescer com você.",
    image: "/sections/cloud.png",
  },
  {
    index: "04",
    id: "software-sob-medida",
    eyebrow: "Software Sob Medida",
    title: "Soluções construídas para o seu negócio",
    desc: "Sistemas personalizados desenhados exatamente em torno dos seus processos e objetivos.",
    image: "/sections/custom.png",
  },
  {
    index: "05",
    id: "dados-apis",
    eyebrow: "Dados & APIs",
    title: "Integrações que conectam tudo",
    desc: "Pipelines de dados robustos e APIs bem documentadas que unem todos os seus sistemas.",
    image: "/sections/data.png",
  },
  {
    index: "06",
    id: "manutencao-suporte",
    eyebrow: "Manutenção & Suporte",
    title: "Cuidamos do produto depois do lançamento",
    desc: "Monitoramento contínuo, atualizações e suporte dedicado para manter tudo funcionando.",
    image: "/sections/support.png",
  },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={`servico-${service.id}`}
      className="group relative min-h-[34rem] overflow-hidden rounded-[2rem] bg-card shadow-2xl shadow-black/25 ring-1 ring-white/10 md:min-h-[40rem]"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image || "/placeholder.svg"}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/58" />

      <div className="relative z-10 flex min-h-[34rem] flex-col justify-between p-6 text-white md:min-h-[40rem] md:p-8">
        <p className="w-fit rounded-full bg-white/18 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/15 backdrop-blur-md">
          {service.eyebrow}
        </p>

        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-normal text-white drop-shadow-2xl md:text-5xl">
            {service.title}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/88 drop-shadow-xl md:text-lg">
            {service.desc}
          </p>
        </div>
      </div>
    </article>
  )
}

export function Services() {
  return (
    <section
      id="servicos"
      aria-label="Serviços"
      className="bg-background px-6 py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
