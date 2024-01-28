// konfigurator.js

// IMPORTS
import React, { Fragment, useState, useEffect, useRef } from "react";
import Head from "next/head";
import HeaderDiv from "../components/ui/headerdiv";
import Einheit from "./models/Einheit";
import ButtonGroup from "../components/ui/ButtonGroup";
import { detectClickedSide } from "./utils/canvasHelpers";
//import useResizeCanvas from "./hooks/useResizeCanvas";


// STARTING MODULE
const Konfigurator = () => {
  
  // PROTOTYPE DEFINITIONS
  const prototypeEinheit = new Einheit(1000, 1000, [], [], [], []);

  
  // STATE VARIABLES
  const [activeMode, setActiveMode] = useState("Fenster");
  const [clickX, setClickX] = useState(null);
  const [clickY, setClickY] = useState(null);
  const [divisionMode, setDivisionMode] = useState("horizontal");
  const [matrixOfEinheitObjects, setMatrixOfEinheitObjects] = useState([
    [prototypeEinheit],
  ]);

  const [dimensions, setDimensions] = useState({
    width: 1000,
    height: 1000,
    scaleFactor: 1,
    optionScaleFactor: 1,
  });

  const [verbreiterungWidth, setVerbreiterungWidth] = useState(60);
  const [kopplungWidth, setKopplungWidth] = useState(20);

  // REFERENCES
  const canvasRef = useRef(null);
  const optionCanvasRef = useRef(null);
  const divRef = useRef(null);
  const optionDivRef = useRef(null);



  // FUNCTIONS

  // DRAW CANVAS
  const drawCanvas = (canvasRef, { width, height, scaleFactor, posX, posY }) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    prototypeEinheit.drawEinheit(posX, posY, canvas, scaleFactor);
  };
  

  // UPDATE MAIN CANVAS
  const updateMainCanvas = () => {
    updateCanvas(matrixOfEinheitObjects);
    // Other logic specific to the main canvas...
  };

 

  // FUNCTION UPDATE DRAWING OF THE OPTION CANVAS
  const updateOptionCanvas = () => {
    const optionCanvas = optionCanvasRef.current;
    const ctx = optionCanvas.getContext("2d");
    ctx.clearRect(0, 0, optionCanvas.width, optionCanvas.height);

    if (optionDivRef.current && optionCanvasRef.current) {
      optionCanvasRef.current.width = optionDivRef.current.offsetWidth - 40;
      optionCanvasRef.current.height = optionDivRef.current.offsetHeight - 40;
    }

    const optionScaleFactor = Math.min(
      (optionCanvas.width / 5) / dimensions.width,
      (optionCanvas.height/5) / dimensions.height
    );

    let optionPosX = 10
    let optionPosY = 10
    prototypeEinheit.drawEinheit(optionPosX, optionPosY, optionCanvas, optionScaleFactor);
    setDimensions(currentDimensions => ({
      ...currentDimensions,
      optionScaleFactor: optionScaleFactor 
    }));
  }

 //useResizeCanvas(canvasRef, divRef, [updateMainCanvas]);
  //useResizeCanvas(optionCanvasRef, optionDivRef, [updateOptionCanvas]);

  
  // USE EFFECT DRAW NEW IF CHANGE WIDTH OR HEIGTH
  useEffect(() => {
    
    // MAIN CANVAS
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scaleFactor = Math.min(
      canvas.width / dimensions.width,
      canvas.height / dimensions.height
    );
    prototypeEinheit.width = dimensions.width;
    prototypeEinheit.height = dimensions.height;
    setMatrixOfEinheitObjects([[prototypeEinheit]]);
    let realWidth = dimensions.width * scaleFactor;
    let realHeight = dimensions.height * scaleFactor;
    let posX = (canvas.width - realWidth) / 2; // Center horizontally
    let posY = (canvas.height - realHeight) / 2; // Center vertically
    prototypeEinheit.drawEinheit(posX, posY, canvas, scaleFactor);
    
    setDimensions(currentDimensions => ({
      ...currentDimensions,
      scaleFactor: scaleFactor 
    }));

    // OPTION CANVAS
    const optionCanvas = optionCanvasRef.current;
    const octx = optionCanvas.getContext("2d");
    octx.clearRect(0, 0, optionCanvas.width, optionCanvas.height);

    const optionScaleFactor = Math.min(
      (optionCanvas.width / 5) / dimensions.width,
      (optionCanvas.height/5) / dimensions.height
    );

    // IN LOOP
    let optionPosX = 10
    let optionPosY = 10
    prototypeEinheit.drawEinheit(optionPosX, optionPosY, optionCanvas, optionScaleFactor);
    setDimensions(currentDimensions => ({
      ...currentDimensions,
      optionScaleFactor: optionScaleFactor 
    }));

  }, [dimensions.width, dimensions.height]);

  // FUNCTION UPDATE DRAWING OF THE NEW ELEMENTS
  const updateCanvas = (matrixOfWindows) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (divRef.current && canvasRef.current) {
      canvasRef.current.width = divRef.current.offsetWidth - 40;
      canvasRef.current.height = divRef.current.offsetHeight - 40;
    }
    const scaleFactor = Math.min(
      canvas.width / dimensions.width,
      canvas.height / dimensions.height
    );
    
    setDimensions(currentDimensions => ({
      ...currentDimensions,
      scaleFactor: scaleFactor 
    }));

    let cumulatedHeight = 0;
    matrixOfWindows.forEach((row, rowindex) => {
      let cumulatedWidth = 0;
      row.forEach((einheit, index) => {
        let realWidth = dimensions.width * scaleFactor;
        let realHeight = dimensions.height * scaleFactor;
        let posX = (canvas.width - realWidth) / 2 + cumulatedWidth; // position horizontally
        let posY = (canvas.height - realHeight) / 2 + cumulatedHeight; // Center vertically
        einheit.drawEinheit(posX, posY, canvas, scaleFactor);
        cumulatedWidth += einheit.width * scaleFactor;
      });
      cumulatedHeight += row[0].height * scaleFactor;
    });
  };
  

  // HANDLE CANVAS CLICK
  const handleCanvasClick = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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


          setClickedEinheit(index);
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
                [],
                [],
                [],
                []
              );
              const einheit2 = new Einheit(
                newWidth2,
                deletedEinheit.height,
                [],
                [],
                [],
                []
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
                [],
                [],
                [],
                []
              );
              const einheit2 = new Einheit(
                deletedEinheit.width,
                newHeight2,
                [],
                [],
                [],
                []
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
                [],
                [],
                [],
                []
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
        }
        cumulatedWidth += realWidth;
      });
      cumulatedHeight += realHeight;
    });
    setClickX(x);
    setClickY(y);
    updateCanvas(updatedMatrix);
    setMatrixOfEinheitObjects(updatedMatrix);
  };

  const handleOptionCanvasClick = (event) => {

  }

  const handleWidthChange = (e) => {
    //setInputWidth(Math.max(e.target.value, 0)); // Prevent negative values
    setDimensions(currentDimensions => ({
      ...currentDimensions,
      width: Math.max(e.target.value, 0)
    }));
  };

  const handleHeightChange = (e) => {
    //setInputHeight(Math.max(e.target.value, 0)); // Prevent negative values
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
                "Gap",
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

export default Konfigurator;
