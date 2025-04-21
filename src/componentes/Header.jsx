import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo_blanco.jpg";
import "../css/Header.css";

function Header() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-top rounded-circle"
          />
        </Link>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTENIDO MENÚ */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 w-100 justify-content-lg-end">
            <li className="nav-item">
              <Link className="nav-link nav-modern" to="/">{t("home")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-modern" to="/about">{t("about")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-modern" to="/service">{t("service")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-modern" to="/contact">{t("contact")}</Link>
            </li>

            {/* SELECTOR DE IDIOMA */}
            <li className="nav-item">
              <select
                onChange={handleLanguageChange}
                className="form-select form-select-sm border-0 bg-light ms-lg-3 mt-2 mt-lg-0"
                style={{
                  width: "auto",
                  fontSize: window.innerWidth <= 991 ? "0.95rem" : "0.9rem" // Tamaño dinámico
                }}
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
