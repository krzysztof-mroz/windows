// layout.js
import React, { Fragment, useState, useEffect, useRef } from "react";
import Head from "next/head";
import HeaderDiv from "../components/ui/headerdiv";

// define the Einheit (Fenster, Rahmen) class
class Einheit {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drawEinheit(posX, posY, canvas, scaleFactor) {
    const ctx = canvas.getContext("2d");
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate scaling factor
    let realWidth = this.width * scaleFactor;
    let realHeight = this.height * scaleFactor;

    // Draw the first (white) rectangle
    ctx.fillStyle = "white";
    ctx.fillRect(posX, posY, realWidth, realHeight);
    ctx.strokeRect(posX, posY, realWidth, realHeight);

    // Calculate dimensions for the second (blue) rectangle
    let innerWidth = Math.max(0, realWidth - 140 * scaleFactor);
    let innerHeight = Math.max(0, realHeight - 140 * scaleFactor);
    let innerPosX = posX + 70 * scaleFactor;
    let innerPosY = posY + 70 * scaleFactor;

    // Draw the second (blue) rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(innerPosX, innerPosY, innerWidth, innerHeight);
    ctx.strokeRect(innerPosX, innerPosY, innerWidth, innerHeight);
  }
}

const Layout = () => {

  const [activeMode, setActiveMode] = useState("Fenster");
  const [inputWidth, setInputWidth] = useState(1000);
  const [inputHeight, setInputHeight] = useState(1000);
  const [clickX, setClickX] = useState(null);
  const [clickY, setClickY] = useState(null);
  const [clickedEinheit, setClickedEinheit] = useState(null);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [divisionMode, setDivisionMode] = useState("horizontal");
  const [matrixOfEinheitObjects, setMatrixOfEinheitObjects] = useState([   [new Einheit(1000, 1000)] ]);

  const canvasRef = useRef(null);
  const divRef = useRef(null);

  const resizeAndDraw = () => {
    if (divRef.current && canvasRef.current) {
      canvasRef.current.width = divRef.current.offsetWidth - 40;
      canvasRef.current.height = divRef.current.offsetHeight - 40;
    }
    const canvas = canvasRef.current;
    const scaleFactor = Math.min(
      canvas.width / inputWidth,
      canvas.height / inputHeight
    );
    const einheit1 = new Einheit(inputWidth, inputHeight);
    setMatrixOfEinheitObjects([[einheit1]]);
    let realWidth = inputWidth * scaleFactor;
    let realHeight = inputHeight * scaleFactor;
    let posX = (canvas.width - realWidth) / 2; // Center horizontally
    let posY = (canvas.height - realHeight) / 2; // Center vertically
    einheit1.drawEinheit(posX, posY, canvas, scaleFactor);
    setScaleFactor(scaleFactor);
  };

  // Initial draw, rescale and if outer dimensions change
  useEffect(() => {
    if (divRef.current && canvasRef.current) {
      canvasRef.current.width = divRef.current.offsetWidth - 40;
      canvasRef.current.height = divRef.current.offsetHeight - 40;
    }     
    //resizeAndDraw()
    updateCanvas(matrixOfEinheitObjects)
    window.addEventListener("resize", () => updateCanvas(matrixOfEinheitObjects));
    
    return () => {
      window.removeEventListener("resize", () => updateCanvas(matrixOfEinheitObjects));
    };
  }, [matrixOfEinheitObjects]);

  useEffect(() => {
   
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scaleFactor = Math.min(
      canvas.width / inputWidth,
      canvas.height / inputHeight
    );

    const einheit1 = new Einheit(inputWidth, inputHeight);
    setMatrixOfEinheitObjects([[einheit1]]);
    let realWidth = inputWidth * scaleFactor;
    let realHeight = inputHeight * scaleFactor;
    let posX = (canvas.width - realWidth) / 2; // Center horizontally
    let posY = (canvas.height - realHeight) / 2; // Center vertically
    einheit1.drawEinheit(posX, posY, canvas, scaleFactor);
    setScaleFactor(scaleFactor);
    
  }, [inputWidth, inputHeight]);



  // UPDATE DRAWING OF THE NEW ELEMENTS
  const updateCanvas = (matrixOfWindows) => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (divRef.current && canvasRef.current) {
      canvasRef.current.width = divRef.current.offsetWidth - 40;
      canvasRef.current.height = divRef.current.offsetHeight - 40;
    }
      const scaleFactor = Math.min(
        canvas.width / inputWidth,
        canvas.height / inputHeight
      );
      setScaleFactor(scaleFactor)

    let cumulatedHeight = 0;
    matrixOfWindows.forEach((row, rowindex) => {
      let cumulatedWidth = 0;
      row.forEach((einheit, index) => {
        let realWidth = inputWidth * scaleFactor;
        let realHeight = inputHeight * scaleFactor;
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

    let realWidth = inputWidth * scaleFactor;
    let realHeight = inputHeight * scaleFactor;
    let posX = (canvas.width - realWidth) / 2; // Center horizontally
    let posY = (canvas.height - realHeight) / 2; // Center vertically

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
        let realWidth = einheit.width * scaleFactor;
        let realHeight = einheit.height * scaleFactor;

        // Check if the click is within the bounds of the einheit
        if (
          x >= posX + cumulatedWidth &&
          x <= posX + cumulatedWidth + realWidth &&
          y >= posY &&
          y <= posY + cumulatedHeight + realHeight
        ) {
          // console.log(`Einheit at index ${index} was clicked.`);
          setClickedEinheit(index);
          let deletedEinheit = row[index];

          if (divisionMode === "horizontal") {
            let newWidth1 = Math.ceil(
              (x - posX - cumulatedWidth) / scaleFactor
            );
            let newWidth2 = deletedEinheit.width - newWidth1;
            if (newWidth1 >= 300 && newWidth2 >= 300 && matrixOfEinheitObjects.length === 1) {
              const einheit1 = new Einheit(newWidth1, deletedEinheit.height);
              const einheit2 = new Einheit(newWidth2, deletedEinheit.height);
              updatedArray.splice(index, 1, einheit1, einheit2);
              updatedMatrix[rowIndex] = updatedArray;
            }
          } else if (divisionMode === "vertical") {
            let newHeight1 = Math.ceil(
              (y - posY - cumulatedHeight) / scaleFactor
            );
            let newHeight2 = deletedEinheit.height - newHeight1;
            if (newHeight1 >= 300 && newHeight2 >= 300 && row.length === 1) {
                const einheit1 = new Einheit(deletedEinheit.width, newHeight1);
                const einheit2 = new Einheit(deletedEinheit.width, newHeight2);
                updatedArray.splice(index, 1, einheit1);
                updatedMatrix[rowIndex] = updatedArray;
                updatedMatrix.splice(rowIndex, 1, updatedArray, [einheit2]);
                shouldBreak = true;
            }
          } else if (divisionMode === "Abschneiden") {
            let newHeight1 = Math.ceil(
              (y - posY) / scaleFactor
            );
            if (newHeight1 >= 300 && matrixOfEinheitObjects.length === 1 ) {
              const einheit1 = new Einheit(deletedEinheit.width, newHeight1);
              updatedArray.splice(index, 1, einheit1);
              updatedMatrix[rowIndex] = updatedArray;
              shouldBreak = true;
            }
          }
        }
        cumulatedWidth += realWidth;
        cumulatedHeight += realHeight;
      });
    });
    setClickX(x);
    setClickY(y);
    updateCanvas(updatedMatrix);
    setMatrixOfEinheitObjects(updatedMatrix);
  };

  const handleWidthChange = (e) => {
    setInputWidth(Math.max(e.target.value, 0)); // Prevent negative values
  };

  const handleHeightChange = (e) => {
    setInputHeight(Math.max(e.target.value, 0)); // Prevent negative values
  };

  const getModeButtonClasses = (buttonName) => {
    return `w-40-m mv3 mh2 w3-button w3-border ${
      activeMode === buttonName
        ? "w3-border-blue w3-blue" // Active state
        : "w3-border-red w3-deep-orange hover-w3-border-orange hover-w3-sand" // Default state
    }`;
  };

  const getDivisionButtonClasses = (buttonName) => {
    return `w-40-m mv3 mh2 w3-button w3-border ${
      divisionMode === buttonName
        ? "w3-border-blue w3-blue" // Active state
        : "w3-border-red w3-deep-orange hover-w3-border-orange hover-w3-sand" // Default state
    }`;
  };

  return (
    <Fragment>
      <Head />

      <div className="pa4-l">
        {/* Box 1 */}
        <div className="w-100 flex flex-wrap justify-between">
          <div className="w-100 ma3 ba">
            <div className="flex flex-wrap justify-around items-center">
              {/* Buttons */}
              {[
                "Fenster",
                "Haustür",
                "Hebe Schiebe",
                "Schiebe",
                "Rollladen",
                "Kombination",
              ].map((buttonName) => (
                <button
                  style={{ width: '150px' }}
                  key={buttonName}
                  className={getModeButtonClasses(buttonName)}
                  onClick={() => setActiveMode(buttonName)}
                >
                  {buttonName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="w-100  flex flex-wrap justify-between">
          <div className="w-100 w-30-l ma3 pa3 ba" style={{ height: "400px" }}>
            Box 2
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
                  value={inputWidth}
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
                  value={inputHeight}
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
          <div className="flex flex-wrap justify-around items-center">
              {/* Buttons */}
              {[
                "horizontal",
                "vertical",
                "Abschneiden",
                "Kopplung",
                "Statikkopplung",
                "Verbreiterung",
              ].map((buttonName) => (
                <button
                  style={{ width: '150px' }}
                  key={buttonName}
                  className={getDivisionButtonClasses(buttonName)}
                  onClick={() => setDivisionMode(buttonName)}
                >
                  {buttonName}
                </button>
              ))}
            </div>
          </div>

          <div
            ref={divRef}
            className="w-100 w-50-l ma3 pa3 ba"
            style={{ height: "550px" }}
          >
            <canvas ref={canvasRef} onClick={handleCanvasClick} />
            {clickX !== null && clickY !== null && (
              <p>
                Clicked at: X = {clickX}, Y = {clickY}
              </p>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
