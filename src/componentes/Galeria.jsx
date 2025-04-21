import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import paellaImages from "./Imagenes.jsx";// Importa el array de imágenes
import { useState, useEffect, useRef } from "react";

const Galeria = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const modalRef = useRef(null);

    // Animaciones (el resto del código está correcto)
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.05, y: -5, transition: { duration: 0.3 } },
        tap: { scale: 0.95 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };
    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
        // Puedes optar por abrir una nueva ventana en lugar de un modal
        // window.open(image.src, "_blank", "noopener,noreferrer");
    };
    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    // Cierra el modal al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalOpen && modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalOpen, modalRef]);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-5 p-4"
        >
            <h2 className="text-center mb-4 display-4">Descubre Nuestras Paellas</h2>
            <hr />
            <Row className="g-4">
                {paellaImages.map((image) => (
                    <Col key={image.id} xs={12} md={6} lg={4}>
                        <motion.div
                            variants={imageVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="position-relative"
                            style={{ overflow: "hidden", borderRadius: "15px" }}
                            onClick={() => openModal(image)} // Abre el modal al hacer clic
                        >
                            <motion.img
                                src={image.src}
                                alt={image.alt}
                                className="img-fluid w-100"
                                style={{
                                    cursor: "pointer",
                                    filter: "brightness(0.95)",
                                    borderRadius: "15px",
                                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                                    maxHeight: "200px", // Establece un tamaño máximo para las imágenes en la galería
                                    objectFit: "cover", // Asegura que la imagen cubra el contenedor sin deformarse
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />

                            <motion.div
                                className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                                style={{
                                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                                }}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <h5 className="mb-0">{image.alt}</h5>
                            </motion.div>
                        </motion.div>
                    </Col>
                ))}
            </Row>
            {/* Modal para mostrar la imagen grande */}
            {modalOpen && selectedImage && (
                <div
                    className="modal fade show"
                    style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
                    onClick={closeModal} // Cierra el modal al hacer clic en el fondo oscuro
                >
                    <div className="modal-dialog modal-dialog-centered modal-lh-sm" ref={modalRef}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedImage.alt}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeModal}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="img-fluid mb-3"
                                />
                                {selectedImage.description && <p>{selectedImage.description}</p>} {/* Muestra la descripción si existe */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};
export default Galeria;