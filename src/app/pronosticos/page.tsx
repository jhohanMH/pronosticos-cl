import { getArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pronósticos de Fútbol Hoy',
  description: 'Todos los pronósticos deportivos del día. Análisis experto de Primera División Chile, Copa Libertadores, Champions League y más.',
}

export const dynamic = 'force-dynamic'

export default async function PronosticosPage() {
  const articles = await getArticles(20)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-3">
          Pronósticos de Fútbol
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Análisis y predicciones actualizados diariamente para los partidos más importantes
          del fútbol chileno e internacional.
        </p>
      </div>

      {articles.length > 0 ? (
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
      ) : (
        <div className="bg-brand-green/30 border border-brand-light/20 rounded-xl p-12 text-center">
          <p className="text-gray-400 text-lg">No hay pronósticos disponibles en este momento.</p>
          <p className="text-gray-500 text-sm mt-2">Los pronósticos se publican diariamente a las 7:00 AM hora Chile.</p>
        </div>
      )}

      <div className="mt-12 bg-brand-green/30 border border-brand-light/20 rounded-xl p-6 text-center">
        <p className="text-gray-500 text-xs">
          +18 | Las apuestas deportivas conllevan riesgo. Juega con responsabilidad.
          Los pronósticos son orientativos y no garantizan resultados.
        </p>
      </div>
    </div>
  )
}
