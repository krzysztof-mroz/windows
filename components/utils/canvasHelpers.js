// utils/canvasHelpers.js
const detectClickedSide = (x, y, posX, posY, cumulatedWidth, cumulatedHeight, scaleFactor, realWidth, realHeight) => {
    if (Math.abs((x - posX - cumulatedWidth) / scaleFactor) <= 100) return "left";
    if (Math.abs((y - posY - cumulatedHeight) / scaleFactor) <= 100) return "up";
    if (Math.abs((posX + cumulatedWidth + realWidth - x) / scaleFactor) <= 100) return "right";
    if (Math.abs((posY + cumulatedHeight + realHeight - y) / scaleFactor) <= 100) return "down";
    return "";
  };
  
  export { detectClickedSide };
  


  const detectClickedPart = (einheit, x, y, posX, posY, cumulatedWidth, cumulatedHeight, profilesLeftWidth, profilesUpHeight, scaleFactor) => {
            let chosenPart
            let cumulatedFieldHeight = 0;
            einheit.division.forEach((fieldRow, fieldRowIndex) => {
              let cumulatedFieldWidth = 0;
              let realFieldHeight = fieldRow[0].fieldHeight * scaleFactor;
              fieldRow.forEach((field, fieldIndex) => {
                if (
                  x >= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth &&
                  x <= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth + field.width * scaleFactor &&
                  y >= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight &&
                  y <= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight + field.fieldHeight * scaleFactor
                ) {
                  const cumulatedParts=0;
                      field.heightDivision.forEach((part,partIndex) => {     
                        if ( 
                          x >= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth &&
                          x <= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth + field.width * scaleFactor &&
                          y >= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight + cumulatedParts &&
                          y <= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight + cumulatedParts + part.height * scaleFactor
                        ) {
                          chosenPart = [fieldRowIndex, fieldIndex, partIndex]
                        }
                        cumulatedParts+=part.height*scaleFactor
                      });
                }
                cumulatedFieldWidth += field.width * scaleFactor;
              });
              cumulatedFieldHeight += realFieldHeight;
            });
            return (chosenPart)
  }

  export {detectClickedPart};

  const detectClickedPartMatrix = (matrix, x, y, posX, posY, scaleFactor) => {

    let chosenPart;
    let cumulatedHeight = 0;
    let realWidth;
    let realHeight;

    matrix.forEach((row, rowIndex) => {
      let cumulatedWidth = 0;
      row.forEach((einheit, index) => {
        realWidth = einheit.width * scaleFactor;
        realHeight = einheit.height * scaleFactor;

        if (
          x >= posX + cumulatedWidth &&
          x <= posX + cumulatedWidth + realWidth &&
          y >= posY + cumulatedHeight &&
          y <= posY + cumulatedHeight + realHeight
        ) {
          let einheit = row[index];
           // Calculate cumulated profile width left and height up
           let profilesLeftWidth = einheit.left.reduce((accumulator, currentObject) => {
            return accumulator + currentObject.width;
          }, 0) * scaleFactor; // The 0 initializes the accumulator value

          let profilesUpHeight = einheit.up.reduce((accumulator, currentObject) => {
            return accumulator + currentObject.height;
          }, 0) * scaleFactor; // The 0 initializes the accumulator value
            let cumulatedFieldHeight = 0;
            einheit.division.forEach((fieldRow, fieldRowIndex) => {
              let cumulatedFieldWidth = 0;
              let realFieldHeight = fieldRow[0].fieldHeight * scaleFactor;
              fieldRow.forEach((field, fieldIndex) => {
                if (
                  x >= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth &&
                  x <= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth + field.width * scaleFactor &&
                  y >= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight &&
                  y <= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight + field.fieldHeight * scaleFactor
                ) {
                  const cumulatedParts=0;
                      field.heightDivision.forEach((part,partIndex) => {     
                        if ( 
                          x >= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth &&
                          x <= posX + cumulatedWidth + cumulatedFieldWidth + profilesLeftWidth + field.width * scaleFactor &&
                          y >= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight + cumulatedParts &&
                          y <= posY + cumulatedHeight + cumulatedFieldHeight + profilesUpHeight + cumulatedParts + part.height * scaleFactor
                        ) {
                          chosenPart = [rowIndex, index, fieldRowIndex, fieldIndex, partIndex]
                        }
                        cumulatedParts+=part.height*scaleFactor
                      });
                }
                cumulatedFieldWidth += field.width * scaleFactor;
              });
              cumulatedFieldHeight += realFieldHeight;
            });
            
        }
        cumulatedWidth += realWidth;
      });
      cumulatedHeight += realHeight;
    });
    return (chosenPart)
    
}

export {detectClickedPartMatrix};