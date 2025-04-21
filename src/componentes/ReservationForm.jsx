//componentes/ReservationForm.jsx

import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

function ReservationForm({ availableArroces }) {
  const [formData, setFormData] = useState({
    tipoPlato: '',
    numComensales: 2,
    fechaEvento: '',
    horaEvento: '',
    ubicacion: '',
    personalizacionIngredientes: '',
    tipoArrozEspecifico: '',
    comentarios: '',
    nombreContacto: '',
    emailContacto: '',
    telefonoContacto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Enviando formulario de reserva:', formData);

    try {
      const response = await fetch('/api/enviar-reserva', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.message) {
        alert('Solicitud de reserva enviada correctamente'); // Puedes mostrar un mensaje más elegante
        setFormData({
          tipoPlato: '',
          numComensales: 2,
          fechaEvento: '',
          horaEvento: '',
          ubicacion: '',
          personalizacionIngredientes: '',
          tipoArrozEspecifico: '',
          comentarios: '',
          nombreContacto: '',
          emailContacto: '',
          telefonoContacto: '',
        });
      } else {
        alert('Error al enviar la solicitud de reserva'); // Manejo de errores más robusto en producción
      }
    } catch (error) {
      console.error('Error al enviar la reserva:', error);
      alert('Error al conectar con el servidor para la reserva');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Selecciona tu Plato</Form.Label>
          <Form.Control as="select" name="tipoPlato" value={formData.tipoPlato} onChange={handleChange} required>
            <option value="">Seleccionar plato</option>
            {availableArroces.map((plato) => (
              <option key={plato} value={plato}>{plato}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label>Número de Comensales (Mínimo 2)</Form.Label>
          <Form.Control type="number" name="numComensales" value={formData.numComensales} onChange={handleChange} min={2} required />
        </Form.Group>
      </Row>

      {formData.tipoPlato.includes('Paella') && (
        <Form.Group className="mb-3">
          <Form.Label>Tipo de Arroz (Opcional)</Form.Label>
          <Form.Control type="text" name="tipoArrozEspecifico" value={formData.tipoArrozEspecifico} onChange={handleChange} placeholder="Especifica tu preferencia" />
        </Form.Group>
      )}

      <Form.Group className="mb-3">
        <Form.Label>Personalización de Ingredientes (Opcional)</Form.Label>
        <Form.Control as="textarea" rows={3} name="personalizacionIngredientes" value={formData.personalizacionIngredientes} onChange={handleChange} placeholder="Añadir o quitar ingredientes" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Fecha del Evento</Form.Label>
          <Form.Control type="date" name="fechaEvento" value={formData.fechaEvento} onChange={handleChange} required />
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label>Hora de Entrega/Servicio</Form.Label>
          <Form.Control type="time" name="horaEvento" value={formData.horaEvento} onChange={handleChange} required />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Ubicación/Dirección</Form.Label>
        <Form.Control type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Comentarios Adicionales</Form.Label>
        <Form.Control as="textarea" rows={3} name="comentarios" value={formData.comentarios} onChange={handleChange} />
      </Form.Group>

      <hr className="my-4" />
      <h5>Datos de Contacto</h5>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombreContacto" value={formData.nombreContacto} onChange={handleChange} required />
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="emailContacto" value={formData.emailContacto} onChange={handleChange} required />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="tel" name="telefonoContacto" value={formData.telefonoContacto} onChange={handleChange} required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar Solicitud
      </Button>
    </Form>
  );
}

export default ReservationForm;