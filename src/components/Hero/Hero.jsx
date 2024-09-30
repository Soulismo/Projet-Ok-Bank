import React from "react";
import bankTree from "../Hero/pourquoi.jpeg"; // Ajustez le chemin selon vos besoins

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${bankTree})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px", // Ajustez la hauteur selon vos besoins
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="hero" style={heroStyle}>
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default Hero;
