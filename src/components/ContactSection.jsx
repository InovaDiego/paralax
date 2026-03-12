import { useState } from 'react';

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: conectar con el backend de Node.js
    console.log('Formulario enviado:', form);
  };

  return (
    <section id="contacto" className="content-section">
      <div className="section-overlay">
        <h2>Contáctanos</h2>
        <p>¿Tienes preguntas? ¡Estamos aquí para ayudarte!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tu Duda..."
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" className="cta-button">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
