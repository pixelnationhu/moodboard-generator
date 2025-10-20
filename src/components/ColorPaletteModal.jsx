import React, { useEffect, useState } from "react";
import ColorThief from "colorthief";
import { motion, AnimatePresence } from "framer-motion";

export default function ColorPaletteModal({ imageUrl, onClose }) {
  const [colors, setColors] = useState([]);
  const [copiedColor, setCopiedColor] = useState(null);

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    img.onload = () => {
      const colorThief = new ColorThief();
      const palette = colorThief.getPalette(img, 5);
      setColors(palette);
    };
  }, [imageUrl]);
// másolás
 const handleCopy = (color, index) => {
  const hex = "#" + color.map((c) => c.toString(16).padStart(2, "0")).join("");
  navigator.clipboard.writeText(hex);
  setCopiedColor(index);
  setTimeout(() => setCopiedColor(null), 1500);
};

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal box - Glassmorphism stílus */}
        <motion.div
          className="relative p-6 rounded-2xl shadow-2xl max-w-md w-full border border-white/20 bg-white/10 backdrop-blur-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          {/* Bezáró gomb */}
          <button
            onClick={onClose}
            className="absolute top-1 right-2 text-black/70 hover:text-white transition"
          >
            ✕
          </button>

          {/* Kép */}
          <img
            src={imageUrl}
            alt="palette source"
            className="rounded-lg mb-6 w-full object-cover shadow-lg"
          />

          {/* Színek */}
          <div className="flex justify-center flex-wrap gap-3">
            {colors.length > 0 ? (
              colors.map((color, index) => {
                const rgb = `rgb(${color.join(",")})`;
                return (
                  <motion.div
                    key={index}
                    onClick={() => handleCopy(color, index)}
                    whileHover={{ scale: 1.15 }}
                    className="relative w-14 h-14 rounded-full cursor-pointer border border-white/30 shadow-md transition-all"
                    style={{ backgroundColor: rgb }}
                    title="Kattints a másoláshoz"
                  >
                    {copiedColor === index && (
  <motion.span
    className="absolute inset-0 flex items-center justify-center text-lg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: [1, 1.2, 1] }}
    exit={{ opacity: 0, scale: 0.8 }}
  >
    ✓
  </motion.span>
)}

                  </motion.div>
                );
              })
            ) : (
              <p className="text-gray-200 text-sm">Analyzing colors...</p>
            )}
          </div>
          {/* 💡 kis infószöveg */}
<p className="text-center text-xs text-black/70 mt-4">
  💡 Kattints egy színre a másoláshoz
</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
