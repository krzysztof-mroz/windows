function arraysAreEqual(array1, array2) {
  if (array1 && array2) {

  
    // Check if both arrays are the same instance
    if (array1 === array2) {
      return true;
    }

    // Check if both arrays have the same length
    if (array1.length !== array2.length) {
      return false;
    }

    // Compare each element of the arrays
    for (let i = 0; i < array1.length; i++) {
      // If elements are arrays, recursively call this function
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!arraysAreEqual(array1[i], array2[i])) {
          return false;
        }
      }
      // For non-array elements, check equality
      else if (array1[i] !== array2[i]) {
        return false;
      }
    }

    // If all elements are equal, return true
    return true;
  }
}



function drawRectangle(ctx, posX, posY, width, height, scaleFactor, color) {
    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, width * scaleFactor, height * scaleFactor);
    ctx.lineWidth = 1
    ctx.strokeRect(posX, posY, width * scaleFactor, height * scaleFactor);
  }

  export { drawRectangle };

  function drawDrehLinks(ctx, x,y,b,h) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+b, y+h/2); 
    ctx.lineTo(x,y+h);
    ctx.lineWidth = 1
    ctx.stroke();
   }

   function drawLine (ctx, x, y, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1); 
    ctx.lineWidth = 1
    ctx.stroke();
   }

   export { drawLine };

   function drawArrow(ctx, x, y, x1, y1, length) {

    ctx.lineWidth = 0.5

   if (x === x1) {
    drawLine(ctx, x-5, y, x+5, y)
    drawLine(ctx, x1-5, y1, x1+5, y1)
   } else {
    drawLine(ctx, x, y-5, x, y+5)
    drawLine(ctx, x1, y1-5, x1, y1+5)
   }
    // Calculate the angle of the line
    var angle = Math.atan2(y1 - y, x1 - x);

    // Set the length of the arrowheads
    var headLength = 0;

    // Draw the line
    ctx.beginPath();
    ctx.moveTo(x + headLength * Math.cos(angle), y + headLength * Math.sin(angle)); // Offset the start point
    ctx.lineTo(x1 - headLength * Math.cos(angle), y1 - headLength * Math.sin(angle)); // Offset the end point
    ctx.lineWidth = 0.5;
    ctx.stroke();

    
    if (length > 30) {
      // Draw the first arrowhead at (x, y) pointing towards (x, y)
      ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + headLength * Math.cos(angle - Math.PI / 6), y + headLength * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(x + headLength * Math.cos(angle + Math.PI / 6), y + headLength * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();

        // Draw the second arrowhead at (x1, y1) pointing away from (x1, y1)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1 - headLength * Math.cos(angle - Math.PI / 6), y1 - headLength * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(x1 - headLength * Math.cos(angle + Math.PI / 6), y1 - headLength * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();

    }
    

     // Set the text style
     ctx.fillStyle = 'black';
     ctx.font = 'normal 12px Arial';
     ctx.textAlign = 'center';
     ctx.textBaseline = 'bottom'
 
     // Calculate the midpoint for the text
     var midX = (x + x1) / 2;
     var midY = (y + y1) / 2;
 
     // Check if the line is vertical
     if (x === x1) {
         // Rotate text for vertical line
         ctx.save(); // Save the current state
         ctx.translate(midX, midY);
         ctx.rotate(-Math.PI / 2); // Rotate the context
         ctx.fillText(Math.round(length), 0,2); // Place text 2px to the left of the line
         ctx.restore(); // Restore the state
     } else {
         // Offset the text by 2 pixels above for horizontal line
         ctx.fillText(Math.round(length), midX, midY +2 );
     }
     ctx.lineWidth = 1
}


  export { drawArrow };  
 
   function drawDrehRechts(ctx, x,y,b,h) {
    ctx.beginPath();
    ctx.moveTo(x+b, y);
    ctx.lineTo(x, y+h/2); 
    ctx.lineTo(x+b,y+h);
    ctx.lineWidth = 1
    ctx.stroke();
   }

   function drawKipp(ctx, x,y,b,h) {
    ctx.beginPath();
    ctx.moveTo(x, y+h);
    ctx.lineTo(x+b/2, y); 
    ctx.lineTo(x+b,y+h); 
    ctx.lineWidth = 1
    ctx.stroke();
   }

   function drawStulpRechts(ctx, x,y,b,h) {
    const abstand = b*0.04
    const lineLength = h/11
    ctx.beginPath();
    ctx.moveTo(x+b-abstand, y);
    ctx.lineTo(x+b-abstand, y+lineLength); 
    ctx.moveTo(x+b-abstand, y+lineLength*2);
    ctx.lineTo(x+b-abstand, y+lineLength*3); 
    ctx.moveTo(x+b-abstand, y+lineLength*4);
    ctx.lineTo(x+b-abstand, y+lineLength*5); 
    ctx.moveTo(x+b-abstand, y+lineLength*6);
    ctx.lineTo(x+b-abstand, y+lineLength*7); 
    ctx.moveTo(x+b-abstand, y+lineLength*8);
    ctx.lineTo(x+b-abstand, y+lineLength*9); 
    ctx.moveTo(x+b-abstand, y+lineLength*10);
    ctx.lineTo(x+b-abstand, y+lineLength*11); 
    ctx.lineWidth = 2
    ctx.stroke();
   }

   function drawStulpLinks(ctx, x,y,b,h) {
    const abstand = b*0.04
    const lineLength = h/11
    ctx.beginPath();
    ctx.moveTo(x+abstand, y);
    ctx.lineTo(x+abstand, y+lineLength); 
    ctx.moveTo(x+abstand, y+lineLength*2);
    ctx.lineTo(x+abstand, y+lineLength*3); 
    ctx.moveTo(x+abstand, y+lineLength*4);
    ctx.lineTo(x+abstand, y+lineLength*5); 
    ctx.moveTo(x+abstand, y+lineLength*6);
    ctx.lineTo(x+abstand, y+lineLength*7); 
    ctx.moveTo(x+abstand, y+lineLength*8);
    ctx.lineTo(x+abstand, y+lineLength*9); 
    ctx.moveTo(x+abstand, y+lineLength*10);
    ctx.lineTo(x+abstand, y+lineLength*11); 
    ctx.lineWidth = 2
    ctx.stroke();
   }

   function drawGehrung (ctx, x, y, b, h, a) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+a, y+a); 
    ctx.moveTo(x+b, y);
    ctx.lineTo(x+b-a, y+a); 
    ctx.moveTo(x, y+h);
    ctx.lineTo(x+a, y+h-a); 
    ctx.moveTo(x+b, y+h);
    ctx.lineTo(x+b-a, y+h-a); 
    ctx.lineWidth = 1
    ctx.stroke();
   }

   function drawGehrungSchwelle (ctx, x, y, b, h, a) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+a, y+a); 
    ctx.moveTo(x+b, y);
    ctx.lineTo(x+b-a, y+a); 
    ctx.lineWidth = 1
    ctx.stroke();
   }

   function drawWindowUnited (ctx, profil, schwelle, division, posX, posY, width, height, scaleFactor, chosenPart, actualEinheit) {
  
    
    let schwelleSchift = schwelle ? profil.schwelleSchift : 0
    let schwelleSchiftPfosten = schwelle ? profil.rahmenNetto - profil.schwelle : 0

    // draw rahmen with gehrung, Schwelle if schwelle
    drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
    !schwelle && drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
    schwelle && drawGehrungSchwelle(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
    drawRectangle(ctx, posX+profil.rahmenNetto*scaleFactor, posY+profil.rahmenNetto*scaleFactor, width- profil.rahmenNetto*2, height - profil.rahmenNetto*2 + schwelleSchift, scaleFactor, "white") 
    schwelle && drawRectangle(ctx, posX+(profil.rahmenNetto)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmenNetto*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")    

     // Draw Pfosten and Querbalken
    //if (division.length > 1 || division[0].length > 1) {
      if (division.length > 0) { 
      let cumulatedHeight=0; 
      division.forEach((row, rowIndex) => {
        let currentHeight = row[0].fieldHeight
        let cumulatedWidth=0;
        row.forEach((field, fieldIndex) => {

          
          // calculate the Pfosten height width reduction and shifts
            let heightReduction = 0
            let widthReduction = 0
            
            if (division.length === 1) {
              heightReduction = profil.rahmenNetto*2
            }

            if (division.length === 1 && division[0].length === 1) {
              widthReduction = profil.rahmenNetto*2
            }

            if (rowIndex === 0 && rowIndex < division.length-1) {
              heightReduction = profil.pfostenNetto/2 + profil.rahmenNetto
            }

            if (rowIndex > 0 && rowIndex < division.length-1) {
              heightReduction = profil.pfostenNetto
            }

            if (rowIndex >= 1 && rowIndex === division.length-1) {
              heightReduction = profil.pfostenNetto/2 + profil.rahmenNetto
            }

            if (fieldIndex === 0 && fieldIndex === row.length -1) {
              widthReduction = profil.rahmenNetto*2
            }

            if (fieldIndex === 0 && fieldIndex < row.length -1) {
              widthReduction = profil.pfostenNetto/2 + profil.rahmenNetto
            }

            if (fieldIndex > 0 && fieldIndex < row.length -1) {
              widthReduction = profil.pfostenNetto
            }

            if (fieldIndex >= 1 && fieldIndex === row.length -1) {
              widthReduction = profil.pfostenNetto/2 + profil.rahmenNetto
            }

            // calculate the Pfosten and Querbalken shift
            let pfostenShift = 0
            let querbalkenShift = 0

            if (rowIndex === 0) {
              pfostenShift = profil.rahmenNetto
            }

            if (fieldIndex === 0) {
              querbalkenShift = profil.rahmenNetto
            }

            if (fieldIndex > 0) {
              querbalkenShift = profil.pfostenNetto/2
            }

            if (rowIndex > 0) {
              pfostenShift = profil.pfostenNetto/2
            }


          if (fieldIndex != row.length-1) { // if not the last field         
            drawRectangle(ctx, posX + (cumulatedWidth + field.width - profil.pfostenNetto/2)*scaleFactor, posY + (cumulatedHeight + pfostenShift) * scaleFactor, profil.pfostenNetto,  field.fieldHeight-heightReduction+schwelleSchiftPfosten, scaleFactor, "white") // draw Pfosten
          }
            let cumulatedPartHeight = 0
            field.heightDivision.forEach ((part, partIndex) => {
              let heightShift = 0
              let partHeightReduction = 0
              if (partIndex > 0 && rowIndex === 0) {
                heightShift = profil.pfostenNetto/2 - profil.rahmenNetto
              }
              if (field.heightDivision.length === 1) {
                partHeightReduction = heightReduction
              } else if ((rowIndex === 0 && partIndex === 0) || (rowIndex === division.length -1) && partIndex === field.heightDivision.length -1) {
                partHeightReduction = profil.pfostenNetto/2 + profil.rahmenNetto
              } else if ((rowIndex === 0 && partIndex > 0 && partIndex < field.heightDivision.length -1) || (rowIndex < division.length -1 && partIndex > 0) || (rowIndex > 0 && partIndex < field.heightDivision.length -1))  {
                partHeightReduction = profil.pfostenNetto
              }
              cumulatedPartHeight += part;
            })
         
          if(field.heightDivision.length > 1) {
            let cumulatedPartsHeight = 0;
            field.heightDivision.forEach((partHeight, partHeightIndex) => { 
              if (partHeightIndex != field.heightDivision.length-1) {       // if not the last field
                drawRectangle(ctx, posX + (cumulatedWidth + querbalkenShift)*scaleFactor, posY+(cumulatedHeight+cumulatedPartsHeight+partHeight.height - profil.pfostenNetto/2)*scaleFactor, field.width-widthReduction, profil.pfostenNetto,  scaleFactor, "white") // draw Querbalken in field
              }  
              cumulatedPartsHeight+=partHeight.height
            });
          }
          cumulatedWidth+=field.width
        })
        if (rowIndex != division.length-1) {// if not the last field
          drawRectangle(ctx, posX + profil.rahmenNetto * scaleFactor, posY+(cumulatedHeight + currentHeight - profil.pfostenNetto/2)*scaleFactor, width - profil.rahmenNetto * 2, profil.pfostenNetto, scaleFactor, "white") // draw main Querbalken
        }
        cumulatedHeight+=currentHeight
      });
     }

     // Draw fields
    // if (division.length > 1 || division[0].length > 1) {
      if (division.length>0) {
      let cumulatedHeight=0; 
      division.forEach((row, rowIndex) => {
        let currentHeight = row[0].fieldHeight
        let cumulatedWidth=0;
        row.forEach((field, fieldIndex) => {
          
          
          
          // calculate the Pfosten height and width reduction and shift again
            let heightReduction = 0
            let widthReduction = 0
            let stulpCorrection = 0;
            
            if (division.length === 1) {
              heightReduction = profil.rahmenNetto*2
            }

            if (division.length === 1 && division[0].length === 1) {
              widthReduction = profil.rahmenNetto*2
            }

            if (rowIndex === 0 && rowIndex < division.length-1) {
              heightReduction = profil.pfostenNetto/2 + profil.rahmenNetto
            }

            if (rowIndex > 0 && rowIndex < division.length-1) {
              heightReduction = profil.pfostenNetto
            }

            if (rowIndex >= 1 && rowIndex === division.length-1) {
              heightReduction = profil.pfostenNetto/2 + profil.rahmenNetto
            }

            if (fieldIndex === 0 && fieldIndex === row.length -1) {
              widthReduction = profil.rahmenNetto*2
              stulpCorrection = profil.visibleRahmen
            }

            if (fieldIndex === 0 && fieldIndex < row.length -1) {
              widthReduction = profil.pfostenNetto/2 + profil.rahmenNetto
              stulpCorrection = profil.visibleRahmen
            }

            if (fieldIndex > 0 && fieldIndex < row.length -1) {
              widthReduction = profil.pfostenNetto
              stulpCorrection = profil.visiblePfosten
            }

            if (fieldIndex >= 1 && fieldIndex === row.length -1) {
              widthReduction = profil.pfostenNetto/2 + profil.rahmenNetto
              stulpCorrection = profil.visiblePfosten
            }

            // calculate the Pfosten and Querbalken shift
            let pfostenShift = 0
            let querbalkenShift = 0

            if (rowIndex === 0) {
              pfostenShift = profil.rahmenNetto
            }

            if (fieldIndex === 0) {
              querbalkenShift = profil.rahmenNetto
            }

            if (fieldIndex > 0) {
              querbalkenShift = profil.pfostenNetto/2
            }

            if (rowIndex > 0) {
              pfostenShift = profil.pfostenNetto/2
            }



            

      
            let cumulatedPartHeight = 0
            field.heightDivision.forEach ((part, partIndex) => {
              let stulpPosition = part.stulp; // DEFAULT STULP POSITION HERE
              let heightShift = 0
              let partHeightReduction = 0
              if (partIndex > 0 && rowIndex === 0) {
                heightShift = profil.pfostenNetto/2 - profil.rahmenNetto
              }
              if (field.heightDivision.length === 1) {
                partHeightReduction = heightReduction
              } else if ((rowIndex === 0 && partIndex === 0) || (rowIndex === division.length -1) && partIndex === field.heightDivision.length -1) {
                partHeightReduction = profil.pfostenNetto/2 + profil.rahmenNetto
              } else if ((rowIndex === 0 && partIndex > 0 && partIndex < field.heightDivision.length -1) || (rowIndex < division.length -1 && partIndex > 0) || (rowIndex > 0 && partIndex < field.heightDivision.length -1))  {
                partHeightReduction = profil.pfostenNetto
              }
               

              let baseHoleScaled = {
                x: posX + (cumulatedWidth + querbalkenShift) * scaleFactor,
                y: posY + (cumulatedHeight + cumulatedPartHeight + pfostenShift + heightShift) * scaleFactor,
                b: (field.width - widthReduction ) * scaleFactor,
                h: (rowIndex === division.length -1 && partIndex === field.heightDivision.length -1) ? (part.height - partHeightReduction + schwelleSchift ) * scaleFactor : (part.height - partHeightReduction ) * scaleFactor
              }

              let baseHole = {
                x: posX + (cumulatedWidth + querbalkenShift) ,
                y: posY + (cumulatedHeight + cumulatedPartHeight + pfostenShift + heightShift),
                b: (field.width - widthReduction ) ,
                h: (rowIndex === division.length -1 && partIndex === field.heightDivision.length -1) ? (part.height - partHeightReduction + schwelleSchift ) : (part.height - partHeightReduction )
              }

        

              let breiteStulp1 = stulpPosition - stulpCorrection - profil.stulp/2 + profil.ueberlappung
              let breiteStulp2 = baseHole.b + (profil.ueberlappung - profil.glasleiste)*2 - breiteStulp1 + profil.ueberlappung * 2 - profil.stulp

              let glasHoleScaledFF = {
                x: posX + (cumulatedWidth + querbalkenShift + profil.fluegel - profil.ueberlappung + profil.glasleiste ) * scaleFactor,
                y: posY + (cumulatedHeight + cumulatedPartHeight + pfostenShift + heightShift + profil.fluegel - profil.ueberlappung + profil.glasleiste) * scaleFactor,
                b: (field.width - widthReduction - (profil.fluegel - profil.ueberlappung + profil.glasleiste)*2) * scaleFactor,
                h: (rowIndex === division.length -1 && partIndex === field.heightDivision.length -1) ? (part.height - partHeightReduction + schwelleSchift - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2) * scaleFactor : (part.height - partHeightReduction - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2) * scaleFactor
              }

              

              function drawFF() {
                drawRectangle(ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHole.b + (profil.ueberlappung - profil.glasleiste)*2, baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2, scaleFactor, 'white')
                drawRectangle(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHole.b - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*2, baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, 'white')
                drawGehrung (ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, (baseHole.b + (profil.ueberlappung - profil.glasleiste)*2)*scaleFactor, (baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2) * scaleFactor, profil.fluegelNetto * scaleFactor)
                drawRectangle(ctx, baseHoleScaled.x + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHole.b - (profil.fluegel - profil.ueberlappung + profil.glasleiste)*2, baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, '#ADD8E6')
                drawGehrung (ctx, baseHoleScaled.x + (profil.fluegel - profil.ueberlappung)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung)*scaleFactor, (baseHole.b - (profil.fluegel - profil.ueberlappung)*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung ) * 2) * scaleFactor, profil.glasleiste * scaleFactor)
              }

              

              
              switch (part.type) {
                  case 'FB':
                    drawGehrung(ctx, baseHoleScaled.x, baseHoleScaled.y, baseHoleScaled.b, baseHoleScaled.h, profil.glasleiste*scaleFactor) // FB Gehrunhg
                    drawRectangle(ctx, baseHoleScaled.x + profil.glasleiste*scaleFactor, baseHoleScaled.y + profil.glasleiste*scaleFactor, baseHole.b - profil.glasleiste*2, baseHole.h - profil.glasleiste * 2, scaleFactor, '#ADD8E6') // FB, also Glasleiste

                  break;

                  case 'FF':
                    drawFF()
  
                  break;

                  case 'K':
                    drawFF()
                    drawKipp(ctx, glasHoleScaledFF.x, glasHoleScaledFF.y, glasHoleScaledFF.b, glasHoleScaledFF.h)
                  break;

                  case 'DR':
                    drawFF()
                    drawDrehRechts(ctx, glasHoleScaledFF.x, glasHoleScaledFF.y, glasHoleScaledFF.b, glasHoleScaledFF.h)
                    
                  break;

                  case 'DL':
                    drawFF()
                    drawDrehLinks(ctx, glasHoleScaledFF.x, glasHoleScaledFF.y, glasHoleScaledFF.b, glasHoleScaledFF.h)
                    

                  break;

                  case 'DKR':
                    drawFF()
                    drawDrehRechts(ctx, glasHoleScaledFF.x, glasHoleScaledFF.y, glasHoleScaledFF.b, glasHoleScaledFF.h)
                    drawKipp(ctx, glasHoleScaledFF.x, glasHoleScaledFF.y, glasHoleScaledFF.b, glasHoleScaledFF.h)

                  break;

                  case 'DKL':
                    drawFF()
                    drawDrehLinks(ctx, glasHoleScaledFF.x, glasHoleScaledFF.y, glasHoleScaledFF.b, glasHoleScaledFF.h)
                    drawKipp(ctx, glasHoleScaledFF.x, glasHoleScaledFF.y, glasHoleScaledFF.b, glasHoleScaledFF.h)

                  break;

                  case 'DSDK': 
                    drawRectangle(ctx, posX + (cumulatedWidth + stulpPosition-profil.stulp/2) * scaleFactor, baseHoleScaled.y , profil.stulp, baseHole.h, scaleFactor, "white") // draw Stulp Pfosten

                    // Fluegel 1
                    drawRectangle(ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, breiteStulp1, baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2, scaleFactor, "white"); // fluegel 1 outside frame
                    drawGehrung(ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, breiteStulp1*scaleFactor, (baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2) * scaleFactor, profil.fluegelNetto*scaleFactor) 
                    drawRectangle(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, breiteStulp1 - profil.fluegelNetto*2, baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, "white"); // fluegel 1 inside frame
                    drawGehrung(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, (breiteStulp1 - profil.fluegelNetto*2) * scaleFactor, (baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2)* scaleFactor, profil.glasleiste*scaleFactor); 
                    drawRectangle(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, breiteStulp1 - profil.fluegelNetto*2 - profil.glasleiste*2, baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, "#ADD8E6"); // fluegel 1 glas
                    drawDrehLinks(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, (breiteStulp1 - profil.fluegelNetto*2 - profil.glasleiste*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2)*scaleFactor); 
                    drawStulpRechts(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, (breiteStulp1 - profil.fluegelNetto*2 - profil.glasleiste*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2)*scaleFactor); 
                   
                

                    // Fluegel 2
                    drawRectangle(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung) * scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, breiteStulp2, baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2, scaleFactor, "white");
                    drawGehrung(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung) * scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, breiteStulp2*scaleFactor, (baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2) * scaleFactor, profil.fluegelNetto*scaleFactor) 
                    drawRectangle(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, breiteStulp2 - profil.fluegelNetto*2, baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, "white");
                    drawGehrung(ctx, posX+(cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegelNetto)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung)*scaleFactor, (breiteStulp2 - profil.fluegelNetto*2) * scaleFactor , (baseHole.h - (profil.fluegel - profil.ueberlappung ) * 2) * scaleFactor, profil.glasleiste*scaleFactor) 
                    drawRectangle(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, (breiteStulp2 - profil.fluegel*2), baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, '#ADD8E6');
                    drawDrehRechts(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, (breiteStulp2 - profil.fluegel*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2)*scaleFactor)
                    drawKipp(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, (breiteStulp2 - profil.fluegel*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2)*scaleFactor)
                  
                    
                 
                    break

                  case 'DKDS':
                    drawRectangle(ctx, posX + (cumulatedWidth + stulpPosition-profil.stulp/2) * scaleFactor, baseHoleScaled.y , profil.stulp, baseHole.h, scaleFactor, "white") // draw Stulp Pfosten

                   // Fluegel 1
                   drawRectangle(ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, breiteStulp1, baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2, scaleFactor, "white"); // fluegel 1 outside frame
                   drawGehrung(ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, breiteStulp1*scaleFactor, (baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2) * scaleFactor, profil.fluegelNetto*scaleFactor) 
                   drawRectangle(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, breiteStulp1 - profil.fluegelNetto*2, baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, "white"); // fluegel 1 inside frame
                   drawGehrung(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, (breiteStulp1 - profil.fluegelNetto*2) * scaleFactor, (baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2)* scaleFactor, profil.glasleiste*scaleFactor); 
                   drawRectangle(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, breiteStulp1 - profil.fluegelNetto*2 - profil.glasleiste*2, baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, "#ADD8E6"); // fluegel 1 glas
                   drawDrehLinks(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, (breiteStulp1 - profil.fluegelNetto*2 - profil.glasleiste*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2)*scaleFactor); 
                   drawKipp(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste*2)*scaleFactor, (breiteStulp1 - profil.fluegelNetto*2 - profil.glasleiste*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2)*scaleFactor); 
                  
               

                  // Fluegel 2
                  drawRectangle(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung) * scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, breiteStulp2, baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2, scaleFactor, "white");
                  drawGehrung(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung) * scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, breiteStulp2*scaleFactor, (baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2) * scaleFactor, profil.fluegelNetto*scaleFactor) 
                  drawRectangle(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, breiteStulp2 - profil.fluegelNetto*2, baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, "white");
                  drawGehrung(ctx, posX+(cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegelNetto)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung)*scaleFactor, (breiteStulp2 - profil.fluegelNetto*2) * scaleFactor , (baseHole.h - (profil.fluegel - profil.ueberlappung ) * 2) * scaleFactor, profil.glasleiste*scaleFactor) 
                  drawRectangle(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, (breiteStulp2 - profil.fluegel*2), baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, '#ADD8E6');
                  drawDrehRechts(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, (breiteStulp2 - profil.fluegel*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2)*scaleFactor)
                  drawStulpLinks(ctx, posX + (cumulatedWidth + stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, (breiteStulp2 - profil.fluegel*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2)*scaleFactor)
                
                   
                  break;

                  default:
                    // drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
                   
                }

                //console.log(chosenPart)
                if(arraysAreEqual(chosenPart, [actualEinheit[0], actualEinheit[1], rowIndex, fieldIndex, partIndex])) {
                  ctx.globalAlpha = 0.2
                  drawRectangle(ctx, baseHoleScaled.x - (profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHole.b + (profil.ueberlappung - profil.glasleiste)*2, baseHole.h + (profil.ueberlappung - profil.glasleiste)*2, scaleFactor, "red")
                  ctx.globalAlpha = 1
                }

              cumulatedPartHeight += part.height;
              
              
            })
         
          
          cumulatedWidth+=field.width
        })
        
        cumulatedHeight+=currentHeight
      });
     }

   }

  
  
   export {drawWindowUnited}
  
   