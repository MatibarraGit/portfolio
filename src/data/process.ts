import type { IconName } from "../types";

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  /** Plazo o duración típica del paso. Se muestra como dato al costado del título */
  timing: string;
}

export interface ProcessNote {
  icon: IconName;
  title: string;
  items: string[];
}

export const PROCESS_SECTION = {
  id: "proceso",
  title: "Cómo trabajamos",
  intro:
    "Antes de escribirme conviene saber qué pasa después. Este es el recorrido de punta a punta, con los plazos que manejo habitualmente.",
};

// TODO: TEMPLATE-COPY ajustar plazos y condiciones a lo que realmente ofrecés
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "consulta",
    title: "Consulta inicial",
    description:
      "Una charla de 30 minutos por WhatsApp o videollamada, sin costo y sin compromiso. Me contás qué necesitás y qué problema querés resolver; si no soy la persona indicada, te lo digo ahí mismo.",
    timing: "Sin costo",
  },
  {
    id: "propuesta",
    title: "Propuesta y presupuesto",
    description:
      "Te mando el alcance por escrito: qué incluye, qué no incluye, precio cerrado y fecha de entrega. Si el proyecto es grande, lo parto en etapas para que puedas arrancar por lo más urgente.",
    timing: "48 a 72 hs",
  },
  {
    id: "desarrollo",
    title: "Desarrollo con entregas parciales",
    description:
      "Trabajo por bloques y cada bloque se publica en un enlace de prueba que podés abrir cuando quieras. Ves el avance real desde la primera semana, no una sorpresa al final.",
    timing: "1 a 6 semanas",
  },
  {
    id: "entrega",
    title: "Entrega y acompañamiento",
    description:
      "Publicación, dominio, mediciones y una sesión para que sepas manejar lo tuyo. Después quedan 30 días de soporte incluido para ajustes y correcciones.",
    timing: "+30 días",
  },
];

export const PROCESS_NOTES: ProcessNote[] = [
  {
    icon: "chat",
    title: "Comunicación",
    items: [
      "Un canal directo conmigo: WhatsApp o mail, sin intermediarios.",
      "Respondo dentro del día hábil.",
      "Un resumen de avance por semana, aunque no preguntes.",
    ],
  },
  {
    icon: "clock",
    title: "Tiempos habituales",
    items: [
      "Landing page: 1 a 2 semanas.",
      "Sitio institucional o e-commerce: 3 a 5 semanas.",
      "Aplicación a medida: desde 6 semanas, por etapas.",
    ],
  },
];
