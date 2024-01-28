// src/hooks/useResizeCanvas.js
import { useEffect } from 'react';

const useResizeCanvas = (canvasRef, divRef, updateFunctions) => {
  useEffect(() => {

    const resizeCanvas = () => {
        const newWidth = divRef.current.offsetWidth - 40;
        const newHeight = divRef.current.offsetHeight - 40;
      
        if (canvasRef.current.width !== newWidth || canvasRef.current.height !== newHeight) {
          canvasRef.current.width = newWidth;
          canvasRef.current.height = newHeight;
          updateFunctions.forEach(func => func());
        }
      };
      

    resizeCanvas(); // Resize immediately in case initial dimensions are not correct
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [canvasRef, divRef]); // Depend on refs and update functions
};

export default useResizeCanvas;
