import { useState } from 'react';
import { MonitorSmartphone, Mail, ArrowRight, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import Button from '../ui/Button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, introduce un correo electrónico válido');
      return;
    }
    
    // Reset error state
    setError(null);
    
    // Simulate subscription success
    setSubscribed(true);
    setEmail('');
  };

  const footerLinks = [
    {
      title: 'Servicios',
      links: [
        { label: 'Desarrollo Web', href: '#servicios' },
        { label: 'Aplicaciones Móviles', href: '#servicios' },
        { label: 'Marketing Digital', href: '#servicios' },
        { label: 'Infraestructura de Red', href: '#servicios' },
        { label: 'Soporte Técnico', href: '#servicios' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nosotros', href: '#' },
        { label: 'Nuestro Equipo', href: '#' },
        { label: 'Carreras', href: '#' },
        { label: 'Testimonios', href: '#beneficios' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Documentación', href: '#' },
        { label: 'Guías', href: '#' },
        { label: 'Preguntas Frecuentes', href: '#' },
        { label: 'Soporte', href: '#' },
        { label: 'Contacto', href: '#contacto' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-800">
          {/* Company info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-2 text-white mb-6">
              <MonitorSmartphone size={32} />
              <span className="text-2xl font-bold">Grupo Tecnoa</span>
            </a>
            <p className="text-gray-400 mb-6">
              Somos una empresa de soluciones tecnológicas comprometida con el éxito de nuestros clientes.
              Ofrecemos servicios integrales que impulsan la transformación digital de tu negocio.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter 
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Suscríbete a nuestro newsletter</h3>
            {subscribed ? (
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-green-400 mb-1">¡Gracias por suscribirte!</p>
                <p className="text-gray-400 text-sm">
                  Pronto recibirás nuestras novedades y ofertas especiales.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <div className="flex flex-col space-y-3">
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu correo electrónico"
                      className="w-full bg-gray-800 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                  >
                    <span>Suscribirse</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </form>
            )}
            <p className="text-gray-500 text-sm mt-3">
              Al suscribirte, aceptas nuestra <a href="#" className="text-primary-400 hover:underline">política de privacidad</a>.
            </p>
          </div>*/}
        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 text-center md:flex md:items-center md:justify-between">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Grupo Tecnoa. Todos los derechos reservados.
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">Política de Privacidad</a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">Términos de Servicio</a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">Política de Cookies</a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;