export interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  category: 'web' | 'app' | 'marketing' | 'infrastructure';
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
}
import ecom from '../assets/sonotech.png'
import logist from '../assets/nachowood.png'
import mark from '../assets/radio360.png'
import infra from '../assets/infra.webp'
import edu from '../assets/invsys.png'
import hospit from '../assets/ssigma.png'

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Plataforma Web E-commerce',
    client: 'Sonotech',
    category: 'app',
    image: ecom,
    description: 'Desarrollo de una plataforma de e-commerce completa con múltiples métodos de pago y gestión de inventario.',
    challenge: 'Crear una solución escalable capaz de gestionar miles de productos y transacciones simultáneas con tiempos de carga mínimos.',
    solution: 'Implementamos una arquitectura distribuida con microservicios y bases de datos optimizadas para consultas frecuentes y rápidas.',
    results: 'Aumento del 45% en conversiones y reducción del 60% en el tiempo de carga de páginas comparado con su plataforma anterior.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS']
  },
  {
    id: 2,
    title: 'Aplicación de Gestión Logística',
    client: 'Nachowood',
    category: 'app',
    image: logist,
    description: 'Aplicación móvil para gestión de flotas, seguimiento de envíos y optimización de rutas en tiempo real.',
    challenge: 'Desarrollar una solución que funcionara en áreas con conectividad limitada y permitiera el seguimiento preciso de vehículos.',
    solution: 'Creamos una app híbrida con modo offline y sincronización inteligente, integrada con servicios de geolocalización avanzados.',
    results: 'Reducción del 28% en costos operativos y aumento del 35% en la eficiencia de las entregas tras 6 meses de implementación.',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Node.js']
  },
  {
    id: 3,
    title: 'Campaña Digital Multicanal',
    client: 'Radio360',
    category: 'web',
    image: mark,
    description: 'Estrategia integral de marketing digital para el lanzamiento de una nueva línea de productos orgánicos.',
    challenge: 'Posicionar una nueva marca en un mercado altamente competitivo con un presupuesto limitado.',
    solution: 'Diseñamos una estrategia multicanal con contenido segmentado, influencers estratégicos y campañas de PPC optimizadas.',
    results: 'Alcance de 2 millones de usuarios, 150% de ROI en campañas publicitarias y agotamiento del stock inicial en 3 semanas.',
    technologies: ['Google Ads', 'Meta Ads', 'Mailchimp', 'HubSpot', 'Google Analytics']
  },
  {
    id: 4,
    title: 'Infraestructura Cloud para FinTech',
    client: 'FinSecure',
    category: 'infrastructure',
    image: infra,
    description: 'Migración y diseño de infraestructura cloud para una empresa de servicios financieros con altos requisitos de seguridad.',
    challenge: 'Migrar sistemas críticos a la nube manteniendo los estándares de seguridad del sector financiero y con cero tiempo de inactividad.',
    solution: 'Implementamos una arquitectura híbrida con encriptación avanzada, autenticación multifactor y sistemas de respaldo redundantes.',
    results: 'Reducción del 40% en costos de infraestructura, mejora en tiempos de respuesta y cumplimiento de normativas PCI DSS e ISO 27001.',
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Vault', 'ELK Stack']
  },
  {
    id: 5,
    title: 'Portal Educativo Interactivo',
    client: 'InvSys',
    category: 'web',
    image: edu,
    description: 'Plataforma de e-learning con contenido interactivo, evaluaciones automáticas y seguimiento personalizado de estudiantes.',
    challenge: 'Crear una experiencia de aprendizaje digital atractiva y efectiva para estudiantes de diferentes niveles educativos.',
    solution: 'Desarrollamos un sistema con contenido adaptativo, gamificación y análisis de progreso basado en inteligencia artificial.',
    results: 'Incremento del 65% en la participación estudiantil y mejora del 25% en los resultados académicos en los centros piloto.',
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'TensorFlow']
  },
  {
    id: 6,
    title: 'Sistema de Gestión Hospitalaria',
    client: 'Ssigma',
    category: 'web',
    image: hospit,
    description: 'Software integral para la gestión de procesos hospitalarios, historias clínicas electrónicas y programación de citas.',
    challenge: 'Unificar sistemas dispares en una solución integrada que cumpliera con regulaciones de protección de datos sanitarios.',
    solution: 'Creamos una plataforma modular con alta seguridad, acceso basado en roles y compatibilidad con estándares internacionales.',
    results: 'Reducción del 70% en tiempo administrativo y eliminación completa de errores en la gestión de historias clínicas y medicamentos.',
    technologies: ['Angular', 'Java Spring', 'Oracle', 'FHIR', 'Docker']
  }
];