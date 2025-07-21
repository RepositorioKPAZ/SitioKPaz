
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export const NewsletterCTA = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    position: "",
    phone: "",
    email: "",
    compania: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3001/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const result = await response.json();
      if (response.ok && result.success) {
        alert('¡Gracias por suscribirte al newsletter!');
        setForm({ name: '', position: '', phone: '', email: '', compania: '' });
        setShowModal(false);
      } else {
        alert(result.message || 'Hubo un error al enviar la suscripción.');
      }
    } catch (error) {
      alert('Hubo un error al enviar la suscripción.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-[#2e4bce]/10 to-slate-900/10 rounded-3xl p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Quieres más contenido exclusivo?
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Suscríbete a nuestro newsletter y recibe las últimas tendencias tecnológicas directamente en tu inbox.
        </p>
        <Button
          size="lg"
          className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => setShowModal(true)}
        >
          Suscribirse al Newsletter <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Suscríbete al Newsletter</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={100}
              />
              <Input
                name="position"
                placeholder="Cargo"
                value={form.position}
                onChange={handleChange}
                required
                maxLength={100}
              />
              <Input
                name="compania"
                placeholder="Compañía"
                value={form.compania}
                onChange={handleChange}
                required
                maxLength={100}
              />
              <Input
                name="phone"
                placeholder="Teléfono"
                value={form.phone}
                onChange={handleChange}
                required
                maxLength={20}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={254}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#2e4bce] hover:bg-[#1e3a9e] text-white py-3 rounded-xl text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Suscribirse"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
