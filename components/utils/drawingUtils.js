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

   function drawWindowUnited (ctx, profil, schwelle, division, posX, posY, width, height, scaleFactor) {
    //console.log("division")
    //console.log(division)
    //console.log("height  " + height)
    let schwelleSchift = schwelle ? profil.schwelleSchift : 0
    let schwelleSchiftPfosten = schwelle ? profil.rahmen - profil.schwelle : 0

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

              
              switch (part.type) {
                  case 'FB':
                    drawGehrung(ctx, baseHoleScaled.x, baseHoleScaled.y, baseHoleScaled.b, baseHoleScaled.h, profil.glasleiste) // FB Gehrunhg
                    drawRectangle(ctx, baseHoleScaled.x + profil.glasleiste*scaleFactor, baseHoleScaled.y + profil.glasleiste*scaleFactor, baseHole.b - profil.glasleiste*2, baseHole.h - profil.glasleiste * 2, scaleFactor, '#ADD8E6') // FB, also Glasleiste
  
                  break;

                  case 'FF':
                    drawRectangle(ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHole.b + (profil.ueberlappung - profil.glasleiste)*2, baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2, scaleFactor, 'white')
                    drawRectangle(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHole.b - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*2, baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, 'white')
                    drawGehrung (ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, (baseHole.b + (profil.ueberlappung - profil.glasleiste)*2)*scaleFactor, (baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2) * scaleFactor, profil.fluegelNetto * scaleFactor)
                    drawRectangle(ctx, baseHoleScaled.x + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHole.b - (profil.fluegel - profil.ueberlappung + profil.glasleiste)*2, baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, '#ADD8E6')
                    drawGehrung (ctx, baseHoleScaled.x + (profil.fluegel - profil.ueberlappung)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung)*scaleFactor, (baseHole.b - (profil.fluegel - profil.ueberlappung)*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung ) * 2) * scaleFactor, profil.glasleiste * scaleFactor)
  
                  break;

                  default:
                    // drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
                   
                }

              // draw FB
              //drawGehrung(ctx, baseHoleScaled.x, baseHoleScaled.y, baseHoleScaled.b, baseHoleScaled.h, profil.glasleiste) // FB Gehrunhg
              //drawRectangle(ctx, baseHoleScaled.x + profil.glasleiste*scaleFactor, baseHoleScaled.y + profil.glasleiste*scaleFactor, baseHole.b - profil.glasleiste*2, baseHole.h - profil.glasleiste * 2, scaleFactor, '#ADD8E6') // FB, also Glasleiste

             
              // draw FF
              /* drawRectangle(ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHole.b + (profil.ueberlappung - profil.glasleiste)*2, baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2, scaleFactor, 'white')
              drawRectangle(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHole.b - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*2, baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, 'white')
              drawGehrung (ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, (baseHole.b + (profil.ueberlappung - profil.glasleiste)*2)*scaleFactor, (baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2) * scaleFactor, profil.fluegelNetto * scaleFactor)
              drawRectangle(ctx, baseHoleScaled.x + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHole.b - (profil.fluegel - profil.ueberlappung + profil.glasleiste)*2, baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, '#ADD8E6')
              drawGehrung (ctx, baseHoleScaled.x + (profil.fluegel - profil.ueberlappung)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung)*scaleFactor, (baseHole.b - (profil.fluegel - profil.ueberlappung)*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung ) * 2) * scaleFactor, profil.glasleiste * scaleFactor)


*/
              cumulatedPartHeight += part.height;
              
              
            })
         
          
          cumulatedWidth+=field.width
        })
        
        cumulatedHeight+=currentHeight
      });
     }

   }

  
  
   export {drawWindowUnited}
  
    function drawWindow(ctx, profil, windowType, schwelle, division, posX, posY, width, height, scaleFactor) {
      
      let stulpPosition = width/2; // CHANGE THE STULP POSITION HERE
      let pfostenPosition = width/2; // CHANGE THE PFOSTEN POSITION HERE
      let schwelleSchift = schwelle ? profil.schwelleSchift : 0
      let schwelleSchiftPfosten = schwelle ? profil.rahmen - profil.schwelle : 0
      
      switch (windowType) {
        case 'POS':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
         
        
          break;
        case 'FB':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          drawRectangle(ctx, posX+profil.rahmenNetto*scaleFactor, posY+profil.rahmenNetto*scaleFactor, width- profil.rahmenNetto*2, height - profil.rahmenNetto*2, scaleFactor, "white")    
          drawGehrung(ctx, posX+profil.rahmenNetto*scaleFactor, posY+profil.rahmenNetto*scaleFactor, (width- profil.rahmenNetto*2)*scaleFactor, (height - profil.rahmenNetto*2)*scaleFactor, profil.glasleiste*scaleFactor)  
          drawRectangle(ctx, posX+profil.rahmen*scaleFactor, posY+profil.rahmen*scaleFactor, width- profil.rahmen*2, height - profil.rahmen*2, scaleFactor, '#ADD8E6')      
        
          break;
        case 'FF':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          drawRectangle(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, width- profil.visibleRahmen*2, height - profil.visibleRahmen*2, scaleFactor, "white") 
          drawGehrung(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, (width- profil.visibleRahmen*2)*scaleFactor, (height - profil.visibleRahmen*2)*scaleFactor, profil.fluegelNetto*scaleFactor)       
          drawRectangle(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, width- profil.gesamtNetto*2, height - profil.gesamtNetto*2, scaleFactor, "white")  
          drawGehrung(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, (width- profil.gesamtNetto*2)*scaleFactor, (height - profil.gesamtNetto*2)*scaleFactor, profil.glasleiste*scaleFactor)           
          drawRectangle(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, width- profil.gesamtbreite*2, height - profil.gesamtbreite*2, scaleFactor, '#ADD8E6')      
         
          break;
        case 'DKR':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          !schwelle && drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          schwelle && drawGehrungSchwelle(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          drawRectangle(ctx, posX+profil.visibleRahmen*scaleFactor, posY+(profil.visibleRahmen)*scaleFactor, width- profil.visibleRahmen*2, height - profil.visibleRahmen*2 + schwelleSchift, scaleFactor, "white")      
          schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")     
          drawGehrung(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, (width- profil.visibleRahmen*2)*scaleFactor, (height - profil.visibleRahmen*2+ schwelleSchift)*scaleFactor, profil.fluegelNetto*scaleFactor)         
          drawRectangle(ctx, posX+profil.gesamtNetto*scaleFactor, posY+(profil.gesamtNetto)*scaleFactor, width- profil.gesamtNetto*2, height - profil.gesamtNetto*2+ schwelleSchift, scaleFactor, "white")   
          drawGehrung(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, (width- profil.gesamtNetto*2)*scaleFactor, (height - profil.gesamtNetto*2 + schwelleSchift)*scaleFactor, profil.glasleiste*scaleFactor)           
          drawRectangle(ctx, posX+profil.gesamtbreite*scaleFactor, posY+(profil.gesamtbreite)*scaleFactor, width- profil.gesamtbreite*2, height - profil.gesamtbreite*2+ schwelleSchift, scaleFactor, '#ADD8E6')   
          drawDrehRechts(ctx, posX+profil.gesamtbreite*scaleFactor, posY+(profil.gesamtbreite)*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)   
          drawKipp (ctx, posX+profil.gesamtbreite*scaleFactor, posY+(profil.gesamtbreite)*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)   
    
          break;
        case 'DKL':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          !schwelle && drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          schwelle && drawGehrungSchwelle(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          drawRectangle(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, width- profil.visibleRahmen*2, height - profil.visibleRahmen*2+ schwelleSchift, scaleFactor, "white")      
          schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")  
          drawGehrung(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, (width- profil.visibleRahmen*2)*scaleFactor, (height - profil.visibleRahmen*2+ schwelleSchift)*scaleFactor, profil.fluegelNetto*scaleFactor)            
          drawRectangle(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, width- profil.gesamtNetto*2, height - profil.gesamtNetto*2+ schwelleSchift, scaleFactor, "white") 
          drawGehrung(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, (width- profil.gesamtNetto*2)*scaleFactor, (height - profil.gesamtNetto*2 + schwelleSchift)*scaleFactor, profil.glasleiste*scaleFactor)          
          drawRectangle(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, width- profil.gesamtbreite*2, height - profil.gesamtbreite*2+ schwelleSchift, scaleFactor, '#ADD8E6')      
          drawDrehLinks(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)
          drawKipp (ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)   
          break;

          case 'DR':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          !schwelle && drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          schwelle && drawGehrungSchwelle(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          drawRectangle(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, width- profil.visibleRahmen*2, height - profil.visibleRahmen*2+ schwelleSchift, scaleFactor, "white")      
          schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")
          drawGehrung(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, (width- profil.visibleRahmen*2)*scaleFactor, (height - profil.visibleRahmen*2+ schwelleSchift)*scaleFactor, profil.fluegelNetto*scaleFactor)              
          drawRectangle(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, width- profil.gesamtNetto*2, height - profil.gesamtNetto*2+ schwelleSchift, scaleFactor, "white")  
          drawGehrung(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, (width- profil.gesamtNetto*2)*scaleFactor, (height - profil.gesamtNetto*2 + schwelleSchift)*scaleFactor, profil.glasleiste*scaleFactor)         
          drawRectangle(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, width- profil.gesamtbreite*2, height - profil.gesamtbreite*2+ schwelleSchift, scaleFactor, '#ADD8E6')   
          drawDrehRechts(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)   
          break;
        case 'DL':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          !schwelle && drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          schwelle && drawGehrungSchwelle(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          drawRectangle(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, width- profil.visibleRahmen*2, height - profil.visibleRahmen*2+ schwelleSchift, scaleFactor, "white")   
          schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")    
          drawGehrung(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, (width- profil.visibleRahmen*2)*scaleFactor, (height - profil.visibleRahmen*2+ schwelleSchift)*scaleFactor, profil.fluegelNetto*scaleFactor)             
          drawRectangle(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, width- profil.gesamtNetto*2, height - profil.gesamtNetto*2+ schwelleSchift, scaleFactor, "white")   
          drawGehrung(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, (width- profil.gesamtNetto*2)*scaleFactor, (height - profil.gesamtNetto*2 + schwelleSchift)*scaleFactor, profil.glasleiste*scaleFactor)        
          drawRectangle(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, width- profil.gesamtbreite*2, height - profil.gesamtbreite*2+ schwelleSchift, scaleFactor, '#ADD8E6')      
          drawDrehLinks(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)
          break;

        case 'DSDK':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          !schwelle && drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          schwelle && drawGehrungSchwelle(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
          drawRectangle(ctx, posX+profil.rahmen*scaleFactor, posY+profil.rahmen*scaleFactor, width- profil.rahmen*2, height - profil.rahmen*2+ schwelleSchift, scaleFactor, "white") 
          schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")        
          // Stulppfosten
          drawRectangle(ctx, posX + (stulpPosition-profil.stulp/2) * scaleFactor, posY + profil.rahmen*scaleFactor , profil.stulp, height-profil.rahmen*2+ schwelleSchiftPfosten, scaleFactor, "white")
          // Fluegel 1
          drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift, scaleFactor, "white");
          drawGehrung(ctx, posX+(profil.rahmen - profil.ueberlappung)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung)*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift)*scaleFactor, profil.fluegelNetto*scaleFactor) 
          drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2+ schwelleSchift, scaleFactor, "white");
          drawGehrung(ctx, posX+(profil.rahmen - profil.ueberlappung + profil.fluegelNetto)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung + profil.fluegelNetto)*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto *2 )*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2+ schwelleSchift)*scaleFactor, profil.glasleiste*scaleFactor) 
          drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift, scaleFactor, '#ADD8E6');
          drawDrehLinks(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift)*scaleFactor)
          drawStulpRechts(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift)*scaleFactor) 
          // Fluegel 2
          drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2+ schwelleSchift, scaleFactor, "white");
          drawGehrung(ctx, posX+(stulpPosition + profil.stulp/2 - profil.ueberlappung)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung)*scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift)*scaleFactor, profil.fluegelNetto*scaleFactor) 
          drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2+ schwelleSchift, scaleFactor, "white");
          drawGehrung(ctx, posX+(stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegelNetto)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung+ profil.fluegelNetto)*scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2+ schwelleSchift)*scaleFactor, profil.glasleiste*scaleFactor) 
          drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift, scaleFactor, '#ADD8E6');
          drawDrehRechts(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift)*scaleFactor)
          drawKipp(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift)*scaleFactor)
          break;

          case 'DKDS':
            drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
            !schwelle && drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
            schwelle && drawGehrungSchwelle(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
            drawRectangle(ctx, posX+profil.rahmen*scaleFactor, posY+profil.rahmen*scaleFactor, width- profil.rahmen*2, height - profil.rahmen*2 + schwelleSchift, scaleFactor, "white")  
            schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")        
            // Stulppfosten
            drawRectangle(ctx, posX + (stulpPosition-profil.stulp/2) * scaleFactor, posY + profil.rahmen*scaleFactor , profil.stulp, height-profil.rahmen*2 + schwelleSchiftPfosten, scaleFactor, "white")
            // Fluegel 1
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift, scaleFactor, "white");
            drawGehrung(ctx, posX+(profil.rahmen - profil.ueberlappung)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung)*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift)*scaleFactor, profil.fluegelNetto*scaleFactor) 
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2 + schwelleSchift, scaleFactor, "white");
            drawGehrung(ctx, posX+(profil.rahmen - profil.ueberlappung + profil.fluegelNetto)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung + profil.fluegelNetto)*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto *2 )*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2+ schwelleSchift)*scaleFactor, profil.glasleiste*scaleFactor) 
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift, scaleFactor, '#ADD8E6');
            drawDrehLinks(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            drawKipp(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            // Fluegel 2
            drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, width - stulpPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift, scaleFactor, "white");
            drawGehrung(ctx, posX+(stulpPosition + profil.stulp/2 - profil.ueberlappung)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung)*scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift)*scaleFactor, profil.fluegelNetto*scaleFactor) 
            drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2 + schwelleSchift, scaleFactor, "white");
            drawGehrung(ctx, posX+(stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegelNetto)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung+ profil.fluegelNetto)*scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2+ schwelleSchift)*scaleFactor, profil.glasleiste*scaleFactor) 
            drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift, scaleFactor, '#ADD8E6');
            drawDrehRechts(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            drawStulpLinks(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            break;
        case 'DKDK':
            drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
            !schwelle && drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
            schwelle && drawGehrungSchwelle(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
            drawRectangle(ctx, posX+profil.rahmen*scaleFactor, posY+profil.rahmen*scaleFactor, width- profil.rahmen*2, height - profil.rahmen*2 + schwelleSchift, scaleFactor, "white") 
            schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")        
            // Mittelpfosten
            drawRectangle(ctx, posX + (pfostenPosition-profil.pfosten/2) * scaleFactor, posY + profil.rahmen*scaleFactor , profil.pfosten, height-profil.rahmen*2 + schwelleSchiftPfosten, scaleFactor, "white")
            // Fluegel 1
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift, scaleFactor, "white");
            drawGehrung(ctx, posX+(profil.rahmen - profil.ueberlappung)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung)*scaleFactor, (pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift)*scaleFactor, profil.fluegelNetto*scaleFactor) 
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2 + schwelleSchift, scaleFactor, "white");
            drawGehrung(ctx, posX+(profil.rahmen - profil.ueberlappung + profil.fluegelNetto)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung + profil.fluegelNetto)*scaleFactor, (pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto *2 )*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2+ schwelleSchift)*scaleFactor, profil.glasleiste*scaleFactor) 
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift, scaleFactor, '#ADD8E6');
            drawDrehLinks(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            drawKipp(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor) 
            // Fluegel 2
            drawRectangle(ctx, posX + (pfostenPosition + profil.pfosten/2 - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift, scaleFactor, "white");
            drawGehrung(ctx, posX+(pfostenPosition + profil.pfosten/2 - profil.ueberlappung)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung)*scaleFactor, (width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift)*scaleFactor, profil.fluegelNetto*scaleFactor) 
            drawRectangle(ctx, posX + (pfostenPosition + profil.pfosten/2 - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2 + schwelleSchift, scaleFactor, "white");
            drawGehrung(ctx, posX+(pfostenPosition + profil.pfosten/2 - profil.ueberlappung+ profil.fluegelNetto)*scaleFactor, posY+(profil.rahmen - profil.ueberlappung+ profil.fluegelNetto)*scaleFactor, (width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2+ schwelleSchift)*scaleFactor, profil.glasleiste*scaleFactor) 
            drawRectangle(ctx, posX + (pfostenPosition + profil.pfosten/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift, scaleFactor, '#ADD8E6');
            drawDrehRechts(ctx, posX + (pfostenPosition + profil.pfosten/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            drawKipp(ctx, posX + (pfostenPosition + profil.pfosten/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
          break;


        
         case 'IND':

         
         // Draw Rahmen
         drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
         !schwelle && drawGehrung(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
         schwelle && drawGehrungSchwelle(ctx, posX, posY, width*scaleFactor, height*scaleFactor, profil.rahmenNetto*scaleFactor)  
         drawRectangle(ctx, posX+profil.rahmenNetto*scaleFactor, posY+profil.rahmenNetto*scaleFactor, width- profil.rahmenNetto*2, height - profil.rahmenNetto*2 + schwelleSchift, scaleFactor, "white") 
         schwelle && drawRectangle(ctx, posX+(profil.rahmenNetto)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmenNetto*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")    
         
        
         
         
         // Draw Pfosten and Querbalken
         if (division.length > 1 || division[0].length > 1) {
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
                drawRectangle(ctx, posX + (cumulatedWidth + field.width - profil.pfostenNetto/2)*scaleFactor, posY + (cumulatedHeight + pfostenShift) * scaleFactor, profil.pfostenNetto,  field.height-heightReduction, scaleFactor, "white") // draw Pfosten
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
         //if (division.length > 1 || division[0].length > 1) {
          if (division.length > 0) {
          let cumulatedHeight=0; 
          division.forEach((row, rowIndex) => {
            let currentHeight = row[0].height
            let cumulatedWidth=0;
            row.forEach((field, fieldIndex) => {
              
              
              
              // calculate the Pfosten height and width reduction and shift again
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

                  
                  switch (part.type) {
                      case 'FB':
                        drawGehrung(ctx, baseHoleScaled.x, baseHoleScaled.y, baseHoleScaled.b, baseHoleScaled.h, profil.glasleiste) // FB Gehrunhg
                        drawRectangle(ctx, baseHoleScaled.x + profil.glasleiste*scaleFactor, baseHoleScaled.y + profil.glasleiste*scaleFactor, baseHole.b - profil.glasleiste*2, baseHole.h - profil.glasleiste * 2, scaleFactor, '#ADD8E6') // FB, also Glasleiste
      
                      break;

                      case 'FF':
                        drawRectangle(ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHole.b + (profil.ueberlappung - profil.glasleiste)*2, baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2, scaleFactor, 'white')
                        drawRectangle(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHole.b - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*2, baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, 'white')
                        drawGehrung (ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, (baseHole.b + (profil.ueberlappung - profil.glasleiste)*2)*scaleFactor, (baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2) * scaleFactor, profil.fluegelNetto * scaleFactor)
                        drawRectangle(ctx, baseHoleScaled.x + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHole.b - (profil.fluegel - profil.ueberlappung + profil.glasleiste)*2, baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, '#ADD8E6')
                        drawGehrung (ctx, baseHoleScaled.x + (profil.fluegel - profil.ueberlappung)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung)*scaleFactor, (baseHole.b - (profil.fluegel - profil.ueberlappung)*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung ) * 2) * scaleFactor, profil.glasleiste * scaleFactor)
      
                      break;

                      default:
                        // drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
                       
                    }

                  // draw FB
                  //drawGehrung(ctx, baseHoleScaled.x, baseHoleScaled.y, baseHoleScaled.b, baseHoleScaled.h, profil.glasleiste) // FB Gehrunhg
                  //drawRectangle(ctx, baseHoleScaled.x + profil.glasleiste*scaleFactor, baseHoleScaled.y + profil.glasleiste*scaleFactor, baseHole.b - profil.glasleiste*2, baseHole.h - profil.glasleiste * 2, scaleFactor, '#ADD8E6') // FB, also Glasleiste

                 
                  // draw FF
                  /* drawRectangle(ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHole.b + (profil.ueberlappung - profil.glasleiste)*2, baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2, scaleFactor, 'white')
                  drawRectangle(ctx, baseHoleScaled.x + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHole.b - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste)*2, baseHole.h - (profil.fluegelNetto - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, 'white')
                  drawGehrung (ctx, baseHoleScaled.x -(profil.ueberlappung - profil.glasleiste)*scaleFactor, baseHoleScaled.y - (profil.ueberlappung - profil.glasleiste)*scaleFactor, (baseHole.b + (profil.ueberlappung - profil.glasleiste)*2)*scaleFactor, (baseHole.h + (profil.ueberlappung - profil.glasleiste) * 2) * scaleFactor, profil.fluegelNetto * scaleFactor)
                  drawRectangle(ctx, baseHoleScaled.x + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung + profil.glasleiste)*scaleFactor, baseHole.b - (profil.fluegel - profil.ueberlappung + profil.glasleiste)*2, baseHole.h - (profil.fluegel - profil.ueberlappung + profil.glasleiste) * 2, scaleFactor, '#ADD8E6')
                  drawGehrung (ctx, baseHoleScaled.x + (profil.fluegel - profil.ueberlappung)*scaleFactor, baseHoleScaled.y + (profil.fluegel - profil.ueberlappung)*scaleFactor, (baseHole.b - (profil.fluegel - profil.ueberlappung)*2)*scaleFactor, (baseHole.h - (profil.fluegel - profil.ueberlappung ) * 2) * scaleFactor, profil.glasleiste * scaleFactor)


 */
                  cumulatedPartHeight += part.height;
                  
                  
                })
             
              
              cumulatedWidth+=field.width
            })
            
            cumulatedHeight+=currentHeight
          });
         }
         
         


  
          break; 
        // Add more cases for other product types as needed
        default:
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
         
      }
    }

    export {drawWindow}

