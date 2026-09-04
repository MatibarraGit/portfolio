---
slug: catalogo-online-pritia
title: Catálogo Online de Pritia
description: Catálogo online autogestionable para una tienda de electrodomésticos y artículos del hogar, con panel de administración de productos y publicación inmediata.
tag: Full Stack
stack:
  - NextJS
  - TailwindCSS
  - PostgreSQL
  - Vercel
  - Mercado Pago API
# TODO: TEMPLATE-IMAGE portada real del proyecto (16:9, con la marca centrada)
image: https://placehold.co/1280x720
imageAlt: Portada del catálogo online de Pritia
date: 10-03-2026
featured: true
---

### Mi rol
Como desarrollador Fullstack, trabajé el sitio de punta a punta: diseñé y creé la base de datos, la interfaz de usuario y el panel de administración para la autogestión del catálogo; y realicé las integraciones clave, como la financiación con tarjetas de crédito utilizando Mercado Pago, para adaptar el proyecto a la lógica de negocio de la tienda. 

### Problema base
El negocio estaba creciendo en su zona, pero no tenía presencia online sólida, lo que generaba desconfianza y los hacía perder ventas y alcance.

### Impacto logrado
* Mayor alcance: los clientes ahora encuentran la tienda a través de los buscadores.
* Seguridad: demuestran que son un emprendimiento serio y eso les facilita el cierre de las ventas.
* Automatización del proceso de venta: ya no tienen que responder mensajes repetidos de WhatsApp o preguntas sobre detalles de los productos, los clientes resuelven todo desde la web, más rápido y sin fricción, mientras los dueños se enfocan en otras tareas.

### Imágenes
<!-- TODO: Insertar imágenes -->

### Funcionalidades clave del proyecto
* Panel de administración para la autogestión de productos del catálogo.
* Cierre de ventas por WhatsApp: el cliente trabaja por pedido, por lo que no contaba con stock de los productos. Cerrar las ventas por WhatsApp le permitía ahorrar tiempo en cambios o reembolsos en caso de que no haya más stock del producto pedido.
* Automatización de envío y carga de productos: se desarrolló una automatización en la que el cliente envía todos los productos que sus proveedores le envían por WhatsApp hacia un chat de productos, y estos se cargan automáticamente en la página web.
* Se integró la API de Mercado Pago para consultar la financiación en cuotas para cada producto de acuerdo a su precio, permitiendo calcular el interés de las mismas, el precio de lista, las cuotas sin interés (si aplica), y la financiación según el banco emisor de la tarjeta.

### Tecnologías
| Tecnología | Uso / Implementación |
| --- | --- |
| Next.js | Framework principal: desarrollo de la lógica del frontend y backend |
| Tailwind CSS | Estilos, diseño, animaciones y transiciones |
| Cloudinary | Nube para guardar imágenes de los productos |
| API de Mercado Pago | Integración para obtener financiación en cuotas y bancos emisores |
| BetterAuth | Autenticación y autorización para usuarios admnistrativos |
| PostgreSQL | Base de datos donde se almacena toda la información de los productos, usuarios administrativos, categorías, proveedores, entre otros |
| n8n | Plataforma de automatización para la carga de productos a la página y el envío de productos con la información estructurada desde la web hacia números de WhatsApp |