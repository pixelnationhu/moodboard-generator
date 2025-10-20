import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CreativityIcon from "./CreativityIcon";

export default function Header({ query, setQuery, darkMode, setDarkMode }) {



  return (
    <motion.header
      className="relative flex flex-col items-center justify-center text-center py-12 px-4 transition-colors duration-500"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      {/* ===== CÍM + IKON ===== */}
      <motion.div
        className="flex items-center justify-center gap-3 mb-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <CreativityIcon className="w-10 h-10 sm:w-12 sm:h-12" />
        </motion.div>

        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-400 drop-shadow-md">
          Moodboard Generator
        </h1>
      </motion.div>

      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 mb-8">
        Találd meg az inspirációdat pillanatok alatt ✨
      </p>

      {/* ===== KERESŐSÁV ===== */}
<div
  className="flex items-center bg-white/30 dark:bg-white/10 backdrop-blur-2xl shadow-lg rounded-full px-3 py-2 w-full max-w-md border border-white/30 dark:border-white/20 transition-all duration-300"
>
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="pl. pastel aesthetic, cozy cafe, nature vibes..."
    className="flex-1 bg-transparent outline-none px-3 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
  />

  {/* 🔍 Keresés gomb */}
  <motion.button
    className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-medium px-5 py-2 rounded-full text-sm shadow-md hover:shadow-lg hover:from-pink-400 hover:to-fuchsia-400 transition"
    whileTap={{ scale: 0.92 }}
  >
    Keresés
  </motion.button>

  {/* 🎲 Véletlen keresés */}
  <motion.button
    onClick={() => {
      const randomQueries = [
        "pastel aesthetic",
        "vintage fashion",
        "modern interior",
        "cozy cafe",
        "nature photography",
        "abstract art",
        "minimal design",
        "street photography",
        "boho home",
        "retro vibes",
        "colorful gradients",
      ];
      const random =
        randomQueries[Math.floor(Math.random() * randomQueries.length)];
      setQuery(random);
    }}
    className="ml-2 bg-white/40 dark:bg-white/20 backdrop-blur-xl border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm shadow-sm hover:bg-white/50 dark:hover:bg-white/30 hover:scale-105 transition-all duration-200"
    whileTap={{ scale: 0.9 }}
  >
    🎲 Véletlen
  </motion.button>
</div>


     
    </motion.header>
  );
}
