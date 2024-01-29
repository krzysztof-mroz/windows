import React, { Fragment, useState, useEffect, useRef } from "react";
import Head from "next/head";
import HeaderDiv from "../components/ui/headerdiv";
import Einheit from "../components/models/Einheit";
import ButtonGroup from "../components/ui/ButtonGroup";
import { detectClickedSide } from "../components/utils/canvasHelpers";


const Konfi = () => {
  
    // PROTOTYPE DEFINITIONS
    const prototypeEinheit = new Einheit(1000, 1000, [], [], [], []);

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

  const [verbreiterungWidth, setVerbreiterungWidth] = useState(60);
  const [kopplungWidth, setKopplungWidth] = useState(20);


   // REFERENCES
   const canvasRef = useRef(null);
   const optionCanvasRef = useRef(null);
   const divRef = useRef(null);
   const optionDivRef = useRef(null);


   // FUNCTIONS
   const startCanvas = (canvasRef) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return(canvas)
   }

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

   const updateAllCanvas = (matrixOfWindows) => {
    updateOptionCanvas()
    updateCanvas(matrixOfWindows)

   }

   const updateOptionCanvas = () => {
    startCanvas(optionCanvasRef);
    optionCanvasRef.current.width = optionDivRef.current.offsetWidth - 40;
    optionCanvasRef.current.height = optionDivRef.current.offsetHeight - 40;
    const [scaleFactor, optionScaleFactor] = setScale();
    prototypeEinheit.drawEinheit(10, 10, optionCanvasRef, optionScaleFactor, false);
    prototypeEinheit.drawEinheit(120, 10, optionCanvasRef, optionScaleFactor, false);
   }


  const updateCanvas = (matrixOfWindows) => {
    startCanvas(canvasRef);
    canvasRef.current.width = divRef.current.offsetWidth - 40;
    canvasRef.current.height = divRef.current.offsetHeight - 40;
    const [scaleFactor, optionScaleFactor] = setScale();
    let cumulatedHeight = 0;
    matrixOfWindows.forEach((row, rowindex) => {
      let cumulatedWidth = 0;
      row.forEach((einheit, index) => {
        let realWidth = dimensions.width * scaleFactor;
        let realHeight = dimensions.height * scaleFactor;
        let posX = (canvasRef.current.width - realWidth) / 2 + cumulatedWidth; // position horizontally
        let posY = (canvasRef.current.height - realHeight) / 2 + cumulatedHeight; // Center vertically
        einheit.drawEinheit(posX, posY, canvasRef, scaleFactor, false); 
        cumulatedWidth += einheit.width * scaleFactor;
      });
      cumulatedHeight += row[0].height * scaleFactor;
    });
  }
  
  useEffect(() => {
    if (divRef.current && canvasRef.current) {
      canvasRef.current.width = divRef.current.offsetWidth - 40;
      canvasRef.current.height = divRef.current.offsetHeight - 40;
      optionCanvasRef.current.width = optionDivRef.current.offsetWidth - 40;
      optionCanvasRef.current.height = optionDivRef.current.offsetHeight - 40;
    }     
    //resizeAndDraw()
    updateCanvas(matrixOfEinheitObjects)
    updateOptionCanvas()

    window.addEventListener("resize", () => updateAllCanvas(matrixOfEinheitObjects));
    
    return () => {
      window.removeEventListener("resize", () => updateAllCanvas(matrixOfEinheitObjects));
    };
  }, [matrixOfEinheitObjects]);


    useEffect(() => {
    startCanvas(canvasRef);
    setScale();
    const currentEinheit = new Einheit({ ...prototypeEinheit }) 
    currentEinheit.width = dimensions.width;
    currentEinheit.height = dimensions.height;
    setMatrixOfEinheitObjects([[currentEinheit]]);
    updateCanvas([
        [currentEinheit],
      ]);
}, [dimensions.width, dimensions.height]);    



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
  
  export default Konfi;
  