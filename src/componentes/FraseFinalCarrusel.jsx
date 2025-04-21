// src/components/FraseFinalCarrusel.jsx
import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "../css/FraseFinalCarrusel.css"; // si quieres poner estilos ahí

const frases = [
  {
    texto: "Una paella hecha con alma puede contar más que mil palabras.",
    autor: "William",
  },
  {
    texto: "La mejor paella que he probado, llegó caliente y deliciosa.",
    autor: "Carlos López",
  },
  {
    texto: "Servicio excelente y sabores auténticos. ¡Repetiremos!",
    autor: "María Fernández",
  },
  {
    texto: "La auténtica paella no se come: se vive.",
    autor: "Stephan",
  },
  {
    texto: "No hay reunión más sincera que alrededor de una buena paella.",
    autor: "Amana ",
  },
];

function FraseFinalCarrusel() {
  return (
    <Row className="mar-carrusel">
      <Col className="text-center"> {/* Tamaño fijo */}
        <Carousel
          indicators={false}
          controls={false}
          interval={4000}
          fade
          className="h-100" // Ocupa toda la altura del contenedor padre
        >
          {frases.map((frase, idx) => (
            <Carousel.Item key={idx}> {/* Altura fija por item */}
              <div className="d-flex align-items-center justify-content-center h-100">
                <blockquote className="blockquote animate__animated animate__fadeInUp">
                  <p className="mb-3 fs-4 fst-italic text-light" style={{ fontSize: "18px !important" }}>
                    “{frase.texto}”
                  </p>
                  <footer className="blockquote-footer text-light">
                    {frase.autor}
                  </footer>
                </blockquote>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}

export default FraseFinalCarrusel;
