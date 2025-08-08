"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  // Primera sección
  const yImg1 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacityImg1 = useTransform(scrollY, [0, 300], [1, 0]);
  const yText1 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacityText1 = useTransform(scrollY, [0, 300], [1, 0]);

  // Segunda sección
  const yImg2 = useTransform(scrollY, [200, 700], [0, -250]);
  const opacityImg2 = useTransform(scrollY, [200, 700], [0, 1]);
  const yText2 = useTransform(scrollY, [200, 700], [50, 0]);
  const opacityText2 = useTransform(scrollY, [200, 700], [0, 1]);

  return (
    <>
      {/* Primera sección */}
      <motion.section
        style={{ y: yImg1, opacity: opacityImg1 }}
        className="relative h-[100vh] w-full bg-black flex items-center justify-center"
      >
        <div className="flex w-[70%] gap-12 items-center overflow-visible">
          <Image src="/img/hero1.jpg" alt="" width={650} height={800} />
          <motion.div
            style={{ y: yText1, opacity: opacityText1 }}
            className="max-w-auto text-white font-bold text-left"
          >
            <h1 className="text-6xl md:text-9xl">
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
        className="relative z-20 h-[100vh] w-full bg-black flex items-center justify-center"
      >
        <div className="relative flex h-[100vh] w-[70%] gap-16 items-center justify-center overflow-visible">
          <motion.div
            style={{ y: yText2, opacity: opacityText2 }}
            className="w-1/2 text-white font-bold text-end"
          >
            <h1 className="text-6xl md:text-9xl">
              Timeless{" "}
              <span className="font-light text-[#F2CED1]">elegance</span>{" "}
              <span className="text-gray-300">in every</span>
              <br />
              <span className="font-light text-[#CA8D93]">frame.</span>
            </h1>
          </motion.div>

          <div className="relative" style={{ overflow: "visible" }}>
            <Image src="/img/hero2.jpg" alt="" width={650} height={800} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
