// ---- Configuración SEO ----
export const SITE_URL = "https://matiasibarra.github.io"
export const TITLE = "Matías Ibarra | Desarrollador Web Freelance"
export const DESCRIPTION = ""

export const SEO_CONFIG = {
  applicationName: "Portfolio Matías Ibarra",
  creator: "Matías Ibarra",
  authors: [ { name: 'Matías Ibarra', url: 'https://pritia.com.ar' } ],

  icons: {
    icon: "", // icon.png 32x32 o 48x48
    shortcut: "", // favicon.ico
    apple: "", // apple-touch-icon.png 180x180
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  },
  keywords: [
    "Desarrollo Web",
    "Tienda Online",
    "Ecommerce",
    "e-commerce",
    "Web",
    "Programador",
    "Software",
    "Freelance",
    "Buenos Aires",
    "Argentina",
    "Matías Ibarra",
  ],

  openGraph: {
    title: "Matías Ibarra | Desarrollador Web Freelance",
    description: "",
    siteName: "Desarrollador Web Freelance",
    images: [
      {
        url: "", // Imagen en cloundinary
        width: 1200,
        height: 630,
        alt: "Foto Matías Ibarra o Logo",
        type: "image/png",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Matías Ibarra | Desarrollador Web Freelance",
    description: "",
    images: [""], // Imagen en cloundinary
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    }
  }
}

// ---- Métodos de contacto ----
export const CONTACT_METHODS = {
  email: "matiaibarr43@gmail.com",
  whatsapp: 5491131738925,
  whatsappDisplay: "+54 9 11 3173-8925",
  linkedin: "https://www.linkedin.com/in/mat%C3%ADas-ibarra-86b284412/",
}

// ---- Secciones a las que apunta la navegación del header (y el scroll suave) ----
export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

// ---- Enlaces externos ----
// TODO: TEMPLATE-LINK completar el usuario de GitHub
export const SOCIAL_LINKS = {
  github: "https://github.com/",
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT_METHODS.whatsapp}?text=${encodeURIComponent(
  "Hola Matías, te escribo desde tu portfolio."
)}`;

// ---- Hero ----
export const HERO = {
  name: "Matías Ibarra",
  role: "Desarrollador Web Freelance",
  greeting: "Hola, soy",
  // TODO: TEMPLATE-COPY escribir el pitch real
  pitch:
    "Lorem ipsum: construyo sitios y tiendas online que venden. Diseño, desarrollo y mantengo la web de tu negocio de punta a punta, sin vueltas y con foco en resultados.",
  avatar: {
    // TODO: TEMPLATE-IMAGE reemplazar por la foto real (ideal 512x512, .webp)
    src: "https://placehold.co/512x512",
    alt: "Foto de Matías Ibarra",
  },
  primaryCta: { href: "#contacto", label: "Hablemos sobre tu proyecto" },
  whatsappUrl: WHATSAPP_URL,
  scrollCue: { href: "#servicios", label: "Servicios" },
};
