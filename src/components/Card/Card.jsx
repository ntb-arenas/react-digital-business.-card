import React from "react";
import "./Card.scss";
import About from "../About/About";
import Info from "../Info/Info";
import Interests from "../Interests/Interests";
import Footer from "../Footer/Footer";

export default function Card() {
  return (
    <div className="card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
