import { 
  Globe, 
  Code, 
  LineChart, 
  FileSearch, 
  Wifi, 
  ShieldCheck, 
  Server, 
  Cloud,
  Laptop,
  Users,
  HeartHandshake,
  Clock
} from 'lucide-react';

export interface Service {
  id: number;
  icon: typeof Globe;
  title: string;
  description: string;
  category: 'web' | 'infrastructure' | 'support';
}

export const services: Service[] = [
  {
    id: 1,
    icon: Globe,
    title: 'Desarrollo Web',
    description: 'Creamos sitios web y aplicaciones a medida con diseño responsivo, optimizados para SEO y con excelente experiencia de usuario.',
    category: 'web'
  },
  {
    id: 2,
    icon: Code,
    title: 'Aplicaciones Móviles',
    description: 'Desarrollamos apps nativas e híbridas para iOS y Android, con interfaces intuitivas y funcionalidades a medida para tu negocio.',
    category: 'web'
  },
  {
    id: 3,
    icon: Wifi,
    title: 'Redes Corporativas',
    description: 'Diseñamos e implementamos infraestructuras de red seguras, escalables y de alto rendimiento para entornos empresariales.',
    category: 'infrastructure'
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Seguridad Informática',
    description: 'Protegemos tu negocio con soluciones de ciberseguridad avanzadas, auditorías de seguridad y planes de recuperación ante desastres.',
    category: 'infrastructure'
  },
  {
    id: 5,
    icon: Server,
    title: 'Servidores y Hosting',
    description: 'Ofrecemos servicios de alojamiento optimizados, administración de servidores y soluciones de almacenamiento en la nube.',
    category: 'infrastructure'
  },
  {
    id: 6,
    icon: Cloud,
    title: 'Soluciones Cloud',
    description: 'Migramos tu infraestructura a la nube para mejorar la escalabilidad, reducir costos y aumentar la eficiencia operativa.',
    category: 'infrastructure'
  },
  {
    id: 7,
    icon: Laptop,
    title: 'Soporte Técnico',
    description: 'Brindamos asistencia remota y presencial para resolver incidencias y mantener tus sistemas funcionando sin interrupciones.',
    category: 'support'
  },
  {
    id: 8,
    icon: Users,
    title: 'Capacitación',
    description: 'Formamos a tu equipo con talleres y cursos personalizados sobre las últimas tecnologías y mejores prácticas del sector.',
    category: 'support'
  },
  {
    id: 9,
    icon: HeartHandshake,
    title: 'Consultoría IT',
    description: 'Asesoramos en la planificación estratégica de tecnología para alinear tus recursos informáticos con los objetivos de negocio.',
    category: 'support'
  },
  {
    id: 10,
    icon: Clock,
    title: 'Mantenimiento Preventivo',
    description: 'Realizamos revisiones periódicas de tus sistemas para prevenir fallos y asegurar un funcionamiento óptimo continuo.',
    category: 'support'
  }
];