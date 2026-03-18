const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3'

const LIGAS_PERMITIDAS = [
  'Chilean Primera División',
  'Copa Libertadores',
  'Copa Sudamericana',
  'UEFA Champions League',
  'English Premier League',
  'Spanish La Liga',
]

export interface Fixture {
  idEvent: string
  strEvent: string
  strHomeTeam: string
  strAwayTeam: string
  strLeague: string
  dateEvent: string
  strTime: string
  strThumb: string | null
  strHomeTeamBadge: string | null
  strAwayTeamBadge: string | null
  intHomeScore: string | null
  intAwayScore: string | null
  strStatus: string | null
}

export async function getFixturesDelDia(fecha?: string): Promise<Fixture[]> {
  const date = fecha || new Date().toISOString().split('T')[0]

  try {
    const res = await fetch(
      `${BASE_URL}/eventsday.php?d=${date}&s=Soccer`,
      { next: { revalidate: 300 } }
    )

    if (!res.ok) return []

    const data = await res.json()

    if (!data.events) return []

    return data.events.filter((e: Fixture) =>
      LIGAS_PERMITIDAS.some(liga =>
        e.strLeague?.toLowerCase().includes(liga.toLowerCase()) ||
        liga.toLowerCase().includes(e.strLeague?.toLowerCase() || '')
      )
    )
  } catch {
    console.error('Error fetching fixtures')
    return []
  }
}

export async function getFixturesPorLiga(liga: string): Promise<Fixture[]> {
  const hoy = new Date().toISOString().split('T')[0]
  const fixtures = await getFixturesDelDia(hoy)
  return fixtures.filter(f => f.strLeague?.toLowerCase().includes(liga.toLowerCase()))
}

export function formatHoraChile(timeStr: string): string {
  try {
    const [hours, minutes] = timeStr.split(':').map(Number)
    // UTC to Chile (UTC-3 in summer, UTC-4 in winter)
    const chileOffset = -3
    let chileHours = hours + chileOffset
    if (chileHours < 0) chileHours += 24
    return `${chileHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  } catch {
    return timeStr
  }
}
