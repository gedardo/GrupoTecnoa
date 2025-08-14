import { useState } from 'react';
import { services } from '../../data/services';
import Card from '../ui/Card';
import AnimatedElement from '../ui/AnimatedElement';

type ServiceCategory = 'all' | 'web' | 'infrastructure' | 'support';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Desarrollo Web & Apps' },
    { id: 'infrastructure', label: 'Infraestructura' },
    { id: 'support', label: 'Soporte & Formación' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="servicios" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container-section">
        <AnimatedElement animation="fade-in-up">
          <h2 className="section-title text-gray-900 dark:text-white">
            Nuestros Servicios
          </h2>
          <p className="section-subtitle">
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio en la era digital.
            Nuestro equipo de expertos está listo para ayudarte a alcanzar tus objetivos.
          </p>
        </AnimatedElement>

        {/* Category filters */}
        <AnimatedElement 
          animation="fade-in-up" 
          delay={0.2}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory(category.id as ServiceCategory)}
            >
              {category.label}
            </button>
          ))}
        </AnimatedElement>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <AnimatedElement 
              key={service.id} 
              animation="fade-in-up" 
              delay={0.1 * (index % 3)}
            >
              <Card hoverable className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>
 
                </div>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;