import { NextRequest, NextResponse } from 'next/server'
import { getArticles } from '@/lib/articles'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') || '10')

  try {
    const articles = await getArticles(limit)
    return NextResponse.json({ articles })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}
