"use client";
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button"; // Optional shadcn/ui button for CTA

const Gallery = () => {
  const { theme } = useTheme(); // For light/dark mode awareness

  // Sample gallery data with placeholder images and captions
  const galleryItems = Array.from({ length: 8 }).map((_, index) => ({
    id: index + 1,
    src: `https://via.placeholder.com/400x300/${index % 2 === 0 ? "E0E0E0" : "D0D0D0"}/808080?text=Dental+Veneer+${index + 1}`,
    caption: `Veneer Transformation ${index + 1} - Perfect Smile with Veneer AI`,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50/90 via-gray-100/70 to-gray-200/90 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-700/90 overflow-hidden">
      {/* Navbar */}
      <NavBar />

      {/* Gallery Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 py-16 px-6 max-w-7xl mx-auto"
      >
        {/* Gallery Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-200 mb-12 tracking-tight"
        >
          Gallery of Perfect Smiles
        </motion.h1>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center text-sm font-medium px-4">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action (CTA) Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <Link href="/predict">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-[0px_0px_8px_#8c45ff] rounded-lg px-6 py-3 hover:from-blue-700 hover:to-purple-800 transition-all duration-300"
            >
              Transform Your Smile Now
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;