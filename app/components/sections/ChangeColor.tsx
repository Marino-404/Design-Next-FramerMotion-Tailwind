"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ToggleSwitch from "../ui/ToggleSwitch";
import { motion, useInView, useAnimation } from "framer-motion";

const ChangeColor = () => {
  const [activeSide, setActiveSide] = useState<"left" | "right">("left");
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const toggleSide = () => {
    setActiveSide((prev) => (prev === "left" ? "right" : "left"));
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const switchVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.8 } },
  };

  const colorsRight = ["#0E1F26", "#828C7D", "#BBBF9F", "#F2E4BB"];
  const colorsLeft = ["#457697", "#9EB9CA", "#3D2901", "#645100"];

  return (
    <section
      ref={ref}
      className="relative h-[100vh] w-full flex items-center justify-center bg-black overflow-x-hidden"
    >
      <div className="relative flex w-[60vw] max-w-full h-[60vh]">
        {/* Paleta izquierda (junto a la imagen izquierda) */}
        <div className="absolute left-[-6rem] top-1/2 -translate-y-1/2 flex flex-col items-center">
          {colorsRight.map((color, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-20 h-20 rounded-none transition-all duration-500 ${
                  activeSide === "left"
                    ? "opacity-100 filter-none"
                    : "opacity-40 grayscale"
                }`}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>

        {/* Imagen izquierda */}
        <motion.div
          className="relative w-1/2 h-full"
          variants={variants}
          initial="hidden"
          animate={controls}
        >
          <Image
            src="/img/left.jpg"
            alt="Left Image"
            fill
            style={{ objectFit: "cover" }}
            className={
              activeSide === "left" ? "filter-none" : "filter grayscale"
            }
            priority
          />
        </motion.div>

        {/* Imagen derecha */}
        <motion.div
          className="relative w-1/2 h-full"
          variants={variants}
          initial="hidden"
          animate={controls}
        >
          <Image
            src="/img/right.jpg"
            alt="Right Image"
            fill
            style={{ objectFit: "cover" }}
            className={
              activeSide === "right" ? "filter-none" : "filter grayscale"
            }
            priority
          />

          {/* Paleta derecha (junto a la imagen derecha) */}
          <div className="absolute right-[-6rem] top-1/2 -translate-y-1/2 flex flex-col items-center">
            {colorsLeft.map((color, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-20 h-20 rounded-none transition-all duration-500 ${
                    activeSide === "right"
                      ? "opacity-100 filter-none"
                      : "opacity-40 grayscale"
                  }`}
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Switch en el centro */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
        variants={switchVariants}
        initial="hidden"
        animate={controls}
      >
        <ToggleSwitch isOn={activeSide === "left"} toggle={toggleSide} />
      </motion.div>
    </section>
  );
};

export default ChangeColor;
