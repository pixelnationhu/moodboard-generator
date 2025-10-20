import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import ColorPaletteModal from "./components/ColorPaletteModal";
import About from "./pages/About";

function App() {
  const [query, setQuery] = useState("pastel aesthetic");
  const [selectedImage, setSelectedImage] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // 🌗 Dark mode kezelése
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-gray-100 transition-colors duration-700">

        {/* ===== HÁTTÉR GLOW ANIMÁCIÓ ===== */}
        <motion.div
          className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-pink-300/40 dark:bg-indigo-600/30 rounded-full blur-[160px]"
          animate={{ x: [0, 50, -50, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-300/40 dark:bg-blue-700/20 rounded-full blur-[180px]"
          animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ===== NAVBAR ===== */}
        <header className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/40 dark:bg-black/20 shadow-sm flex justify-between items-center px-6 py-3 z-50 transition-colors duration-500">
          <Link
            to="/"
            className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-400"
          >
            Moodboard
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition"
            >
              About
            </Link>

            {/* 🌙 / ☀️ DARK MODE TOGGLE */}
            <motion.button
              onClick={() => setDarkMode((prev) => !prev)}
              className="ml-4 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full p-2 shadow-md hover:scale-110 transition"
              whileTap={{ scale: 0.9 }}
              title="Váltás világos/sötét mód között"
            >
              {darkMode ? "🌞" : "🌙"}
            </motion.button>
          </nav>
        </header>

        {/* ===== OLDALTARTALOM ===== */}
        <main className="pt-24">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    query={query}
                    setQuery={setQuery}
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                  />
                  <motion.div
                    className="relative z-10 px-4 pb-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <ImageGrid query={query} setSelectedImage={setSelectedImage} />
                  </motion.div>

                  {selectedImage && (
                    <ColorPaletteModal
                      imageUrl={selectedImage}
                      onClose={() => setSelectedImage(null)}
                    />
                  )}
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="relative z-20 text-center text-sm text-gray-500 dark:text-gray-400 py-10 transition-colors duration-500">
          <p className="font-light">
            Made with 💖 by{" "}
            <a
              href="https://pixelnation.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 font-medium hover:text-pink-600 transition"
            >
              Pixelnation
            </a>{" "}
            · 2025
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
