
// Function to convert an array to a unique string
const arrayToString = (arr) => JSON.stringify(arr);


const countMeasures = (matrix, width, height) => {
  let measure = { left: [], right: [], top: [], bottom: [] };

  measure.top = [[width]];
  measure.right = [[height]];

  matrix.forEach((row, rowIndex) => {
    if (matrix.length > 1) {
      if (measure.right.length === 1) {
        measure.right.push([]);
      }
      measure.right[1].push(row[0].height);
    } else {   // if only horizontal divisions


        if (measure.right.length === 1 && row.length > 1 && !row.every(einheit => einheit.height === row[0].height)) {
            let maxHeight = Math.max(...row.map(einheit => einheit.height));
           
            row.forEach((einheit) => {
                if (einheit.height != maxHeight) {
                    measure.right.push([]);
                    measure.right[measure.right.length -1].push(einheit.height);
                    if (einheit.height < maxHeight) {
                        measure.right[measure.right.length -1].push(maxHeight - einheit.height);
                    }
                }
            });
        }
        // Convert each array to a string and filter out duplicates
        let uniqueArrays = measure.right
        .map(arrayToString) // Convert each array to a string
        .filter((item, index, array) => array.indexOf(item) === index) // Filter out duplicates
        .map(JSON.parse); // Convert strings back to arrays

        measure.right = uniqueArrays;



    }

    row.forEach((einheit) => {
      if (rowIndex === 0 && matrix.length ===1) {
        if (row.length > 1) {
          if (measure.top.length === 1) {
            measure.top.push([]);
          }
          measure.top[1].push(einheit.width);
        }

        // check profiles in heigth
        let upV = 0;
        let upK = 0;
        let upR = 0;
        einheit.up.forEach((profile) => {
          if (profile.type === "V") {
            upV += profile.height;
          } else if (profile.type === "K") {
            upK += profile.height;
          } else if (profile.type === "R") {
            upR += profile.height;
          }
        });
        let downV = 0;
        let downK = 0;
        let downFBA = 0;
        einheit.down.forEach((profile) => {
          if (profile.type === "V") {
            downV += profile.height;
          } else if (profile.type === "K") {
            downK += profile.height;
          } else if (profile.type === "FBA") {
            downFBA += profile.height;
          }
        });

        let fields = [];
        einheit.division.forEach((fieldRow) => {
          fields.push(fieldRow[0].heightDivision[0].height);
        });

        let elements = [upR, upK, upV, ...fields, downV, downK, downFBA];
        let filteredElements = elements.filter((el) => el > 0);
        if (filteredElements.length > 1) {
          measure.left.push(filteredElements);
        }

        einheit.division.forEach((fieldRow, fieldRowIndex) => {
          fieldRow.forEach((field, fieldIndex) => {
            field.heightDivision.forEach((part, partIndex) => {});
          });
        });
      
    } 
    });
  });



  // FOR VERTICAL DIVISIONS
  if (matrix.length > 1) {

    let elements = []
    matrix.forEach((row, rowIndex) => {

        let upV = 0;
        let upK = 0;
        let upR = 0;
        row[0].up.forEach((profile) => {
          if (profile.type === "V") {
            upV += profile.height;
          } else if (profile.type === "K") {
            upK += profile.height;
          } else if (profile.type === "R") {
            upR += profile.height;
          }
        });

        let downV = 0;
        let downK = 0;
        let downFBA = 0;
        row[0].down.forEach((profile) => {
          if (profile.type === "V") {
            downV += profile.height;
          } else if (profile.type === "K") {
            downK += profile.height;
          } else if (profile.type === "FBA") {
            downFBA += profile.height;
          }
        });

        let fields = [];
        row[0].division.forEach((fieldRow) => {
          fields.push(fieldRow[0].heightDivision[0].height);
        });

        //add measures in one row
        elements.push(upR, upK, upV, ...fields, downV, downK, downFBA);
    });

    // Add non-zero measures from all the rows
    let filteredElements = elements.filter((el) => el > 0);
    if (filteredElements.length > matrix.length) {
      measure.left.push(filteredElements);
    }

  }


  return measure;
};

export { countMeasures };
