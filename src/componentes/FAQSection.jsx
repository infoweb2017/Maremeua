import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';

// Datos de ejemplo de las preguntas frecuentes (reemplaza con tus preguntas reales)
const faqs = [
  {
    id: 1,
    pregunta: '¿Cuál es el mínimo de comensales para pedir paella a domicilio?',
    respuesta: 'El mínimo de comensales varía según el menú seleccionado. Por favor, consulta la información específica de cada menú.',
  },
  {
    id: 2,
    pregunta: '¿Con cuánta antelación debo hacer mi reserva?',
    respuesta: 'Recomendamos realizar tu reserva con al menos 24-48 horas de antelación para asegurar la disponibilidad, especialmente para eventos grandes.',
  },
  {
    id: 3,
    pregunta: '¿Qué zonas de Valencia cubren con el servicio a domicilio?',
    respuesta: 'Actualmente, ofrecemos servicio a domicilio en toda la ciudad de Valencia y algunas áreas metropolitanas cercanas. Por favor, introduce tu dirección al realizar la reserva para confirmar si llegamos a tu zona.',
  },
  {
    id: 4,
    pregunta: '¿Se incluye el menaje (platos, cubiertos, etc.) con el servicio?',
    respuesta: 'Por defecto, no se incluye el menaje. Sin embargo, podemos ofrecer este servicio como un extra opcional al realizar tu reserva. Consulta las opciones adicionales en el formulario.',
  },
  {
    id: 5,
    pregunta: '¿Cómo puedo realizar el pago de mi reserva?',
    respuesta: 'Aceptamos pagos con tarjeta de crédito/débito y transferencia bancaria. Te proporcionaremos los detalles de pago al confirmar tu reserva.',
  },
  // Añade más preguntas y respuestas aquí...
];

function FAQSection() {
  return (
    <div className="mt-5">
      <h2>Preguntas Frecuentes</h2>
      <Accordion defaultActiveKey="0">
        {faqs.map((faq, index) => (
          <Card key={faq.id}>
            <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header>{faq.pregunta}</Accordion.Header>
              <Accordion.Body>{faq.respuesta}</Accordion.Body>
            </Accordion.Item>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQSection;