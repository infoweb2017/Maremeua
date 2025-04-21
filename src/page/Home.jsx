import React from "react";
import FormHome from '../componentes/FormHome';
import FraseFinalCarrusel from "../componentes/FraseFinalCarrusel";
import PaellaGallery from "../componentes/Galeria";
import HeroSection from "../componentes/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />

      {/* Introducción Llamativa */}
      <section className="container mt-5">
        <div className="bg-light p-5 rounded shadow-sm text-center">
          <h2>Pasión por la Paella, Directo a Tu Mesa</h2>
          <p className="lead">
            En Maremeua, somos artesanos de la paella en Valencia. Nos dedicamos a preservar
            la tradición y a llevar el sabor auténtico de nuestros arroces a tu hogar y eventos,
            utilizando los mejores ingredientes y todo nuestro cariño.
          </p>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="container mt-5 py-5 bg-light rounded">
        <h2 className="text-center mb-4">¿Por Qué Elegirnos?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-basket display-4 text-success mb-3"></i>
            <h4>Ingredientes Frescos y de Calidad</h4>
            <p>Seleccionamos cuidadosamente ingredientes frescos de proveedores locales y de confianza para garantizar un sabor auténtico y la mejor calidad en cada paella.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-award-fill display-4 text-success mb-3"></i>
            <h4>Recetas Tradicionales con un Toque Personal</h4>
            <p>Nuestras paellas se elaboran siguiendo recetas tradicionales transmitidas de generación en generación, pero con nuestro toque especial que las hace únicas y deliciosas.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-truck display-4 text-success mb-3"></i>
            <h4>Entrega Rápida y Puntual en Valencia y Alrededores</h4>
            <p>Nos comprometemos a entregar tu paella caliente y a tiempo, directamente en tu hogar o lugar del evento en toda el área de Valencia y sus alrededores.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-people-fill display-4 text-success mb-3"></i>
            <h4>Ideal para Cualquier Ocasión</h4>
            <p>Ya sea una comida familiar, una celebración especial o un evento corporativo, nuestras paellas son la elección perfecta para compartir momentos inolvidables.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-chat-dots-fill display-4 text-success mb-3"></i>
            <h4>Atención al Cliente Personalizada</h4>
            <p>Ofrecemos un servicio de atención al cliente cercano y personalizado para ayudarte a elegir la paella perfecta y resolver cualquier duda que puedas tener.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-box-seam-fill display-4 text-success mb-3"></i>
            <h4>Opciones para Todos los Gustos</h4>
            <p>Disponemos de una variedad de paellas para satisfacer todos los paladares, desde la clásica valenciana hasta opciones de marisco y vegetarianas (si las ofreces).</p>
          </div>
        </div>
      </section>

      {/* Galería de Paellas */}
      <PaellaGallery />

      {/* Contacto */}
      <section className="container mt-5 mb-5">
        <h2 className="text-center">Contáctanos</h2>
        <FormHome /> {/* Aquí se renderiza el componente del formulario */}
      </section>

      {/* Nuestros Servicios */}
      <section className="container mt-2 mb-5">
        <h2 className="text-center">Nuestros Servicios</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-house-door-fill display-4 text-warning"></i>
            <h4>Paellas a Domicilio</h4>
            <p>Disfruta de una paella casera sin salir de casa.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-people-fill display-4 text-warning"></i>
            <h4>Eventos Especiales</h4>
            <p>Ofrecemos catering para bodas, reuniones y fiestas.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-star-fill display-4 text-warning"></i>
            <h4>Calidad Garantizada</h4>
            <p>Solo usamos ingredientes frescos y recetas auténticas.</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      {/*<div className="testimonios-container">*/}
      <FraseFinalCarrusel />
      {/*</div>*/}
    </>
  );
}

export default Home;
