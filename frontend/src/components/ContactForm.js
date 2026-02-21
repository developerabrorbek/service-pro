import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { toast } from "sonner";

const ContactForm = ({ className = "" }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone) {
      toast.error("Пожалуйста, введите номер телефона");
      return;
    }

    setIsSubmitting(true);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;

      // Convert formData to FormData object if backend expects multipart/form-data
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);

      // Or JSON if backend expects JSON
      // const data = JSON.stringify(formData);

      const response = await fetch(`${backendUrl}/api/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // MUST
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // optional if backend returns JSON
      console.log("Backend response:", result);

      toast.success(t("form.success"));
      setFormData({ name: "", phone: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(t("form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`contact-form-container ${className}`}>
      <h3 className="form-title">{t("form.title")}</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("form.name")}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("form.phone")}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : t("form.submit")}
        </button>
      </form>
      <p className="form-note">* Мы перезвоним вам в течение 10 минут</p>
    </div>
  );
};

export default ContactForm;
