"use client";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion"; // For animations

export default function About() {
  const [hoverFounder, setHoverFounder] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col items-center justify-center py-20 px-4 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
            About Veneera AI
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-light text-gray-700 dark:text-gray-400">
            Pioneering the future of dental aesthetics with AI-driven precision and elegance.
          </p>
        </motion.section>

        {/* Services Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-light text-center mb-12"
          >
            What We Offer
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Veneer Visualization",
                desc: "Preview your perfect smile with our AI-crafted veneer simulations.",
              },
              {
                title: "Smile Insights",
                desc: "Unlock the secrets of your smile with sophisticated analysis.",
              },
              {
                title: "Tailored Solutions",
                desc: "Get veneer recommendations designed just for you.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-white dark:bg-gray-900 border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-light text-center mb-12"
          >
            Our Journey
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-400 font-light"
          >
            <p className="mb-4">
              Born in 2022 from a spark of innovation, Veneera AI blends dental expertise with AI mastery. What began as a bold idea has evolved into a trailblazing platform, redefining smile design with unmatched precision.
            </p>
            <p>
              In 2024, we unveiled our signature AI tool—a testament to our dedication to beauty, technology, and human connection.
            </p>
          </motion.div>
        </section>

        {/* Tools We Use Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-light text-center mb-12"
          >
            Our Toolkit
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "React", desc: "Sculpting seamless, dynamic interfaces" },
              { name: "TensorFlow", desc: "Fueling our intelligent predictions" },
              { name: "Tailwind CSS", desc: "Shaping sleek, modern visuals" },
              { name: "Flask", desc: "Powering our robust backend" },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <div className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <span className="text-lg font-medium">{tool.name}</span>
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-gray-800 text-white text-sm p-2 rounded-md shadow-lg"
                        sideOffset={5}
                      >
                        {tool.desc}
                        <Tooltip.Arrow className="fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-light text-center mb-12"
          >
            Our Visionaries
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Jane Smith",
                role: "Dental Innovator",
                avatar: "/jane-smith.jpg",
                initials: "JS",
                bio: "Crafting smiles with 15+ years of expertise.",
              },
              {
                name: "Alex Carter",
                role: "AI Architect",
                avatar: "/alex-carter.jpg",
                initials: "AC",
                bio: "Merging tech and humanity with brilliance.",
              },
              {
                name: "Maya Patel",
                role: "Design Maestro",
                avatar: "/maya-patel.jpg",
                initials: "MP",
                bio: "Turning ideas into intuitive experiences.",
              },
            ].map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  className="bg-white dark:bg-gray-900 border-none shadow-sm hover:shadow-md transition-all duration-300"
                  onMouseEnter={() => setHoverFounder(founder.name)}
                  onMouseLeave={() => setHoverFounder(null)}
                >
                  <CardContent className="flex flex-col items-center p-6">
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage src={founder.avatar} alt={founder.name} />
                      <AvatarFallback>{founder.initials}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-medium">{founder.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{founder.role}</p>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoverFounder === founder.name ? 1 : 0,
                        height: hoverFounder === founder.name ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center overflow-hidden"
                    >
                      {founder.bio}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="py-20 px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Elevate Your Smile Today
          </h2>
          <Button
            as="a"
            href="/predict"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
          >
            Experience Veneera AI
          </Button>
        </motion.section>
      </div>
      <Footer />
    </>
  );
}