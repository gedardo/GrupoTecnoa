import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import AnimatedElement from '../ui/AnimatedElement';

const BenefitsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const stats = [
    { id: 1, value: '98%', label: 'Satisfacción de clientes', description: 'Según encuestas post-proyecto' },
    { id: 2, value: '200+', label: 'Proyectos completados', description: 'En los últimos 5 años' },
    { id: 3, value: '45%', label: 'Incremento de ROI', description: 'Promedio para nuestros clientes' },
    { id: 4, value: '24/7', label: 'Soporte técnico', description: 'Para clientes activos' },
  ];

  const process = [
    { id: 1, title: 'Consulta inicial', description: 'Entendemos tus necesidades y objetivos comerciales específicos.' },
    { id: 2, title: 'Propuesta personalizada', description: 'Diseñamos una solución adaptada a tus requerimientos y presupuesto.' },
    { id: 3, title: 'Desarrollo e implementación', description: 'Creamos tu solución utilizando metodologías ágiles con entregas periódicas.' },
    { id: 4, title: 'Formación y soporte', description: 'Te acompañamos durante todo el proceso y después de la implementación.' },
  ];

  return (
    <section id="beneficios" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container-section">
        <AnimatedElement animation="fade-in-up">
          <h2 className="section-title text-gray-900 dark:text-white">
            Por Qué Elegirnos
          </h2>
          <p className="section-subtitle">
            En Grupo Tecnoa no solo desarrollamos soluciones, sino que creamos alianzas estratégicas
            para el crecimiento sostenible de tu negocio.
          </p>
        </AnimatedElement>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <AnimatedElement 
              key={stat.id} 
              animation="fade-in-up" 
              delay={0.1 * index}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div 
                  className="text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400"
                  data-count={stat.value.replace(/\D/g, '')}
                >
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{stat.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Process Timeline */}
        <AnimatedElement animation="fade-in-up" className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Nuestro Proceso
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700" />
            
            <div className="space-y-12 md:space-y-0">
              {process.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-gray-800 z-10" />
                    
                    {/* Content */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                      <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
                        index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                      }`}>
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold mr-3 md:hidden">
                            {step.id}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Empty div for alignment */}
                    <div className="md:w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Testimonials 
        <AnimatedElement animation="fade-in-up">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Lo Que Dicen Nuestros Clientes
          </h3>
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            {/* Testimonial carousel
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="max-w-3xl mx-auto text-center">
                      <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary-200 dark:border-primary-900">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <blockquote className="text-xl italic mb-6 text-gray-700 dark:text-gray-300">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons 
            <button
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={nextTestimonial}
              aria-label="Testimonio siguiente"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots 
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-primary-600 w-6' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedElement>*/}
      </div>
    </section>
  );
};

export default BenefitsSection;