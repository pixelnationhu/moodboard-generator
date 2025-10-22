import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HowToUse() {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-20 px-6 text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {}
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {}
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl mb-2 sm:mb-0"
        >
          💡
        </motion.span>

        {}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-400 text-transparent bg-clip-text leading-tight">
          Inspirációk és Moodboard ötletek
        </h1>
      </motion.div>

      {}
      <div className="bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-8 sm:p-10 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-pink-500">
          Hogyan használd az appot?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          A főoldalon különböző témákra kereshetsz képeket, majd az automatikus
          színpaletták segítségével ötleteket gyűjthetsz grafikai projektekhez,
          webdesignhoz, arculathoz vagy bármilyen kreatív munkához.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          A cél, hogy minden pillanatban könnyen találj inspirációt, gyorsan,
          letisztultan és esztétikusan. ✨
        </p>
      </div>

      {}
      <div className="flex justify-start">
        <Link
          to="/"
          className="inline-block text-sm bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          ← Vissza a főoldalra
        </Link>
      </div>
    </motion.div>
  );
}
