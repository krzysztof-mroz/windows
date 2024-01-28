// utils/canvasHelpers.js
const detectClickedSide = (x, y, posX, posY, cumulatedWidth, cumulatedHeight, scaleFactor, realWidth, realHeight) => {
    if (Math.abs((x - posX - cumulatedWidth) / scaleFactor) <= 100) return "left";
    if (Math.abs((y - posY - cumulatedHeight) / scaleFactor) <= 100) return "up";
    if (Math.abs((posX + cumulatedWidth + realWidth - x) / scaleFactor) <= 100) return "right";
    if (Math.abs((posY + cumulatedHeight + realHeight - y) / scaleFactor) <= 100) return "down";
    return "";
  };
  
  export { detectClickedSide };
  