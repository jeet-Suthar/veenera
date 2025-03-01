"use client";
import { useState } from "react";

export default function Predict() {
  const [image, setImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
  
    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);
  
    try {
      const response = await fetch("http://34.16.201.83:5000/predict", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
      }
  
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setOutputImage(imageUrl);
    } catch (error) {
      console.error("Error processing image:", error.message);
      console.error("Full error:", error);
    }
  
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Upload an Image</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded w-full"
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Selected"
              className="w-48 h-48 object-cover rounded-lg"
            />
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            disabled={loading}
          >
            {loading ? "Processing..." : "Upload & Predict"}
          </button>
        </form>
      </div>
      {outputImage && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-xl">
          <h3 className="text-xl font-semibold text-center mb-2">Output Image</h3>
          <img src={outputImage} alt="Processed" className="w-48 h-48 object-cover rounded-lg" />
        </div>
      )}
    </div>
  );
}