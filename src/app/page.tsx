import { getFixturesDelDia, formatHoraChile } from '@/lib/sportsdb'
import { getArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import FixtureCard from '@/components/FixtureCard'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [fixtures, articles] = await Promise.all([
    getFixturesDelDia(),
    getArticles(6),
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-brand-green to-brand-dark border border-brand-light/30 rounded-2xl p-6 sm:p-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Pronósticos de Fútbol
              <span className="text-brand-gold"> Chile y LATAM</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Análisis diario de los partidos más importantes. Pronósticos actualizados
              con datos reales para que tomes las mejores decisiones.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/pronosticos"
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Ver Pronósticos del Día
              </Link>
              <Link
                href="/casas-de-apuestas"
                className="border border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Casas de Apuestas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partidos del Día */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            ⚽ Partidos de Hoy
          </h2>
          <span className="text-gray-500 text-sm">
            {new Date().toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long' })}
          </span>
        </div>

        {fixtures.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fixtures.slice(0, 9).map((fixture) => (
              <FixtureCard
                key={fixture.idEvent}
                homeTeam={fixture.strHomeTeam}
                awayTeam={fixture.strAwayTeam}
                league={fixture.strLeague}
                time={formatHoraChile(fixture.strTime || '00:00')}
                homeScore={fixture.intHomeScore}
                awayScore={fixture.intAwayScore}
                status={fixture.strStatus}
              />
            ))}
          </div>
        ) : (
          <div className="bg-brand-green/30 border border-brand-light/20 rounded-xl p-8 text-center">
            <p className="text-gray-400">No hay partidos de las ligas principales programados para hoy.</p>
            <p className="text-gray-500 text-sm mt-2">Los pronósticos se publican diariamente a las 7:00 AM hora Chile.</p>
          </div>
        )}
      </section>

      {/* Artículos Recientes */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            📊 Pronósticos Recientes
          </h2>
          <Link href="/pronosticos" className="text-brand-gold text-sm font-medium hover:text-brand-gold-light transition-colors">
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              titulo={article.titulo}
              slug={article.slug}
              meta_descripcion={article.meta_descripcion}
              fecha={article.fecha}
              liga={article.liga}
              equipos={article.equipos}
            />
          ))}
        </div>
      </section>

      {/* CTA Casas de Apuestas */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-brand-green to-brand-dark border border-brand-gold/20 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Compara las Mejores Casas de Apuestas en Chile
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Encuentra la plataforma ideal para ti. Comparamos cuotas, bonos, métodos de pago y experiencia de usuario.
          </p>
          <Link
            href="/casas-de-apuestas"
            className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Ver Comparativa Completa
          </Link>
          <p className="text-gray-600 text-xs mt-4">+18 | Juega con responsabilidad</p>
        </div>
      </section>
    </div>
  )
}
