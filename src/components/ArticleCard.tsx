import Link from 'next/link'

interface ArticleCardProps {
  titulo: string
  slug: string
  meta_descripcion: string
  fecha: string
  liga: string
  equipos: string[]
}

export default function ArticleCard({ titulo, slug, meta_descripcion, fecha, liga, equipos }: ArticleCardProps) {
  const ligaColor: Record<string, string> = {
    'Primera División Chile': 'bg-red-600',
    'Copa Libertadores': 'bg-yellow-600',
    'Copa Sudamericana': 'bg-orange-600',
    'La Liga': 'bg-blue-600',
    'Premier League': 'bg-purple-600',
    'Champions League': 'bg-indigo-600',
  }

  const badgeColor = Object.entries(ligaColor).find(([key]) =>
    liga?.toLowerCase().includes(key.toLowerCase())
  )?.[1] || 'bg-brand-light'

  return (
    <Link href={`/pronosticos/${slug}`} className="group block">
      <article className="bg-brand-green/50 border border-brand-light/30 rounded-xl p-5 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`${badgeColor} text-white text-xs font-medium px-2.5 py-0.5 rounded-full`}>
            {liga}
          </span>
          <span className="text-gray-500 text-xs">{fecha}</span>
        </div>

        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-gold transition-colors line-clamp-2">
          {titulo}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">
          {meta_descripcion}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {equipos?.slice(0, 2).map((equipo, i) => (
              <span key={i} className="text-xs bg-brand-dark/50 text-gray-300 px-2 py-1 rounded">
                {equipo}
              </span>
            ))}
          </div>
          <span className="text-brand-gold text-sm font-medium group-hover:translate-x-1 transition-transform">
            Leer →
          </span>
        </div>
      </article>
    </Link>
  )
}
