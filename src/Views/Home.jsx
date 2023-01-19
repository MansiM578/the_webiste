import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Experts from "../components/Experts";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Experts />
      <Cards />
      <Hero />

      <Footer />
    </>
  );
}
