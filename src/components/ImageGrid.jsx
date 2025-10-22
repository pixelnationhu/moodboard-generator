import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ColorPaletteModal from "./ColorPaletteModal";
import { sendEvent } from "../analytics";

const ACCESS_KEY = "eFUdZ7GWGtvPPL4WE64Fgjt0dnQgYYq20Y_7bLKFLls";

export default function ImageGrid({ query }) {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        <p className="text-black-400 text-center mt-10 animate-pulse">
          Képek betöltése folyamatban...
        </p>
      )}

      {error && <p className="text-red-500 text-center mt-10">{error}</p>}

      {!loading && !error && (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4 sm:gap-6
            px-3 sm:px-6 md:px-10
            max-w-7xl mx-auto
            transition-all duration-300
          "
        >
          {images.length > 0 ? (
            images.map((img, index) => (
              <motion.div
                key={img.id}
                className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <motion.img
                  src={img.urls.small}
                  alt={img.alt_description || "Moodboard kép"}
                  className="w-full h-[250px] sm:h-[280px] md:h-[300px] object-cover rounded-2xl will-change-transform transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  loading="lazy"
                />

                {}
                <motion.div
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                  onClick={() => {
                    const proxiedUrl = `${
                      window.location.origin
                    }/moodboard/proxy.php?url=${encodeURIComponent(
                      img.urls.raw + "&w=800&h=600&fit=crop"
                    )}`;
                    console.log("🎨 Paletta gomb megnyomva:", proxiedUrl);
                    setSelectedImage(proxiedUrl);

                    sendEvent("palette_click", {
                      query,
                      imageUrl: proxiedUrl,
                      description: img.alt_description || "Nincs leírás",
                    });
                  }}
                >
                  <span className="text-white text-sm sm:text-base font-medium bg-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:bg-white/50 transition">
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

      

      {selectedImage && (
        <ColorPaletteModal
          key={selectedImage}
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
