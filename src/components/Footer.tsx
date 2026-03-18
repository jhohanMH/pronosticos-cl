import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-green mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center">
                <span className="text-brand-dark font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-white">
                Pronósticos<span className="text-brand-gold">CL</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pronósticos deportivos y análisis de fútbol para Chile y Latinoamérica.
              Información actualizada diariamente.
            </p>
          </div>

          <div>
            <h3 className="text-brand-gold font-semibold mb-4 text-sm uppercase tracking-wider">Navegación</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Inicio</Link>
              <Link href="/pronosticos" className="text-gray-400 hover:text-white transition-colors text-sm">Pronósticos</Link>
              <Link href="/casas-de-apuestas" className="text-gray-400 hover:text-white transition-colors text-sm">Casas de Apuestas</Link>
            </div>
          </div>

          <div>
            <h3 className="text-brand-gold font-semibold mb-4 text-sm uppercase tracking-wider">Juego Responsable</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              +18 | Juega con responsabilidad. Las apuestas deportivas conllevan riesgo de pérdida.
              Si sientes que tienes un problema con el juego, busca ayuda profesional.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-green mt-8 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} PronosticosCL. Todos los derechos reservados.
            Este sitio contiene enlaces de afiliados. +18 | Juega con responsabilidad.
          </p>
        </div>
      </div>
    </footer>
  )
}
