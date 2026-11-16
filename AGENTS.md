# Contexto y Estructura del Proyecto

Este repositorio es mi página web personal y portfolio (`https://JanHernandezLlobet.github.io`), desarrollada con **Astro** (generación estática) y desplegada automáticamente en **GitHub Pages** mediante **GitHub Actions**.

## Arquitectura y Carpetas
- `src/layouts/Layout.astro`: Plantilla maestra HTML (`<html>`, `<head>`, estilos globales mínimos). Envuelve el contenido de todas las páginas mediante `<slot />` e incluye `Navbar` y `Footer`.
- `src/components/`: Componentes reutilizables y autocontenidos:
  - `Navbar.astro`: Navegación superior con detección automática de ruta activa (`Astro.url.pathname`).
  - `Footer.astro`: Pie de página con año dinámico y enlace a GitHub.
  - `ProjectCard.astro`: Tarjeta tipada con TypeScript (`interface Props`) para mostrar proyectos (título, descripción, etiquetas tecnológicas, enlaces opcionales a repo y demo/paper, año).
- `src/pages/`: Enrutamiento basado en archivos (`index.astro`, `proyectos.astro`, etc.). Todas las páginas deben importar y usar `<Layout>`.
- `public/`: Recursos estáticos directos (favicon, PDFs, imágenes sin procesar). No debe contener ningún `index.html` estático para no sobrescribir `src/pages/index.astro`.
- `.github/workflows/deploy.yml`: Pipeline de CI/CD configurado con `withastro/action@v3` sobre **Node.js 24** (`node-version: 24`), control de concurrencia y despliegue a `github-pages`.

## Convenciones de Código y Estilo
1. **Astro Nativo y Cero JS Innecesario:** Prioriza componentes `.astro` estáticos y CSS nativo con alcance local (*scoped* `<style>`). No instales frameworks UI pesados (React/Vue) ni librerías externas salvo que se solicite explícitamente para una isla interactiva concreta.
2. **Tipado Estricto:** Define siempre `interface Props` en el frontmatter (`---`) de los componentes que reciban propiedades.
3. **Diseño Limpio y Responsivo:** Mantén la paleta visual minimalista actual (fondos claros `#ffffff` / `#f3f4f6`, texto oscuro `#111827` / `#4b5563`, acentos en azul `#2563eb` y verde `#059669`, tipografía `system-ui` y `monospace` para metadatos/etiquetas). Usa CSS Grid/Flexbox responsivo (`auto-fill`, `minmax`) sin depender de frameworks CSS externos.
4. **Datos Desacoplados:** Mantén los listados (proyectos, artículos, experiencia) estructurados como arrays de objetos en el frontmatter o mediante Astro Content Collections (Markdown/MDX), iterando sobre ellos con `.map()` en lugar de duplicar bloques HTML.
5. **Idioma:** El contenido visible y comentarios principales van en español (con posible soporte futuro para francés e inglés).

## Flujo de Trabajo y Verificación
- Antes de dar por terminada cualquier modificación estructural o de configuración, verifica que el proyecto compila sin errores ejecutando `npm run build`.
- No modifiques `.github/workflows/deploy.yml` (especialmente `node-version: 24` y `permissions`) salvo que sea estrictamente necesario para el despliegue.
