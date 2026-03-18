import { getArticleBySlug } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
  if (!article) return { title: 'Artículo no encontrado' }

  return {
    title: article.titulo,
    description: article.meta_descripcion,
    openGraph: {
      title: article.titulo,
      description: article.meta_descripcion,
      type: 'article',
      publishedTime: article.created_at,
      tags: article.tags,
    },
  }
}

export const dynamic = 'force-dynamic'

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: article.titulo,
    description: article.meta_descripcion,
    startDate: article.fecha,
    location: {
      '@type': 'Place',
      name: article.liga,
    },
    competitor: article.equipos.map(equipo => ({
      '@type': 'SportsTeam',
      name: equipo,
    })),
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.titulo,
    description: article.meta_descripcion,
    datePublished: article.created_at,
    dateModified: article.created_at,
    author: {
      '@type': 'Organization',
      name: 'PronosticosCL',
      url: 'https://pronosticoscl.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PronosticosCL',
      url: 'https://pronosticoscl.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand-gold transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/pronosticos" className="hover:text-brand-gold transition-colors">Pronósticos</Link>
          <span>/</span>
          <span className="text-gray-400 truncate max-w-[200px]">{article.titulo}</span>
        </nav>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="bg-brand-light/50 text-brand-gold text-xs font-medium px-3 py-1 rounded-full">
            {article.liga}
          </span>
          <span className="text-gray-500 text-sm">
            {new Date(article.fecha).toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>

        {/* Teams */}
        <div className="flex items-center justify-center gap-6 bg-brand-green/30 border border-brand-light/20 rounded-xl p-6 mb-8">
          <div className="text-center flex-1">
            <p className="text-white font-bold text-xl sm:text-2xl">{article.equipos[0]}</p>
            <p className="text-gray-500 text-xs mt-1">Local</p>
          </div>
          <div className="text-brand-gold font-bold text-2xl px-4">VS</div>
          <div className="text-center flex-1">
            <p className="text-white font-bold text-xl sm:text-2xl">{article.equipos[1]}</p>
            <p className="text-gray-500 text-xs mt-1">Visitante</p>
          </div>
        </div>

        {/* Article content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.contenido_html }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-brand-green">
          {article.tags.map((tag) => (
            <span key={tag} className="bg-brand-green/50 text-gray-400 text-xs px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-brand-green to-brand-dark border border-brand-gold/20 rounded-xl p-6 text-center">
          <p className="text-white font-semibold mb-2">¿Buscas las mejores cuotas?</p>
          <p className="text-gray-400 text-sm mb-4">Compara las principales casas de apuestas disponibles en Chile</p>
          <Link
            href="/casas-de-apuestas"
            className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            Ver Casas de Apuestas
          </Link>
          <p className="text-gray-600 text-xs mt-3">+18 | Juega con responsabilidad</p>
        </div>
      </article>
    </>
  )
}
