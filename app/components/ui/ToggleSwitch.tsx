"use client";

import { motion } from "framer-motion";

interface ToggleSwitchProps {
  isOn: boolean;
  toggle: () => void;
}

export default function ToggleSwitch({ isOn, toggle }: ToggleSwitchProps) {
  return (
    <button
      className="toggle-container"
      style={{
        ...container,
        justifyContent: isOn ? "flex-start" : "flex-end",
      }}
      onClick={toggle}
      aria-label="Toggle switch"
    >
      <motion.div
        className="toggle-handle"
        style={handle}
        layout
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}

const container = {
  width: 100,
  height: 50,
  backgroundColor: "var(--hue-3-transparent, #ddd)",
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  padding: 5,
};

const handle = {
  width: 40,
  height: 40,
  backgroundColor: "#2b2b2bff",
  borderRadius: "50%",
};
