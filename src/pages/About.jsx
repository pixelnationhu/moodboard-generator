import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto text-center py-20 px-6 text-gray-700 dark:text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-400">
        About Moodboard Generator
      </h1>

      <p className="mb-6 leading-relaxed text-black">
        Ez az alkalmazás azért készült, hogy gyorsan találj inspirációt színekhez, hangulatokhoz és stílusokhoz.
        A képek az <span className="font-semibold">Unsplash API</span>-ról érkeznek, és automatikus színpaletták generálódnak hozzájuk.
      </p>

      <p className="mb-6 leading-relaxed text-black">
        Készítette: <span className="font-semibold">Elisa</span> 🎨  
        – grafikus, webdesigner és front-end fejlesztő.
      </p>

      <a
        href="https://pixelnation.hu"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white rounded-full shadow-md hover:shadow-lg transition"
      >
        🌐 pixelnation.hu
      </a>
    </motion.div>
  );
}
