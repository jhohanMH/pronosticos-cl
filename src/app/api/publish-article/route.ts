import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    // Simple API key auth
    const authHeader = request.headers.get('authorization')
    const apiKey = process.env.PUBLISH_API_KEY

    if (apiKey && authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()

    const { titulo, slug, meta_descripcion, contenido_html, fecha, equipos, liga, tags } = body

    if (!titulo || !slug || !contenido_html) {
      return NextResponse.json(
        { error: 'Missing required fields: titulo, slug, contenido_html' },
        { status: 400 }
      )
    }

    const article = {
      titulo,
      slug: slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-'),
      meta_descripcion: meta_descripcion || titulo,
      contenido_html,
      fecha: fecha || new Date().toISOString().split('T')[0],
      equipos: equipos || [],
      liga: liga || '',
      tags: tags || [],
      published: true,
      created_at: new Date().toISOString(),
    }

    if (!supabase) {
      return NextResponse.json({ error: 'Supabase not configured' }, { status: 503 })
    }

    const { data, error } = await supabase
      .from('articles')
      .upsert(article, { onConflict: 'slug' })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error', details: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      article: data,
      url: `https://pronosticoscl.com/pronosticos/${article.slug}`,
    })
  } catch (err) {
    console.error('Publish error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: 'publish-article' })
}
