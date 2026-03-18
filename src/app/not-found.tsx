import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-6xl font-extrabold text-brand-gold mb-4">404</h1>
      <h2 className="text-2xl font-bold text-white mb-4">Página no encontrada</h2>
      <p className="text-gray-400 mb-8">La página que buscas no existe o fue movida.</p>
      <div className="flex justify-center gap-4">
        <Link href="/" className="bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-6 py-3 rounded-lg transition-colors">
          Ir al Inicio
        </Link>
        <Link href="/pronosticos" className="border border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 font-medium px-6 py-3 rounded-lg transition-colors">
          Ver Pronósticos
        </Link>
      </div>
    </div>
  )
}
