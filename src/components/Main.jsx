"use client";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageSlider from './ImageSlider';  


import {Testimonial} from './Testimonial';

const Home = () => {
  const { theme } = useTheme();
  const beforeImage = 'public/Screenshot from 2025-02-27 00-35-13.png'; // Replace with your image path
  const afterImage = 'public/output512(2).jpg';   // Replace with your image path

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
            className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent tracking-tight mb-6 mt-6 "
          >
            Veneera AI
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
                Try Now ! 
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </div>
      <div className=" py-30 px-4 flex  items-center justify-around back">
      <ImageSlider className="" />

      <div className="flex flex-col  justify-center ">
        <h1 className="text-4xl md:text-7xl font-extrabold pb-2">Live the new <br /><span className="text-5xl md:text-9xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">You !</span></h1>
        <p className="text-2xl md:text-3xl text-gray-400">Realistic image with precise teeth alignments. </p>
      </div>


      </div>

    <div className="flex flex-col items-center justify-center ">

      <Testimonial />
    </div>
    </>
  );
};

export default Home;
