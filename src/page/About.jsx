import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaCheckCircle, FaFire, FaHandsHelping } from 'react-icons/fa';
import { useEffect } from "react";
import img_perfil from "../assets/perfil.png";
import img_pa from "../assets/IMG_9550.png";
import "../css/About.css";
import FraseFinalCarrusel from "../componentes/FraseFinalCarrusel";

import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container className="my-5">
      {/* Título principal */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="display-5">¿Quién soy?</h2>
          <p className="lead">Una historia de pasión, tradición y sabor</p>
        </Col>
      </Row>

      {/* Introducción personal */}
      <Row className="align-items-center mb-5">
        <Col md={2} className="text-center text-md-start">
          <Image
            src={img_perfil}
            fluid
            className="perfil-img"
            alt="Foto del cocinero"
          />
        </Col>
        <Col md={8}>
          <div className="texto-intro text-justify">
            <p>
              Hace más de 15 años llegué a la Comunidad Valenciana y fue allí donde comenzó mi aventura: como ayudante en una arrocería local, descubrí mi pasión por la auténtica paella valenciana. Desde entonces he trabajado con grandes chefs en Londres, Barcelona, las Islas Baleares y toda la Comunidad Valenciana, perfeccionando mi arte y aprendiendo los secretos de este plato tan emblemático.
            </p>
            <p>
              Hoy, con este proyecto, quiero compartir ese amor con el mundo: llevar la verdadera esencia de la paella hasta tu casa.
            </p>
          </div>
        </Col>
      </Row>
      {/* Línea del tiempo (resumida) */}
      <Row className="mb-5">
        <Col>
          <h3 className="mb-3">Mi recorrido</h3>
          <ul className="timeline">
            <li><strong>2009:</strong> Llego a Valencia y empiezo como ayudante.</li>
            <li><strong>2012 - 2018:</strong> Trabajo con chefs reconocidos en Europa(Londres).</li>
            <li><strong>2023:</strong> Nace la idea del servicio de paellas a domicilio.</li>
            <li><strong>2025:</strong> Lanzamiento de mi proyecto web.</li>
          </ul>
        </Col>
      </Row>

      <section className="historia-paella my-5 py-4">
        <h2 className="text-center mb-4">La Historia de la Paella Valenciana</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-justify">
              La paella nació en las zonas rurales de Valencia hace más de 500 años, como un plato humilde cocinado por campesinos con ingredientes locales como arroz, conejo, pollo y verduras. Se preparaba al aire libre en una paellera sobre leña, y se comía directamente del recipiente, en comunidad.
            </p>
            <p className="text-justify">
              Con el paso del tiempo, la paella evolucionó y se convirtió en un símbolo de la cocina española. Aunque existen muchas versiones, la auténtica paella valenciana se mantiene fiel a sus raíces, respetando ingredientes tradicionales y el método de cocción original.
            </p>
            <p className="text-justify">
              En este proyecto celebramos esa tradición, preparando paellas con respeto, cariño y los sabores de siempre.
            </p>
          </Col>
          <Col
            md={6}
            className="text-center"
            data-aos="fade-up"
          >
            <img
              src={img_pa}
              alt="Historia de la paella"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                maxHeight: "350px",
                objectFit: "cover",
                border: "4px solid white",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Col>
        </Row>

        {/* Historia de la paella */}
        <Row className="mb-5">
          <Col>
            <h4>La auténtica paella valenciana</h4>
            <p style={{ textAlign: 'justify' }}>
              Hablar de la auténtica paella valenciana es hablar de sabor, tradición y calidad. No es solo arroz: es una experiencia que se vive con todos los sentidos. Preparada con ingredientes frescos, fuego real y el respeto por la receta original, cada bocado es una explosión de autenticidad. Si nunca la has probado como se debe, aún no conoces lo que es una verdadera paella.
              <strong>Descúbrela y entiende por qué es la reina de la cocina mediterránea.</strong>
            </p>
          </Col>

        </Row>
      </section>


      {/* Valores */}
      <Row className="text-center mb-5">
        <Col md={4}>
          <FaCheckCircle size={40} className="mb-2 text-success" />
          <h5>Autenticidad</h5>
          <p>Respetamos la receta y los tiempos tradicionales.</p>
        </Col>
        <Col md={4}>
          <FaFire size={40} className="mb-2 text-danger" />
          <h5>Calidad</h5>
          <p>Seleccionamos los mejores ingredientes locales.</p>
        </Col>
        <Col md={4}>
          <FaHandsHelping size={40} className="mb-2 text-warning" />
          <h5>Cercanía</h5>
          <p>Queremos llevarte una experiencia única y cercana.</p>
        </Col>
      </Row>

      {/* Frase final inspiradora */}
      <FraseFinalCarrusel />

    </Container>
  );
};

export default About;

