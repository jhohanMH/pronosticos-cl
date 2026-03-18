import { supabase, type Article } from './supabase'

// Demo articles for initial display
const DEMO_ARTICLES: Article[] = [
  {
    id: '1',
    titulo: 'Pronóstico Colo Colo vs Universidad de Chile — Superclásico',
    slug: 'pronostico-colo-colo-vs-universidad-de-chile-superclasico',
    meta_descripcion: 'Análisis completo y pronóstico del Superclásico chileno. Colo Colo vs U de Chile, estadísticas y predicción.',
    contenido_html: `
      <h1>Pronóstico Colo Colo vs Universidad de Chile — Superclásico</h1>
      <p>El Superclásico del fútbol chileno enfrenta a los dos equipos más grandes del país en un duelo que paraliza la nación entera. Colo Colo llega como local en el Estadio Monumental con la motivación de mantener su racha invicta en casa.</p>
      <h2>Análisis Colo Colo</h2>
      <p>El Cacique llega en un gran momento. Con 4 victorias consecutivas en la Primera División, el equipo de Jorge Almirón muestra una solidez defensiva impresionante. La dupla ofensiva viene afinada y la hinchada será el jugador número 12. Las únicas dudas pasan por la banda izquierda donde hay una baja por lesión.</p>
      <h2>Análisis Universidad de Chile</h2>
      <p>La U llega con presión tras resultados irregulares en las últimas fechas. Sin embargo, los clásicos se juegan aparte y el plantel azul tiene la experiencia necesaria. El mediocampo creativo será clave para generar peligro. La defensa deberá estar concentrada ante el poderío ofensivo rival.</p>
      <h2>Historial de Enfrentamientos</h2>
      <p>En los últimos 10 enfrentamientos, Colo Colo tiene ventaja con 5 victorias, 3 empates y 2 derrotas. Como local, el Cacique ha sido particularmente fuerte ganando los últimos 3 duelos en el Monumental.</p>
      <h2>Nuestra Predicción</h2>
      <p>Colo Colo tiene la ventaja de localía y mejor momento futbolístico. Nuestro análisis sugiere un <strong>Colo Colo 2-1 Universidad de Chile</strong> como resultado más probable, con goles en ambos tiempos.</p>
      <h2>Cuotas Disponibles</h2>
      <p>Consulta las mejores cuotas para este partido en <a href="/casas-de-apuestas/betano">Betano</a> y <a href="/casas-de-apuestas/1xbet">1xBet</a>, donde encontrarás opciones para todos los mercados de apuestas.</p>
      <p class="disclaimer">+18. Las apuestas conllevan riesgo. Juega con responsabilidad.</p>
    `,
    fecha: new Date().toISOString().split('T')[0],
    equipos: ['Colo Colo', 'Universidad de Chile'],
    liga: 'Primera División Chile',
    tags: ['superclasico', 'colo-colo', 'u-de-chile', 'primera-division'],
    created_at: new Date().toISOString(),
    published: true,
  },
  {
    id: '2',
    titulo: 'Pronóstico Real Madrid vs Barcelona — El Clásico',
    slug: 'pronostico-real-madrid-vs-barcelona-el-clasico',
    meta_descripcion: 'Pronóstico y análisis del Clásico español. Real Madrid vs Barcelona, predicción con estadísticas actualizadas.',
    contenido_html: `
      <h1>Pronóstico Real Madrid vs Barcelona — El Clásico</h1>
      <p>El partido más visto del fútbol mundial no necesita presentación. Real Madrid y Barcelona se enfrentan en el Santiago Bernabéu en un duelo que definirá la cima de La Liga española.</p>
      <h2>Análisis Real Madrid</h2>
      <p>Los merengues llegan líderes de La Liga y con la confianza al máximo. El mediocampo es el motor del equipo y la delantera ha sido letal en los últimos compromisos. La defensa ha mostrado mejoras significativas y el Bernabéu será una caldera. Pocas dudas en la alineación titular.</p>
      <h2>Análisis Barcelona</h2>
      <p>El Barça necesita los tres puntos para no perder terreno en la lucha por el título. El equipo culé ha mostrado un fútbol vistoso pero irregular fuera de casa. La cantera sigue aportando jugadores de calidad y el sistema táctico está cada vez más aceitado.</p>
      <h2>Historial de Enfrentamientos</h2>
      <p>En los últimos clásicos, la tendencia ha sido de partidos muy igualados. Ambos equipos han ganado como locales en las últimas temporadas, lo que le da ventaja al Madrid en esta ocasión.</p>
      <h2>Nuestra Predicción</h2>
      <p>El factor cancha y el momento del Madrid nos inclinan por un <strong>Real Madrid 2-1 Barcelona</strong>. Esperamos un partido abierto con goles de ambos lados.</p>
      <h2>Cuotas Disponibles</h2>
      <p>Revisa las cuotas actualizadas en <a href="/casas-de-apuestas/betano">Betano</a> y <a href="/casas-de-apuestas/1xbet">1xBet</a> para encontrar el mejor valor en este clásico.</p>
      <p class="disclaimer">+18. Las apuestas conllevan riesgo. Juega con responsabilidad.</p>
    `,
    fecha: new Date().toISOString().split('T')[0],
    equipos: ['Real Madrid', 'Barcelona'],
    liga: 'La Liga',
    tags: ['el-clasico', 'real-madrid', 'barcelona', 'la-liga'],
    created_at: new Date().toISOString(),
    published: true,
  },
  {
    id: '3',
    titulo: 'Pronóstico River Plate vs Boca Juniors — Libertadores',
    slug: 'pronostico-river-plate-vs-boca-juniors-libertadores',
    meta_descripcion: 'Análisis y pronóstico del Superclásico argentino en Copa Libertadores. River vs Boca, predicción experta.',
    contenido_html: `
      <h1>Pronóstico River Plate vs Boca Juniors — Libertadores</h1>
      <p>El Superclásico argentino se traslada a la Copa Libertadores en un cruce que promete ser electrizante. River Plate recibe a Boca Juniors en el Monumental de Núñez con todo en juego.</p>
      <h2>Análisis River Plate</h2>
      <p>El Millonario es el favorito por historia reciente en Libertadores. El equipo ha demostrado ser muy sólido como local y cuenta con un plantel profundo. El técnico tiene variantes tácticas y la hinchada será fundamental. La presión de la copa saca lo mejor del equipo.</p>
      <h2>Análisis Boca Juniors</h2>
      <p>El Xeneize siempre es candidato en Libertadores. La mística copera de Boca es innegable y el plantel tiene experiencia internacional de sobra. Sin embargo, los resultados recientes no han sido los mejores y necesitan una actuación perfecta fuera de casa.</p>
      <h2>Historial Copero</h2>
      <p>En Libertadores, estos equipos han escrito páginas memorables. River tiene ventaja en las últimas eliminatorias directas, pero Boca siempre compite al máximo nivel en esta competencia.</p>
      <h2>Nuestra Predicción</h2>
      <p>River Plate como local y con mejor momento nos da un <strong>River Plate 2-0 Boca Juniors</strong> como pronóstico principal. La solidez defensiva riverplatense será clave.</p>
      <h2>Cuotas Disponibles</h2>
      <p>Las mejores cuotas para la Libertadores las encuentras en <a href="/casas-de-apuestas/betano">Betano</a> y <a href="/casas-de-apuestas/1xbet">1xBet</a>.</p>
      <p class="disclaimer">+18. Las apuestas conllevan riesgo. Juega con responsabilidad.</p>
    `,
    fecha: new Date().toISOString().split('T')[0],
    equipos: ['River Plate', 'Boca Juniors'],
    liga: 'Copa Libertadores',
    tags: ['libertadores', 'river-plate', 'boca-juniors', 'superclasico-argentino'],
    created_at: new Date().toISOString(),
    published: true,
  }
]

export async function getArticles(limit = 10): Promise<Article[]> {
  if (!supabase) return DEMO_ARTICLES.slice(0, limit)
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error || !data || data.length === 0) {
      return DEMO_ARTICLES.slice(0, limit)
    }
    return data
  } catch {
    return DEMO_ARTICLES.slice(0, limit)
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!supabase) return DEMO_ARTICLES.find(a => a.slug === slug) || null
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (error || !data) {
      return DEMO_ARTICLES.find(a => a.slug === slug) || null
    }
    return data
  } catch {
    return DEMO_ARTICLES.find(a => a.slug === slug) || null
  }
}

export async function getAllSlugs(): Promise<string[]> {
  if (!supabase) return DEMO_ARTICLES.map(a => a.slug)
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('slug')
      .eq('published', true)

    if (error || !data || data.length === 0) {
      return DEMO_ARTICLES.map(a => a.slug)
    }
    return data.map((a: { slug: string }) => a.slug)
  } catch {
    return DEMO_ARTICLES.map(a => a.slug)
  }
}
