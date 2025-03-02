"use client";
import { useState } from "react";
import { useTheme } from "next-themes"; // For light/dark mode
import { motion } from "framer-motion"; // For animations
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Loader2 } from "lucide-react"; // Assuming shadcn/ui for loading animation
import * as Tooltip from "@radix-ui/react-tooltip"; // For "coming soon" tooltip

export default function Predict() {
  const [image, setImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [zoom, setZoom] = useState(1); // For zoomable output image
  const { theme } = useTheme(); // For light/dark mode awareness

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setError(null);
      setOutputImage(null); // Reset output when new image is selected
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://34.42.121.131:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(
          response.status === 503
            ? "Server is down. Please try again later."
            : `HTTP error! Status: ${response.status} - ${response.statusText}`
        );
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setOutputImage(imageUrl);
    } catch (error) {
      setError(error.message);
      setOutputImage(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (outputImage) {
      const link = document.createElement("a");
      link.href = outputImage;
      link.download = "predicted_image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleZoom = (e) => {
    const newZoom = e.target.value / 100;
    setZoom(newZoom);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen p-4 bg-gradient-to-br from-gray-50/90 via-gray-100/70 to-gray-200/90 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-700/90 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
            {/* Input Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 transform transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
                Predict with Veneer AI
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border-2 border-gray-200 dark:border-gray-600 p-3 rounded-xl w-full file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-indigo-500 file:text-white file:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-300"
                />
                {image && (
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src={URL.createObjectURL(image)}
                    alt="Selected"
                    className="w-full max-w-[384px] lg:max-w-[512px] h-[384px] lg:h-[512px] object-contain rounded-lg border-2 border-gray-200 dark:border-gray-700 mx-auto"
                  />
                )}
                {/* Veneer Type Select (Coming Soon) */}
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <div className="relative opacity-50 pointer-events-auto">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Type of Veneer
                        </label>
                        <select
                          defaultValue="porcelain veneer"
                          disabled
                          className="w-full p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white cursor-not-allowed"
                        >
                          <option value="porcelain veneer">Porcelain Veneer</option>
                          <option value="composite resin veneer">
                            Composite Resin Veneer
                          </option>
                          <option value="thin lumineers">Thin Lumineers</option>
                          <option value="no-prep veneers">No-Prep Veneers</option>
                          <option value="zirconia veneers">Zirconia Veneers</option>
                        </select>
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg"
                        sideOffset={5}
                      >
                        Coming Soon
                        <Tooltip.Arrow className="fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>

                {/* Brightness Slider (Coming Soon) */}
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <div className="relative opacity-50 pointer-events-auto">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Brightness Level
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          defaultValue="75" // Between medium (50) and high (100)
                          disabled
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-not-allowed accent-indigo-500"
                        />
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                          <span>Low</span>
                          <span>Medium</span>
                          <span>High</span>
                        </div>
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg"
                        sideOffset={5}
                      >
                        Coming Soon
                        <Tooltip.Arrow className="fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-indigo-500 text-white px-5 py-3 rounded-xl hover:bg-indigo-600 transition-colors w-full max-w-xs mx-auto disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Upload & Predict"
                  )}
                </motion.button>
                {loading && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                    This will take about 30 seconds to generate your AI image. Don’t reload or move to a different page.
                  </p>
                )}
                {error && (
                  <p className="text-red-500 dark:text-red-400 text-center text-sm mt-2">
                    {error}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Output Section (Right on Desktop, Below on Mobile) */}
            {outputImage && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white dark:bg-gray-800 p-6 flex flex-col items-center rounded-2xl shadow-md w-full md:w-1/2 lg:w-3/5 mt-6 md:mt-0 transform transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
                  Prediction Result
                </h3>
                <div className="overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700">
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src={outputImage}
                    alt="Processed"
                    className="w-full max-w-[384px] lg:max-w-[512px] h-[384px] lg:h-[512px] object-contain mx-auto transition-transform duration-200"
                    style={{ transform: `scale(${zoom})` }}
                  />
                </div>
              
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="mt-4 bg-indigo-500 text-white px-5 py-3 rounded-xl hover:bg-indigo-600 transition-colors w-full max-w-xs mx-auto"
                >
                  Download Result
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}