import { useEffect } from "react";

function ImagePreloader() {
  useEffect(() => {
    console.log("preloading");
    const preloadImages = async () => {
      // Array of SVG file names (assuming they are in the public/skills directory)
      const svgFiles = [
        "attack.svg",
        "hitpoints.svg",
        "mining.svg",
        // Add more SVG files as needed
      ];

      // Preload each SVG file
      await Promise.all(
        svgFiles.map(async (fileName) => {
          try {
            const img = new Image();
            img.src = `/images/skills/${fileName}`;
            await new Promise((resolve, reject) => {
              img.onload = resolve;
              img.onerror = reject;
            });
            console.log(`Preloaded: ${fileName}`);
          } catch (error) {
            console.error(`Error preloading ${fileName}:`, error);
          }
        })
      );
    };

    preloadImages();
  }, []); // Empty dependency array ensures this effect runs only once

  return null; // This component doesn't render anything
}

export default ImagePreloader;
