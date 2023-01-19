import React from "react";

import About from "./Views/About";

import Home from "./Views/Home";
import Services from "./Views/Services";
import Clients from "./Views/Clients";
import Products from "./Views/Products";
import Faq from "./Views/Faq";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contacts from "./Views/Contacts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React from "react";
// import Cards from "./components/Cards";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Banner from "./components/Banner";

// import Experts from "./components/Experts";
// import Hero from "./components/Hero";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// function App() {
//   return (
//     <>
//       <Header />
//       <Banner />
//       <Experts />
//       <Cards />
//       <Hero />

//       <Footer />
//     </>
//   );
// }

// export default App;
