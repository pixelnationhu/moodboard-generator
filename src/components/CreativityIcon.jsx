import React from "react";
import { motion } from "framer-motion";

export default function CreativityIcon({ size = 48 }) {
  return (
    <motion.div
      whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {}
      <img
        src="https://www.svgrepo.com/show/444451/gui-palette.svg"
        alt="Creativity Icon"
        width={size}
        height={size}
        className="drop-shadow-md hover:drop-shadow-lg transition-all"
      />
    </motion.div>
  );
}
