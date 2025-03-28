"use client";
import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Loader2, Upload, Download } from "lucide-react";

const SHAPES = ["Natural", "Hollywood", "Cannie", "Oval", "Celebrity"];
const COLORS = ["Pearl White", "Ivory", "Silk White", "Natural Beige"];

export default function Predict() {
  const [image, setImage] = useState(null);
  const [outputImages, setOutputImages] = useState([null, null, null, null]);
  const [loadingStates, setLoadingStates] = useState([false, false, false, false]);
  const [errorMessages, setErrorMessages] = useState([null, null, null, null]);
  const [shape, setShape] = useState("Natural");
  const [color, setColor] = useState(COLORS[0]);
  const { theme } = useTheme();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]);
      setOutputImages([null, null, null, null]);
      setErrorMessages([null, null, null, null]);
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

    setOutputImages([null, null, null, null]);
    setLoadingStates([true, true, true, true]);
    setErrorMessages([null, null, null, null]);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("shape", shape);
    formData.append("color", color);

    const urls = Array(4).fill("https://c531-3-238-118-170.ngrok-free.app/generate");
    urls.forEach(async (url, index) => {
      try {
        const response = await fetch(url, { method: "POST", body: formData });
        if (!response.ok) throw new Error();
        const blob = await response.blob();
        const imgURL = URL.createObjectURL(blob);
        setOutputImages((prev) => {
          const newImages = [...prev];
          newImages[index] = imgURL;
          return newImages;
        });
      } catch {
        setErrorMessages((prev) => {
          const newErrors = [...prev];
          newErrors[index] = "Server busy";
          return newErrors;
        });
      } finally {
        setLoadingStates((prev) => {
          const newLoading = [...prev];
          newLoading[index] = false;
          return newLoading;
        });
      }
    });
  };

  return (
    <>
      <NavBar />
      <div className=" p-8 flex flex-col md:flex-row items-start bg-gray-50 dark:bg-gray-900 gap-10 md:px-26">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-xl"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Predict with Veenera AI
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              {...getRootProps()}
              className="border-dashed border-2 border-gray-300 dark:border-gray-600 p-8 text-center cursor-pointer rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-16 w-16 text-gray-500" />
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">Drag & Drop an image here, or click to select one</p>
            </div>
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Selected"
                className="w-full h-auto object-contain rounded-md border border-gray-300 dark:border-gray-600"
              />
            )}
            <div className="text-sm text-gray-700 dark:text-gray-300 pb-4">
              <li>Image should have both upper and lower teeth visible. </li>
              <li>
                Cannie is <span className="text-red-600">Beta</span> Feature
              </li>
            </div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Veneer Shape
              </h3>
            <div className="flex flex-wrap gap-4">
              {SHAPES.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`px-4 py-2 rounded-lg border ${shape === s ? "bg-indigo-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"}`}
                  onClick={() => setShape(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Veneer color
              </h3>
            <div className="flex flex-wrap gap-4">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`px-4 py-2 rounded-lg border ${color === c ? "bg-indigo-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"}`}
                  onClick={() => setColor(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-500 text-white px-6 py-4 rounded-xl w-full text-center flex justify-center items-center text-lg"
              disabled={loadingStates.some((state) => state)}
            >
              {loadingStates.some((state) => state) ? <Loader2 className="animate-spin h-6 w-6 mr-3" /> : "Upload & Predict"}
            </motion.button>
          </form>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
          {outputImages.map((img, index) =>
            img ? (
              <div key={index} className="relative group">
              <img
                key={index}
                src={img}
                alt={`Output ${index}`}
                className="w-full h-auto object-cover rounded-md border border-gray-300 dark:border-gray-600"
              />
              <a href={img} download={`output-${index}.png`} className="absolute top-2 right-2 hidden group-hover:block bg-black bg-opacity-50 p-2 rounded-full text-white">
              <Download className="w-5 h-5" />
            </a>
            </div>
            ) : loadingStates[index] ? (
              <div key={index} className="flex items-center justify-center h-48 bg-gray-200 dark:bg-gray-700 rounded-xl">
                <Loader2 className="animate-spin h-8 w-8 text-gray-500" />
              </div>
            ) : null
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
{/* <div className="mt-6 text-center">
<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Prediction Result</h3>
<div className="grid grid-cols-2 gap-4">
  {outputImages.map((img, index) => img && (
    <div key={index} className="relative group">
      <img src={img} alt="Predicted Output" className="w-full rounded-lg border border-gray-300 dark:border-gray-600" />
      <a href={img} download={`output-${index}.png`} className="absolute top-2 right-2 hidden group-hover:block bg-black bg-opacity-50 p-2 rounded-full text-white">
        <Download className="w-5 h-5" />
      </a>
    </div>
  ))}
</div>
</div> */}