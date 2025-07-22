import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle, ArrowRight, Search, FileText, Cog } from "lucide-react";
import { useState, useCallback } from "react";
import { SecurityUtils, RateLimiter } from "@/utils/security";
import { createSecureContactSchema, type SecureContactFormData } from "@/utils/secureFormValidation";
import { SecurityErrorBoundary } from "@/components/security/SecurityErrorBoundary";
export const ContactSection = () => {
  const [formData, setFormData] = useState<SecureContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SecureContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;

    // Sanitize input immediately
    const sanitizedValue = SecurityUtils.sanitizeInput(value);
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[name as keyof SecureContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  }, [errors]);
  const validateForm = useCallback((): boolean => {
    const schema = createSecureContactSchema();
    const result = schema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<Record<keyof SecureContactFormData, string>> = {};
      result.error.errors.forEach(error => {
        const field = error.path[0] as keyof SecureContactFormData;
        newErrors[field] = error.message;
      });
      setErrors(newErrors);
      SecurityUtils.logSecurityEvent('FORM_VALIDATION_FAILED', {
        form: 'contact',
        errors: result.error.errors
      });
      return false;
    }
    setErrors({});
    return true;
  }, [formData]);
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    const clientId = `contact_${formData.email}`;
    if (!RateLimiter.canAttempt(clientId, 3, 300000)) {
      // 3 attempts per 5 minutes
      alert("Has realizado demasiados intentos. Por favor, espera unos minutos antes de intentar nuevamente.");
      return;
    }
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      // Log successful form submission
      SecurityUtils.logSecurityEvent('FORM_SUBMITTED', {
        form: 'contact',
        timestamp: new Date().toISOString()
      });
      console.log("Secure form submitted:", formData);

      // Enviar al backend
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok && result.success) {
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        alert(result.message || "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.");
      }
    } catch (error) {
      SecurityUtils.logSecurityEvent('FORM_SUBMISSION_ERROR', {
        form: 'contact',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      alert("Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);
  return <SecurityErrorBoundary>
      <section id="contacto" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,75,206,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(46,75,206,0.05),transparent_50%)]"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-[#2e4bce]/20 text-[#2e4bce] border-[#2e4bce]/30 font-medium">
              🤝 Conversemos sobre su Estrategia
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transforme su Visión en
              <span className="block text-[#2e4bce]">Realidad Digital</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-4 font-medium max-w-3xl mx-auto">
              Conecte con nuestro equipo de especialistas en transformación empresarial
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Diseñamos soluciones tecnológicas que entregan ROI medible y se alinean con sus objetivos estratégicos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Conversemos sobre tus desafíos</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Nombre *</Label>
                    <Input id="name" name="name" type="text" placeholder="Tu nombre" value={formData.name} onChange={handleInputChange} required maxLength={100} className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 ${errors.name ? 'border-red-500' : ''}`} />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-white mb-2 block">Compañía *</Label>
                    <Input id="company" name="company" type="text" placeholder="Tu empresa" value={formData.company} onChange={handleInputChange} required maxLength={100} className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 ${errors.company ? 'border-red-500' : ''}`} />
                    {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="tu@empresa.com" value={formData.email} onChange={handleInputChange} required maxLength={254} className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 ${errors.email ? 'border-red-500' : ''}`} />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">Teléfono *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+56 9 1234 5678" value={formData.phone} onChange={handleInputChange} required maxLength={20} className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 ${errors.phone ? 'border-red-500' : ''}`} />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Mensaje *</Label>
                  <Textarea id="message" name="message" placeholder="Cuéntanos sobre tu proyecto o desafío..." value={formData.message} onChange={handleInputChange} required rows={4} maxLength={1000} className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 ${errors.message ? 'border-red-500' : ''}`} />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  <p className="text-gray-400 text-xs mt-1">
                    {formData.message.length}/1000 caracteres
                  </p>
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-[#2e4bce] hover:bg-[#1e3a9e] text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed">
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
              
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <Mail className="h-5 w-5 text-[#2e4bce]" />
                    <div>
                      <p className="text-sm text-gray-300">Email</p>
                      <a href="mailto:contacto@kpaz.la" className="text-white font-medium hover:text-[#2e4bce] transition-colors">contacto@kpaz.la</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <Phone className="h-5 w-5 text-[#2e4bce]" />
                    <div>
                      <p className="text-sm text-gray-300">WhatsApp</p>
                      <a href="https://wa.me/56951748603" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#2e4bce] transition-colors">+56 9 5174 8603</a>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 text-center mt-4">
                  ⚡ Respuesta garantizada en menos de 24 horas
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#2e4bce]/10 to-transparent rounded-2xl p-6 border border-[#2e4bce]/20">
                <h4 className="text-xl font-bold text-white mb-4">¿Por qué elegir KPAZ?</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2e4bce] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Expertise Comprobado:</strong> Más de 10 años transformando empresas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2e4bce] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">ROI Medible:</strong> Resultados cuantificables desde el día uno</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2e4bce] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Soporte Continuo:</strong> Acompañamiento en cada etapa del proyecto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2e4bce] rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Escalabilidad:</strong> Soluciones que crecen con su negocio</span>
                  </li>
                </ul>
              </div>

              {/* Process Flow Chart */}
              <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-6 text-center">3 pasos, resultados concretos</h4>
                
                {/* Process Flow */}
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#2e4bce] rounded-full flex items-center justify-center shadow-lg">
                        <Search className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h5 className="text-white font-semibold text-sm mb-1">Análisis</h5>
                        <p className="text-gray-300 text-xs">Evaluamos necesidades y objetivos</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-4 h-4 text-[#2e4bce] rotate-90" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#2e4bce] rounded-full flex items-center justify-center shadow-lg">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h5 className="text-white font-semibold text-sm mb-1">Propuesta</h5>
                        <p className="text-gray-300 text-xs">Solución personalizada y estratégica</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-4 h-4 text-[#2e4bce] rotate-90" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#2e4bce] rounded-full flex items-center justify-center shadow-lg">
                        <Cog className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h5 className="text-white font-semibold text-sm mb-1">Implementación</h5>
                        <p className="text-gray-300 text-xs">Ejecución y seguimiento continuo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecurityErrorBoundary>;
};