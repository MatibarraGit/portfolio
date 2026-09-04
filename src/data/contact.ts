import { CONTACT_METHODS, WHATSAPP_URL } from "./site";

export const CONTACT_SECTION = {
  id: "contacto",
  title: "Contacto",
  intro:
    "Contame en dos líneas qué necesitás y te respondo dentro del día hábil. Si preferís hablar, WhatsApp es lo más rápido.",
};

/**
 * El sitio se compila estático, así que el formulario necesita un servicio
 * externo que reciba el POST (Formspree, Web3Forms, Basin, etc.).
 * Mientras `endpoint` esté vacío, el submit arma un mail prellenado y abre el
 * cliente de correo del visitante, así el formulario nunca queda muerto.
 */
// TODO: TEMPLATE-FORM pegar la URL del servicio de formularios
export const CONTACT_FORM = {
  endpoint: "",
  fields: {
    name: {
      name: "nombre",
      label: "Nombre",
      placeholder: "Cómo te llamás",
      autocomplete: "name",
      maxlength: 80,
    },
    email: {
      name: "email",
      label: "Email",
      placeholder: "tu@email.com",
      autocomplete: "email",
      maxlength: 120,
    },
    message: {
      name: "mensaje",
      label: "Sobre tu proyecto",
      placeholder: "Qué necesitás, para cuándo y, si lo tenés definido, con qué presupuesto.",
      maxlength: 1000,
    },
  },
  submit: { idle: "Enviar mensaje", sending: "Enviando…" },
  status: {
    success: "¡Listo! Recibí tu mensaje y te respondo dentro del día hábil.",
    error: "No se pudo enviar. Escribime por WhatsApp o a mi mail y lo resolvemos.",
    mailto: "Te abrí el mail con el mensaje cargado. Solo falta que lo envíes.",
  },
};

export const CONTACT_DIRECT = {
  title: "O escribime directo",
  description: "Sin formularios de por medio, respondo yo.",
  whatsapp: {
    href: WHATSAPP_URL,
    label: "WhatsApp",
    detail: CONTACT_METHODS.whatsappDisplay,
  },
  email: {
    href: `mailto:${CONTACT_METHODS.email}`,
    label: "Email",
    detail: CONTACT_METHODS.email,
  },
  linkedin: {
    href: CONTACT_METHODS.linkedin,
    label: "LinkedIn",
    detail: "Matías Ibarra",
  },
};
