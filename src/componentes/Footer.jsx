import React from "react";
import { useTranslation } from "react-i18next";
import "../css/Footer.css"; // Archivo CSS para estilos personalizados

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container-fluid">
        <div className="row">
          {/* Enlaces rápidos */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <h5>{t("quickLinks")}</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/privacy" className="text-white">
                  {t("privacyPolicy")}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white">
                  {t("termsAndConditions")}
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white">
                  {t("faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <h5>{t("contactUs")}</h5>
            <p><i className="fas fa-map-marker-alt me-2"></i> {t("")} Calle Paella, 123, Valencia, España</p>
            <p><i className="fas fa-phone me-2"></i> {t("")} +34 123 456 789</p>
            <p><i className="fas fa-envelope me-2"></i> {t("")} info@paellasdomicilio.com</p>
          </div>

          {/* Redes sociales */}
          <div className="col-md-4 text-center">
            <h5>{t("followUs")}</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com" className="text-white">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <div className="mt-3">
              <p>{t("newsletter")}</p>
              <form>
                <input type="email" className="form-control mb-2" placeholder={t("enterEmail")} />
                <button type="submit" className="btn btn-primary">{t("subscribe")}</button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-3 border-top">
          <p className="mb-0">
            © {new Date().getFullYear()} {t("Maremeua")}. {t("allRightsReserved")}.
            <br />
            {t("Desarrollado")}{" "}
            <a
              href="https://www.frmwebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white" // Asegúrate de que el color del enlace combine con el footer
            >
              FrmWebSolutions
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;