import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InstallPrompt({ show, onInstall, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            className="bg-white/30 dark:bg-black/30 backdrop-blur-2xl border border-pink-400/30 shadow-xl rounded-2xl p-5 max-w-xs text-left"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Telepítsd a Moodboard appot 💖
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-snug">
              Használd offline is, gyorsabban és kényelmesebben.
            </p>

            <div className="flex justify-end gap-2">
              <motion.button
                onClick={onClose}
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
                whileTap={{ scale: 0.9 }}
              >
                Mégse
              </motion.button>

              <motion.button
                onClick={onInstall}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white rounded-full text-sm shadow-md hover:shadow-lg hover:from-pink-400 hover:to-fuchsia-400 transition-all"
              >
                Telepítés
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
