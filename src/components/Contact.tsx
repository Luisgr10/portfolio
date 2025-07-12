import React, { useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(false);
    setError(false);
    if (!form.current) return;
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setSent(true);
          form.current?.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Contacto</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <form ref={form} onSubmit={sendEmail} className="w-full bg-white rounded-lg shadow p-6 flex flex-col gap-4">
            <input type="text" name="nombre" placeholder="Nombre" required className="border border-dark/20 rounded px-3 py-2 focus:outline-none focus:border-primary" />
            <input type="email" name="email" placeholder="Email" required className="border border-dark/20 rounded px-3 py-2 focus:outline-none focus:border-primary" />
            <textarea name="mensaje" placeholder="Mensaje" required className="border border-dark/20 rounded px-3 py-2 focus:outline-none focus:border-primary" rows={4} />
            <button type="submit" className="bg-primary text-light py-2 rounded font-semibold hover:bg-secondary transition-colors">Enviar</button>
            {sent && <p className="text-green-600 mt-2">¡Mensaje enviado correctamente!</p>}
            {error && <p className="text-red-600 mt-2">Hubo un error al enviar el mensaje. Intenta de nuevo.</p>}
          </form>
        </div>
        {/* Columna derecha: card de enlaces */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 min-w-[260px] w-full max-w-xs">
            <h3 className="text-xl font-semibold text-primary mb-2">Redes y contacto</h3>
            <a href="mailto:Luisguilarter@gmail.com" className="flex items-center gap-3 text-dark hover:text-primary transition-colors text-lg">
              <FaEnvelope className="text-primary w-6 h-6" /> Luisguilarter@gmail.com
            </a>
            <a href="https://github.com/Luisgr10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-dark hover:text-primary transition-colors text-lg">
              <FaGithub className="text-primary w-6 h-6" /> Luisgr10
            </a>
            <a href="https://www.linkedin.com/in/luisgr10/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-dark hover:text-primary transition-colors text-lg">
              <FaLinkedin className="text-primary w-6 h-6" /> Luis Guilarte Rodriguez
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 