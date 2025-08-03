import { useState } from 'react';
import { X } from 'lucide-react';
import { portfolioItems } from '../../data/portfolio';
import Card from '../ui/Card';
import AnimatedElement from '../ui/AnimatedElement';

type PortfolioCategory = 'all' | 'web' | 'app' | 'marketing' | 'infrastructure';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Desarrollo Web' },
    { id: 'app', label: 'Aplicaciones' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'infrastructure', label: 'Infraestructura' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portafolio" className="bg-white dark:bg-gray-800 py-20">
      <div className="container-section">
        <AnimatedElement animation="fade-in-up">
          <h2 className="section-title text-gray-900 dark:text-white">
            Nuestro Portafolio
          </h2>
          <p className="section-subtitle">
            Explora algunos de nuestros proyectos más destacados y descubre cómo hemos ayudado a empresas
            de diversos sectores a alcanzar sus objetivos tecnológicos.
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
              onClick={() => setActiveCategory(category.id as PortfolioCategory)}
            >
              {category.label}
            </button>
          ))}
        </AnimatedElement>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <AnimatedElement 
              key={item.id} 
              animation="fade-in-up" 
              delay={0.1 * (index % 3)}
              className="h-full"
            >
              <Card hoverable className="h-full group overflow-hidden" onClick={() => setSelectedItem(item.id)}>
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-primary-600 px-2 py-1 rounded-full">
                      {item.category === 'web' ? 'Desarrollo Web' :
                      item.category === 'app' ? 'Aplicaciones' :
                      item.category === 'marketing' ? 'Marketing' : 'Infraestructura'}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm mt-1">{item.client}</p>
                  </div>
                </div>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* Project Modal */}
        {selectedItem !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
              
              {/* Modal content */}
              {portfolioItems.find(item => item.id === selectedItem) && (
                <div>
                  {/* Image */}
                  <img 
                    src={portfolioItems.find(item => item.id === selectedItem)?.image} 
                    alt={portfolioItems.find(item => item.id === selectedItem)?.title}
                    className="w-full h-64 object-cover object-center"
                  />
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider bg-primary-600 text-white px-2 py-1 rounded-full">
                        {portfolioItems.find(item => item.id === selectedItem)?.category === 'web' ? 'Desarrollo Web' :
                         portfolioItems.find(item => item.id === selectedItem)?.category === 'app' ? 'Aplicaciones' :
                         portfolioItems.find(item => item.id === selectedItem)?.category === 'marketing' ? 'Marketing' : 'Infraestructura'}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Cliente: {portfolioItems.find(item => item.id === selectedItem)?.client}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {portfolioItems.find(item => item.id === selectedItem)?.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {portfolioItems.find(item => item.id === selectedItem)?.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">El Desafío</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {portfolioItems.find(item => item.id === selectedItem)?.challenge}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Nuestra Solución</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {portfolioItems.find(item => item.id === selectedItem)?.solution}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Resultados</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {portfolioItems.find(item => item.id === selectedItem)?.results}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Tecnologías Utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {portfolioItems.find(item => item.id === selectedItem)?.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;