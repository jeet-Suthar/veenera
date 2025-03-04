"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion"; // Corrected import
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageSlider from "./ImageSlider";
import { Testimonial } from "./Testimonial";

const Home = () => {
  const { theme } = useTheme();

  const beforeImage = "/Screenshot from 2025-02-27 00-35-13.png"; // Relative path
  const afterImage = "/output512(2).jpg"; // Relative path

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden">
        {/* Hero Section - Centered */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center py-20 px-6 w-full max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Transforming smiles with
          </h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent tracking-tight mb-6 mt-6"
          >
            Veneer AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Transform your smile with AI-powered dental veneers—perfect, bright, and photorealistic results in seconds!
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/predict" className="inline-block">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg px-8 py-4 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 text-lg"
              >
                Try Now!
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </div>

      {/* Image Slider and Text Section - Responsive Layout (Reverted Wider Screen Style) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 px-4 w-full max-w-8xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-around md:px-30">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <ImageSlider className="w-full max-w-[600px] mx-auto" />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 md:ml-20 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h1 className="text-4xl md:text-7xl font-extrabold pb-2 text-gray-800 dark:text-gray-100">
              Live the new{" "}
              <span className="text-5xl md:text-9xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                You!
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-4">
              Realistic image with precise teeth alignments.
            </p>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
              Experience flawless veneers, enhanced confidence, and a radiant smile—crafted by cutting-edge AI technology. Discover the beauty of a transformed you, effortlessly and naturally.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center py-16 px-4 w-full">
        <Testimonial />
      </div>
    </>
  );
};

export default Home;