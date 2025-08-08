"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BigScrollText = () => {
  const { scrollYProgress } = useScroll();

  // Escalar el texto desde 1 hasta 10 según el scroll (ajustá los valores)
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 10]);
  // Opacidad del texto para cuando termina la animación (opcional)
  const opacity = useTransform(scrollYProgress, [0.3, 0.35], [1, 0]);

  return (
    <section className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Texto gigante que escala */}
      <motion.h1
        style={{ scale, opacity }}
        className="font-extrabold text-white select-none text-[10vw] md:text-[15vw] lg:text-[20vw] leading-none whitespace-nowrap"
      >
        ELEGANCE
      </motion.h1>

      {/* Máscara para efecto "texto recortado" */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          WebkitMaskImage: "text", // Esta línea no funciona en todos los navegadores nativamente, por eso...
          maskImage: "text",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      >
        {/* Aquí puede ir la sección que queremos mostrar dentro del texto */}
        <div className="text-black bg-white w-full h-full flex items-center justify-center">
          <h2 className="text-6xl font-bold">Next Section Content</h2>
        </div>
      </div>
    </section>
  );
};

export default BigScrollText;
