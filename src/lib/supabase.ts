import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Only create client if env vars are configured, otherwise null
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

export type Article = {
  id: string
  titulo: string
  slug: string
  meta_descripcion: string
  contenido_html: string
  fecha: string
  equipos: string[]
  liga: string
  tags: string[]
  created_at: string
  published: boolean
}

export type CasaApuesta = {
  id: string
  nombre: string
  slug: string
  logo_url: string
  rating: number
  descripcion: string
  pros: string[]
  contras: string[]
  link_afiliado: string
  bono_texto: string
  deposito_minimo: string
  metodos_pago: string[]
  licencia: string
  featured: boolean
}
