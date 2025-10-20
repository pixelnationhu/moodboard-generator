import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ColorPaletteModal from "./ColorPaletteModal";

const ACCESS_KEY = "eFUdZ7GWGtvPPL4WE64Fgjt0dnQgYYq20Y_7bLKFLls";

export default function ImageGrid({ query }) {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // === Képek betöltése az Unsplash API-ról ===
  useEffect(() => {
    const fetchImages = async () => {
      if (!query) return;
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=24&client_id=${ACCESS_KEY}`
        );
        const data = await response.json();
        setImages(data.results || []);
      } catch (err) {
        setError("Nem sikerült betölteni a képeket.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query]);

  return (
    <>
      {loading && (
        <p className="text-gray-400 text-center mt-10 animate-pulse">
          Képek betöltése folyamatban...
        </p>
      )}

      {error && <p className="text-red-500 text-center mt-10">{error}</p>}

      {!loading && !error && (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {images.length > 0 ? (
            images.map((img, index) => (
              <motion.div
                key={img.id}
                className="mb-4 relative overflow-hidden rounded-2xl group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.img
                  src={img.urls.small}
                  alt={img.alt_description}
                  className="w-full h-auto rounded-2xl object-cover will-change-transform"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  onClick={() => setSelectedImage(img.urls.small)}
                />

                {/* Hover overlay */}
                <motion.div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white text-sm font-medium bg-white/20 px-3 py-1 rounded-full hover:bg-white/40 transition">
                    🎨 Nézd meg a palettát
                  </span>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-center mt-10">
              Nincs találat 🙃 Próbálj másik kulcsszót!
            </p>
          )}
        </div>
      )}

      {/* === Színpaletta modal === */}
      {selectedImage && (
        <ColorPaletteModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
