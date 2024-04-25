import React, { Fragment, useState, useEffect, useRef } from "react";
import Head from "next/head";
import HeaderDiv from "../components/ui/headerdiv";
import Einheit from "../components/models/Einheit";
import Profil from "../components/models/Profil";
import ButtonGroup from "../components/ui/ButtonGroup";
import { detectClickedSide, detectClickedPart, detectClickedPartMatrix } from "../components/utils/canvasHelpers";
import { drawLine, drawArrow } from "../components/utils/drawingUtils";
import { countMeasures } from "../components/utils/helperFunctions";

const Konfi = () => {
  // PROTOTYPE DEFINITIONS
  const prototypeProfil = new Profil(
    "BE82",
    "F",
    82,
    73,
    83,
    123,
    20,
    12,
    25,
    70,
    90
  );
  const prototypeEinheit = new Einheit(
    false,
    [[{width: 1000, heightDivision: [{height: 1000, type: "POS", stulp:0}] }]],
    [],
    [],
    [],
    [],
    prototypeProfil
  );
  const typesArray = [
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "POS", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "FB", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "FF", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "DL", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(true, [[{width: 830,  heightDivision: [{height: 830, type: "DL", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "DR", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(true, [[{width: 830,  heightDivision: [{height: 830, type: "DR", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830,  heightDivision: [{height: 830, type: "DKL", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(true, [[{width: 830,  heightDivision: [{height: 830, type: "DKL", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "DKR", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(true, [[{width: 830,  heightDivision: [{height: 830, type: "DKR", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 1250,  heightDivision: [{height: 830, type: "DSDK", stulp:625}] }]], [], [], [], [], prototypeProfil),
    new Einheit(true, [[{width: 1250,  heightDivision: [{height: 830, type: "DSDK", stulp:625}] }]], [], [], [], [], prototypeProfil), 
    new Einheit(false, [[{ width: 1250,  heightDivision: [{height: 830, type: "DKDS", stulp:625}] }]], [], [], [], [], prototypeProfil),
    new Einheit(true, [[{width: 1250,  heightDivision: [{height: 830, type: "DKDS", stulp:625}] }]], [], [], [], [], prototypeProfil),
    new Einheit(true, [[{ width: 625,  heightDivision: [{height: 830, type: "DKL", stulp:0}] }, { width: 625,heightDivision: [{height: 830, type: "DKR"}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 625,  heightDivision: [{height: 530, type: "DKL", stulp:0}] }, { width: 625, heightDivision: [{height: 530, type: "DKR"}] }],[{width: 1250, heightDivision:[{height:300, type:"FB"}]}]], [], [], [], [], prototypeProfil),
  ];

  const openingsArray = [
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "FB", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "FF", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "DL", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "DR", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830,  heightDivision: [{height: 830, type: "DKL", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "DKR", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 830, heightDivision: [{height: 830, type: "K", stulp:0}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{width: 1250,  heightDivision: [{height: 830, type: "DSDK", stulp:625}] }]], [], [], [], [], prototypeProfil),
    new Einheit(false, [[{ width: 1250,  heightDivision: [{height: 830, type: "DKDS", stulp:625}] }]], [], [], [], [], prototypeProfil),
    
  ];

  // STATE VARIABLES
  const [activeMode, setActiveMode] = useState("Fenster");
  const [divisionMode, setDivisionMode] = useState("horizontal");
  const [dimensions, setDimensions] = useState({
    width: prototypeEinheit.width,
    height: prototypeEinheit.height,
    scaleFactor: 1,
    optionScaleFactor: 1,
  });
  const [matrixOfEinheitObjects, setMatrixOfEinheitObjects] = useState([
    [prototypeEinheit],
  ]);
  const [chosenDivision, setChosenDivision] = useState([[{width: 830, heightDivision: [{height: 830, type: "FB"}] }]]);
  const [flacheSchwelle, setFlacheSchwelle] = useState(false);

  const [verbreiterungWidth, setVerbreiterungWidth] = useState(60);
  const [kopplungWidth, setKopplungWidth] = useState(5);

  // GLOBAL VARIABLES

  let chosenPart = [99, 99,99,99]

  // REFERENCES
  const canvasRef = useRef(null);
  const optionCanvasRef = useRef(null);
  const divRef = useRef(null);
  const optionDivRef = useRef(null);

  // FUNCTIONS

  // starting and returning canvas
  const startCanvas = (canvasRef) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return canvas;
  };

  // setting and returning array of scale factors, setting dimensions state variable.
  const setScale = () => {
   
    let measure = countMeasures(matrixOfEinheitObjects, dimensions.width, dimensions.height)
    const measureLines = Math.max(measure.left.length + measure.right.length,  measure.top.length + measure.bottom.length) 
    let dimensionsScaleHelper = 1 + measureLines / 10

    const mainScaleFactor = Math.min(

      canvasRef.current.width / (dimensions.width*dimensionsScaleHelper),
      canvasRef.current.height / (dimensions.height*dimensionsScaleHelper)
    );
    const optionScaleFactor = Math.min(
      optionCanvasRef.current.width / 5 / prototypeEinheit.width,
      optionCanvasRef.current.height / 5 / prototypeEinheit.height
    );
    setDimensions((currentDimensions) => ({
      ...currentDimensions,
      optionScaleFactor: optionScaleFactor,
      scaleFactor: mainScaleFactor,
    }));
    return [mainScaleFactor, optionScaleFactor];
  };

  // updating all canvas
  const updateAllCanvas = (matrixOfWindows) => {
    updateOptionCanvas();
    updateMainCanvas(matrixOfWindows);
  };

  // updating option canvas

    const updateOptionCanvas = (chosen, chosenSchwelle) => {
      
      const canvas = startCanvas(optionCanvasRef);
      optionCanvasRef.current.width = optionDivRef.current.offsetWidth - 40;
      optionCanvasRef.current.height = optionDivRef.current.offsetHeight - 40;
      const [scaleFactor, optionScaleFactor] = setScale();
  
      let posX = 10; // Start 10px from the left edge
      let posY = 10; // Start 10px from the top edge
      const padding = 10; // Distance between each Einheit
      const rowHeight = 830 * optionScaleFactor + padding; // Assuming each Einheit has a height of 830 before scaling
      
      if (divisionMode === "Fenstertyp") {
      typesArray.forEach((einheit, index) => {
        // Draw the Einheit
        einheit.drawEinheit(posX, posY, optionCanvasRef, optionScaleFactor, chosenPart, [99,99], false);
  
        if (einheit.division === chosen && einheit.schwelle === chosenSchwelle) {
          const ctx = optionCanvasRef.current.getContext("2d");
          ctx.strokeStyle = "red";
          ctx.lineWidth = 3;
          ctx.strokeRect(
            posX,
            posY,
            einheit.width * optionScaleFactor,
            einheit.height * optionScaleFactor
          );
          ctx.strokeStyle = "black";
          ctx.lineWidth = 1;
        }
  
        // Move posX to the right for the next Einheit
        posX += einheit.width * optionScaleFactor + padding;
  
        // Check if the next Einheit will exceed the canvas width
        if (posX + einheit.width * optionScaleFactor > canvas.width) {
          posX = 10; // Reset posX to the start of the next row
          posY += rowHeight; // Move posY down to the next row
        }
      });
    } else if (divisionMode === "Öffnungsart") {
      
      openingsArray.forEach((einheit, index) => {
        // Draw the Einheit
        einheit.drawEinheit(posX, posY, optionCanvasRef, optionScaleFactor, chosenPart, [99,99], false);
        if (einheit.division === chosen) {
          
          const ctx = optionCanvasRef.current.getContext("2d");
          ctx.strokeStyle = "red";
          ctx.lineWidth = 3;
          ctx.strokeRect(
            posX,
            posY,
            einheit.width * optionScaleFactor,
            einheit.height * optionScaleFactor
          );
          ctx.strokeStyle = "black";
          ctx.lineWidth = 1;
        }
  
        // Move posX to the right for the next Einheit
        posX += einheit.width * optionScaleFactor + padding;
  
        // Check if the next Einheit will exceed the canvas width
        if (posX + einheit.width * optionScaleFactor > canvas.width) {
          posX = 10; // Reset posX to the start of the next row
          posY += rowHeight; // Move posY down to the next row
        }
      });
    }
    };


  // updating main canvas
  const updateMainCanvas = (matrixOfWindows) => {
    startCanvas(canvasRef);
    canvasRef.current.width = divRef.current.offsetWidth - 40;
    canvasRef.current.height = divRef.current.offsetHeight - 40;
    const [scaleFactor, optionScaleFactor] = setScale();
    const ctx = canvasRef.current.getContext("2d");

    let posAbsX = (canvasRef.current.width - dimensions.width * scaleFactor) / 2;
    let posAbsY = (canvasRef.current.height - dimensions.height * scaleFactor) / 2;

    
    let measure = countMeasures(matrixOfEinheitObjects, dimensions.width, dimensions.height)
    
    let measureY = measure.top.length * 10
    measure.top.forEach(measureRow => {
      let measureRowWidthCumulated = 0
      measureRow.forEach(measureRowDimension => {
        drawArrow(ctx, posAbsX + measureRowWidthCumulated*scaleFactor, posAbsY - measureY, posAbsX + (measureRowWidthCumulated+measureRowDimension)*scaleFactor, posAbsY - measureY, measureRowDimension)
        measureRowWidthCumulated+=measureRowDimension
      });
      measureY -= 15  
    });

    let measureX = measure.right.length * 10 + 12
    measure.right.forEach(measureRow => {
      let measureRowwHeightCumulated = 0
      measureRow.forEach(measureRowDimension => {
        drawArrow(ctx, posAbsX + dimensions.width*scaleFactor + measureX, posAbsY + measureRowwHeightCumulated*scaleFactor, posAbsX + dimensions.width*scaleFactor + measureX, posAbsY + (measureRowwHeightCumulated + measureRowDimension)*scaleFactor, measureRowDimension)    
        measureRowwHeightCumulated +=measureRowDimension;  
      })
      measureX -= 15
    });

    let measureYBottom = 11
    measure.bottom.forEach(measureRow => {
      let measureRowWidthCumulated = 0
      measureRow.forEach(measureRowDimension => {
        drawArrow(ctx, posAbsX + measureRowWidthCumulated*scaleFactor, posAbsY + dimensions.height*scaleFactor + measureYBottom, posAbsX + (measureRowWidthCumulated+measureRowDimension)*scaleFactor, posAbsY + dimensions.height*scaleFactor + measureYBottom, measureRowDimension)
        measureRowWidthCumulated+=measureRowDimension
      });
      measureYBottom += 15  
    });

    let measureXLeft = measure.left.length * 10 + 7
    measure.left.forEach(measureRow => {
      let measureRowwHeightCumulated = 0
      measureRow.forEach(measureRowDimension => {
        drawArrow(ctx, posAbsX - measureXLeft, posAbsY + measureRowwHeightCumulated*scaleFactor, posAbsX - measureXLeft, posAbsY + (measureRowwHeightCumulated + measureRowDimension)*scaleFactor, measureRowDimension)    
        measureRowwHeightCumulated +=measureRowDimension;  
      })
      measureXLeft -= 15
    });


    

    let cumulatedHeight = 0;
    matrixOfWindows.forEach((row, rowindex) => {
      let cumulatedWidth = 0;
      row.forEach((einheit, index) => {
        let posX = posAbsX + cumulatedWidth; // position horizontally
        let posY = posAbsY + cumulatedHeight; // position vertically
          
          let actualEinheit = [rowindex, index]
        einheit.drawEinheit(posX, posY, canvasRef, scaleFactor, chosenPart, actualEinheit, true);
        cumulatedWidth += einheit.width * scaleFactor;
      });
      cumulatedHeight += row[0].height * scaleFactor;
    });
  };

  // USEEFFECTS

  //resizing canvas after window resize
  useEffect(() => {
    if (divRef.current && canvasRef.current) {
      canvasRef.current.width = divRef.current.offsetWidth - 40;
      canvasRef.current.height = divRef.current.offsetHeight - 40;
      optionCanvasRef.current.width = optionDivRef.current.offsetWidth - 40;
      optionCanvasRef.current.height = optionDivRef.current.offsetHeight - 40;
    }
    if (matrixOfEinheitObjects.length > 0) {
    }
    updateMainCanvas(matrixOfEinheitObjects);
    updateOptionCanvas();
    window.addEventListener("resize", () =>
      updateAllCanvas(matrixOfEinheitObjects)
    );
    return () => {
      window.removeEventListener("resize", () =>
        updateAllCanvas(matrixOfEinheitObjects)
      );
    };
  }, [matrixOfEinheitObjects]);

  // drawing new canvas after changing width or height
  useEffect(() => {
    startCanvas(canvasRef);
    setScale();
    const currentEinheit = new Einheit(
      prototypeEinheit.schwelle,
      [[{width: dimensions.width, heightDivision: [{height: dimensions.height, type: "POS", stulp:0}] }]],
      //prototypeEinheit.division,
      [...prototypeEinheit.up],
      [...prototypeEinheit.down],
      [...prototypeEinheit.left],
      [...prototypeEinheit.right],
      prototypeProfil
    ); 
    setMatrixOfEinheitObjects([[currentEinheit]]);
    updateMainCanvas([[currentEinheit]]);
  }, [dimensions.width, dimensions.height]);

  // updating Option Canvas when division mode changed
  useEffect(() => {
    updateOptionCanvas()
  }, [divisionMode]);

  // HANDLERS

  // HANDLE CANVAS CLICK
  const handleCanvasClick = (event) => {
    setScale();
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const canvas = startCanvas(canvasRef);

    let realWidth = dimensions.width * dimensions.scaleFactor;
    let realHeight = dimensions.height * dimensions.scaleFactor;
    let posX = (canvas.width - dimensions.width * dimensions.scaleFactor) / 2; // Center horizontally
    let posY = (canvas.height - dimensions.height * dimensions.scaleFactor) / 2; // Center vertically

    let updatedMatrix = matrixOfEinheitObjects;

    let cumulatedHeight = 0;
    // BIG LOOP WITH WHOLE MATRIX
    let shouldBreak = false; // Flag to control the loop execution
    matrixOfEinheitObjects.forEach((row, rowIndex) => {
      if (shouldBreak) return; // Check the flag at the beginning of each iteration

      // which element of the array was clicked:
      let cumulatedWidth = 0;

      const updatedArray = [...row];

      //SMALL LOOP WITH ROWS
      row.forEach((einheit, index) => {
        realWidth = einheit.width * dimensions.scaleFactor;
        realHeight = einheit.height * dimensions.scaleFactor;

        // Check if the click is within the bounds of the einheit
        if (
          x >= posX + cumulatedWidth &&
          x <= posX + cumulatedWidth + realWidth &&
          y >= posY + cumulatedHeight &&
          y <= posY + cumulatedHeight + realHeight
        ) {
          let clickedSide = detectClickedSide(
            x,
            y,
            posX,
            posY,
            cumulatedWidth,
            cumulatedHeight,
            dimensions.scaleFactor,
            realWidth,
            realHeight
          );

          let deletedEinheit = row[index];

          
          // Calculate cumulated profile width left and height up
          let profilesLeftWidth = deletedEinheit.left.reduce((accumulator, currentObject) => {
            return accumulator + currentObject.width;
          }, 0) * dimensions.scaleFactor; // The 0 initializes the accumulator value

          let profilesUpHeight = deletedEinheit.up.reduce((accumulator, currentObject) => {
            return accumulator + currentObject.height;
          }, 0) * dimensions.scaleFactor; // The 0 initializes the accumulator value


          if (divisionMode === "horizontal") {
            let newWidth1 = Math.ceil(
              (x - posX - cumulatedWidth) / dimensions.scaleFactor
            );
            let newWidth2 = deletedEinheit.width - newWidth1;
            if (
              newWidth1 >= 300 &&
              newWidth2 >= 300 &&
              matrixOfEinheitObjects.length === 1
            ) {
              const einheit1 = new Einheit( false,[[{ width: newWidth1, heightDivision: [{height: deletedEinheit.height, type: "POS", stulp:0}] }]],[],[],[],[], prototypeProfil);  
              const einheit2 = new Einheit(false, [[{ width: newWidth2, heightDivision: [{height: deletedEinheit.height, type: "POS", stulp:0}] }]],[],[],[],[],prototypeProfil);
              updatedArray.splice(index, 1, einheit1, einheit2);
              updatedMatrix[rowIndex] = updatedArray;
            }
          } else if (divisionMode === "vertical") {
            let newHeight1 = Math.ceil(
              (y - posY - cumulatedHeight) / dimensions.scaleFactor
            );
            let newHeight2 = deletedEinheit.height - newHeight1;
            if (newHeight1 >= 300 && newHeight2 >= 300 && row.length === 1) {
              const einheit1 = new Einheit(false,[[{ width: deletedEinheit.width, heightDivision: [{height: newHeight1, type: "POS", stulp:0}] }]],[],[],[],[],prototypeProfil);
              const einheit2 = new Einheit(false,[[{  width: deletedEinheit.width, heightDivision: [{height: newHeight2, type: "POS", stulp:0}] }]],[],[],[],[],prototypeProfil);
              updatedArray.splice(index, 1, einheit1);
              updatedMatrix[rowIndex] = updatedArray;
              updatedMatrix.splice(rowIndex, 1, updatedArray, [einheit2]);
              shouldBreak = true;
            }
          } else if (divisionMode === "Abschneiden") {
            let newHeight1 = Math.ceil((y - posY) / dimensions.scaleFactor);
            if (newHeight1 >= 300 && matrixOfEinheitObjects.length === 1) {
              const einheit1 = new Einheit( false,[[{  width: deletedEinheit.width, heightDivision: [{height: newHeight1, type: "POS", stulp:0}] }]], [], [],  [], [],  prototypeProfil );
              updatedArray.splice(index, 1, einheit1);
              updatedMatrix[rowIndex] = updatedArray;
              shouldBreak = true;
            }
          } else if (divisionMode === "Verbreiterung") {
            const einheit1 = deletedEinheit;
            einheit1.addProfile("V", clickedSide, verbreiterungWidth);
            updatedArray.splice(index, 1, einheit1);
            updatedMatrix[rowIndex] = updatedArray;
            shouldBreak = true;
          } else if (divisionMode === "Kopplung") {
            const einheit1 = deletedEinheit;
            einheit1.addProfile("K", clickedSide, kopplungWidth);
            updatedArray.splice(index, 1, einheit1);
            updatedMatrix[rowIndex] = updatedArray;
            shouldBreak = true;
          } else if (divisionMode === "Fenstertyp") {
            const einheit1 = deletedEinheit;
            einheit1.schwelle = flacheSchwelle;
            let division=chosenDivision;
            // Calculate the rescaleFactor for width
                const totalDivisionWidth = division[0].reduce((sum, obj) => sum + obj.width, 0);
                const widthRescaleFactor = einheit1.netWidth/ totalDivisionWidth

                // Calculate the rescaleFactor for height
                const totalDivisionHeight = division.reduce((sum, subArray) => {
                  return sum + subArray[0].heightDivision.reduce((innerSum, item) => innerSum + item.height, 0);
                }, 0);
                const heightRescaleFactor = einheit1.netHeight / totalDivisionHeight

                // Update the division array of einheit1
                einheit1.division = division.map(subArray => 
                  subArray.map(obj => ({
                    ...obj,
                    width: obj.width * widthRescaleFactor, // Update width
                    heightDivision: obj.heightDivision.map(part => ({
                      ...part,
                      height: part.height * heightRescaleFactor, // Update height
                      stulp: (part.type === "DSDK" || part.type === "DKDS") ? (obj.width/2) * widthRescaleFactor  : 0
                    }))
                  }))
                );
            updatedArray.splice(index, 1, einheit1);
            updatedMatrix[rowIndex] = updatedArray;
            shouldBreak = true;

          } else if (divisionMode === "Öffnungsart") {

            //chosenPart = [rowIndex, index, ...detectClickedPart(deletedEinheit, x, y, posX, posY, cumulatedWidth, cumulatedHeight, profilesLeftWidth, profilesUpHeight, dimensions.scaleFactor)]
            chosenPart = detectClickedPartMatrix(matrixOfEinheitObjects, x, y, posX, posY, dimensions.scaleFactor)

            // Access the object you want to modify
            let targetObject = JSON.parse(JSON.stringify(deletedEinheit.division[chosenPart[2]][chosenPart[3]].heightDivision[chosenPart[4]]));

             let updatedObject = {
              ...targetObject, // Spread operator to copy properties
              type: chosenDivision[0][0].heightDivision[0].type, // Update the 'type' property
              stulp: (chosenDivision[0][0].heightDivision[0].type === "DSDK" || chosenDivision[0][0].heightDivision[0].type === "DKDS") ? deletedEinheit.division[chosenPart[2]][chosenPart[3]].width/2 : 0
            };
            deletedEinheit.division[chosenPart[2]][chosenPart[3]].heightDivision[chosenPart[4]] = JSON.parse(JSON.stringify(updatedObject)); 
            
            shouldBreak = true;

          } else if (
            divisionMode === "Pfosten" ||
            divisionMode === "Querbalken"
          ) {
            let cumulatedFieldHeight = 0;
            const einheit1 = deletedEinheit;
           

            deletedEinheit.division.forEach((fieldRow, fieldRowIndex) => {
              let cumulatedFieldWidth = 0;
              let realFieldHeight = fieldRow[0].fieldHeight * dimensions.scaleFactor;
              fieldRow.forEach((field, fieldIndex) => {
                
                if (
                  x >= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth &&
                  x <= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth + field.width * dimensions.scaleFactor &&
                  y >= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight &&
                  y <= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight + field.fieldHeight * dimensions.scaleFactor
                ) {
                  
                  if (divisionMode === "Querbalken") {       
                    if (fieldRow.length === 1 && Array.isArray(fieldRow)) {
                      let height1 = Math.ceil(
                        (y - posY - cumulatedHeight - cumulatedFieldHeight - profilesUpHeight) /
                          dimensions.scaleFactor
                      );
                      let height2 = field.fieldHeight - height1;
            
                      // MINIMUM DIMENSIONS
                      if (height1 >= 250 && height2 >= 250) {
                          const updatedRow1 = {
                            ...fieldRow[0],
                            heightDivision: [{height: height1, type: "POS"}],
                          };
                          let updatedRow2 = {
                            ...fieldRow[0],
                            heightDivision: [{height: height2, type: "POS"}],
                          };
                          einheit1.division.splice(
                            fieldRowIndex,
                            1,
                            [updatedRow1],
                            [updatedRow2]
                          );
                          einheit1.updateFieldHeights()
                      } 
                    } else if (fieldRow.length > 1 &&  matrixOfEinheitObjects.length === 1) {
                      const cumulatedParts=0;
                      field.heightDivision.forEach((part,partIndex) => {                     
                        if ( 
                          x >= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth &&
                          x <= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth + field.width * dimensions.scaleFactor &&
                          y >= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight + cumulatedParts &&
                          y <= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight + cumulatedParts + part.height * dimensions.scaleFactor
                        ) {

                          let height1 = Math.ceil(
                            (y - posY - cumulatedHeight - cumulatedFieldHeight - profilesUpHeight - cumulatedParts) /
                              dimensions.scaleFactor
                          );
                          let height2 = part.height - height1;
                            if (height1 >= 250 && height2 >= 250) {
                              const fieldToUpdate = JSON.parse(JSON.stringify(einheit1.division[fieldRowIndex][fieldIndex]));
                                  // Create two new objects with the split heights and the same type
                                  const newParts = [
                                    { height: height1, type: fieldToUpdate.heightDivision[partIndex].type },
                                    { height: height2, type: fieldToUpdate.heightDivision[partIndex].type }
                                  ];

                                  // Replace the original part with the two new parts
                                  fieldToUpdate.heightDivision.splice(partIndex, 1, ...newParts);
                                 
                                  // Update the original division array with the updated field
                                  einheit1.division[fieldRowIndex][fieldIndex] = fieldToUpdate;       
                            }
                        }    
                      cumulatedParts+=part.height*dimensions.scaleFactor  
                      });       
                    }
                  } else if (divisionMode === "Pfosten") {
                        let width1 = Math.ceil( (x - posX - cumulatedWidth - cumulatedFieldWidth - profilesLeftWidth) /   dimensions.scaleFactor  );
                        let width2 = field.width - width1;
                      // MINIMUM DIMENSIONS
                      if (width1 >= 250 && width2 >= 250 && field.heightDivision.length === 1) {
                        
                          const newObject1 = { ...JSON.parse(JSON.stringify(einheit1.division[fieldRowIndex][fieldIndex])), width: width1 };
                          const newObject2 = { ...JSON.parse(JSON.stringify(einheit1.division[fieldRowIndex][fieldIndex])), width: width2 };
                          einheit1.division[fieldRowIndex].splice(fieldIndex, 1, newObject1, newObject2);
                                     
                      }
                  }
                }
                cumulatedFieldWidth += field.width * dimensions.scaleFactor;
              });
              cumulatedFieldHeight += realFieldHeight;
            });

            updatedArray.splice(index, 1, einheit1);
            updatedMatrix[rowIndex] = updatedArray;
            shouldBreak = true;
          }
        }
        cumulatedWidth += realWidth;
      });
      cumulatedHeight += realHeight;
    });
    updateMainCanvas(updatedMatrix);
    setMatrixOfEinheitObjects(updatedMatrix);
    setScale();
  };

  // HANDLE OPTION CANVAS CLICK
  const handleOptionCanvasClick = (event) => {
    const rect = optionCanvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the canvas
    const y = event.clientY - rect.top; // y position within the canvas

    let posX = 10; // Initial X position, should match the drawing logic
    let posY = 10; // Initial Y position, should match the drawing logic
    const padding = 10; // Distance between each Einheit, should match the drawing logic
    const rowHeight = 830 * dimensions.optionScaleFactor + padding; // Assuming each Einheit has a height of 1000 before scaling, should match the drawing logic

    // Iterate over each Einheit to find the one that was clicked
    
    let actualArray = divisionMode === "Fenstertyp" ? typesArray : openingsArray // choose if we are in Fenstertyp mode or Oeffnungsart mode

    for (let einheit of actualArray) {
      
      const einheitWidth = einheit.width * dimensions.optionScaleFactor;
      const einheitHeight = einheit.height * dimensions.optionScaleFactor;

      // Check if the click is within the bounds of this Einheit
      if (
        x >= posX &&
        x <= posX + einheitWidth &&
        y >= posY &&
        y <= posY + einheitHeight
      ) {
        // Click is inside this Einheit, update chosenOpening


        //setChosenOpening(einheit.division[0][0].heightDivision[0].type);
        setChosenDivision(einheit.division)
        setFlacheSchwelle(einheit.schwelle);
        updateOptionCanvas(einheit.division, einheit.schwelle); // Redraw the canvas to show the selection
        return;
      }

      // Move posX to the right for the next Einheit
      posX += einheitWidth + padding;

      // Check if the next Einheit will exceed the canvas width
      if (posX + einheitWidth > optionCanvasRef.current.width) {
        posX = 10; // Reset posX to the start of the next row
        posY += rowHeight; // Move posY down to the next row
      }
    }
  };

  // HANDLE WIDTH CHANGE
  const handleWidthChange = (e) => {
    setDimensions((currentDimensions) => ({
      ...currentDimensions,
      width: Math.max(e.target.value, 0),
    }));
  };

  // HANDLE HEIGHT CHANGE
  const handleHeightChange = (e) => {
    setDimensions((currentDimensions) => ({
      ...currentDimensions,
      height: Math.max(e.target.value, 0),
    }));
  };

  return (
    <Fragment>
      <Head />

      <div className="pa4-l">
        {/* Box 1 */}
        <div className="w-100 flex flex-wrap justify-between">
          <div className="w-100 ma3 ba">
            <ButtonGroup
              buttons={[
                "Fenster",
                "Haustür",
                "Hebe Schiebe",
                "Schiebe",
                "Rollladen",
                "Kombination",
              ]}
              activeButton={activeMode}
              setActiveButton={setActiveMode}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="w-100  flex flex-wrap justify-between">
          <div
            ref={optionDivRef}
            className="w-100 w-30-l ma3 pa3 ba"
            style={{ height: "400px" }}
          >
            <canvas ref={optionCanvasRef} onClick={handleOptionCanvasClick} />
          </div>

          <div className="w-100 w-30-l ma3 pa3 ba" style={{ height: "400px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                height: "100%",
              }}
            >
              {/* Width Input Field */}
              <label htmlFor="width" style={{ marginBottom: "10px" }}>
                Breite in mm:
                <input
                  type="text"
                  id="width"
                  name="width"
                  value={dimensions.width}
                  onChange={handleWidthChange}
                  placeholder="Breite"
                  style={{ width: "5em", marginLeft: "10px" }}
                  maxLength={5}
                  onInput={(e) =>
                    (e.target.value = e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 5))
                  }
                />
              </label>

              {/* Height Input Field */}
              <label htmlFor="height" style={{ marginTop: "10px" }}>
                Höhe in mm:
                <input
                  type="text"
                  id="height"
                  name="height"
                  value={dimensions.height}
                  onChange={handleHeightChange}
                  placeholder="Höhe"
                  style={{ width: "5em", marginLeft: "10px" }}
                  maxLength={5}
                  onInput={(e) =>
                    (e.target.value = e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 5))
                  }
                />
              </label>
            </div>
          </div>

          <div className="w-100 w-30-l ma3 pa3 ba" style={{ height: "400px" }}>
            Box 4
          </div>
        </div>

        {/* Third Row */}
        <div className="w-100 flex flex-wrap justify-between">
          <div className="w-100 w-40-l ma3 pa3 ba" style={{ height: "550px" }}>
            <ButtonGroup
              buttons={[
                "horizontal",
                "vertical",
                "Abschneiden",
                "Kopplung",
                "Verbreiterung",
                "Fenstertyp",
                "Öffnungsart",
                "Pfosten",
                "Querbalken",
              ]}
              activeButton={divisionMode}
              setActiveButton={setDivisionMode}
            />
          </div>

          <div
            ref={divRef}
            className="w-100 w-50-l ma3 pa3 ba"
            style={{ height: "550px" }}
          >
            <canvas ref={canvasRef} onClick={handleCanvasClick} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Konfi;

