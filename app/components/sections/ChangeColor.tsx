"use client";
import React, { useState } from "react";
import Image from "next/image";
import ToggleSwitch from "../ui/ToggleSwitch";

const ChangeColor = () => {
  const [activeSide, setActiveSide] = useState<"left" | "right">("left");

  const toggleSide = () => {
    setActiveSide((prev) => (prev === "left" ? "right" : "left"));
  };

  return (
    <section className="relative h-screen w-screen flex items-center justify-center bg-black">
      <div className="relative flex w-[80vw] h-[80vh]">
        <div className="relative w-1/2 h-full">
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
        </div>

        <div className="relative w-1/2 h-full">
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
        </div>
      </div>

      {/* Switcher centrado en pantalla */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <ToggleSwitch isOn={activeSide === "left"} toggle={toggleSide} />
      </div>
    </section>
  );
};

export default ChangeColor;
