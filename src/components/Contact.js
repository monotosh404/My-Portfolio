import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2 className="section-title">Get In Touch</h2>

      <p className="contact-text">
        I’m always open to meaningful conversations, collaborations, and learning opportunities.
        If you have an idea or just want to connect, feel free to reach out.
      </p>

      <div className="contact-links">

        <a href="mailto:pmonotosh031@gmail.com">
          📧 Email
        </a>

        <a href="https://wa.me/918653203634" target="_blank" rel="noopener noreferrer">
          💬 WhatsApp
        </a>

        <a href="https://linkedin.com/in/monotosh-pradhan" target="_blank" rel="noopener noreferrer">
          🔗 LinkedIn
        </a>

      </div>

    </section>
  );
}

export default Contact;