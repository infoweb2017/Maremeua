import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Banner.css';

const Banner = () => {
  const { t } = useTranslation(); // Hook para traducciones

  return (
    <div className="bg-warning text-center py-2 w-100 d-flex justify-content-between align-items-center px-4">
      <p className="mb-0 text-black info-bar-text">
        📞 {t("phone")}: +1(863) 808-9083 | ✉️ {t("email")}: info@maremeua.com
      </p>
      <Link to="/reservar-evento" className="ms-2">
        <button className="banner-button" variant="primary" size="sm"> {/* Aplica estilos con la clase banner-button */}
          {t("Reserva")}
        </button>
      </Link>

    </div>
  );
};

export default Banner;