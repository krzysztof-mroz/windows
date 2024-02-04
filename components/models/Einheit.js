import React from 'react';
import { drawRectangle, drawWindow } from '../utils/drawingUtils';
import Profil from './Profil';

// starting and returning canvas
const startCanvas = (canvasRef) => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  return([ctx, canvas])
 }

 

 





// define the Einheit (Fenster, Rahmen) class
class Einheit {
    constructor(width, height, type, schwelle, up = [], down = [], left = [], right = [], profil) {
      this.width = width;
      this.height = height;
      this.type = type;
      this.schwelle = schwelle;
      this.up = Array.isArray(up) ? up : [];
      this.down = Array.isArray(down) ? down : [];
      this.left = Array.isArray(left) ? left : [];
      this.right = Array.isArray(right) ? right : [];
      this.profil = profil
    }
  
    get netWidth() {
      const totalWidthReduction = this.left.concat(this.right).reduce((sum, { width = 0 }) => sum + width, 0);
      return this.width - totalWidthReduction;
    }
  
    get netHeight() {
      const totalHeightReduction = this.up.concat(this.down).reduce((sum, { height = 0 }) => sum + height, 0);
      return this.height - totalHeightReduction;
    }
  
    
  
    drawEinheit(posX, posY, canvasRef, scaleFactor) {
      const [ctx, canvas] = startCanvas(canvasRef);
      
      let actualX = posX;
      let actualY = posY;

        
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
        drawWindow(ctx, this.profil, this.type, this.schwelle, actualX, actualY, this.netWidth, this.netHeight, scaleFactor);
        //drawRectangle(ctx, actualX, actualY, this.netWidth, this.netHeight, scaleFactor, "white");
        //drawRectangle(ctx, actualX+70*scaleFactor, actualY+70*scaleFactor, this.netWidth- 140, this.netHeight - 140, scaleFactor, "blue")      
  
        
        actualX += this.netWidth * scaleFactor
        
        // right objects draw: 
        this.right.forEach(obj => {
          drawRectangle(ctx, actualX, actualY, obj.width, this.netHeight, scaleFactor, "white");
          actualX += obj.width * scaleFactor
        });  
  
        actualY += this.netHeight * scaleFactor
        
        // down objects draw: 
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

