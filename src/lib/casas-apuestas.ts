import { type CasaApuesta } from './supabase'

export const CASAS_APUESTAS: CasaApuesta[] = [
  {
    id: '1',
    nombre: '1xBet',
    slug: '1xbet',
    logo_url: '/1xbet-logo.svg',
    rating: 4.8,
    descripcion: '1xBet es una de las plataformas de apuestas deportivas más grandes del mundo, con presencia en más de 50 países. Destaca por ofrecer las cuotas más competitivas del mercado y una variedad de mercados de apuestas que supera a la mayoría de la competencia. Con cobertura completa del fútbol chileno, Copa Libertadores, Champions League y más de 40 deportes adicionales, 1xBet es la opción número uno para apostadores en Chile y Latinoamérica.',
    pros: [
      'Cuotas muy competitivas en todas las ligas',
      'Enorme variedad de mercados por partido (+1500)',
      'Apuestas en vivo con streaming integrado',
      'Múltiples métodos de pago incluyendo criptomonedas',
      'Cobertura completa de ligas chilenas y sudamericanas',
      'App móvil rápida y funcional',
      'Bono de bienvenida atractivo para nuevos usuarios'
    ],
    contras: [
      'Interfaz puede ser compleja para principiantes',
      'Proceso de verificación KYC detallado'
    ],
    link_afiliado: 'https://reffpa.com/L?tag=d_5379335m_97c_pronosticoscl&site=5379335&ad=97',
    bono_texto: 'Regístrate hoy y obtén un bono de bienvenida exclusivo',
    deposito_minimo: '$1.000 CLP',
    metodos_pago: ['Tarjeta de crédito/débito', 'Transferencia bancaria', 'Criptomonedas', 'WebPay', 'Skrill', 'Neteller', 'MACH', 'Cuenta RUT'],
    licencia: 'Licencia internacional de Curazao',
    featured: true,
  }
]

export function getCasaBySlug(slug: string): CasaApuesta | undefined {
  return CASAS_APUESTAS.find(c => c.slug === slug)
}

export function getCasasDestacadas(): CasaApuesta[] {
  return CASAS_APUESTAS.filter(c => c.featured)
}

export function getAfiliateLink(): string {
  return 'https://reffpa.com/L?tag=d_5379335m_97c_pronosticoscl&site=5379335&ad=97'
}

export function buildAffiliateLink(casa: CasaApuesta, campaign?: string): string {
  const base = casa.link_afiliado
  if (!base || base.startsWith('[')) return getAfiliateLink()
  const url = new URL(base)
  if (campaign) url.searchParams.set('campaign', campaign)
  return url.toString()
}
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
    nombre: 'Betcris',
    slug: 'betcris',
    logo_url: '/betcris-logo.svg',
    rating: 4.4,
    descripcion: 'Betcris es una de las casas de apuestas con más experiencia en el mercado latinoamericano. Con más de 35 años de trayectoria, ofrece una plataforma confiable con cobertura completa de fútbol sudamericano y las principales ligas europeas. Destaca por sus mercados de primera y segunda mitad y cuotas competitivas en formato americano.',
    pros: [
      'Más de 35 años de experiencia en LATAM',
      'Excelente cobertura de fútbol sudamericano',
      'Mercados específicos de mitades y goles',
      'Plataforma estable y confiable',
      'Cuotas competitivas en ligas principales'
    ],
    contras: [
      'Cuotas en formato americano por defecto',
      'Interfaz podría ser más moderna',
      'Requiere login para ver cuotas'
    ],
    link_afiliado: '[LINK_AFILIADO_BETCRIS]',
    bono_texto: 'Consulta las promociones vigentes en la plataforma',
    deposito_minimo: '$5.000 CLP',
    metodos_pago: ['Tarjeta de crédito/débito', 'Transferencia bancaria', 'WebPay', 'Skrill'],
    licencia: 'Licencia de operación en Costa Rica',
    featured: true,
  },
  {
    id: '4',
    nombre: 'Bet365',
    slug: 'bet365',
    logo_url: '/bet365-logo.svg',
    rating: 4.7,
    descripcion: 'Bet365 es la casa de apuestas más grande del mundo por volumen de jugadores. Reconocida por su plataforma de apuestas en vivo líder en la industria, streaming deportivo integrado y una enorme variedad de mercados. Ofrece una experiencia premium con cuotas consistentemente competitivas en todos los deportes.',
    pros: [
      'Líder mundial en apuestas en vivo',
      'Streaming deportivo gratuito integrado',
      'Cuotas muy competitivas',
      'Enorme variedad de mercados y deportes',
      'Interfaz fluida y responsive'
    ],
    contras: [
      'Proceso de verificación estricto',
      'Restricciones de acceso en algunos países'
    ],
    link_afiliado: '[LINK_AFILIADO_BET365]',
    bono_texto: 'Revisa las ofertas disponibles en la plataforma',
    deposito_minimo: '$2.000 CLP',
    metodos_pago: ['Tarjeta de crédito/débito', 'Transferencia bancaria', 'Skrill', 'Neteller', 'PayPal'],
    licencia: 'Licencia UK Gambling Commission',
    featured: true,
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
