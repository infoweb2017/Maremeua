//page/Reserva.jsx

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import ReservationForm from '../componentes/ReservationForm';
import { Link } from 'react-router-dom';
import menuImage from '../assets/Brisa.jpg'; // Asegúrate de tener la imagen en esta ruta

const tiposDeArrozDisponibles = [
  'Paella Valenciana',
  'Paella Campesina',
  'Paella de Mariscos',
  'Paella de Langosta',
  'Fideuà',
  'Arroz Negro',
  'Paella Vegetariana'
];

function Reserva() {
  const { t } = useTranslation(); // Hook para traducciones
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animar solo una vez cuando entre en la vista

  const cardVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };
  const cardStyle = {
    maxWidth: '600px',
    backgroundColor: '#262d2a', 
    color: 'white',
  };

  const miColorDeFondo = '#1c3442';

  return (
    <Container className="mt-5">
      <Card className="text-white shadow-lg rounded-lg text-center p-5 mb-4"
        style={{ backgroundColor: miColorDeFondo }}>
        <Card.Body>
          <Card.Title className="display-4 fw-bold mb-3">
            ¿Listo para una Paella Inolvidable?
          </Card.Title>
          <Card.Text className="lead mb-4">
            Celebra tus momentos especiales con el auténtico sabor de nuestras paellas y fideuà. ¡Reserva ahora y disfruta!
          </Card.Text>
          <Link to="/contact" variant="light" size="lg">
            {t("Consultar")}
          </Link>
        </Card.Body>
      </Card>

      <Card id="formulario-reserva" className="p-4 shadow-sm rounded-lg">
        <h2 className="text-center mb-4">Completa tu Reserva</h2>
        <ReservationForm availableArroces={tiposDeArrozDisponibles} />
      </Card>

      <hr className="my-5" />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        className="d-flex justify-content-center mb-5"
      >
        <Card style={cardStyle}>
          <Card.Body className="text-center">
            <h2 className="mb-3" style={{ color: 'white' }}>¿Tienes alguna pregunta?</h2>
            <p className="mb-2" style={{ color: 'white' }}>No dudes en contactarnos para consultas personalizadas o peticiones especiales.</p>
            <p className="mb-2" style={{ color: 'white' }}>Contáctanos al +1 (813) 418-2616</p>
            <p className="mb-2" style={{ color: 'white' }}>Email: info@tupaellaadomicilio.com (ejemplo)</p>
            <p className="mb-0" style={{ color: 'white' }}>Estamos en Lakeland, FL (Información de la imagen)</p>
          </Card.Body>
        </Card>
      </motion.div>

    </Container>
  );
}

export default Reserva;