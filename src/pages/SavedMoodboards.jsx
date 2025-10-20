import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SavedMoodboards() {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-20 px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-400 text-transparent bg-clip-text">
        💡 Inspirációk és Moodboard ötletek
      </h1>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Ezen az oldalon eredetileg a mentett moodboardjaid jelentek meg,
        de most egy letisztított verzióban csak inspirációs célokat szolgál.
      </p>

      <div className="bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-10 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-pink-500">
          Hogyan használd az appot?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A főoldalon különböző témákra kereshetsz képeket, majd az automatikus
          színpaletták segítségével ötleteket gyűjthetsz grafikai projektekhez,
          webdesignhoz, arculathoz vagy bármilyen kreatív munkához.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          A cél, hogy minden pillanatban könnyen találj inspirációt – gyorsan,
          letisztultan, sablonok nélkül. ✨
        </p>
      </div>

      <div className="flex justify-center">
        <Link
          to="/"
          className="inline-block text-sm bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition"
        >
          ← Vissza a főoldalra
        </Link>
      </div>
    </motion.div>
  );
}
