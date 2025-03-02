// components/ImageSlider.js
import React, { useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = ({ beforeImage, afterImage, altText = 'Image comparison' }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(50);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Detect theme from Next.js theme context or document
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkTheme(darkModeMediaQuery.matches);

    const handleThemeChange = (e) => {
      setIsDarkTheme(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleThemeChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const slider = e.currentTarget;
      const rect = slider.getBoundingClientRect();
      let newPosition = ((e.clientX - rect.left) / slider.offsetWidth) * 100;
      
      // Clamp position between 0 and 100
      newPosition = Math.max(0, Math.min(100, newPosition));
      setPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers for mobile support
  const handleTouchStart = (e) => {
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const slider = e.currentTarget;
      const rect = slider.getBoundingClientRect();
      const touch = e.touches[0];
      let newPosition = ((touch.clientX - rect.left) / slider.offsetWidth) * 100;
      
      newPosition = Math.max(0, Math.min(100, newPosition));
      setPosition(newPosition);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className={`${styles.sliderContainer} ${isDarkTheme ? styles.dark : styles.light}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.imageWrapper}>
        {/* Before Image (left side) */}
        <div 
          className={styles.beforeImage}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src='Screenshot from 2025-02-27 00-35-13.png'alt={`${altText} - Before`} />
        </div>

        {/* After Image (right side) */}
        <div 
          className={styles.afterImage}
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <img src='output512(2).jpg' alt={`${altText} - After`} />
        </div>

        {/* Slider Handle */}
        <div
          className={styles.sliderHandle}
          style={{ left: `calc(${position}% - 12px)` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <span className={styles.handleIcon}>⋮</span>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;