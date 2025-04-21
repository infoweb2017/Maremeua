import React from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

const VideoSection = () => {
  const { t } = useTranslation(); // Hook para traducciones

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2>{t("welcome")}</h2> {/* Traduce el título */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ejemplo" // Reemplaza con tu video
            controls={true}
            width="100%"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;