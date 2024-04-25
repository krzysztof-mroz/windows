import React from "react";
import { drawRectangle, drawWindowUnited, drawLine, drawArrow } from "../utils/drawingUtils";
import Profil from "./Profil";




// starting and returning canvas
const startCanvas = (canvasRef) => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  return [ctx, canvas];
};

const minFbSize = 300;

// define the Einheit (Fenster, Rahmen) class
class Einheit {
  constructor(
    schwelle,
    division = [],
    up = [],
    down = [],
    left = [],
    right = [],
    profil
  ) {
    this.schwelle = schwelle;
    this._division = this.addHeightGetters(division);
    this.up = Array.isArray(up) ? up : [];
    this.down = Array.isArray(down) ? down : [];
    this.left = Array.isArray(left) ? left : [];
    this.right = Array.isArray(right) ? right : [];
    this.profil = profil;   
  }

  get division() {
    return this._division;
  }

  set division(value) {
    this._division = this.addHeightGetters(value);
  }

  get width() {
    let totalWidth = 0;
  
    // Sum up the widths of all objects in the first sub-array of division
    if (this.division.length > 0 && this.division[0].length > 0) {
      totalWidth += this.division[0].reduce((sum, obj) => sum + obj.width, 0);
    }
  
    // Add widths from all objects in the left array
    this.left.forEach(item => {
      if (item.width) {
        totalWidth += item.width;
      }
    });
  
    // Add widths from all objects in the right array
    this.right.forEach(item => {
      if (item.width) {
        totalWidth += item.width;
      }
    });
  
    return Math.round(totalWidth); // Return the total width, including division, left, and right arrays
  }
  


  addHeightGetters(division) {
    return division.map(subArray =>
      subArray.map(obj => {
        // Define a new property 'fieldHeight' with a getter on the original object
        Object.defineProperty(obj, 'fieldHeight', {
          get: function() {
            
            return this.heightDivision.reduce((sum, current) => sum + current.height, 0);
           
          },
          enumerable: true, // This makes the 'height' property appear during object enumeration (e.g., console.log, for...in loop)
          configurable: true // This allows the property to be deleted or modified later if needed
          
        });
        
        return obj;
      })
    );
  }

  get height() {
    let totalHeight = 0;
  
    // Sum heights from the first object's heightDivision in each subArray of division
    if (Array.isArray(this.division)) {
      this.division.forEach(subArray => {
        if (subArray.length > 0 && subArray[0].heightDivision && subArray[0].heightDivision.length > 0) {
          totalHeight += subArray[0].fieldHeight;
        }
      });
    }
  
    // Add heights from all objects in the up array
    this.up.forEach(item => {
      if (item.height) {
        totalHeight += item.height;
      }
    });
  
    // Add heights from all objects in the down array
    this.down.forEach(item => {
      if (item.height) {
        totalHeight += item.height;
      }
    });
  
    return Math.round(totalHeight);
  }
  


  get netWidth() {
    const totalWidthReduction = this.left
      .concat(this.right)
      .reduce((sum, { width = 0 }) => sum + width, 0);
    return this.width - totalWidthReduction;
  }

  get netHeight() {
    const totalHeightReduction = this.up
      .concat(this.down)
      .reduce((sum, { height = 0 }) => sum + height, 0);
    return this.height - totalHeightReduction;
  }


  
  
    // Method to manually update 'fieldHeight' properties
    updateFieldHeights() {
      this._division.forEach(subArray => {
        subArray.forEach(obj => {
          // Calculate the new field height based on current heightDivision values
          const newFieldHeight = obj.heightDivision.reduce((sum, part) => sum + part.height, 0);
  
          // Update the object with the new fieldHeight value
          Object.defineProperty(obj, 'fieldHeight', {
            value: newFieldHeight,
            enumerable: true,
            configurable: true
          });
        });
      });
    }
  
   
  

