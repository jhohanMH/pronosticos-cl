import { CASAS_APUESTAS, getCasaBySlug, buildAffiliateLink } from '@/lib/casas-apuestas'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: { casa: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const casa = getCasaBySlug(params.casa)
  if (!casa) return { title: 'Casa no encontrada' }

  return {
    title: `${casa.nombre} Chile — Reseña y Opinión 2026`,
    description: `Reseña completa de ${casa.nombre} en Chile. Rating ${casa.rating}/5. ${casa.descripcion.slice(0, 100)}...`,
  }
}

export function generateStaticParams() {
  return CASAS_APUESTAS.map((casa) => ({ casa: casa.slug }))
}

export default function CasaPage({ params }: Props) {
  const casa = getCasaBySlug(params.casa)

  if (!casa) {
    notFound()
  }

  const affiliateUrl = buildAffiliateLink(casa)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-gold transition-colors">Inicio</Link>
        <span>/</span>
        <Link href="/casas-de-apuestas" className="hover:text-brand-gold transition-colors">Casas de Apuestas</Link>
        <span>/</span>
        <span className="text-gray-400">{casa.nombre}</span>
      </nav>

      {/* Header */}
      <div className="bg-brand-green/30 border border-brand-light/20 rounded-xl p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-white mb-2">{casa.nombre}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.floor(casa.rating) ? 'text-brand-gold' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-brand-gold font-bold text-lg">{casa.rating}/5</span>
            </div>
          </div>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-8 py-3 rounded-lg transition-colors text-center"
          >
            Visitar {casa.nombre}
          </a>
        </div>
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-gold mb-4">Sobre {casa.nombre}</h2>
        <p className="text-gray-300 leading-relaxed">{casa.descripcion}</p>
      </section>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-green/30 border border-green-800/30 rounded-xl p-5">
          <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
            <span className="text-lg">✅</span> Ventajas
          </h3>
          <ul className="space-y-2">
            {casa.pros.map((pro, i) => (
              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-brand-green/30 border border-red-900/30 rounded-xl p-5">
          <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
            <span className="text-lg">⚠️</span> Desventajas
          </h3>
          <ul className="space-y-2">
            {casa.contras.map((contra, i) => (
              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                {contra}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Info table */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-gold mb-4">Información General</h2>
        <div className="bg-brand-green/30 border border-brand-light/20 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-4 border-b border-brand-light/10 sm:border-r">
              <p className="text-gray-500 text-xs mb-1">Depósito Mínimo</p>
              <p className="text-white font-medium">{casa.deposito_minimo}</p>
            </div>
            <div className="p-4 border-b border-brand-light/10">
              <p className="text-gray-500 text-xs mb-1">Licencia</p>
              <p className="text-white font-medium">{casa.licencia}</p>
            </div>
            <div className="p-4 sm:col-span-2">
              <p className="text-gray-500 text-xs mb-2">Métodos de Pago</p>
              <div className="flex flex-wrap gap-2">
                {casa.metodos_pago.map((metodo, i) => (
                  <span key={i} className="bg-brand-dark/50 text-gray-300 text-xs px-3 py-1 rounded-full">
                    {metodo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo note */}
      <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-5 mb-8">
        <p className="text-gray-300 text-sm">
          💡 {casa.bono_texto}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mb-8">
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-10 py-3.5 rounded-lg transition-colors text-lg"
        >
          Ir a {casa.nombre}
        </a>
        <p className="text-gray-600 text-xs mt-3">+18 | Juega con responsabilidad. Este enlace es de afiliado.</p>
      </div>

      {/* Back link */}
      <div className="text-center">
        <Link href="/casas-de-apuestas" className="text-brand-gold text-sm hover:text-brand-gold-light transition-colors">
          ← Volver a todas las casas de apuestas
        </Link>
      </div>
    </div>
  )
}
