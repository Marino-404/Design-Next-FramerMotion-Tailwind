"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  // Primera sección
  const yImg1 = useTransform(scrollY, [0, 500], ["0vh", "-20vh"]);
  const opacityImg1 = useTransform(scrollY, [0, 300], [1, 0]);
  const yText1 = useTransform(scrollY, [0, 300], ["0vh", "5vh"]);
  const opacityText1 = useTransform(scrollY, [0, 300], [1, 0]);

  // Segunda sección
  const yImg2 = useTransform(scrollY, [200, 700], ["0vh", "-25vh"]);
  const opacityImg2 = useTransform(scrollY, [200, 700], [0, 1]);
  const yText2 = useTransform(scrollY, [200, 700], ["5vh", "0vh"]);
  const opacityText2 = useTransform(scrollY, [200, 700], [0, 1]);

  return (
    <>
      {/* Primera sección */}
      <motion.section
        style={{ y: yImg1, opacity: opacityImg1 }}
        className="relative h-screen w-full bg-black flex items-center justify-center"
      >
        <div className="flex w-full max-w-[1400px] gap-12 items-center px-4">
          {/* Imagen fija */}
          <div className="relative w-[650px] aspect-[650/800] flex-shrink-0">
            <Image
              src="/img/hero1.jpg"
              alt="Hero 1"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Texto + línea vertical */}
          <motion.div
            style={{ y: yText1, opacity: opacityText1 }}
            className="flex items-center text-white font-bold text-left gap-6 border-r-2 border-[#6FA696]"
          >
            <h1 className="text-5xl md:text-6xl lg:text-9xl">
              Timeless{" "}
              <span className="font-light text-[#6FA696]">elegance</span>{" "}
              <span className="text-gray-300">in every</span>
              <br />
              <span className="font-light text-[#41645B]">frame.</span>
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Segunda sección */}
      <motion.section
        style={{ y: yImg2, opacity: opacityImg2 }}
        className="relative z-20 h-screen w-full bg-black flex items-center justify-center"
      >
        <div className="flex w-full max-w-[1400px] gap-12 items-center justify-center px-4 ">
          {/* Texto */}
          <motion.div
            style={{ y: yText2, opacity: opacityText2 }}
            className="w-1/2 text-white font-bold text-end border-l-2 border-[#CA8D93]"
          >
            <h1 className="text-5xl md:text-6xl lg:text-9xl">
              Timeless{" "}
              <span className="font-light text-[#F2CED1]">elegance</span>{" "}
              <span className="text-gray-300">in every</span>
              <br />
              <span className="font-light text-[#CA8D93]">frame.</span>
            </h1>
          </motion.div>

          {/* Imagen fija */}
          <div className="relative w-[650px] aspect-[650/800] flex-shrink-0">
            <Image
              src="/img/hero2.jpg"
              alt="Hero 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
