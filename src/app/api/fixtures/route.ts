import { NextResponse } from 'next/server'
import { getFixturesDelDia } from '@/lib/sportsdb'

export const revalidate = 300

export async function GET() {
  try {
    const fixtures = await getFixturesDelDia()
    return NextResponse.json({ fixtures, count: fixtures.length })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch fixtures' }, { status: 500 })
  }
}
