import React from "react";

const contactLinks = [
  {
    label: "Email",
    value: "pmonotosh031@gmail.com",
    href: "mailto:pmonotosh031@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+91 86532 03634",
    href: "https://wa.me/918653203634",
  },
  {
    label: "LinkedIn",
    value: "monotosh-pradhan",
    href: "https://linkedin.com/in/monotosh-pradhan",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-panel">
        <div className="section-heading contact-heading">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I am open to meaningful conversations, collaborations, and learning
            opportunities. Send a message and I will get back to you.
          </p>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
