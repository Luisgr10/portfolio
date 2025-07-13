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
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div className="flex flex-col h-full justify-center">
          <form ref={form} onSubmit={sendEmail} className="w-full bg-white rounded-xl shadow p-6 flex flex-col gap-4 h-full justify-center">
            <input type="text" name="nombre" placeholder="Nombre" required className="border border-dark/20 rounded px-3 py-2 focus:outline-none focus:border-primary" />
            <input type="email" name="email" placeholder="Email" required className="border border-dark/20 rounded px-3 py-2 focus:outline-none focus:border-primary" />
            <textarea name="mensaje" placeholder="Mensaje" required className="border border-dark/20 rounded px-3 py-2 focus:outline-none focus:border-primary" rows={4} />
            <button type="submit" className="bg-primary text-light py-2 rounded font-semibold hover:bg-secondary transition-colors">Enviar</button>
            {sent && <p className="text-green-600 mt-2">¡Mensaje enviado correctamente!</p>}
            {error && <p className="text-red-600 mt-2">Hubo un error al enviar el mensaje. Intenta de nuevo.</p>}
          </form>
        </div>
        <div className="flex flex-col h-full justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 min-w-[260px] w-full max-w-xs h-full justify-center mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-2 tracking-wide">Redes y contacto</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <span className="bg-[#E63946] rounded-full p-2">
                  <FaEnvelope className="text-white w-6 h-6" />
                </span>
                <div>
                  <a href="mailto:Luisguilarter@gmail.com" className="text-dark font-medium hover:underline">Luisguilarter@gmail.com</a>
                  <div className="text-xs text-dark/60">Correo</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-[#E63946] rounded-full p-2">
                  <FaGithub className="text-white w-6 h-6" />
                </span>
                <div>
                  <a href="https://github.com/Luisgr10" target="_blank" rel="noopener noreferrer" className="text-dark font-medium hover:underline">Luisgr10</a>
                  <div className="text-xs text-dark/60">GitHub</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-[#E63946] rounded-full p-2">
                  <FaLinkedin className="text-white w-6 h-6" />
                </span>
                <div>
                  <a href="https://www.linkedin.com/in/luisgr10/" target="_blank" rel="noopener noreferrer" className="text-dark font-medium hover:underline">Luis Guilarte Rodriguez</a>
                  <div className="text-xs text-dark/60">LinkedIn</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 