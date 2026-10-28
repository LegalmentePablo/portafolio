# Portafolio con Astro

Portafolio personal de Pablo Buitrago Mejia: experiencia, casos, proyectos, habilidades y contacto, en español e inglés.

## Demo

- Producción: https://portafolio-tau-ruddy-65.vercel.app/

## Stack

- Astro 6
- TypeScript
- CSS por componente (estilos globales y tokens en el layout)
- Bun (runtime y gestor de paquetes)
- Vercel (deploy)

## Qué incluye

- Versión en español (`/`) y en inglés (`/en/`), con `hreflang` entre ambas
- Navegación por secciones con indicador de sección activa y menú móvil
- Tema claro/oscuro: respeta la preferencia del sistema y recuerda la elección
- Casos desplegables (`<details>`) para leer el detalle sin perder el resumen
- Botón para copiar el correo
- SEO, Open Graph y sitemap
- Animación de entrada discreta que se desactiva con `prefers-reduced-motion`

## Decisiones técnicas

### Contenido separado de la UI

Todo el texto vive en `src/data/portfolio.ts` (ES) y `src/data/portfolio.en.ts` (EN). Ambos cumplen la misma interfaz `PortfolioData`, así que TypeScript avisa si a un idioma le falta algo. Las dos páginas renderizan el mismo componente `Home.astro` con distintos datos.

### Estilos

Los tokens de color, tipografía y espaciado están en `src/layouts/Layout.astro` (variables CSS, con su versión oscura en `:root.dark`). Cada componente trae sus propios estilos con el scope de Astro.

## Estructura del proyecto

```txt
src/
  components/
    sections/       # Hero, experiencia, casos, proyectos, habilidades, formación, contacto
    Header.astro    # Navegación, idioma y tema
    Home.astro      # Página completa a partir de PortfolioData
    Section.astro   # Contenedor común de las secciones
    Icon.astro      # Iconos SVG
  data/             # Contenido por idioma
  layouts/          # Layout base, metadatos y tokens
  pages/            # Rutas ES y EN
```

## Primer arranque

```sh
bun install
bun run dev
```

Sitio local: http://localhost:4321

## Scripts

```sh
bun run dev      # Desarrollo
bun run build    # Build de producción
bun run preview  # Preview local del build
```

## Deploy

Cada push a la rama principal dispara un nuevo deploy en Vercel.

## Problemas comunes

Si en Windows `bun install` falla de forma rara (archivos faltantes dentro de dependencias):

```sh
bun pm cache rm
bun install --backend=copyfile
```
