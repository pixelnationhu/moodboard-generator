import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import CreativityIcon from "./CreativityIcon";
import { sendEvent } from "../analytics";
import { Search, Shuffle } from "lucide-react";

export default function Header({ query, setQuery }) {
  const [inputValue, setInputValue] = useState(query || "");

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
    "soft pastel aesthetic",
    "moody tones",
    "warm neutral palette",
    "earthy minimalism",
    "sunset hues",
    "lavender dreams",
    "golden hour light",
    "icy blue tones",
    "cream and beige aesthetic",
    "boho living room",
    "cozy corner",
    "modern workspace setup",
    "vintage apartment decor",
    "artsy studio vibes",
    "cafe interior design",
    "japanese zen home",
    "minimal home office",
    "parisian apartment aesthetic",
    "creative chaos",
    "futuristic minimalism",
    "dreamcore aesthetic",
    "surreal photography",
    "emotional portrait",
    "light and shadow study",
    "cinematic composition",
    "textural closeup",
    "motion blur photography",
    "color theory experiment",
    "ui design inspiration",
    "modern branding mockup",
    "digital art gradient",
    "abstract 3d render",
    "futuristic neon city",
    "tech aesthetic workspace",
    "ai-inspired visuals",
    "web design layout",
    "product photography minimal",
    "creative flatlay setup",
  ];

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    setQuery(inputValue);
    sendEvent("search_click", { query: inputValue });
  };

  const handleRandom = () => {
    const random =
      randomQueries[Math.floor(Math.random() * randomQueries.length)];
    setInputValue(random);
    setQuery(random);
    sendEvent("random_click", { randomQuery: random });
  };

  return (
    <motion.header
      className="relative flex flex-col items-center justify-center text-center py-10 px-4 transition-colors duration-500"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {}
      <Helmet>
        <title>Moodboard Generator · Pixelnation</title>
        <meta
          name="description"
          content="Találd meg az inspirációdat pillanatok alatt. Böngéssz hangulatokat, színeket és képeket egy modern, AI-ihlette felületen. Készítette: Pixelnation."
        />
        <meta
          name="keywords"
          content="moodboard, pixelnation, webdesign, generátor, grafika, színek, inspiráció, ui, ux, kreatív, aesthetic, design, frontend, fejlesztés"
        />
        <meta name="author" content="Pixelnation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pixelnation.hu/moodboard" />
        <meta property="og:site_name" content="Pixelnation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelnation.hu/moodboard" />
        <meta property="og:title" content="Moodboard Generator · Pixelnation" />
        <meta
          property="og:description"
          content="AI-ihlette Moodboard generátor: találj inspirációt színekhez, hangulatokhoz és projektekhez, Pixelnation fejlesztésében."
        />
        <meta property="og:image" content="https://pixelnation.hu/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@pixelnation" />
        <meta name="twitter:title" content="Moodboard Generator · Pixelnation" />
        <meta
          name="twitter:description"
          content="Találd meg az inspirációdat pillanatok alatt - AI moodboard generátor Pixelnationtől."
        />
        <meta name="twitter:image" content="https://pixelnation.hu/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
      </Helmet>

      {}
      <motion.div
        className="flex items-center justify-center gap-3 mb-3 flex-wrap"
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

        <h1 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-400 drop-shadow-md leading-tight">
          Moodboard Generator
        </h1>
      </motion.div>

      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 px-3 max-w-md">
        Találd meg az inspirációdat pillanatok alatt ✨
      </p>

      {}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
        {/* Input */}
        <div className="flex items-center w-full bg-white/40 dark:bg-white/10 backdrop-blur-2xl shadow-lg rounded-full px-3 py-2 border border-white/30 dark:border-white/20 transition-all duration-300">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="pl. pastel aesthetic, cozy cafe, nature vibes..."
            className="flex-1 bg-transparent outline-none px-3 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base truncate"
          />
        </div>

        {}
        <motion.button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-medium px-6 py-2 rounded-full text-sm shadow-md hover:shadow-lg hover:from-pink-400 hover:to-fuchsia-400 transition-all duration-200 w-full sm:w-auto"
          whileTap={{ scale: 0.95 }}
        >
          <Search size={16} /> Keresés
        </motion.button>

        {}
        <motion.button
          onClick={handleRandom}
          className="flex items-center justify-center gap-2 bg-white/60 dark:bg-white/15 backdrop-blur-xl border border-white/40 dark:border-white/10 text-gray-800 dark:text-gray-200 px-6 py-2 rounded-full text-sm shadow-sm hover:bg-white/70 dark:hover:bg-white/25 hover:scale-[1.03] transition-all duration-200 w-full sm:w-auto"
          whileTap={{ scale: 0.95 }}
        >
          <Shuffle size={16} /> Véletlen
        </motion.button>
      </div>
    </motion.header>
  );
}
