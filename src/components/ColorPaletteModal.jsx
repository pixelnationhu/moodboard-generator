import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ColorThief from "colorthief";

export default function ColorPaletteModal({ imageUrl, onClose }) {
  const [colors, setColors] = useState([]);
  const [copiedColor, setCopiedColor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imageUrl) return;
    console.log("🟣 Modal megnyílt, imageUrl:", imageUrl);

    async function analyzeColors() {
      try {
        console.log("🔵 Kép lekérése indul...");
        const res = await fetch(imageUrl);
        console.log("🟢 Fetch státusz:", res.status, res.ok);

        const blob = await res.blob();
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = URL.createObjectURL(blob);

        img.onload = () => {
          console.log("🟡 Kép betöltve, ColorThief indul (async)...");

          
          setTimeout(() => {
            try {
              const colorThief = new ColorThief();
              const palette = colorThief.getPalette(img, 5);
              console.log("✅ Paletta:", palette);
              setColors(palette);
            } catch (err) {
              console.error("❌ ColorThief hiba:", err);
            } finally {
              setLoading(false);
              URL.revokeObjectURL(img.src);
            }
          }, 0);
        };

        img.onerror = (e) => {
          console.error("❌ Kép betöltési hiba:", e);
          setLoading(false);
        };
      } catch (err) {
        console.error("❌ Színpaletta hiba:", err);
        setLoading(false);
      }
    }

    analyzeColors();
  }, [imageUrl]);

  const handleCopy = (color, index) => {
    const hex =
      "#" + color.map((c) => c.toString(16).padStart(2, "0")).join("");
    navigator.clipboard.writeText(hex);
    setCopiedColor(index);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative p-6 rounded-2xl shadow-2xl max-w-md w-full border border-white/20 bg-white/10 backdrop-blur-xl text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-700 hover:text-black transition text-lg"
          >
            ✕
          </button>

          {loading ? (
            <p className="text-black-200 text-sm animate-pulse py-10">
              Keresem a színeket.. Kérek egy pillanatot 🎨 
            </p>
          ) : (
            <>
              <img
                src={imageUrl}
                alt="palette"
                className="rounded-lg mb-6 w-full object-cover shadow-lg"
              />

              <div className="flex justify-center flex-wrap gap-4">
                {colors.length > 0 ? (
                  colors.map((color, index) => {
                    const hex =
                      "#" +
                      color
                        .map((c) => c.toString(16).padStart(2, "0"))
                        .join("");
                    return (
                      <motion.div
                        key={index}
                        onClick={() => handleCopy(color, index)}
                        whileHover={{ scale: 1.15 }}
                        className="relative flex flex-col items-center gap-1 cursor-pointer"
                      >
                        <div
                          className="w-14 h-14 rounded-full border border-white/30 shadow-md"
                          style={{ backgroundColor: hex }}
                        >
                          {copiedColor === index && (
                            <motion.span
                              className="absolute inset-0 flex items-center justify-center text-lg text-white"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              ✓
                            </motion.span>
                          )}
                        </div>
                        <span className="text-xs text-gray-700">{hex}</span>
                      </motion.div>
                    );
                  })
                ) : (
                  <p className="text-gray-300 text-sm">
                    Nem sikerült színeket kinyerni 😕
                  </p>
                )}
              </div>
            </>
          )}

          <p className="text-center text-xs text-black/70 mt-4">
            💡 Kattints egy színre a másoláshoz
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