  drawEinheit(posX, posY, canvasRef, scaleFactor, chosenPart, actualEinheit, measures) {
    const [ctx, canvas] = startCanvas(canvasRef);
    
  
    
    
    
    
    let actualX = posX;
    let actualY = posY;




    // upper objects draw
    this.up.forEach((obj) => {
      drawRectangle(
        ctx,
        actualX,
        actualY,
        this.width,
        obj.height,
        scaleFactor,
        "white"
      );
      actualY += obj.height * scaleFactor;
    });

    // left objects draw:
    this.left.forEach((obj) => {
      drawRectangle(
        ctx,
        actualX,
        actualY,
        obj.width,
        this.netHeight,
        scaleFactor,
        "white"
      );
      actualX += obj.width * scaleFactor;
    });
    
    // Draw window
    drawWindowUnited(
      ctx,
      this.profil,
      this.schwelle,
      this.division,
      actualX,
      actualY,
      this.netWidth,
      this.netHeight,
      scaleFactor,
      chosenPart, 
      actualEinheit
    );
   

    actualX += this.netWidth * scaleFactor;

    // right objects draw:
    this.right.forEach((obj) => {
      drawRectangle(
        ctx,
        actualX,
        actualY,
        obj.width,
        this.netHeight,
        scaleFactor,
        "white"
      );
      actualX += obj.width * scaleFactor;
    });

    actualY += this.netHeight * scaleFactor;

    // down objects draw:
    this.down.forEach((obj) => {
      drawRectangle(
        ctx,
        posX,
        actualY,
        this.width,
        obj.height,
        scaleFactor,
        "white"
      );
      actualY += obj.height * scaleFactor;
    });

  }

  addProfile(type, side, width) {
    if (side === "up") {
      
      const allFieldsOk = this.division[0].every(field => 
        field.fieldHeight - width >= minFbSize && field.heightDivision[0].height - width >= minFbSize
      );

      
      this.division[0] = this.division[0].map(field => {
        if (field.fieldHeight - width < minFbSize || field.heightDivision[0] - width < minFbSize || !allFieldsOk) {
          return field; // Return the original field if the condition is not met
        }
        
        // Return a new field object with the updated values
        return {
          ...field,
          heightDivision: [{height: field.heightDivision[0].height - width, type:field.heightDivision[0].type  }, ...field.heightDivision.slice(1)]
        };
      });
     
      if (allFieldsOk) {
        this.updateFieldHeights();
        this.up.push({ type: type, height: width });
      }


    } else if (side === "left") {

      
      const allFieldsOk = this.division.every(row => 
        row.length > 0 && row[0].width - width >= minFbSize
      );
      this.division = this.division.map(row => {
        if (row[0].width - width < minFbSize ||  !allFieldsOk) {
          return row; // Return the original field if the condition is not met
        }
       
        const updatedRow = [...row]; // Copy the row to avoid direct mutation
        updatedRow[0] = { ...updatedRow[0], width: updatedRow[0].width - width }; // Update the width of the first element
        updatedRow[0].heightDivision.forEach (part => {
          if (part.type === "DSDK" || part.type === "DKDS") {
            part.stulp = updatedRow[0].width / 2;
          } 
        })
  
        return updatedRow; // Return the updated row
      })
      if (allFieldsOk) {
        this.left.push({ type: type, width: width })
      }

     

    }
    else if (side === "right") {

  
      const allFieldsOk = this.division.every(row => 
        row.length > 0 && row[row.length-1].width - width >= minFbSize
      );

      this.division = this.division.map(row => {
        if (row[row.length-1].width - width < minFbSize ||  !allFieldsOk) {
          return row; // Return the original field if the condition is not met
        }
        
        const updatedRow = [...row]; // Copy the row to avoid direct mutation
        updatedRow[row.length-1] = { ...updatedRow[row.length-1], width: updatedRow[row.length-1].width - width }; // Update the width of the last element
        return updatedRow; // Return the updated row
      })


      if (allFieldsOk) {
        this.right.push({ type: type, width: width });
      }
  

    }


    

    else if (side === "down") {

      const allFieldsOk = this.division[this.division.length-1].every(field => 
        field.fieldHeight - width >= minFbSize && field.heightDivision[field.heightDivision.length-1].height - width >= minFbSize
      );

      this.division[this.division.length-1] = this.division[this.division.length-1].map(field => {
        if (field.fieldHeight - width < minFbSize || field.heightDivision[field.heightDivision.length-1].height - width < minFbSize ||!allFieldsOk) {
          return field; // Return the original field if the condition is not met
        }
        // Return a new field object with the updated values
        return {
          ...field,
          heightDivision: [
            ...field.heightDivision.slice(0, -1), // All elements except the last
            {height: field.heightDivision[field.heightDivision.length - 1].height - width, type:field.heightDivision[field.heightDivision.length - 1].type } // Modify the last element
          ]
          
        };
      });

      if (allFieldsOk) {
        this.updateFieldHeights();
        this.down.push({ type: type, height: width });
      }
      
    }
  }
}

export default Einheit;
