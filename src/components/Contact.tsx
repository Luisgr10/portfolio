import React, { useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaUser, FaRegPaperPlane } from 'react-icons/fa';
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
      <h2 className="text-4xl font-extrabold text-primary mb-12 text-center drop-shadow-lg tracking-tight">Contacto</h2>
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center w-full gap-8 md:gap-12 md:flex-row md:items-start md:justify-center">
            {/* Formulario */}
            <div className="flex-1 flex flex-col items-center md:items-end w-full max-w-md">
              <div className="flex flex-col items-center w-full mb-4">
                <div className="flex items-center gap-3">
                  <FaRegPaperPlane className="text-primary text-2xl" />
                  <span className="text-2xl font-bold text-primary">Envíame un mensaje</span>
                </div>
              </div>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 w-full">
                <div className="relative w-full">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70 text-lg" />
                  <input type="text" name="nombre" placeholder="Nombre" required className="pl-10 pr-3 py-2 border border-dark/20 rounded-lg w-full focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="relative w-full">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70 text-lg" />
                  <input type="email" name="email" placeholder="Email" required className="pl-10 pr-3 py-2 border border-dark/20 rounded-lg w-full focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="relative w-full">
                  <textarea name="mensaje" placeholder="Mensaje" required className="pl-3 pr-3 py-2 border border-dark/20 rounded-lg w-full focus:outline-none focus:border-primary transition-colors min-h-[100px] resize-none" rows={4} />
                </div>
                <button type="submit" className="flex items-center justify-center gap-2 bg-primary text-light py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-secondary transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/40 w-full">
                  <FaRegPaperPlane className="text-xl" />
                  Enviar
                </button>
                {sent && <p className="text-green-600 mt-2 text-center animate-fade-in">¡Mensaje enviado correctamente!</p>}
                {error && <p className="text-red-600 mt-2 text-center animate-fade-in">Hubo un error al enviar el mensaje. Intenta de nuevo.</p>}
              </form>
            </div>
            {/* Redes y contacto */}
            <div className="flex-1 flex flex-col items-center md:items-start w-full max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <FaEnvelope className="text-primary text-2xl" />
                <span className="text-2xl font-bold text-primary">Redes y contacto</span>
              </div>
              <ul className="flex flex-col gap-6 w-full">
                <li className="flex items-center gap-4">
                  <span className="bg-[#E63946] rounded-full p-2">
                    <FaEnvelope className="text-white w-6 h-6" />
                  </span>
                  <div>
                    <a href="mailto:Luisguilarter@gmail.com" className="text-dark font-semibold hover:underline">Luisguilarter@gmail.com</a>
                    <div className="text-xs text-dark/60">Correo</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-[#E63946] rounded-full p-2">
                    <FaGithub className="text-white w-6 h-6" />
                  </span>
                  <div>
                    <a href="https://github.com/Luisgr10" target="_blank" rel="noopener noreferrer" className="text-dark font-semibold hover:underline">Luisgr10</a>
                    <div className="text-xs text-dark/60">GitHub</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-[#E63946] rounded-full p-2">
                    <FaLinkedin className="text-white w-6 h-6" />
                  </span>
                  <div>
                    <a href="https://www.linkedin.com/in/luisgr10/" target="_blank" rel="noopener noreferrer" className="text-dark font-semibold hover:underline">Luis Guilarte Rodriguez</a>
                    <div className="text-xs text-dark/60">LinkedIn</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 