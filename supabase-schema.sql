-- PronosticosCL - Supabase Schema
-- Ejecutar en: Supabase Dashboard > SQL Editor > New Query

-- Tabla de artículos/pronósticos
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  meta_descripcion TEXT,
  contenido_html TEXT NOT NULL,
  fecha DATE NOT NULL DEFAULT CURRENT_DATE,
  equipos TEXT[] DEFAULT '{}',
  liga TEXT,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published);
CREATE INDEX IF NOT EXISTS idx_articles_fecha ON articles(fecha DESC);
CREATE INDEX IF NOT EXISTS idx_articles_created_at ON articles(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_liga ON articles(liga);

-- Trigger para updated_at automático
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_articles_updated_at
    BEFORE UPDATE ON articles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) policies
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Permitir lectura pública de artículos publicados
CREATE POLICY "Artículos publicados son públicos" ON articles
  FOR SELECT USING (published = true);

-- Permitir insertar/actualizar con service role (para n8n API)
CREATE POLICY "Service role puede insertar" ON articles
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role puede actualizar" ON articles
  FOR UPDATE USING (true);

-- Tabla de visitas (analytics básico)
CREATE TABLE IF NOT EXISTS page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  country TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(path);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at DESC);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Insertar visitas" ON page_views
  FOR INSERT WITH CHECK (true);

-- Vista para estadísticas
CREATE OR REPLACE VIEW article_stats AS
SELECT
  a.slug,
  a.titulo,
  a.liga,
  a.fecha,
  COUNT(pv.id) as views
FROM articles a
LEFT JOIN page_views pv ON pv.path = '/pronosticos/' || a.slug
WHERE a.published = true
GROUP BY a.id
ORDER BY a.created_at DESC;
