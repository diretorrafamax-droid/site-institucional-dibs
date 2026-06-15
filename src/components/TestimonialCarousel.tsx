'use client'

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={i < rating ? '#facc15' : 'none'} stroke={i < rating ? '#facc15' : '#d1d5db'} strokeWidth="2" className="shrink-0">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

const testimonials = [
  {
    quote: 'A Dibs transformou minha ideia em um e-book completo em apenas 5 dias. A qualidade do design e da escrita superou minhas expectativas.',
    name: 'Débora Mendonça',
    project: 'E-Book Experiência do Lar',
    tags: '5 dias • 42 páginas • vendas na 1ª semana',
    photo: '/assets/testimonials/debora-mendonca.png',
    rating: 5,
  },
  {
    quote: 'Precisava de um jogo simples e divertido para entreter meus clientes enquanto aguardam atendimento. A Dibs entregou um snake completo com fases, power-ups e ranking em tempo recorde.',
    name: 'Guilherme Amado',
    project: 'Game Snake Bonus',
    tags: '5 fases • power-ups • mobile-first • ranking',
    photo: '/assets/testimonials/guilherme-amado.png',
    rating: 5,
  },
  {
    quote: 'A Dibs automatizou minha estratégia de trading com resultados financeiros reais. A precisão dos bots e a transparência das análises me deram confiança para operar no mercado.',
    name: 'Daniel Dias',
    project: 'Automação de Estratégia Financeira',
    tags: 'automação real • resultados mensuráveis',
    photo: '/assets/testimonials/daniel-dias.png',
    rating: 5,
  },
  {
    quote: 'Conhecemos o trabalho da Dibs antes mesmo da agência existir. O site que fizeram para a Top5Trades foi profissional e entregue no prazo — agora vamos refazer com a estrutura nova.',
    name: 'Top5Trades',
    project: 'Website Institucional',
    tags: 'projeto anterior • refazendo com nova identidade',
    photo: '/assets/testimonials/top5trades.png',
    rating: 5,
  },
]

function TestimonialCard({ t: _t }: { t: typeof testimonials[number] }) {
  return (
    <div className="flex w-[380px] shrink-0 flex-col rounded-2xl border border-border bg-background sm:w-[460px]">
      <div className="flex gap-6 p-6 pb-4">
        <div className="flex shrink-0 flex-col items-center gap-2">
          <img
            src={_t.photo}
            alt={_t.name}
            width={64}
            height={64}
            className="h-16 w-16 shrink-0 rounded-full object-cover"
          />
          <p className="text-center text-xs font-semibold leading-tight">{_t.name}</p>
          <Stars rating={_t.rating} />
        </div>
        <div className="flex flex-col">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="-ml-1 mb-1 text-accent/40">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
          <blockquote className="flex-1 text-sm leading-relaxed text-foreground/80 line-clamp-4">
            &ldquo;{_t.quote}&rdquo;
          </blockquote>
          <p className="mt-1 text-xs text-muted">{_t.project}</p>
        </div>
      </div>
      <div className="flex items-center justify-center border-t border-border px-6 py-3">
        <span className="text-xs font-semibold text-accent">{_t.tags}</span>
      </div>
    </div>
  )
}

export function TestimonialCarousel() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-surface to-transparent" />

      <div className="mx-auto mb-10 max-w-6xl px-6">
        <p className="mb-2 text-sm text-muted">Depoimentos</p>
        <h2 className="text-3xl font-extrabold md:text-4xl">
          O que nossos <span className="text-accent">clientes dizem</span>
        </h2>
      </div>

      <div className="flex animate-carousel-left gap-6" style={{ width: 'max-content' }}>
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </section>
  )
}
