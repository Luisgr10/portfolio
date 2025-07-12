import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-24 px-4  flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-primary mb-4">Contacto</h2>
      <p className="mb-2 text-dark">Email: <a href="mailto:tuemail@email.com" className="text-secondary hover:text-primary transition-colors">tuemail@email.com</a></p>
      <p className="mb-6 text-dark">LinkedIn: <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">/tuusuario</a></p>
      <form className="w-full max-w-md bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <input type="text" placeholder="Nombre" className="border border-dark/20 rounded px-3 py-2 focus:outline-none focus:border-primary" />
        <input type="email" placeholder="Email" className="border border-dark/20 rounded px-3 py-2 focus:outline-none focus:border-primary" />
        <textarea placeholder="Mensaje" className="border border-dark/20 rounded px-3 py-2 focus:outline-none focus:border-primary" rows={4} />
        <button type="submit" className="bg-primary text-light py-2 rounded font-semibold hover:bg-secondary transition-colors">Enviar</button>
      </form>
    </section>
  );
};

export default Contact; 