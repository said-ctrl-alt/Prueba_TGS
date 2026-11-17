# ProyectoTGS

Guía de estudio de Teoría General de Sistemas construida con Astro y Bun. Las ocho páginas se generan como HTML estático en `dist/` para Cloudflare Pages.

## Desarrollo

Requiere Bun 1.3.14 o superior.

```sh
bun install --frozen-lockfile
bun run dev
bun run dev:status
bun run dev:logs
bun run dev:stop
```

El servidor de desarrollo se inicia en segundo plano, según `AGENTS.md`.

## Validación y publicación

```sh
bun run check
bun run build
bun run preview
bun run deploy
```

La publicación requiere una sesión de Wrangler autenticada o las variables `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID`. `bun run deploy` compila y ejecuta `bunx --bun wrangler pages deploy dist --project-name=proyectotgs`.

La revisión visual se realiza manualmente en Zen Browser, incluyendo escritorio, móvil, navegación con teclado y preferencia de movimiento reducido.

## Estructura

- `src/data/info.ts`: contenido académico y enlaces compartidos.
- `src/pages/`: rutas y páginas de los temas.
- `src/layouts/StudyLayout.astro`: documento y navegación comunes.
- `src/components/`: diagramas, fundamentos y pie de página reutilizables.
- `src/styles/theme.css`: tipografía local, colores y estilos base.
- `src/styles/navigation.css`, `home.css`, `study.css`, `footer.css`: estilos por responsabilidad.
- `src/styles/styles.css`: importaciones, interacción y adaptaciones de pantalla e impresión.
- `src/scripts/effects.ts`: animaciones progresivas que respetan movimiento reducido.
- `public/`: imágenes y documentos originales del proyecto.

Manrope se sirve localmente como una única fuente variable WOFF2 para caracteres latinos. El sitio conserva CSS nativo y no requiere un framework de interfaz en el navegador. `@astrojs/check` y TypeScript son dependencias de desarrollo; `bun.lock` debe permanecer versionado.
