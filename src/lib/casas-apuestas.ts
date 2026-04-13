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
