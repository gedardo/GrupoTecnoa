import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import BenefitsSection from './components/sections/BenefitsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Grupo Tecnoa - Soluciones Tecnológicas';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-body">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <BenefitsSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;