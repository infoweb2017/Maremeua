//page/Contacto.jsx

import React, { useState } from "react";
import "../css/Contacto.css";
import { useTranslation } from "react-i18next";

function Contacto() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enviar-contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setFormStatus(t(data.message ? 'form.successMessage' : 'form.errorMessage')); // Asume que tienes una clave para el error
      if (data.message) {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormStatus(t('form.errorMessage')); // Clave para el mensaje de error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5 contact-container">
      <h2 className="text-center mb-4">{t("form.title")}</h2>
      <p className="text-center mb-4 fw-semibold">
        {t("form.subtitle")}
      </p>

      <form onSubmit={handleSubmit} className="mt-4 contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">{t("form.name")}</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t("form.namePlaceholder")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">{t("form.email")}</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t("form.emailPlaceholder")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">{t("form.phone")}</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder={t("form.phonePlaceholder")}
            pattern="[0-9]{9,15}"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">{t("form.message")}</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t("form.messagePlaceholder")}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("form.sending") : t("form.submit")}
          </button>
        </div>

        {formStatus && (
          <div className="mt-3 text-center">
            <p className="text-success">{formStatus}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Contacto;
