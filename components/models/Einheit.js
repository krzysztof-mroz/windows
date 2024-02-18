import React from "react";
import { drawRectangle, drawWindowUnited } from "../utils/drawingUtils";
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
    width,
    schwelle,
    division = [],
    up = [],
    down = [],
    left = [],
    right = [],
    profil
  ) {
    this.width = width;
    this.schwelle = schwelle;
    this.division = this.addHeightGetters(division);
    this.up = Array.isArray(up) ? up : [];
    this.down = Array.isArray(down) ? down : [];
    this.left = Array.isArray(left) ? left : [];
    this.right = Array.isArray(right) ? right : [];
    this.profil = profil;

   
  }

  addHeightGetters(division) {
    return division.map(subArray =>
      subArray.map(obj => {
        // Define a new property 'height' with a getter on the original object
        Object.defineProperty(obj, 'fieldHeight', {
          get: function() {
            let sumaWysokosci = 0
            obj.heightDivision.forEach(part => {
              sumaWysokosci += part.height
            }) 
            return sumaWysokosci
            //return this.heightDivision.reduce((sum, current) => sum + current.height, 0);
           
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
  
    // Ensure this.division is an array before proceeding
    if (Array.isArray(this.division)) {
      
      
      this.division.forEach(subArray => {
        if (subArray.length > 0 && subArray[0].heightDivision && subArray[0].heightDivision.length > 0) {
          totalHeight += subArray[0].fieldHeight;
        }
      });
      
      }
  
    return totalHeight;
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

  drawEinheit(posX, posY, canvasRef, scaleFactor) {
    const [ctx, canvas] = startCanvas(canvasRef);
    //console.log(this)
    //console.log("height " + this.height)
    //console.log("height 1 " + this.division[0][0].fieldHeight)
    //console.log("height " + this.height)

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
      scaleFactor
    );
    //drawRectangle(ctx, actualX, actualY, this.netWidth, this.netHeight, scaleFactor, "white");
    //drawRectangle(ctx, actualX+70*scaleFactor, actualY+70*scaleFactor, this.netWidth- 140, this.netHeight - 140, scaleFactor, "blue")

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
        this.down.push({ type: type, height: width });
      }
      
    }
  }
}

export default Einheit;
