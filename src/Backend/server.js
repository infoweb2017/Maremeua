const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const cors = require('cors'); // Importa el middleware CORS si tu frontend y backend están en diferentes dominios durante el desarrollo

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Habilita CORS para desarrollo local

// Placeholder para la API Key de SendGrid - ¡REEMPLAZAR CUANDO TENGAS LA TUYA!
sgMail.setApiKey(process.env.SENDGRID_API_KEY || 'TU_API_KEY_DE_SENDGRID');

// Placeholder para tu correo electrónico - ¡REEMPLAZAR CUANDO TENGAS TU DOMINIO!
const tuCorreoElectronico = 'tu_correo@tu_dominio.com';

// Ruta para el formulario de contacto principal (page/Contacto.jsx)
app.post('/api/enviar-contacto', async (req, res) => {
  const { name, email, phone, message } = req.body;
  const msg = {
    to: tuCorreoElectronico,
    from: 'no-reply@tupaellaadomicilio.com', // Reemplaza con una dirección válida (puede requerir verificación en SendGrid)
    subject: 'Nuevo Contacto desde la página principal',
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send({ message: 'Mensaje de contacto enviado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error al enviar el mensaje de contacto' });
  }
});

// Ruta para el formulario de reserva (componentes/ReservationForm.jsx)
app.post('/api/enviar-reserva', async (req, res) => {
  const {
    tipoPlato,
    numComensales,
    fechaEvento,
    horaEvento,
    ubicacion,
    personalizacionIngredientes,
    tipoArrozEspecifico,
    comentarios,
    nombreContacto,
    emailContacto,
    telefonoContacto,
  } = req.body;
  const msg = {
    to: tuCorreoElectronico,
    from: 'reservas@tupaellaadomicilio.com', // Reemplaza con una dirección válida
    subject: 'Nueva Solicitud de Reserva',
    text: `Detalles de la Reserva:\nTipo de Plato: ${tipoPlato}\nNúmero de Comensales: ${numComensales}\nFecha del Evento: ${fechaEvento}\nHora del Evento: ${horaEvento}\nUbicación: ${ubicacion}\nPersonalización de Ingredientes: ${personalizacionIngredientes}\nTipo de Arroz Específico: ${tipoArrozEspecifico}\nComentarios Adicionales: ${comentarios}\n\nDatos de Contacto:\nNombre: ${nombreContacto}\nEmail: ${emailContacto}\nTeléfono: ${telefonoContacto}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send({ message: 'Solicitud de reserva enviada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error al enviar la solicitud de reserva' });
  }
});

// Ruta para el formulario de contacto en Home.jsx
app.post('/api/enviar-contacto-home', async (req, res) => {
  const { nombreHome, emailHome, mensajeHome } = req.body;
  const msg = {
    to: tuCorreoElectronico,
    from: 'contacto-home@tupaellaadomicilio.com', // Reemplaza con una dirección válida
    subject: 'Nuevo Contacto desde la página de inicio',
    text: `Nombre: ${nombreHome}\nEmail: ${emailHome}\nMensaje: ${mensajeHome}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send({ message: 'Mensaje de contacto desde la página de inicio enviado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error al enviar el mensaje de contacto desde la página de inicio' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend (placeholder) escuchando en el puerto ${port}`);
});