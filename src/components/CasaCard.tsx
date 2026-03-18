import Link from 'next/link'

interface CasaCardProps {
  nombre: string
  slug: string
  rating: number
  descripcion: string
  bono_texto: string
  link_afiliado: string
  featured?: boolean
}

export default function CasaCard({ nombre, slug, rating, descripcion, bono_texto, link_afiliado, featured }: CasaCardProps) {
  const affiliateUrl = link_afiliado.startsWith('[')
    ? '#'
    : `${link_afiliado}?utm_source=pronosticoscl.com&utm_medium=afiliado&utm_campaign=review`

  return (
    <div className={`relative bg-brand-green/50 border rounded-xl p-6 transition-all hover:shadow-lg ${
      featured ? 'border-brand-gold/50 hover:shadow-brand-gold/10' : 'border-brand-light/30 hover:border-brand-gold/30'
    }`}>
      {featured && (
        <div className="absolute -top-3 left-4">
          <span className="bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
            ⭐ Recomendado
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4 mt-1">
        <div>
          <h3 className="text-white font-bold text-xl">{nombre}</h3>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-brand-gold' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-brand-gold font-bold text-sm ml-1">{rating}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{descripcion}</p>

      <p className="text-gray-300 text-xs mb-4 bg-brand-dark/50 rounded-lg p-3">
        💡 {bono_texto}
      </p>

      <div className="flex gap-3">
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex-1 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold text-sm py-2.5 px-4 rounded-lg text-center transition-colors"
        >
          Visitar sitio
        </a>
        <Link
          href={`/casas-de-apuestas/${slug}`}
          className="flex-1 border border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 font-medium text-sm py-2.5 px-4 rounded-lg text-center transition-colors"
        >
          Ver reseña
        </Link>
      </div>

      <p className="text-gray-600 text-xs mt-3 text-center">+18 | Juega con responsabilidad</p>
    </div>
  )
}
