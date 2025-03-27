"use client";
import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Loader2, Upload } from "lucide-react";

const SHAPES = ["natural", "hollywood", "cannie", "oval", "celebrity"];
const COLORS = [
  "Pearl White",
  "Ivory",
  "bleach white",
  "Natural Beige"];

export default function Predict() {
  const [image, setImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shape, setShape] = useState("natural");
  const [color, setColor] = useState(COLORS[0]);
  const { theme } = useTheme();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]);
      setError(null);
      setOutputImage(null);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("shape", shape);
    formData.append("color", color);

    try {
      const response = await fetch("https://c531-3-238-118-170.ngrok-free.app/generate", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const blob = await response.blob();
      setOutputImage(URL.createObjectURL(blob));
    } catch (error) {
      setError(error.message);
      setOutputImage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen p-6 flex flex-col items-center bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-xl"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-4">
            Predict with Veenera AI
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div
              {...getRootProps()}
              className="border-dashed border-2 border-gray-300 dark:border-gray-600 p-6 text-center cursor-pointer rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-12 w-12 text-gray-500" />
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Drag & Drop an image here, or click to select one
              </p>
            </div>

            {image && (
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src={URL.createObjectURL(image)}
                alt="Selected"
                className="w-full max-w-md h-auto object-contain rounded-lg border border-gray-300 dark:border-gray-600"
              />
            )}
            <div className="text-sm text-gray-700 dark:text-gray-300 pb-4">
              <li>Image should have both upper and lower teeth visible. </li>
              <li>
                Cannie is <span className="text-red-600">Beta</span> Feature
              </li>
            </div>
            {/* Shape Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Veneer Shape
              </h3>
              <div className="flex flex-wrap gap-2">
                {SHAPES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`px-4 py-2 rounded-lg text-sm transition ${
                      shape === s
                        ? "bg-indigo-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                    onClick={() => setShape(s)}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Veneer Color
              </h3>
              <div className="flex flex-wrap gap-2">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`px-4 py-2 rounded-lg text-sm transition ${
                      color === c
                        ? "bg-indigo-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                    onClick={() => setColor(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-500 text-white px-5 py-3 rounded-lg w-full text-center flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5 mr-2" />
              ) : (
                "Upload & Predict"
              )}
            </motion.button>

            {error && (
              <p className="text-red-500 text-center text-sm">
                {error.status === 500
                  ? "Server busy, try again later!"
                  
                  : error.message || "Server busy, try again later!"}
              </p>
            )}
          </form>

          {outputImage && (
            <div className="mt-6 text-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Prediction Result
              </h3>
              <img
                src={outputImage}
                alt="Predicted Output"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600"
              />
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = outputImage;
                  link.download = "predicted_image.png";
                  link.click();
                }}
                className="mt-4 bg-indigo-500 text-white px-5 py-3 rounded-lg"
              >
                Download Result
              </button>
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
