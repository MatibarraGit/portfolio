import type { IconName } from "../types";

export interface Service {
  /** Se usa como `key` y como ancla si algún día cada servicio tiene detalle propio */
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

export const SERVICES_SECTION = {
  id: "servicios",
  title: "Servicios",
  intro: "Cuatro frentes de trabajo que cubren el ciclo completo de un producto web: de la primera pantalla al proceso automatizado que corre solo.",
};

export const SERVICES: Service[] = [
  {
    id: "apps-saas",
    icon: "dashboard",
    title: "Aplicaciones web y SaaS",
    description:
      "Paneles de gestión, dashboards, sistemas internos y productos SaaS completos. Pensados para escalar y fáciles de mantener.",
  },
  {
    id: "sitios-ecommerce",
    icon: "storefront",
    title: "Sitios, landings y e-commerce",
    description:
      "Webs institucionales, landings que convierten y tiendas online rápidas. Optimizadas para velocidad y posicionamiento.",
  },
  {
    id: "backend-apis",
    icon: "server",
    title: "Backend, APIs e integraciones",
    description:
      "APIs robustas, integración con servicios de terceros, pasarelas de pago y arquitectura de datos sólida.",
  },
  {
    id: "automatizacion-ia",
    icon: "spark",
    title: "Automatización e IA",
    description:
      "Automatización de procesos repetitivos, bots e integración de modelos de IA en tus flujos de trabajo.",
  },
];
