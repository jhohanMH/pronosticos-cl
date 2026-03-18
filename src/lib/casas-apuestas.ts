import { type CasaApuesta } from './supabase'

export const CASAS_APUESTAS: CasaApuesta[] = [
  {
    id: '1',
    nombre: 'Betano',
    slug: 'betano',
    logo_url: '/betano-logo.svg',
    rating: 4.8,
    descripcion: 'Betano es una de las casas de apuestas con mayor crecimiento en Chile y Latinoamérica. Con una plataforma intuitiva, amplia variedad de mercados deportivos y una experiencia mobile de primer nivel, se ha posicionado como referente en el mercado chileno. Ofrece cobertura completa de la Primera División de Chile, Copa Libertadores y las principales ligas europeas.',
    pros: [
      'Plataforma intuitiva y rápida',
      'Excelente app móvil',
      'Amplia cobertura del fútbol chileno',
      'Retiros rápidos',
      'Streaming en vivo de eventos selectos'
    ],
    contras: [
      'Cuotas promedio en ligas menores',
      'Atención al cliente solo en horario laboral'
    ],
    link_afiliado: '[LINK_AFILIADO_BETANO]',
    bono_texto: 'Consulta las promociones vigentes directamente en la plataforma',
    deposito_minimo: '$3.000 CLP',
    metodos_pago: ['Tarjeta de crédito/débito', 'Transferencia bancaria', 'WebPay', 'MACH', 'Cuenta RUT'],
    licencia: 'Licencia de operación en Chile',
    featured: true,
  },
  {
    id: '2',
    nombre: '1xBet',
    slug: '1xbet',
    logo_url: '/1xbet-logo.svg',
    rating: 4.5,
    descripcion: '1xBet es una de las plataformas de apuestas deportivas más grandes del mundo, con presencia en más de 50 países. Destaca por ofrecer las cuotas más competitivas del mercado y una variedad de mercados de apuestas que supera a la mayoría de la competencia. Su cobertura incluye desde las grandes ligas hasta competencias locales.',
    pros: [
      'Cuotas muy competitivas',
      'Enorme variedad de mercados',
      'Apuestas en vivo extensas',
      'Múltiples métodos de pago',
      'Cobertura de ligas menores'
    ],
    contras: [
      'Interfaz puede ser compleja para principiantes',
      'Proceso de verificación detallado'
    ],
    link_afiliado: '[LINK_AFILIADO_1XBET]',
    bono_texto: 'Revisa las ofertas actuales en la plataforma',
    deposito_minimo: '$1.000 CLP',
    metodos_pago: ['Tarjeta de crédito/débito', 'Transferencia bancaria', 'Criptomonedas', 'WebPay', 'Skrill', 'Neteller'],
    licencia: 'Licencia internacional de Curazao',
    featured: true,
  },
  {
    id: '3',
    nombre: 'Coolbet',
    slug: 'coolbet',
    logo_url: '/coolbet-logo.svg',
    rating: 4.3,
    descripcion: 'Coolbet se distingue por su enfoque en el juego responsable y transparencia. Con una interfaz limpia y moderna, es ideal para quienes buscan una experiencia de apuestas sin complicaciones. Su compromiso con la responsabilidad la hace una opción confiable para el mercado chileno.',
    pros: [
      'Enfoque en juego responsable',
      'Interfaz limpia y moderna',
      'Sin requisitos de rollover',
      'Buenas cuotas en fútbol'
    ],
    contras: [
      'Menos mercados que la competencia',
      'Opciones de pago limitadas'
    ],
    link_afiliado: '#',
    bono_texto: 'Consulta promociones vigentes en su sitio web',
    deposito_minimo: '$5.000 CLP',
    metodos_pago: ['Tarjeta de crédito/débito', 'Transferencia bancaria', 'WebPay'],
    licencia: 'Licencia de Malta Gaming Authority',
    featured: false,
  }
]

export function getCasaBySlug(slug: string): CasaApuesta | undefined {
  return CASAS_APUESTAS.find(c => c.slug === slug)
}

export function getCasasDestacadas(): CasaApuesta[] {
  return CASAS_APUESTAS.filter(c => c.featured)
}

export function buildAffiliateLink(casa: CasaApuesta): string {
  const base = casa.link_afiliado
  if (base.startsWith('[')) return '#' // placeholder
  return `${base}?utm_source=pronosticoscl.com&utm_medium=afiliado&utm_campaign=review`
}
