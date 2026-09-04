---
slug: trombon-en-el-folclor-colombiano
title: El Trombón en el Folclor Colombiano
description: Sitio web bilingüe que acompaña un proyecto de grado en música sobre el aporte del trombón al folclor colombiano, con contenido administrable desde un CMS headless.
tag: Full Stack
stack:
  - Next.js
  - TypeScript
  - TailwindCSS
  - Strapi
  - Netlify
# TODO: TEMPLATE-IMAGE portada real del proyecto (16:9, con la marca centrada)
image: https://placehold.co/1280x720
imageAlt: Portada del sitio El Trombón en el Folclor Colombiano
date: 25-09-2025
demo_url: https://cristiantrombonista.netlify.app
---

### Mi rol
Como desarrollador Fullstack, llevé el sitio de punta a punta: definí la arquitectura del proyecto, desarrollé el frontend en Next.js, monté el CMS en Strapi para que el músico pudiera administrar la galería por su cuenta, implementé la internacionalización español/inglés sin librerías externas y me encargué del despliegue. La investigación y la obra musical son de Cristian Rios; todo el desarrollo web es mío.

### Problema base
Cristian Rios necesitaba presentar su proyecto de grado en música —una investigación sobre el aporte del trombón al folclor colombiano junto a una suite original de tres movimientos— ante jurados, colegas y potenciales empleadores. Un PDF no permitía escuchar las grabaciones ni leer las partituras en contexto, y al ser un trombonista que busca oportunidades fuera de Colombia, necesitaba que el material fuera accesible también en inglés. Además, cualquier cambio en el material de la galería no podía depender de que un desarrollador tocara el código.

### Impacto logrado
* Carta de presentación profesional: la investigación, la hoja de vida y la obra quedan en una URL que puede compartir en audiciones, convocatorias y postulaciones.
* Alcance internacional: el sitio resuelve el idioma automáticamente según el navegador del visitante, lo que le abre la puerta a jurados y contactos que no hablan español.
* Autonomía del cliente: puede subir, cambiar o quitar fotos y videos de la galería desde el panel de Strapi, sin redeploy ni intervención mía.
* Experiencia completa del proyecto de grado: en una misma página se lee la investigación, se escucha cada movimiento de la suite y se descargan las partituras.

### Imágenes
<!-- TODO: Insertar imágenes -->

### Funcionalidades clave del proyecto
* Sitio bilingüe español/inglés con detección automática de idioma: un middleware propio resuelve el locale a partir del `Accept-Language` y del `referer`, y redirige a `/es` o `/en`. Sin librerías de i18n: diccionarios JSON planos y rutas generadas estáticamente.
* Recorrido por cuatro ritmos tradicionales —cumbia, currulao, pasillo y joropo— con una sección dedicada a cada uno y una identidad visual propia por ritmo.
* Reproductor de audio y visor de partituras para los tres movimientos de la suite original (*Confusión*, *Conciencia* y *Renacer*), con los PDFs disponibles para descarga.
* Galería administrable desde Strapi: el content-type acepta fotos y videos en una dynamic zone y está localizado, así que cada idioma tiene su propio título y descripción.
* Renderizado híbrido: todas las páginas de contenido se pre-renderizan en build time; la galería es la única `force-dynamic`, porque su contenido cambia desde el CMS sin pasar por un redeploy.
* Reintentos con backoff exponencial en la capa de datos: el plan gratuito de Strapi suspende la instancia sin tráfico, así que la primera petición tras un período de inactividad suele fallar. La capa distingue errores transitorios (5xx, 429) de permanentes (400, 401, 404) y solo reintenta los primeros, hasta 3 veces. El usuario ve un skeleton en lugar de un error.
* Capa de datos server-only: el acceso a Strapi vive bajo `"use server"` y el token de API se inyecta en el fetch del servidor, por lo que nunca llega al bundle del cliente. El token se genera con permisos de solo lectura.

### Tecnologías
| Tecnología | Uso / Implementación |
| --- | --- |
| Next.js 15 (App Router) | Framework principal: rutas internacionalizadas, renderizado estático por defecto y dinámico donde hace falta |
| React 19 | Componentes de la interfaz y las partes interactivas (reproductor, galería, visor de PDF) |
| TypeScript | Tipado de la capa de datos, los content-types de Strapi y los componentes |
| Tailwind CSS | Estilos, diseño responsive y animaciones |
| shadcn/ui + Radix UI | Componentes base accesibles: diálogos, selects, badges y skeletons |
| Strapi 5 (Strapi Cloud) | CMS headless para que el cliente administre la galería, con contenido localizado es/en |
| Middleware de Next.js | Internacionalización propia: resolución de locale y redirección a `/es` o `/en` |
| Netlify | Hosting y despliegue continuo del frontend |
