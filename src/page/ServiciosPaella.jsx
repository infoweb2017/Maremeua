import React from "react";
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importa framer-motion

import menuImage from '.././assets/MENU.jpg'; // Asegúrate de que la ruta a tu imagen sea correcta

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

function ServiciosPaella() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mt-5"
    >
      <Container className="text-center">
        <h1 className="mb-4">Descubre Nuestro Menú de Paellas y Fideuà</h1>
        <motion.div
          className="mb-4 shadow-lg"
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <Card>
            <Card.Img
              variant="top"
              src={menuImage}
              alt="Menú de Paellas Mare Meua"
              style={{ maxHeight: '500px', width: 'auto', margin: '0 auto' }} // Ajusta maxHeight y añade margin auto
            />
            <Card.Body>
              <Card.Text className="mt-3">
                Echa un vistazo a nuestra deliciosa selección. ¡Perfecta para tu próximo evento!
              </Card.Text>
              <Button as={Link} to="/reservar-evento" variant="primary" size="lg">
                ¡Reserva Ahora!
              </Button>
            </Card.Body>
          </Card>
        </motion.div>

        <hr className="my-5" />
        <div>
          <h2>¿Tienes alguna pregunta?</h2>
          <p>No dudes en contactarnos para consultas personalizadas.</p>
          <p>Teléfono: +1 (863) 808-9083</p>
          <p>Email: info@maremeua.com</p>
          <p>Estamos en Lakeland, FL (según la imagen)</p>
        </div>
      </Container>
    </motion.div>
  );
}

export default ServiciosPaella;