function drawRectangle(ctx, posX, posY, width, height, scaleFactor, color) {
    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, width * scaleFactor, height * scaleFactor);
    ctx.strokeRect(posX, posY, width * scaleFactor, height * scaleFactor);
  }

  export { drawRectangle };