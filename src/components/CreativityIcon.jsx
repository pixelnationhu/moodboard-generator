import React from "react";
import { motion } from "framer-motion";

export default function CreativityIcon({ size = 48 }) {
  return (
    <motion.div
      whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* SVG beillesztése a public/icons mappából */}
      <img
        src="/icons/creativity.svg"
        alt="Creativity Icon"
        width={size}
        height={size}
        className="drop-shadow-md hover:drop-shadow-lg transition-all"
      />
    </motion.div>
  );
}
