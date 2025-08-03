export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    position: 'Director de Operaciones',
    company: 'MercadoFácil',
    quote: 'La plataforma que desarrolló Grupo Tecnoa transformó completamente nuestra operación de e-commerce. El aumento en ventas superó todas nuestras expectativas y la estabilidad del sistema es impresionante.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Laura Martínez',
    position: 'CEO',
    company: 'TransporTech',
    quote: 'La aplicación de gestión logística ha sido un cambio radical para nuestra empresa. La visibilidad en tiempo real de toda nuestra flota nos permite tomar decisiones más inteligentes y ofrecer un mejor servicio a nuestros clientes.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Miguel Sánchez',
    position: 'Director de Marketing',
    company: 'NutriBio',
    quote: 'El equipo de Grupo Tecnoa entendió perfectamente nuestras necesidades. La estrategia de marketing digital que diseñaron no solo generó ventas inmediatas, sino que construyó una comunidad fiel alrededor de nuestra marca.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Ana Gómez',
    position: 'CTO',
    company: 'FinSecure',
    quote: 'La migración a la infraestructura cloud diseñada por Grupo Tecnoa fue impecable. Cumplimos con todos los requisitos regulatorios del sector financiero y además logramos una reducción significativa en costos operativos.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];