import React from 'react';
import { drawRectangle } from '../utils/drawingUtils';

// define the Einheit (Fenster, Rahmen) class
class Einheit {
    constructor(width, height, up = [], down = [], left = [], right = []) {
      this.width = width;
      this.height = height;
      this.up = Array.isArray(up) ? up : [];
      this.down = Array.isArray(down) ? down : [];
      this.left = Array.isArray(left) ? left : [];
      this.right = Array.isArray(right) ? right : [];
    }
  
    get netWidth() {
      const totalWidthReduction = this.left.concat(this.right).reduce((sum, { width = 0 }) => sum + width, 0);
      return this.width - totalWidthReduction;
    }
  
    get netHeight() {
      const totalHeightReduction = this.up.concat(this.down).reduce((sum, { height = 0 }) => sum + height, 0);
      return this.height - totalHeightReduction;
    }
  
    
  
    drawEinheit(posX, posY, canvasRef, scaleFactor, clear) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      clear && ctx.clearRect(0, 0, canvas.width, canvas.height);
      let actualX = posX;
      let actualY = posY;
    
     
        // Calculate scaling factor
        let realWidth = this.width * scaleFactor;
        let realHeight = this.height * scaleFactor;
        let realNetWidth = this.netWidth * scaleFactor;
        let realNetHeight = this.netHeight * scaleFactor;
        
        // upper objects draw
        this.up.forEach(obj => {
          drawRectangle(ctx, actualX, actualY, this.width, obj.height, scaleFactor, "white");
          actualY += obj.height * scaleFactor
        });
  
        // left objects draw: 
        this.left.forEach(obj => {
          drawRectangle(ctx, actualX, actualY, obj.width, this.netHeight, scaleFactor, "white");
          actualX += obj.width * scaleFactor
        });  
  
  
        // Draw window
        ctx.fillStyle = "white";
        ctx.fillRect(actualX, actualY, realNetWidth, realNetHeight);
        ctx.strokeRect(actualX, actualY, realNetWidth, realNetHeight);
  
        // Calculate dimensions for the second (blue) rectangle
        let innerWidth = Math.max(0, realNetWidth - 140 * scaleFactor);
        let innerHeight = Math.max(0, realNetHeight - 140 * scaleFactor);
        let innerPosX = actualX + 70 * scaleFactor;
        let innerPosY = actualY + 70 * scaleFactor;
  
        // Draw the second (blue) rectangle
        ctx.fillStyle = "blue";
        ctx.fillRect(innerPosX, innerPosY, innerWidth, innerHeight);
        ctx.strokeRect(innerPosX, innerPosY, innerWidth, innerHeight);
        
        actualX += this.netWidth * scaleFactor
        
  
        this.right.forEach(obj => {
          drawRectangle(ctx, actualX, actualY, obj.width, this.netHeight, scaleFactor, "white");
          actualX += obj.width * scaleFactor
        });  
  
        actualY += this.netHeight * scaleFactor
  
        this.down.forEach(obj => {
          drawRectangle(ctx, posX, actualY, this.width, obj.height, scaleFactor, "white");
          actualY += obj.height * scaleFactor
        });  
      
      
    }


    addProfile(type, side, width) {
        if (side === "up") this.up.push({ type: type, height: width })
        else if (side === "left") this.left.push({ type: type, width: width })
        else if (side === "right") this.right.push({ type: type, width: width })
        else if (side === "down") this.down.push({ type: type, height: width })
    }
  }

  export default Einheit;

