import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header.jsx";
import ImageGrid from "./components/ImageGrid.jsx";
import ColorPaletteModal from "./components/ColorPaletteModal.jsx";
import About from "./pages/About.jsx";
import HowToUse from "./pages/HowToUse.jsx";
import { HelmetProvider } from "react-helmet-async";
import BackgroundBlobs from "./components/BackgroundBlobs.jsx";

function App() {
  const [query, setQuery] = useState("Aesthetic");
  const [selectedImage, setSelectedImage] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <HelmetProvider>
      <Router basename="/moodboard">
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-gray-100 transition-colors duration-700">

          {}
          <BackgroundBlobs />

          {}
          <header className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/40 dark:bg-black/20 shadow-sm px-6 py-3 z-50 transition-colors duration-500 flex justify-between items-center">
            {}
            <Link
              to="/"
              className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-400"
              onClick={() => setMenuOpen(false)}
            >
              Moodboard
            </Link>

            {}
            <div className="flex items-center gap-4">
              {}
              <div className="flex items-center gap-3 sm:hidden">
                {}
                <motion.button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="relative w-10 h-10 flex flex-col justify-center items-center group focus:outline-none bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full shadow-md hover:scale-110 transition"
                  whileTap={{ scale: 0.9 }}
                  title="Menü"
                >
                  <motion.span
                    className="absolute bg-gray-800 dark:bg-gray-200 h-[2px] w-5 rounded transition-all duration-300"
                    animate={{
                      rotate: menuOpen ? 45 : 0,
                      y: menuOpen ? 0 : -5,
                      backgroundColor: menuOpen ? "#ec4899" : "",
                    }}
                  />
                  <motion.span
                    className="absolute bg-gray-800 dark:bg-gray-200 h-[2px] w-5 rounded transition-all duration-300"
                    animate={{
                      rotate: menuOpen ? -45 : 0,
                      y: menuOpen ? 0 : 5,
                      backgroundColor: menuOpen ? "#ec4899" : "",
                    }}
                  />
                </motion.button>

                {}
                <motion.button
                  onClick={() => setDarkMode((prev) => !prev)}
                  className="bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full p-2 shadow-md hover:scale-110 transition"
                  whileTap={{ scale: 0.9 }}
                  title="Váltás világos/sötét mód között"
                >
                  {darkMode ? "🌞" : "🌙"}
                </motion.button>
              </div>

              {}
              <nav className="hidden sm:flex items-center gap-4 text-sm">
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
                <Link
                  to="/howtouse"
                  className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition"
                >
                  Hogyan használd?
                </Link>

                {}
                <motion.button
                  onClick={() => setDarkMode((prev) => !prev)}
                  className="hidden sm:block bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full p-2 shadow-md hover:scale-110 transition ml-4"
                  whileTap={{ scale: 0.9 }}
                  title="Váltás világos/sötét mód között"
                >
                  {darkMode ? "🌞" : "🌙"}
                </motion.button>
              </nav>
            </div>
          </header>

          {}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="sm:hidden fixed top-[64px] left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-lg z-40 flex flex-col items-center gap-4 py-6"
              >
                <Link
                  to="/"
                  className="text-gray-800 dark:text-gray-200 text-lg hover:text-pink-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-800 dark:text-gray-200 text-lg hover:text-pink-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/howtouse"
                  className="text-gray-800 dark:text-gray-200 text-lg hover:text-pink-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Hogyan használd?
                </Link>
              </motion.nav>
            )}
          </AnimatePresence>

          {}
          <main className="pt-24 relative z-10">
            <Routes>
              <Route
                index
                element={
                  <>
                    <Header query={query} setQuery={setQuery} />
                    <motion.div
                      className="relative z-10 px-4 pb-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <ImageGrid
                        query={query}
                        setSelectedImage={setSelectedImage}
                      />
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
              <Route path="/howtouse" element={<HowToUse />} />
            </Routes>
          </main>

          {}
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
    </HelmetProvider>
  );
}

export default App;
