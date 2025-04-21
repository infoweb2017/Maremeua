import React from "react";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion"; // Importa motion
import slider1 from "../assets/IMG_9549.JPG";
import slider2 from "../assets/IMG_5866.PNG";
import slider3 from "../assets/IMG_9554.PNG";
import paellaParaLlevar from "../assets/IMG_9552.PNG";
import "../css/HeroSection.css";

export const HeroSection = () => {
    // Define las variantes de animación para las imágenes
    const imageVariants = {
        initial: { opacity: 0, scale: 1 }, // Empezamos con la escala normal
        animate: {
            opacity: 1,
            scale: 1.1, // Un ligero acercamiento
            transition: {
                duration: 5, // Duración de un ciclo de la animación (ida y vuelta)
                yoyo: Infinity, // Repite la animación infinitamente en ambas direcciones
                ease: "easeInOut", // Suaviza la animación
            },
        },
        exit: { opacity: 0, scale: 1 }, // Volvemos a la escala normal al salir
    };

    // Define las variantes de animación para el texto
    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    return (
        <Carousel fade interval={4000} className="hero-slider">
            <Carousel.Item>
                <div className="carousel-item-container">
                    <motion.img
                        key="slider1"
                        className="d-block w-100"
                        src={slider1}
                        alt="Paella a domicilio y para eventos"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className="overlay"></div>
                    <Carousel.Caption>
                        <motion.h1 variants={textVariants} initial="initial" animate="animate" exit="exit" className="hero-caption-title">
                            Paellas auténticas, donde quieras y cuando quieras
                        </motion.h1>
                        <motion.p variants={textVariants} initial="initial" animate="animate" exit="exit" className="hero-caption-text">
                            Saborea la tradición con nuestros expertos, ya sea en casa o en tu evento.
                        </motion.p>
                        <motion.a
                            className={'btn btn-warning btn-lg hero-caption-button'}
                            href="/reservar-evento"
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            ¡Haz tu reserva ahora!
                        </motion.a>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="carousel-item-container">
                    <motion.img
                        key="slider2"
                        className="d-block w-100"
                        src={slider2}
                        alt="Paella de mariscos fresca"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className="overlay"></div>
                    <Carousel.Caption>
                        <motion.h1 variants={textVariants} initial="initial" animate="animate" exit="exit" className="hero-caption-title">
                            Paellas de mariscos con ingredientes frescos del Mediterráneo
                        </motion.h1>
                        <motion.p variants={textVariants} initial="initial" animate="animate" exit="exit" className="hero-caption-text">
                            Un toque del mar en cada bocado, con la calidad que mereces.
                        </motion.p>
                        <motion.a
                            className={'btn btn-warning btn-lg hero-caption-button'}
                            href="/contact"
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            Ver carta
                        </motion.a>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="carousel-item-container">
                    <motion.img
                        key="slider3"
                        className="d-block w-100"
                        src={slider3}
                        alt="Paella para eventos y celebraciones"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className="overlay"></div>
                    <Carousel.Caption>
                        <motion.h1 variants={textVariants} initial="initial" animate="animate" exit="exit" className="hero-caption-title">
                            El sabor auténtico en tus eventos y celebraciones
                        </motion.h1>
                        <motion.p variants={textVariants} initial="initial" animate="animate" exit="exit" className="hero-caption-text">
                            Sorprende a tus invitados con una paella tradicional inolvidable.
                        </motion.p>
                        <motion.a
                            className={'btn btn-warning btn-lg hero-caption-button'}
                            href="/reservar-evento"
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            ¡Prueba nuestro arroz!
                        </motion.a>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>

            {/* Nuevo slide para el servicio para llevar con animación */}
            <Carousel.Item>
                <div className="carousel-item-container">
                    <motion.img
                        key="slider4"
                        className="d-block w-100"
                        src={paellaParaLlevar}
                        alt="Paella lista para llevar"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className="overlay"></div>
                    <Carousel.Caption>
                        <motion.h1 variants={textVariants} initial="initial" animate="animate" exit="exit" className="hero-caption-title">
                            Disfruta en casa: Paellas listas para llevar
                        </motion.h1>
                        <motion.p variants={textVariants} initial="initial" animate="animate" exit="exit" className="hero-caption-text">
                            El sabor auténtico de nuestras paellas, recién hechas y listas cuando tú lo necesites.
                        </motion.p>
                        <motion.a
                            className={'btn btn-warning btn-lg hero-caption-button'}
                            href="/service"
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            Ver menú para llevar
                        </motion.a>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroSection;