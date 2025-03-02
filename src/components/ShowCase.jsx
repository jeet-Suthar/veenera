"use client";
import { useState } from "react";
import Image from "next/image";

const ShowCase = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black py-10 px-4">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Before & After
      </h2>

      <div className="relative w-full max-w-3xl aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
        {/* Before Image (Visible fully by default) */}
        <Image
          src="/before.jpg" // Replace with actual image path
          alt="Before"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />

        {/* After Image (Revealed by slider) */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderValue}%` }}
        >
          <Image
            src="/after.jpg" // Replace with actual image path
            alt="After"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />

        {/* Slider UI */}
        <div
          className="absolute top-0 bottom-0 left-1/2 w-1 bg-blue-500 dark:bg-purple-400"
          style={{ left: `${sliderValue}%` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 dark:bg-purple-500 border-2 border-white dark:border-black rounded-full shadow-md"
          style={{ left: `${sliderValue}%` }}
        />
      </div>
    </div>
  );
};

export default ShowCase;
