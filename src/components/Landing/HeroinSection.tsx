import React from "react";

function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex items-center justify-center h-full relative z-10 text-center text-white">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Tu Título Aquí
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Aquí va el texto que describe tu sección hero. Puede ser un mensaje
            inspirador o una breve descripción.
          </p>
          <a
            href="#your-link"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Tu Botón
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
