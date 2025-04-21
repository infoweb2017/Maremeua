import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./componentes/Header";
import Home from "./page/Home";
import About from "./page/About";
import Service from "./page/ServiciosPaella";
import Contacto from "./page/Contacto";
import Reserva from "./page/Reserva";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";
import WhatsappButton from "./componentes/WhatsappButton";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <Banner />
      <Header />
      
      <div className="container-fluid mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/reservar-evento" element={<Reserva/>}/>
        </Routes>
      </div>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
