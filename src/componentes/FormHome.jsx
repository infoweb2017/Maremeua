//componentes/FormHome.jsx

import React, { useState } from 'react';

function FormHome() {
    const [formData, setFormData] = useState({
        nombreHome: '',
        emailHome: '',
        mensajeHome: '',
    });

    const [mensajeEstado, setMensajeEstado] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/enviar-contacto-home', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.message) {
                setMensajeEstado('Mensaje enviado correctamente desde la página de inicio');
                setFormData({ nombreHome: '', emailHome: '', mensajeHome: '' }); // Limpiar el formulario
            } else {
                setMensajeEstado('Error al enviar el mensaje desde la página de inicio');
            }
        } catch (error) {
            console.error('Error al enviar el mensaje desde la página de inicio:', error);
            setMensajeEstado('Error al conectar con el servidor');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="text-center" onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="nombreHome"
                    placeholder="Tu nombre"
                    value={formData.nombreHome}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    name="emailHome"
                    placeholder="Tu correo"
                    value={formData.emailHome}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    rows="3"
                    name="mensajeHome"
                    placeholder="Tu mensaje"
                    value={formData.mensajeHome}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-warning" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {mensajeEstado && <p className="mt-3">{mensajeEstado}</p>}
        </form>
    );
}

export default FormHome; 