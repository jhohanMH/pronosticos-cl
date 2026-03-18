import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/articles'
import { CASAS_APUESTAS } from '@/lib/casas-apuestas'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pronosticoscl.com'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pronosticos`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/casas-de-apuestas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Casas de apuestas pages
  const casasPages: MetadataRoute.Sitemap = CASAS_APUESTAS.map((casa) => ({
    url: `${baseUrl}/casas-de-apuestas/${casa.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Article pages
  let articlePages: MetadataRoute.Sitemap = []
  try {
    const slugs = await getAllSlugs()
    articlePages = slugs.map((slug) => ({
      url: `${baseUrl}/pronosticos/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {
    // Fallback: no articles
  }

  return [...staticPages, ...casasPages, ...articlePages]
}
