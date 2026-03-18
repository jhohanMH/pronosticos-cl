# PronosticosCL

Sitio de pronósticos deportivos y afiliados de apuestas para el mercado chileno/LATAM.

## Stack Técnico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Deploy**: Vercel
- **Automatización**: n8n
- **AI**: Claude API (claude-haiku-4-5-20251001)
- **Datos**: TheSportsDB API

## Setup Rápido

### 1. Clonar e instalar

```bash
git clone https://github.com/jhohanMH/pronosticos-cl.git
cd pronosticos-cl
npm install
```

### 2. Variables de entorno

Copiar `.env.example` a `.env.local` y completar:

```bash
cp .env.example .env.local
```

### 3. Supabase

1. Crear proyecto en [supabase.com](https://supabase.com)
2. Ir a SQL Editor
3. Ejecutar el contenido de `supabase-schema.sql`
4. Copiar URL y anon key a `.env.local`

### 4. Deploy en Vercel

1. Importar repo desde GitHub en [vercel.com](https://vercel.com)
2. Agregar variables de entorno
3. Deploy automático

### 5. n8n (Pipeline automático)

1. Instalar n8n: `npm install -g n8n`
2. Importar `n8n-workflow.json`
3. Configurar variables de entorno en n8n:
   - `ANTHROPIC_API_KEY`: Tu API key de Claude
   - `SITE_URL`: https://pronosticoscl.com (o tu URL de Vercel)
   - `PUBLISH_API_KEY`: Mismo valor que en Vercel

## Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx                    # Home
│   ├── layout.tsx                  # Layout global
│   ├── globals.css                 # Estilos globales
│   ├── sitemap.ts                  # Sitemap dinámico
│   ├── robots.ts                   # robots.txt
│   ├── not-found.tsx               # 404
│   ├── pronosticos/
│   │   ├── page.tsx                # Lista de pronósticos
│   │   └── [slug]/page.tsx         # Artículo individual
│   ├── casas-de-apuestas/
│   │   ├── page.tsx                # Comparativa
│   │   └── [casa]/page.tsx         # Review individual
│   └── api/
│       ├── publish-article/        # Endpoint para n8n
│       ├── articles/               # API de artículos
│       ├── fixtures/               # API de fixtures
│       └── revalidate/             # Revalidación de cache
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── FixtureCard.tsx
│   └── CasaCard.tsx
└── lib/
    ├── supabase.ts                 # Cliente Supabase
    ├── sportsdb.ts                 # TheSportsDB API
    ├── articles.ts                 # Lógica de artículos
    └── casas-apuestas.ts           # Datos casas de apuestas
```

## Links de Afiliados

Reemplazar placeholders en `src/lib/casas-apuestas.ts`:

- `[LINK_AFILIADO_BETANO]` → Tu link de afiliado Betano
- `[LINK_AFILIADO_1XBET]` → Tu link de afiliado 1xBet

## Pipeline Automático

El workflow de n8n se ejecuta diariamente a las 7:00 AM hora Chile:

1. **Obtiene fixtures** del día desde TheSportsDB
2. **Filtra** por ligas relevantes (Chile, Libertadores, Champions, etc.)
3. **Genera artículos** con Claude API
4. **Publica** en el sitio vía API
5. **Revalida** el cache de Next.js

## Licencia

Privado - Todos los derechos reservados.
