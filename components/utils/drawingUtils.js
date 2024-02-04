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
    ctx.closePath(); 
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
    ctx.closePath(); 
    ctx.lineWidth = 2
    ctx.stroke();
   }

  
  
  
  
    function drawWindow(ctx, profil, windowType, schwelle, posX, posY, width, height, scaleFactor) {
      
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
          drawRectangle(ctx, posX+profil.rahmenNetto*scaleFactor, posY+profil.rahmenNetto*scaleFactor, width- profil.rahmenNetto*2, height - profil.rahmenNetto*2, scaleFactor, "white")      
          drawRectangle(ctx, posX+profil.rahmen*scaleFactor, posY+profil.rahmen*scaleFactor, width- profil.rahmen*2, height - profil.rahmen*2, scaleFactor, '#ADD8E6')      
        
          break;
        case 'FF':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          drawRectangle(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, width- profil.visibleRahmen*2, height - profil.visibleRahmen*2, scaleFactor, "white")      
          drawRectangle(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, width- profil.gesamtNetto*2, height - profil.gesamtNetto*2, scaleFactor, "white")      
          drawRectangle(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, width- profil.gesamtbreite*2, height - profil.gesamtbreite*2, scaleFactor, '#ADD8E6')      
         
          break;
        case 'DKR':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          drawRectangle(ctx, posX+profil.visibleRahmen*scaleFactor, posY+(profil.visibleRahmen)*scaleFactor, width- profil.visibleRahmen*2, height - profil.visibleRahmen*2 + schwelleSchift, scaleFactor, "white")      
          schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")     
          drawRectangle(ctx, posX+profil.gesamtNetto*scaleFactor, posY+(profil.gesamtNetto)*scaleFactor, width- profil.gesamtNetto*2, height - profil.gesamtNetto*2+ schwelleSchift, scaleFactor, "white")      
          drawRectangle(ctx, posX+profil.gesamtbreite*scaleFactor, posY+(profil.gesamtbreite)*scaleFactor, width- profil.gesamtbreite*2, height - profil.gesamtbreite*2+ schwelleSchift, scaleFactor, '#ADD8E6')   
          drawDrehRechts(ctx, posX+profil.gesamtbreite*scaleFactor, posY+(profil.gesamtbreite)*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)   
          drawKipp (ctx, posX+profil.gesamtbreite*scaleFactor, posY+(profil.gesamtbreite)*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)   
    
          break;
        case 'DKL':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          drawRectangle(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, width- profil.visibleRahmen*2, height - profil.visibleRahmen*2+ schwelleSchift, scaleFactor, "white")      
          schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")     
          drawRectangle(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, width- profil.gesamtNetto*2, height - profil.gesamtNetto*2+ schwelleSchift, scaleFactor, "white")      
          drawRectangle(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, width- profil.gesamtbreite*2, height - profil.gesamtbreite*2+ schwelleSchift, scaleFactor, '#ADD8E6')      
          drawDrehLinks(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)
          drawKipp (ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)   
          break;

          case 'DR':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          drawRectangle(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, width- profil.visibleRahmen*2, height - profil.visibleRahmen*2+ schwelleSchift, scaleFactor, "white")      
          schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")     
          drawRectangle(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, width- profil.gesamtNetto*2, height - profil.gesamtNetto*2+ schwelleSchift, scaleFactor, "white")      
          drawRectangle(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, width- profil.gesamtbreite*2, height - profil.gesamtbreite*2+ schwelleSchift, scaleFactor, '#ADD8E6')   
          drawDrehRechts(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)   
          break;
        case 'DL':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          drawRectangle(ctx, posX+profil.visibleRahmen*scaleFactor, posY+profil.visibleRahmen*scaleFactor, width- profil.visibleRahmen*2, height - profil.visibleRahmen*2+ schwelleSchift, scaleFactor, "white")   
          schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")        
          drawRectangle(ctx, posX+profil.gesamtNetto*scaleFactor, posY+profil.gesamtNetto*scaleFactor, width- profil.gesamtNetto*2, height - profil.gesamtNetto*2+ schwelleSchift, scaleFactor, "white")      
          drawRectangle(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, width- profil.gesamtbreite*2, height - profil.gesamtbreite*2+ schwelleSchift, scaleFactor, '#ADD8E6')      
          drawDrehLinks(ctx, posX+profil.gesamtbreite*scaleFactor, posY+profil.gesamtbreite*scaleFactor, (width- profil.gesamtbreite*2)*scaleFactor, (height - profil.gesamtbreite*2+ schwelleSchift)*scaleFactor)
          break;

        case 'DSDK':
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
          drawRectangle(ctx, posX+profil.rahmen*scaleFactor, posY+profil.rahmen*scaleFactor, width- profil.rahmen*2, height - profil.rahmen*2+ schwelleSchift, scaleFactor, "white") 
          schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")        
          // Stulppfosten
          drawRectangle(ctx, posX + (stulpPosition-profil.stulp/2) * scaleFactor, posY + profil.rahmen*scaleFactor , profil.stulp, height-profil.rahmen*2+ schwelleSchiftPfosten, scaleFactor, "white")
          // Fluegel 1
          drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift, scaleFactor, "white");
          drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2+ schwelleSchift, scaleFactor, "white");
          drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift, scaleFactor, '#ADD8E6');
          drawDrehLinks(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift)*scaleFactor)
          drawStulpRechts(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift)*scaleFactor) 
          // Fluegel 2
          drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2+ schwelleSchift, scaleFactor, "white");
          drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2+ schwelleSchift, scaleFactor, "white");
          drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift, scaleFactor, '#ADD8E6');
          drawDrehRechts(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift)*scaleFactor)
          drawKipp(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2+ schwelleSchift)*scaleFactor)
          break;

          case 'DKDS':
            drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
            drawRectangle(ctx, posX+profil.rahmen*scaleFactor, posY+profil.rahmen*scaleFactor, width- profil.rahmen*2, height - profil.rahmen*2 + schwelleSchift, scaleFactor, "white")  
            schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")        
            // Stulppfosten
            drawRectangle(ctx, posX + (stulpPosition-profil.stulp/2) * scaleFactor, posY + profil.rahmen*scaleFactor , profil.stulp, height-profil.rahmen*2 + schwelleSchiftPfosten, scaleFactor, "white")
            // Fluegel 1
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift, scaleFactor, "white");
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2 + schwelleSchift, scaleFactor, "white");
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift, scaleFactor, '#ADD8E6');
            drawDrehLinks(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            drawKipp(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (stulpPosition-profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            // Fluegel 2
            drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift, scaleFactor, "white");
            drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2 + schwelleSchift, scaleFactor, "white");
            drawRectangle(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift, scaleFactor, '#ADD8E6');
            drawDrehRechts(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            drawStulpLinks(ctx, posX + (stulpPosition + profil.stulp/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - stulpPosition - profil.stulp/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            break;
        case 'DKDK':
            drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
            drawRectangle(ctx, posX+profil.rahmen*scaleFactor, posY+profil.rahmen*scaleFactor, width- profil.rahmen*2, height - profil.rahmen*2 + schwelleSchift, scaleFactor, "white") 
            schwelle && drawRectangle(ctx, posX+(profil.rahmen)*scaleFactor, posY+(height-profil.visibleSchwelle) * scaleFactor, width- profil.rahmen*2, profil.visibleSchwelle, scaleFactor, "#C0C0C0")        
            // Mittelpfosten
            drawRectangle(ctx, posX + (pfostenPosition-profil.pfosten/2) * scaleFactor, posY + profil.rahmen*scaleFactor , profil.pfosten, height-profil.rahmen*2 + schwelleSchiftPfosten, scaleFactor, "white")
            // Fluegel 1
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift, scaleFactor, "white");
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegelNetto) * scaleFactor, pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2 + schwelleSchift, scaleFactor, "white");
            drawRectangle(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2 , height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift, scaleFactor, '#ADD8E6');
            drawDrehLinks(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            drawKipp(ctx, posX + (profil.rahmen - profil.ueberlappung + profil.fluegel) * scaleFactor, posY+profil.gesamtbreite*scaleFactor, (pfostenPosition-profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel *2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor) 
            // Fluegel 2
            drawRectangle(ctx, posX + (pfostenPosition + profil.pfosten/2 - profil.ueberlappung) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung) * scaleFactor, width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen, height-profil.rahmen*2+profil.ueberlappung*2 + schwelleSchift, scaleFactor, "white");
            drawRectangle(ctx, posX + (pfostenPosition + profil.pfosten/2 - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegelNetto) * scaleFactor, width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegelNetto*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegelNetto*2 + schwelleSchift, scaleFactor, "white");
            drawRectangle(ctx, posX + (pfostenPosition + profil.pfosten/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2, height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift, scaleFactor, '#ADD8E6');
            drawDrehRechts(ctx, posX + (pfostenPosition + profil.pfosten/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
            drawKipp(ctx, posX + (pfostenPosition + profil.pfosten/2 - profil.ueberlappung+ profil.fluegel) * scaleFactor, posY + (profil.rahmen - profil.ueberlappung+ profil.fluegel) * scaleFactor, (width - pfostenPosition - profil.pfosten/2 + profil.ueberlappung - profil.visibleRahmen - profil.fluegel*2)*scaleFactor, (height-profil.rahmen*2+profil.ueberlappung*2 - profil.fluegel*2 + schwelleSchift)*scaleFactor)
          break;
        // Add more cases for other product types as needed
        default:
          drawRectangle(ctx, posX, posY, width, height, scaleFactor, "white");
         
      }
    }

    export {drawWindow}

