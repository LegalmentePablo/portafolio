# Portafolio con Astro

Portafolio personal construido con Astro para mostrar experiencia profesional, proyectos, educacion, habilidades y contacto. En dos idiomas (ES/EN).

## Demo

- Produccion: https://portafolio-tau-ruddy-65.vercel.app/

## Stack

- Astro 6
- TypeScript
- CSS (global + estilos por componente)
- Bun (runtime y gestor de paquetes)
- Vercel (deploy)

## Que incluye

- Version en espanol y version en ingles
- Navegacion por secciones con menu responsive
- Switch de tema claro/oscuro con persistencia en localStorage
- Metadatos SEO y Open Graph
- Animaciones de entrada respetando `prefers-reduced-motion`
- Contenido centralizado en archivos de datos para facilitar mantenimiento

## Decisiones tecnicas (y por que)

### Sobre el CSS en componentes

Si, en varios casos el CSS esta dentro de cada `.astro` en lugar de estar todo separado en archivos externos.

Lo hice asi por estas razones:

- Coherencia de componente: estructura, logica y estilos viven juntos y son mas faciles de ajustar rapido.
- Menos contexto mental: cuando retoco una seccion no tengo que saltar entre varios archivos para cambios pequenos.
- Scope natural de Astro: evita fugas de estilos y reduce conflictos.

Tambien hay una excepcion intencional: el header usa un CSS separado porque concentra reglas compartidas de navegacion (desktop + mobile) y me resulto mas claro mantenerlo en un solo archivo.

### Contenido separado de la UI

La informacion principal del portafolio vive en archivos de datos (ES/EN). Eso permite:

- Cambiar textos sin tocar la estructura visual.
- Mantener consistencia entre idiomas.
- Escalar el contenido sin duplicar componentes.

## Estructura del proyecto

```txt
src/
	components/
		sections/       # Secciones principales (hero, experiencia, proyectos, etc.)
	data/             # Contenido del portafolio por idioma
	layouts/          # Layout base, metadatos y estilos globales
	pages/            # Rutas ES y EN
```

## Requisitos

- Bun instalado
- Node no es necesario para ejecutar scripts del proyecto

## Primer arranque

Desde la raiz del proyecto:

```sh
bun install
bun run dev
```

Sitio local:

- http://localhost:4321

## Scripts disponibles

```sh
bun run dev      # Desarrollo
bun run build    # Build de produccion
bun run preview  # Preview local del build
bun run astro -- --help
```

## Deploy

El proyecto esta preparado para desplegar en Vercel. Cada push a la rama principal puede disparar un nuevo deploy segun la configuracion del repo.

## Problemas comunes

Si estas en Windows y `bun install` falla de forma rara (archivos faltantes dentro de dependencias):

```sh
bun pm cache rm
```

Luego elimina `node_modules` y reinstala:

```sh
bun install --backend=copyfile
```
