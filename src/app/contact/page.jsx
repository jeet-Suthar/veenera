"use client";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button"; // shadcn/ui Button
import { Input } from "@/components/ui/input"; // shadcn/ui Input
import { Textarea } from "@/components/ui/textarea"; // shadcn/ui Textarea
import { Card, CardContent } from "@/components/ui/card"; // shadcn/ui Card
import { motion } from "framer-motion"; // For animations

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call if needed)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
    setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3s
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
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-light text-gray-700 dark:text-gray-400">
            We’d love to hear from you. Reach out with questions, feedback, or just to say hello.
          </p>
        </motion.section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white dark:bg-gray-900 border-none shadow-sm">
              <CardContent className="p-6">
                {submitted ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-indigo-600 dark:text-indigo-400 text-lg"
                  >
                    Thank you! We’ll get back to you soon.
                  </motion.p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we assist you?"
                        required
                        rows={4}
                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-light text-center mb-12"
          >
            Get in Touch
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Email",
                value: "support@veneera.ai",
                href: "mailto:support@veneera.ai",
              },
              {
                title: "Phone",
                value: "+1 (555) 123-4567",
                href: "tel:+15551234567",
              },
              {
                title: "Location",
                value: "123 Smile St, Innovation City",
                href: "#",
              },
            ].map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-white dark:bg-gray-900 border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-medium mb-2">{info.title}</h3>
                    <a
                      href={info.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}