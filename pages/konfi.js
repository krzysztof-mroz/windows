import React, { Fragment, useState, useEffect, useRef } from "react";
import Head from "next/head";
import HeaderDiv from "../components/ui/headerdiv";
import Einheit from "../components/models/Einheit";
import Profil from "../components/models/Profil";
import ButtonGroup from "../components/ui/ButtonGroup";
import { detectClickedSide } from "../components/utils/canvasHelpers";


const Konfi = () => {
  
  // PROTOTYPE DEFINITIONS
  const prototypeProfil = new Profil('BE82', 'F', 82, 73, 83, 123, 20, 25, 70, 90)
  const prototypeEinheit = new Einheit(1000, 1000, 'POS', true,  [], [], [], [], prototypeProfil);
  const typesArray = [
    new Einheit(830, 830, 'POS', false, [], [], [], [], prototypeProfil),
    new Einheit(830, 830, 'FB', false, [], [], [], [], prototypeProfil),
    new Einheit(830, 830, 'FF', false, [], [], [], [], prototypeProfil),
    new Einheit(830, 830, 'DL', false, [], [], [], [], prototypeProfil),
    new Einheit(830, 830, 'DL', true, [], [], [], [], prototypeProfil),
    new Einheit(830, 830, 'DR', false, [], [], [], [], prototypeProfil),
    new Einheit(830, 830, 'DR', true, [], [], [], [], prototypeProfil),
    new Einheit(830, 830, 'DKL', false, [], [], [], [], prototypeProfil),
    new Einheit(830, 830, 'DKL', true, [], [], [], [], prototypeProfil),
    new Einheit(830, 830, 'DKR', false, [], [], [], [], prototypeProfil),
    new Einheit(830, 830, 'DKR', true, [], [], [], [], prototypeProfil),
    new Einheit(1250, 830, 'DSDK', false, [], [], [], [], prototypeProfil),
    new Einheit(1250, 830, 'DSDK', true, [], [], [], [], prototypeProfil),
    new Einheit(1250, 830, 'DKDS', false, [], [], [], [], prototypeProfil),
    new Einheit(1250, 830, 'DKDS', true, [], [], [], [], prototypeProfil),
    new Einheit(1250, 830, 'DKDK', false, [], [], [], [], prototypeProfil),
    new Einheit(1250, 830, 'DKDK', true, [], [], [], [], prototypeProfil),
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
  const [chosenOpening, setChosenOpening] = useState('POS');
  const [flacheSchwelle, setFlacheSchwelle] = useState(false);

  const [verbreiterungWidth, setVerbreiterungWidth] = useState(60);
  const [kopplungWidth, setKopplungWidth] = useState(20);


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
    return(canvas)
   }

   // setting and returning array of scale factors, setting dimensions state variable. 
   const setScale = () => {
    const mainScaleFactor = Math.min(canvasRef.current.width / dimensions.width, canvasRef.current.height / dimensions.height);
    const optionScaleFactor = Math.min(optionCanvasRef.current.width / 5 / prototypeEinheit.width, optionCanvasRef.current.height / 5 / prototypeEinheit.height);
    setDimensions(currentDimensions => ({
        ...currentDimensions,
        optionScaleFactor: optionScaleFactor,
        scaleFactor: mainScaleFactor
      }));
      return [mainScaleFactor, optionScaleFactor];
   }

   // updating all canvas
   const updateAllCanvas = (matrixOfWindows) => {
    updateOptionCanvas()
    updateMainCanvas(matrixOfWindows)
   }

   // updating option canvas
   const updateOptionCanvas = (chosen, chosenSchwelle) => {
    const canvas = startCanvas(optionCanvasRef);
    optionCanvasRef.current.width = optionDivRef.current.offsetWidth - 40;
    optionCanvasRef.current.height = optionDivRef.current.offsetHeight - 40;
    const [scaleFactor, optionScaleFactor] = setScale();
  
    let posX = 10; // Start 10px from the left edge
  let posY = 10; // Start 10px from the top edge
  const padding = 10; // Distance between each Einheit
  const rowHeight = 830 * optionScaleFactor + padding; // Assuming each Einheit has a height of 1000 before scaling

  typesArray.forEach((einheit, index) => {
    // Draw the Einheit
    einheit.drawEinheit(posX, posY, optionCanvasRef, optionScaleFactor);

    if (einheit.type === chosen && einheit.schwelle === chosenSchwelle) {
        const ctx = optionCanvasRef.current.getContext('2d');
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
        ctx.strokeRect(posX, posY, einheit.width * optionScaleFactor, einheit.height * optionScaleFactor);
        ctx.strokeStyle = 'black';
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

   // updating main canvas
   const updateMainCanvas = (matrixOfWindows) => {
    startCanvas(canvasRef);
    canvasRef.current.width = divRef.current.offsetWidth - 40;
    canvasRef.current.height = divRef.current.offsetHeight - 40;
    const [scaleFactor, optionScaleFactor] = setScale();
    let cumulatedHeight = 0;
    matrixOfWindows.forEach((row, rowindex) => {
        let cumulatedWidth = 0;
        row.forEach((einheit, index) => {
            let posX = (canvasRef.current.width - dimensions.width * scaleFactor) / 2 + cumulatedWidth; // position horizontally
            let posY = (canvasRef.current.height - dimensions.height * scaleFactor) / 2 + cumulatedHeight; // position vertically
            einheit.drawEinheit(posX, posY, canvasRef, scaleFactor); 
            cumulatedWidth += einheit.width * scaleFactor;
        });
        cumulatedHeight += row[0].height * scaleFactor;
    });
    
    
   }
  
  
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
    updateMainCanvas(matrixOfEinheitObjects)
    updateOptionCanvas()
    window.addEventListener("resize", () => updateAllCanvas(matrixOfEinheitObjects));
    return () => {
      window.removeEventListener("resize", () => updateAllCanvas(matrixOfEinheitObjects));
    };
  }, [matrixOfEinheitObjects]);


  // drawing new canvas after changing width or height
  useEffect(() => {
    startCanvas(canvasRef);
    setScale();
    const currentEinheit = new Einheit(dimensions.width, dimensions.height, prototypeEinheit.type, prototypeEinheit.schwelle, [...prototypeEinheit.up], [...prototypeEinheit.down], [...prototypeEinheit.left], [...prototypeEinheit.right], prototypeProfil);
    setMatrixOfEinheitObjects([[currentEinheit]]);
    updateMainCanvas([[currentEinheit]])
}, [dimensions.width, dimensions.height]);    



  // HANDLERS 

  // HANDLE CANVAS CLICK
  const handleCanvasClick = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const canvas = startCanvas(canvasRef)

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
          y >= posY &&
          y <= posY + cumulatedHeight + realHeight
        ) {
        
          let clickedSide = detectClickedSide(x, y, posX, posY, cumulatedWidth, cumulatedHeight, dimensions.scaleFactor, realWidth, realHeight);

          let deletedEinheit = row[index];

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
              const einheit1 = new Einheit(
                newWidth1,
                deletedEinheit.height,
                'POS', false,
                [],[],[], [], prototypeProfil
              );
              const einheit2 = new Einheit(
                newWidth2,
                deletedEinheit.height,
                'POS', false,
                [],[],[], [], prototypeProfil
              );
              updatedArray.splice(index, 1, einheit1, einheit2);
              updatedMatrix[rowIndex] = updatedArray;
            }
          } else if (divisionMode === "vertical") {
            let newHeight1 = Math.ceil(
              (y - posY - cumulatedHeight) / dimensions.scaleFactor
            );
            let newHeight2 = deletedEinheit.height - newHeight1;
            if (newHeight1 >= 300 && newHeight2 >= 300 && row.length === 1) {
              const einheit1 = new Einheit(
                deletedEinheit.width,
                newHeight1,
                'POS', false,
                [],[],[], [], prototypeProfil
              );
              const einheit2 = new Einheit(
                deletedEinheit.width,
                newHeight2,
                'POS', false,
                [],[],[], [], prototypeProfil
              );
              updatedArray.splice(index, 1, einheit1);
              updatedMatrix[rowIndex] = updatedArray;
              updatedMatrix.splice(rowIndex, 1, updatedArray, [einheit2]);
              shouldBreak = true;
            }
          } else if (divisionMode === "Abschneiden") {
            let newHeight1 = Math.ceil((y - posY) / dimensions.scaleFactor);
            if (newHeight1 >= 300 && matrixOfEinheitObjects.length === 1) {
              const einheit1 = new Einheit(
                deletedEinheit.width,
                newHeight1,
                'POS', false,
                [],[],[], [], prototypeProfil
              );
              updatedArray.splice(index, 1, einheit1);
              updatedMatrix[rowIndex] = updatedArray;
              shouldBreak = true;
            }
          } else if (divisionMode === "Verbreiterung") {
            const einheit1 = deletedEinheit;
            einheit1.addProfile('V',clickedSide,verbreiterungWidth)
            updatedArray.splice(index, 1, einheit1);
            updatedMatrix[rowIndex] = updatedArray;
            shouldBreak = true;    
          } else if (divisionMode === "Kopplung") {
            const einheit1 = deletedEinheit;
        
            einheit1.addProfile('K',clickedSide,kopplungWidth)
            updatedArray.splice(index, 1, einheit1);
            updatedMatrix[rowIndex] = updatedArray;
            shouldBreak = true;
          }
          else if (divisionMode === "Öffnungsart") {
            const einheit1 = deletedEinheit;
        
            einheit1.type=chosenOpening;
            einheit1.schwelle=flacheSchwelle;
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
  };

  // HANDLE OPTION CANVAS CLICK
  const handleOptionCanvasClick = (event) => {
    const rect = optionCanvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the canvas
    const y = event.clientY - rect.top; // y position within the canvas
  
    let posX = 10; // Initial X position, should match the drawing logic
    let posY = 10; // Initial Y position, should match the drawing logic
    const padding = 10; // Distance between each Einheit, should match the drawing logic
    const rowHeight = 1000 * dimensions.optionScaleFactor + padding; // Assuming each Einheit has a height of 1000 before scaling, should match the drawing logic
  
    // Iterate over each Einheit to find the one that was clicked
    for (let einheit of typesArray) {
      const einheitWidth = einheit.width * dimensions.optionScaleFactor;
      const einheitHeight = einheit.height * dimensions.optionScaleFactor;
  
      // Check if the click is within the bounds of this Einheit
      if (x >= posX && x <= posX + einheitWidth && y >= posY && y <= posY + einheitHeight) {
        // Click is inside this Einheit, update chosenOpening
        setChosenOpening(einheit.type);
        setFlacheSchwelle(einheit.schwelle)
        updateOptionCanvas(einheit.type, einheit.schwelle); // Redraw the canvas to show the selection
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
    setDimensions(currentDimensions => ({
      ...currentDimensions,
      width: Math.max(e.target.value, 0)
    }));
  };

  // HANDLE HEIGHT CHANGE
  const handleHeightChange = (e) => {
    setDimensions(currentDimensions => ({
      ...currentDimensions,
      height: Math.max(e.target.value, 0)
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
              style={{ height: "400px" }}>
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
                  "Öffnungsart",
                  
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
  