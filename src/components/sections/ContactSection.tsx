import { useState } from 'react';
import { AtSign, Phone, MapPin, MessageSquare, Send, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedElement from '../ui/AnimatedElement';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }
    
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'El número de teléfono no es válido';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'El número de telefono es obligatorio';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es obligatorio';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitting(true);
      setError(null);
      
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 1500);
    }
  };

  const handleWhatsAppClick = () => {
    if (!validateForm()) {
      return;
    }

    const phoneNumber = '+5493814451306'; // Replace with your actual WhatsApp business number
    const message = `*Nuevo mensaje de contacto*%0A%0A` +
      `*Nombre:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Teléfono:* ${formData.phone || 'No proporcionado'}%0A` +
      `*Asunto:* ${formData.subject}%0A%0A` +
      `*Mensaje:*%0A${formData.message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="bg-white dark:bg-gray-800 py-20">
      <div className="container-section">
        <AnimatedElement animation="fade-in-up">
          <h2 className="section-title text-gray-900 dark:text-white">
            Contáctanos
          </h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente o necesitas asesoramiento? Estamos aquí para ayudarte.
            Ponte en contacto con nuestro equipo y recibe una consulta personalizada.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedElement 
            animation="fade-in-left" 
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <AtSign size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</h4>
                    <a href="mailto:info@grupotecnoa.com" className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      info@grupotecnoa.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Teléfono</h4>
                    <a href="tel:+5493814451306" className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      +54 93814451306
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">WhatsApp</h4>
                    <a href="https://wa.me/5493814451306" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      +54 93814451306
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Dirección</h4>
                    <address className="not-italic text-gray-900 dark:text-white">
                      Godoy Cruz 347<br />
                      CP 4000 - San Miguel de Tucumán, Argentina
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Horario de atención</h4>
                <p className="text-gray-900 dark:text-white mb-1">Lunes a Viernes: 8:00 - 18:00</p>
                <p className="text-gray-900 dark:text-white">Sábados: 9:00 - 14:00</p>
              </div>
            </div>
          </AnimatedElement>

          {/* Contact Form */}
          <AnimatedElement 
            animation="fade-in-right" 
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Envíanos un mensaje</h3>
              
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <Send size={30} />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-400">Mensaje enviado con éxito</h4>
                  <p className="text-green-700 dark:text-green-300 mb-6">
                    Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="primary"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">Nombre completo *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input-field ${errors.name ? 'border-red-500 dark:border-red-700' : ''}`}
                        placeholder="Tu nombre"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="form-label">Correo electrónico *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input-field ${errors.email ? 'border-red-500 dark:border-red-700' : ''}`}
                        placeholder="Tu correo electrónico"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="form-label">Teléfono *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`input-field ${errors.phone ? 'border-red-500 dark:border-red-700' : ''}`}
                        placeholder="Tu número de teléfono"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="form-label">Asunto *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`input-field ${errors.subject ? 'border-red-500 dark:border-red-700' : ''}`}
                        placeholder="Asunto de tu mensaje"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label">Mensaje *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`input-field resize-none ${errors.message ? 'border-red-500 dark:border-red-700' : ''}`}
                      placeholder="Cuéntanos sobre tu proyecto o consulta"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">* Campos obligatorios</p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      <Button
                        type="button"
                        variant="secondary"
                        className="w-full sm:w-auto"
                        onClick={handleWhatsAppClick}
                        disabled={submitting}
                      >
                        <MessageCircle size={20} className="mr-2" />
                        Enviar por WhatsApp
                      </Button>
            {/*          <Button
                        type="submit"
                        variant="primary"
                        className="w-full sm:w-auto"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          <>
                            <Send size={20} className="mr-2" />
                            Enviar Mensaje
                          </>
                        )}
                      </Button>*/}
                    </div>
                  </div>
                  
                  {error && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg text-red-700 dark:text-red-300">
                      {error}
                    </div>
                  )}
                </form>
              )}
            </div>
          </AnimatedElement>
        </div>

        {/* Google Maps */}
        <AnimatedElement animation="fade-in-up" className="mt-16">
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17523.7972536339!2d-65.24029863120796!3d-26.82752762891248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1747837822537!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Grupo Tecnoa"
          />
          {/*  <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97202.25868726264!2d-3.7496840678198226!3d40.41637526975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1688648546582!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Grupo Tecnoa"
            ></iframe>*/}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ContactSection;