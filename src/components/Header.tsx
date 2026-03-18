import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-brand-dark border-b border-brand-green sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center">
              <span className="text-brand-dark font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-white">
              Pronósticos<span className="text-brand-gold">CL</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors text-sm font-medium">
              Inicio
            </Link>
            <Link href="/pronosticos" className="text-gray-300 hover:text-brand-gold transition-colors text-sm font-medium">
              Pronósticos
            </Link>
            <Link href="/casas-de-apuestas" className="text-gray-300 hover:text-brand-gold transition-colors text-sm font-medium">
              Casas de Apuestas
            </Link>
          </div>

          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <details className="relative">
        <summary className="list-none cursor-pointer p-2 text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 w-48 bg-brand-green rounded-lg shadow-xl border border-brand-light py-2 z-50">
          <Link href="/" className="block px-4 py-2 text-gray-300 hover:text-brand-gold hover:bg-brand-dark transition-colors text-sm">
            Inicio
          </Link>
          <Link href="/pronosticos" className="block px-4 py-2 text-gray-300 hover:text-brand-gold hover:bg-brand-dark transition-colors text-sm">
            Pronósticos
          </Link>
          <Link href="/casas-de-apuestas" className="block px-4 py-2 text-gray-300 hover:text-brand-gold hover:bg-brand-dark transition-colors text-sm">
            Casas de Apuestas
          </Link>
        </div>
      </details>
    </div>
  )
}
