export interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  category: "web" | "app" | "marketing" | "infrastructure";
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
}
import ecom from "../assets/sonotech.webp";
import logist from "../assets/nachowood.webp";
import mark from "../assets/radio360.webp";
import infra from "../assets/infra.webp";
import edu from "../assets/invsys.webp";
import hospit from "../assets/ssigma.webp";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Plataforma Web E-commerce",
    client: "Sonotech",
    category: "app",
    image: ecom,
    description:
      "Desarrollo de una plataforma de e-commerce enfocada en la venta de equipos y soluciones de tecnología audiovisual, con integración de múltiples métodos de pago y gestión avanzada de inventario especializado.",
    challenge:
      "Diseñar una solución escalable que pueda administrar un extenso catálogo de productos audiovisuales, gestionar transacciones simultáneas y mantener una experiencia de navegación fluida con tiempos de carga mínimos.",
    solution:
      "Se implementó una arquitectura distribuida basada en microservicios, junto con bases de datos optimizadas para consultas frecuentes y rápidas, permitiendo una gestión eficiente del inventario audiovisual y de las operaciones de compra.",
    results:
      "Incremento del 45% en la tasa de conversión y una reducción del 60% en los tiempos de carga en comparación con la plataforma anterior, mejorando la experiencia de compra de clientes profesionales y entusiastas de la tecnología audiovisual.",
    technologies: ["React", "Supabase", "Google Maps API", "Node.js"],
  },
  {
    id: 2,
    title: "Carpinteria de Diseño",
    client: "Nachowood",
    category: "web",
    image: logist,
    description:
      "Desarrollo de una plataforma web para una carpintería de diseño enfocada en la creación y venta de muebles elegantes y exclusivos, con un catálogo digital de piezas personalizadas y sistema de pedidos en línea.",
    challenge:
      "Transmitir la esencia artesanal y de diseño único de cada mueble en un entorno digital, asegurando una experiencia de usuario fluida que permita explorar colecciones, personalizar piezas y gestionar pedidos de forma sencilla.",
    solution:
      "Se diseñó una plataforma visualmente atractiva y minimalista, optimizada para mostrar imágenes en alta calidad de los muebles, con integración de un sistema de personalización, gestión de pedidos y pagos seguros.",
    results:
      "Incremento del 50% en solicitudes de presupuesto y un 40% más de ventas online, logrando reflejar el valor del diseño exclusivo y la calidad artesanal en un entorno digital moderno y funcional.",
    technologies: ["React", "Supabase", "Google Maps API", "Odoo", "Node.js"],
  },
  {
    id: 3,
    title: "Radio Stream y Podcast",
    client: "Radio360",
    category: "web",
    image: mark,
    description:
      "Desarrollo de una plataforma web para una radio online dedicada a la transmisión en vivo de programas y la distribución de pódcast de producción local, con un diseño moderno y accesible desde cualquier dispositivo.",
    challenge:
      "Crear un espacio digital que integre transmisión en streaming de alta calidad, gestión de una parrilla variada de programas y la posibilidad de acceder bajo demanda a pódcast locales, todo con una experiencia de usuario intuitiva.",
    solution:
      "Se implementó una plataforma optimizada para streaming en tiempo real, con reproductor integrado, secciones dinámicas para programas en vivo y un catálogo de pódcast organizados por categorías, además de integración con redes sociales para ampliar el alcance.",
    results:
      "Incremento del 70% en la audiencia online y mayor visibilidad para productores locales, consolidando a la radio como un referente digital en la difusión de contenidos culturales y comunitarios.",
    technologies: [
      "Google Ads",
      "Meta Ads",
      "Mailchimp",
      "HubSpot",
      "Google Analytics",
    ],
  },
  {
    id: 4,
    title: "Infraestructura Cloud para FinTech",
    client: "FinSecure",
    category: "infrastructure",
    image: infra,
    description:
      "Migración y diseño de infraestructura cloud para una empresa de servicios financieros con altos requisitos de seguridad.",
    challenge:
      "Migrar sistemas críticos a la nube manteniendo los estándares de seguridad del sector financiero y con cero tiempo de inactividad.",
    solution:
      "Implementamos una arquitectura híbrida con encriptación avanzada, autenticación multifactor y sistemas de respaldo redundantes.",
    results:
      "Reducción del 40% en costos de infraestructura, mejora en tiempos de respuesta y cumplimiento de normativas PCI DSS e ISO 27001.",
    technologies: ["AWS", "Kubernetes", "Terraform", "Vault", "ELK Stack"],
  },
  {
    id: 5,
    title: "Sistema de Stock y Gestión de Inventario",
    client: "InvSys",
    category: "web",
    image: edu,
    description:
      "Desarrollo de un sistema integral de stock y gestión de inventario diseñado para optimizar el control de productos, automatizar procesos de entrada y salida, y facilitar la trazabilidad en tiempo real.",
    challenge:
      "Implementar una solución capaz de manejar grandes volúmenes de productos, con actualizaciones instantáneas de stock y reportes precisos para la toma de decisiones estratégicas.",
    solution:
      "Se desarrolló una plataforma con arquitectura modular que incluye control de inventario en tiempo real, generación automática de reportes, alertas de stock mínimo y funcionalidades de integración con sistemas de venta y logística.",
    results:
      "Reducción del 55% en errores de control de inventario y una optimización del 40% en la eficiencia operativa, permitiendo una gestión más ágil, precisa y confiable de los recursos.",
    technologies: ["React Native", "Python", "Django", "MongoDB", "TensorFlow"],
  },
  {
    id: 6,
    title: "Servicios de Seguridad",
    client: "Ssigma",
    category: "web",
    image: hospit,
    description:
      "Desarrollo de una plataforma web para una empresa de servicios de seguridad y tecnología, especializada en la instalación de cámaras de vigilancia, sistemas de control de acceso, alarmas y soluciones de conectividad como internet satelital.",
    challenge:
      "Diseñar un sitio que comunique confianza y profesionalismo, capaz de presentar la amplia gama de servicios de seguridad e instalación tecnológica, facilitando tanto la solicitud de presupuestos como el contacto directo con clientes.",
    solution:
      "Se creó una plataforma moderna y responsiva, con secciones claras para cada servicio, testimonios de clientes, integración de formularios de contacto, y un diseño visual que transmite solidez y seguridad. Además, se optimizó para posicionamiento en buscadores y dispositivos móviles.",
    results:
      "Aumento del 60% en consultas comerciales online y un 45% más de conversiones de clientes potenciales, consolidando la presencia digital de la empresa como referente en soluciones de seguridad y conectividad.",
    technologies: ["React", "Supabase", "Google Maps API", "Node.js", "Docker"],
  },
];
