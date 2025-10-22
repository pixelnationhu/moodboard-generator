import React from "react";
import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  const blobs = [
    {
      color: "bg-pink-400/30 dark:bg-pink-600/20",
      size: "w-[400px] h-[400px]",
      position: "top-[-100px] left-[-100px]",
      duration: 28,
      delay: 0,
    },
    {
      color: "bg-fuchsia-400/30 dark:bg-fuchsia-600/20",
      size: "w-[350px] h-[350px]",
      position: "top-[300px] right-[-150px]",
      duration: 32,
      delay: 3,
    },
    {
      color: "bg-violet-400/30 dark:bg-violet-600/20",
      size: "w-[380px] h-[380px]",
      position: "bottom-[100px] left-[100px]",
      duration: 35,
      delay: 6,
    },
    {
      color: "bg-rose-400/25 dark:bg-rose-700/15",
      size: "w-[450px] h-[450px]",
      position: "bottom-[-150px] right-[-100px]",
      duration: 40,
      delay: 2,
    },
    {
      color: "bg-amber-300/25 dark:bg-yellow-600/15",
      size: "w-[320px] h-[320px]",
      position: "top-[500px] left-[40%]",
      duration: 45,
      delay: 5,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.color} ${blob.size} ${blob.position}`}
          animate={{
            y: [0, 60, -80, 0],
            x: [0, 40, -40, 0],
            scale: [1, 3, 0.95, 1],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent dark:via-black/10"
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
