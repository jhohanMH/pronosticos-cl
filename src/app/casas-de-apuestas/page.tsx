import { CASAS_APUESTAS } from '@/lib/casas-apuestas'
import CasaCard from '@/components/CasaCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mejores Casas de Apuestas Chile 2026',
  description: 'Comparativa de las mejores casas de apuestas deportivas en Chile. Análisis de Betano, 1xBet y más. Cuotas, bonos y métodos de pago.',
  keywords: ['casas de apuestas Chile', 'mejor casa de apuestas Chile 2026', 'Betano Chile', '1xBet Chile', 'apuestas deportivas Chile'],
}

export default function CasasDeApuestasPage() {
  const casasOrdenadas = [...CASAS_APUESTAS].sort((a, b) => b.rating - a.rating)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-3">
          Mejores Casas de Apuestas Chile 2026
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Comparativa actualizada de las principales plataformas de apuestas deportivas disponibles en Chile.
          Analizamos cuotas, experiencia de usuario, métodos de pago y más.
        </p>
      </div>

      {/* Quick comparison table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-brand-light/30">
              <th className="text-left py-3 px-4 text-brand-gold font-semibold">Casa</th>
              <th className="text-center py-3 px-4 text-brand-gold font-semibold">Rating</th>
              <th className="text-center py-3 px-4 text-brand-gold font-semibold hidden sm:table-cell">Depósito Min.</th>
              <th className="text-center py-3 px-4 text-brand-gold font-semibold hidden md:table-cell">Licencia</th>
              <th className="text-center py-3 px-4 text-brand-gold font-semibold">Acción</th>
            </tr>
          </thead>
          <tbody>
            {casasOrdenadas.map((casa, idx) => (
              <tr key={casa.id} className="border-b border-brand-light/10 hover:bg-brand-green/20 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-gold font-bold text-lg">#{idx + 1}</span>
                    <span className="text-white font-medium">{casa.nombre}</span>
                    {casa.featured && <span className="text-xs bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-full">Top</span>}
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-white font-bold">{casa.rating}</span>
                  <span className="text-gray-500 text-xs">/5</span>
                </td>
                <td className="text-center py-4 px-4 text-gray-300 hidden sm:table-cell">{casa.deposito_minimo}</td>
                <td className="text-center py-4 px-4 text-gray-400 text-xs hidden md:table-cell">{casa.licencia}</td>
                <td className="text-center py-4 px-4">
                  <a
                    href={casa.link_afiliado.startsWith('[') ? '#' : `${casa.link_afiliado}?utm_source=pronosticoscl.com&utm_medium=afiliado&utm_campaign=tabla`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold text-xs px-4 py-2 rounded-lg transition-colors inline-block"
                  >
                    Visitar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed cards */}
      <h2 className="text-2xl font-bold text-white mb-6">Reseñas Detalladas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {casasOrdenadas.map((casa) => (
          <CasaCard
            key={casa.id}
            nombre={casa.nombre}
            slug={casa.slug}
            rating={casa.rating}
            descripcion={casa.descripcion}
            bono_texto={casa.bono_texto}
            link_afiliado={casa.link_afiliado}
            featured={casa.featured}
          />
        ))}
      </div>

      {/* SEO content block */}
      <section className="bg-brand-green/30 border border-brand-light/20 rounded-xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">¿Cómo Elegir una Casa de Apuestas en Chile?</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-3">
          <p>Al elegir una plataforma de apuestas deportivas en Chile, es fundamental considerar varios factores. La seguridad y licencia de operación son lo primero: asegúrate de que la plataforma cuente con regulación vigente y protocolos de seguridad para tus datos y fondos.</p>
          <p>Las cuotas competitivas marcan la diferencia a largo plazo. Compara las cuotas entre distintas casas para los mismos eventos y elige la que ofrezca mejor valor. La variedad de mercados también importa, especialmente si sigues ligas como la Primera División de Chile, Copa Libertadores o las principales ligas europeas.</p>
          <p>Los métodos de pago locales son clave para el mercado chileno. Busca plataformas que acepten WebPay, transferencias bancarias chilenas, MACH o Cuenta RUT para mayor comodidad en depósitos y retiros.</p>
          <p>Finalmente, la experiencia móvil es crucial. La mayoría de las apuestas se realizan desde el celular, así que prioriza plataformas con apps nativas o sitios móviles rápidos y funcionales.</p>
        </div>
      </section>

      <div className="text-center">
        <p className="text-gray-600 text-xs">
          +18 | Las apuestas deportivas conllevan riesgo de pérdida. Juega con responsabilidad.
          Este sitio contiene enlaces de afiliados.
        </p>
      </div>
    </div>
  )
}
