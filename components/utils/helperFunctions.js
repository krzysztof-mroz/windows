
// Function to convert an array to a unique string
const arrayToString = (arr) => JSON.stringify(arr);

// Convert each array to a string and filter out duplicates

const filterOnlyUniqueArrays = (arrays) => {
    let uniqueArrays = arrays
    .map(arrayToString) // Convert each array to a string
    .filter((item, index, array) => array.indexOf(item) === index) // Filter out duplicates
    .map(JSON.parse); // Convert strings back to arrays

    return uniqueArrays
}



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

        // Split out the array of index arrays for every fieldRow with more than one vertical divisions (Querbalken zwischen Pfosten)
        let indexArrays = einheit.division.map(fieldRow => 
            fieldRow.reduce((acc, obj, index) => {
            if (Array.isArray(obj.heightDivision) && obj.heightDivision.length > 1) {
                acc.push(index);
            }
            return acc;
            }, [])
        );
        
        // Count the total number of indexes across all fieldRow's with more than one division (fields with Querbalken zwischen Pfosten)
        let totalCount = indexArrays.reduce((acc, indexes) => acc + indexes.length, 0);

        // Count all the objects in einheit.division (fields)
        let totalObjectsCount = einheit.division.reduce((acc, fieldRow) => acc + fieldRow.length, 0);

        let fieldsMatrix = [];

        if (totalCount === 0) {
            fieldsMatrix.push([]);
            einheit.division.forEach((fieldRow) => {
                fieldsMatrix[0].push(fieldRow[0].heightDivision[0].height);
              });

        } else {
            
            // create fields arrays, as many as the fields with division
            for (let i = 0; i < totalObjectsCount; i++) {
                fieldsMatrix.push([]);  
            } 
            
            let currentFieldWithDivision = 0
            // for every row
            indexArrays.forEach((fieldRowIndexes, rowIndex) => {
                if (fieldRowIndexes.length === 0) {        // if the row has no fields with division
                    for (let i = 0; i < totalObjectsCount; i++) {
                        fieldsMatrix[i].push(einheit.division[rowIndex][0].heightDivision[0].height);  // just add the first height of the first field
                    } 
                } else if (fieldRowIndexes.length > 0){ // if the row has fields with division
                    
                     let lastIndexWithDivision
                     let partsTogether
                     fieldRowIndexes.forEach(indexWithDivision => {
                        partsTogether = 0
                        einheit.division[rowIndex][indexWithDivision].heightDivision.forEach(partHeight => {
                            fieldsMatrix[currentFieldWithDivision].push(partHeight.height);  // add part height to the proper fieldMatrix Array
                            partsTogether += partHeight.height
                        })
                        lastIndexWithDivision = currentFieldWithDivision
                        currentFieldWithDivision += 1
                        
                    }) 
                    for (let i = 0; i < totalObjectsCount; i++) {
                        if (fieldsMatrix[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0) < fieldsMatrix[lastIndexWithDivision].reduce((accumulator, currentValue) => accumulator + currentValue, 0)) {
                            fieldsMatrix[i].push(partsTogether);
                        }
                           
                        
                    }
                }
            })
            
            
        }
        
        




       /*  let fieldsMatrix = [];
        einheit.division.forEach((fieldRow) => {
          
          // specify, which indexes of fieldRow array hase more than one vertrical divisions (Querbalken)
          let indexesWithDivision = fieldRow.reduce((acc, obj, index) => {
            if (Array.isArray(obj.heightDivision) && obj.heightDivision.length > 1) {
              acc.push(index);
            }
            return acc;
          }, []);


          if (indexesWithDivision.length === 0) {
            fieldsMatrix.push([])
            fieldsMatrix[0].push(fieldRow[0].heightDivision[0].height);
          } 
         
          
            indexesWithDivision.forEach ((indexWithDivision, index) => {
                fieldsMatrix.push([])
                fieldRow[indexWithDivision].heightDivision.forEach(part => {
                    fieldsMatrix[index].push(part.height)
                })
            })  
        });*/





        fieldsMatrix.forEach((fields, index) => {
            let elements = [upR, upK, upV, ...fields, downV, downK, downFBA];
            let filteredElements = elements.filter((el) => el > 0);
            if (filteredElements.length > 1) {
                measure.left.push(filteredElements);
            }

        })
        /* let elements = [upR, upK, upV, ...fields, downV, downK, downFBA];
        let filteredElements = elements.filter((el) => el > 0);
        if (filteredElements.length > 1) {
          measure.left.push(filteredElements);
        } */

        
      
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

  // filter only unique arrays, no repetitions in measures to save place
  measure.right = filterOnlyUniqueArrays(measure.right)
  measure.left = filterOnlyUniqueArrays(measure.left)
  measure.top = filterOnlyUniqueArrays(measure.top)
  measure.bottom = filterOnlyUniqueArrays(measure.bottom)

  return measure;
};

export { countMeasures };
