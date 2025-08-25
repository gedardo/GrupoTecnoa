import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slidel1 from '../../assets/slider1.webp';
import slider2 from '../../assets/slider2.webp';
import slider3 from '../../assets/slider3.webp';

const slides = [
  {
    id: 1,
    image: slidel1,
    title: 'Soluciones Tecnológicas para el Mundo Moderno',
    subtitle: 'Transformamos ideas en realidades digitales'
  },
  {
    id: 2,
    image: slider2,
    title: 'Impulsa tu Negocio con Tecnología de Vanguardia',
    subtitle: 'Estrategias digitales para potenciar tu crecimiento'
  },
  {
    id: 3,
    image: slider3,
    title: 'Expertos en Desarrollo y Aplicaciones',
    subtitle: 'Creamos experiencias digitales que generan resultados'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index 
              ? 'opacity-100 z-10' 
              : 'opacity-0 z-0'
          }`}
        >
          {/* Image with parallax effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000 ease-out"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
          
          {/* Content */}
          <div className="relative z-20 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-3xl">
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 ${
                  currentSlide === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {slide.title}
              </h1>
              <p 
                className={`text-xl text-gray-200 mb-8 transition-all duration-700 delay-300 ${
                  currentSlide === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {slide.subtitle}
              </p>
              <div 
                className={`transition-all duration-700 delay-500 ${
                  currentSlide === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >{/*
                <Button
                  variant="primary"
                  size="lg"
                  ariaLabel="Conoce nuestros servicios"
                  className="mr-4"
                  onClick={() => {
                    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Nuestros Servicios
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:border-white hover:bg-white/20 hover:text-white"
                  ariaLabel="Contacta con nosotros"
                  onClick={() => {
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contáctanos
                </Button>*/}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
        onClick={prevSlide}
        aria-label="Anterior slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
        onClick={nextSlide}
        aria-label="Siguiente slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicator dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;