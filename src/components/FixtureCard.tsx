interface FixtureCardProps {
  homeTeam: string
  awayTeam: string
  league: string
  time: string
  homeScore?: string | null
  awayScore?: string | null
  status?: string | null
}

export default function FixtureCard({ homeTeam, awayTeam, league, time, homeScore, awayScore, status }: FixtureCardProps) {
  const isLive = status === 'Live' || status === '1H' || status === '2H' || status === 'HT'
  const isFinished = status === 'FT' || status === 'AET' || status === 'AP'

  return (
    <div className="bg-brand-green/30 border border-brand-light/20 rounded-xl p-4 hover:border-brand-gold/30 transition-all">
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-500 text-xs font-medium">{league}</span>
        {isLive && (
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-xs font-bold">EN VIVO</span>
          </span>
        )}
        {isFinished && (
          <span className="text-gray-500 text-xs">Finalizado</span>
        )}
        {!isLive && !isFinished && (
          <span className="text-brand-gold text-xs font-medium">{time}</span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-white font-medium text-sm truncate">{homeTeam}</p>
        </div>

        <div className="px-4 py-1 bg-brand-dark rounded-lg mx-2 min-w-[60px] text-center">
          {(homeScore !== null && homeScore !== undefined) ? (
            <span className="text-white font-bold text-sm">
              {homeScore} - {awayScore}
            </span>
          ) : (
            <span className="text-brand-gold font-medium text-sm">vs</span>
          )}
        </div>

        <div className="flex-1 text-right">
          <p className="text-white font-medium text-sm truncate">{awayTeam}</p>
        </div>
      </div>
    </div>
  )
}
