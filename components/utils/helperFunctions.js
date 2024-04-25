// Function to convert an array to a unique string
const arrayToString = (arr) => JSON.stringify(arr);

// Convert each array to a string and filter out duplicates

const filterOnlyUniqueArrays = (arrays) => {
  let uniqueArrays = arrays
    .map(arrayToString) // Convert each array to a string
    .filter((item, index, array) => array.indexOf(item) === index) // Filter out duplicates
    .map(JSON.parse); // Convert strings back to arrays

  return uniqueArrays;
};

function arraysAreEqual(array1, array2) {
  if (array1 && array2) {

  
    // Check if both arrays are the same instance
    if (array1 === array2) {
      return true;
    }

    // Check if both arrays have the same length
    if (array1.length !== array2.length) {
      return false;
    }

    // Compare each element of the arrays
    for (let i = 0; i < array1.length; i++) {
      // If elements are arrays, recursively call this function
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!arraysAreEqual(array1[i], array2[i])) {
          return false;
        }
      }
      // For non-array elements, check equality
      else if (array1[i] !== array2[i]) {
        return false;
      }
    }

    // If all elements are equal, return true
    return true;
  }
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
    } else {
      // if only horizontal divisions

      if (
        measure.right.length === 1 &&
        row.length > 1 &&
        !row.every((einheit) => einheit.height === row[0].height)
      ) {
        let maxHeight = Math.max(...row.map((einheit) => einheit.height));

        row.forEach((einheit) => {
          if (einheit.height != maxHeight) {
            measure.right.push([]);
            measure.right[measure.right.length - 1].push(einheit.height);
            if (einheit.height < maxHeight) {
              measure.right[measure.right.length - 1].push(
                maxHeight - einheit.height
              );
            }
          }
        });
      }
    }

    row.forEach((einheit) => {
      if (rowIndex === 0 && matrix.length === 1) {
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
        let indexArrays = einheit.division.map((fieldRow) =>
          fieldRow.reduce((acc, obj, index) => {
            if (
              Array.isArray(obj.heightDivision) &&
              obj.heightDivision.length > 1
            ) {
              acc.push(index);
            }
            return acc;
          }, [])
        );

        // Count the total number of indexes across all fieldRow's with more than one division (fields with Querbalken zwischen Pfosten)
        let totalCount = indexArrays.reduce(
          (acc, indexes) => acc + indexes.length,
          0
        );

        // Count all the objects in einheit.division (fields)
        let totalObjectsCount = einheit.division.reduce(
          (acc, fieldRow) => acc + fieldRow.length,
          0
        );

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

          let currentFieldWithDivision = 0;
          // for every row
          indexArrays.forEach((fieldRowIndexes, rowIndex) => {
            if (fieldRowIndexes.length === 0) {
              // if the row has no fields with division
              for (let i = 0; i < totalObjectsCount; i++) {
                fieldsMatrix[i].push(
                  einheit.division[rowIndex][0].heightDivision[0].height
                ); // just add the first height of the first field
              }
            } else if (fieldRowIndexes.length > 0) {
              // if the row has fields with division

              let lastIndexWithDivision;
              let partsTogether;
              fieldRowIndexes.forEach((indexWithDivision) => {
                partsTogether = 0;
                einheit.division[rowIndex][
                  indexWithDivision
                ].heightDivision.forEach((partHeight) => {
                  fieldsMatrix[currentFieldWithDivision].push(
                    partHeight.height
                  ); // add part height to the proper fieldMatrix Array
                  partsTogether += partHeight.height;
                });
                lastIndexWithDivision = currentFieldWithDivision;
                currentFieldWithDivision += 1;
              });
              for (let i = 0; i < totalObjectsCount; i++) {
                if (
                  fieldsMatrix[i].reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  ) <
                  fieldsMatrix[lastIndexWithDivision].reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )
                ) {
                  fieldsMatrix[i].push(partsTogether);
                }
              }
            }
          });
        }

        // combine everything together
        fieldsMatrix.forEach((fields, index) => {
          let elements = [upR, upK, upV, ...fields, downV, downK, downFBA];
          let filteredElements = elements.filter((el) => el > 0);
          if (filteredElements.length > 1) {
            measure.left.push(filteredElements);
          }
        });
       
      }
    });
  });

  // FOR VERTICAL DIVISIONS
  if (matrix.length > 1) {
    let elements = [];
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


      elements.push(upR, upK, upV, ...fields, downV, downK, downFBA);
    });

   
    // Add non-zero measures from all the rows
    let filteredElements = elements.filter((el) => el > 0);
    if (filteredElements.length > matrix.length) {
      measure.left.push(filteredElements);
    } 
  }


  // bottom measure




let measureArray = []

// Iterate over each array of einheit objects
matrix.forEach((einheitArray, indexEinheitArray) => {
  // Iterate over each einheit object
  einheitArray.forEach((einheit, indexEinheit) => {
    if (einheit.left.length > 0 || einheit.right.length >0) {
      measureArray.push({position: [indexEinheitArray, indexEinheit], type: "profile"})
    }
    // Check each fieldRow for more than one field
    einheit.division.forEach((fieldRow, indexFieldRow) => {
      // Check if the fieldRow has more than one field
      if (fieldRow.length > 1) {
        // Increment count for each fieldRow with length greater than 1
        measureArray.push({position: [indexEinheitArray, indexEinheit, indexFieldRow], type: "pfosten"})
      }
    });

      // Now, count the parts with type "DSDK" or "DKDS" in all fields of this einheit
      einheit.division.forEach((fieldRow, indexFieldRow) => {
        fieldRow.forEach((field, indexField) => {
          field.heightDivision.forEach((part, indexPart) => {
            if (part.type === "DSDK" || part.type === "DKDS") {
              measureArray.push({position: [indexEinheitArray, indexEinheit, indexFieldRow, indexField, indexPart], type: "stulp"})
            }
          });
        });
      });
    
  });
});

//console.log(measureArray); // Outputs the final count
//console.log('length: '+measureArray.length); // Outputs the final count



const bottomMeasuresArray = Array.from({ length: measureArray.length }, () => []);


if (matrix.length === 1) {
  let countArrows=0
  const measuresServiced = Array.from({ length: measureArray.length }, () => false);

  matrix[0].forEach((einheit, einheitIndex) => {
    measuresServiced = Array.from({ length: measureArray.length }, () => false);
    measureArray.forEach(einheitWithDivision => {
      if (arraysAreEqual([0,einheitIndex],[einheitWithDivision.position[0], einheitWithDivision.position[1]]) ) {
        let elements = []

        // IF VERBREITERUNG, KOPPLUNG
         if (einheitWithDivision.type === "profile") {
          let leftV = 0;
          let leftK = 0;
          einheit.left.forEach(profile => {
            if (profile.type === "V") {
                leftV += profile.width
              } else if (profile.type === "K") {
                leftK += profile.width;
              } 
          })
          let rightV = 0;
          let rightK = 0;
          einheit.right.forEach(profile => {
            if (profile.type === "V") {
                rightV += profile.width
              } else if (profile.type === "K") {
                rightK += profile.width;
              } 
          })
          elements.push(leftK, leftV, einheit.netWidth, rightV, rightK);
          let filteredElements = elements.filter((el) => el > 0);
          bottomMeasuresArray[countArrows].push(...filteredElements)
          measuresServiced[countArrows] = true
          countArrows+=1 
        } 

        // If PFOSTEN
        einheit.division.forEach((einheitRow, einheitRowIndex) => {
          if (arraysAreEqual([0,einheitIndex,einheitRowIndex],[einheitWithDivision.position[0], einheitWithDivision.position[1], einheitWithDivision.position[2]]) && einheitWithDivision.type === "pfosten") {
            let leftV = 0;
            let leftK = 0;
            einheit.left.forEach(profile => {
              if (profile.type === "V") {
                  leftV += profile.width
                } else if (profile.type === "K") {
                  leftK += profile.width;
                } 
            })
            let rightV = 0;
            let rightK = 0;
            einheit.right.forEach(profile => {
              if (profile.type === "V") {
                  rightV += profile.width
                } else if (profile.type === "K") {
                  rightK += profile.width;
                } 
            })
            let fields=[]
            einheitRow.forEach(field => {
              fields.push(field.width)
            })

            elements.push(leftK, leftV, ...fields, rightV, rightK);
            let filteredElements = elements.filter((el) => el > 0);
            bottomMeasuresArray[countArrows].push(...filteredElements)
            measuresServiced[countArrows] = true
           
              countArrows+=1 
            
            
          }

          // IF STULP
          einheitRow.forEach((field, indexField) => {
            field.heightDivision.forEach((part,partIndex) => {
              if (arraysAreEqual([0,einheitIndex,einheitRowIndex, indexField, partIndex],[einheitWithDivision.position[0], einheitWithDivision.position[1], einheitWithDivision.position[2], einheitWithDivision.position[3], einheitWithDivision.position[4]]) && einheitWithDivision.type === "stulp") {
                let leftV = 0;
                let leftK = 0;
                einheit.left.forEach(profile => {
                  if (profile.type === "V") {
                      leftV += profile.width
                    } else if (profile.type === "K") {
                      leftK += profile.width;
                    } 
                })
                let rightV = 0;
                let rightK = 0;
                einheit.right.forEach(profile => {
                  if (profile.type === "V") {
                      rightV += profile.width
                    } else if (profile.type === "K") {
                      rightK += profile.width;
                    } 
                })
                let fields=[]
                console.log(einheit.division)
                if (einheit.division[einheitWithDivision.position[2]].length>1) {

                  if (einheitWithDivision.position[3] > 2) {
                    fields.push(einheit.division[einheitWithDivision.position[2]][einheitWithDivision.position[3]-3].width)
                  }

                  if (einheitWithDivision.position[3] > 1) {
                    fields.push(einheit.division[einheitWithDivision.position[2]][einheitWithDivision.position[3]-2].width)
                  }

                  if (einheitWithDivision.position[3] > 0) {
                    fields.push(einheit.division[einheitWithDivision.position[2]][einheitWithDivision.position[3]-1].width)
                  }

                  
                  fields.push(part.stulp)
                  fields.push(field.width - part.stulp)
                } else {
                  fields.push(part.stulp)
                  fields.push(field.width - part.stulp)
                }
                
                elements.push(leftK, leftV, ...fields, rightV, rightK);
                let filteredElements = elements.filter((el) => el > 0);
                bottomMeasuresArray[countArrows].push(...filteredElements)
                measuresServiced[countArrows] = true
                countArrows+=1 
              }
            })
          })

        })

      } 
    })
    
      bottomMeasuresArray.forEach ((actualArray, actualArrayIndex) => {
        if (measuresServiced[actualArrayIndex]===false) {
          actualArray.push(einheit.width)
        }
      }) 
    
  })

  // WITH VERTICAL DIVISION
} else if (matrix.length > 1) {
  let countArrows=0
  const measuresServiced = Array.from({ length: measureArray.length }, () => false);

  matrix.forEach((einheitRow, einheitRowIndex) => {
    measuresServiced = Array.from({ length: measureArray.length }, () => false);
    measureArray.forEach(einheitWithDivision => {
      if (arraysAreEqual([einheitRowIndex,0],[einheitWithDivision.position[0], einheitWithDivision.position[1]]) ) {
        let elements = []

        // IF VERBREITERUNG, KOPPLUNG
        if (einheitWithDivision.type === "profile") {
          let leftV = 0;
          let leftK = 0;
          einheitRow[0].left.forEach(profile => {
            if (profile.type === "V") {
                leftV += profile.width
              } else if (profile.type === "K") {
                leftK += profile.width;
              } 
          })
          let rightV = 0;
          let rightK = 0;
          einheitRow[0].right.forEach(profile => {
            if (profile.type === "V") {
                rightV += profile.width
              } else if (profile.type === "K") {
                rightK += profile.width;
              } 
          })
          elements.push(leftK, leftV, einheitRow[0].netWidth, rightV, rightK);
          let filteredElements = elements.filter((el) => el > 0);
          bottomMeasuresArray[countArrows].push(...filteredElements)
          measuresServiced[countArrows] = true
          countArrows+=1 
        } 

        // If PFOSTEN
        einheitRow[0].division.forEach((fieldRow, fieldRowIndex) => {
          if (arraysAreEqual([einheitRowIndex,0,fieldRowIndex],[einheitWithDivision.position[0], einheitWithDivision.position[1], einheitWithDivision.position[2]]) && einheitWithDivision.type === "pfosten") {
            let leftV = 0;
            let leftK = 0;
            einheitRow[0].left.forEach(profile => {
              if (profile.type === "V") {
                  leftV += profile.width
                } else if (profile.type === "K") {
                  leftK += profile.width;
                } 
            })
            let rightV = 0;
            let rightK = 0;
            einheitRow[0].right.forEach(profile => {
              if (profile.type === "V") {
                  rightV += profile.width
                } else if (profile.type === "K") {
                  rightK += profile.width;
                } 
            })
            let fields=[]
            fieldRow.forEach(field => {
              fields.push(field.width)
            })

            elements.push(leftK, leftV, ...fields, rightV, rightK);
            let filteredElements = elements.filter((el) => el > 0);
            bottomMeasuresArray[countArrows].push(...filteredElements)
            measuresServiced[countArrows] = true
            countArrows+=1 
          }

           // IF STULP
           fieldRow.forEach((field, indexField) => {
            field.heightDivision.forEach((part,partIndex) => {
              if (arraysAreEqual([einheitRowIndex,0,fieldRowIndex, indexField, partIndex],[einheitWithDivision.position[0], einheitWithDivision.position[1], einheitWithDivision.position[2], einheitWithDivision.position[3], einheitWithDivision.position[4]]) && einheitWithDivision.type === "stulp") {
                let leftV = 0;
                let leftK = 0;
                einheitRow[0].left.forEach(profile => {
                  if (profile.type === "V") {
                      leftV += profile.width
                    } else if (profile.type === "K") {
                      leftK += profile.width;
                    } 
                })
                let rightV = 0;
                let rightK = 0;
                einheitRow[0].right.forEach(profile => {
                  if (profile.type === "V") {
                      rightV += profile.width
                    } else if (profile.type === "K") {
                      rightK += profile.width;
                    } 
                })
                let fields=[]
                fields.push(part.stulp)
                fields.push(field.width - part.stulp)
                elements.push(leftK, leftV, ...fields, rightV, rightK);
                let filteredElements = elements.filter((el) => el > 0);
                bottomMeasuresArray[countArrows].push(...filteredElements)
                measuresServiced[countArrows] = true
                countArrows+=1 
              }
            })
          })

        })

      }
    })

  })
  

}

bottomMeasuresArray.forEach (actualArray => {
  measure.bottom.push(actualArray);
})



  // filter only unique arrays, no repetitions in measures to save place
  measure.right = filterOnlyUniqueArrays(measure.right);
  measure.left = filterOnlyUniqueArrays(measure.left);
  measure.top = filterOnlyUniqueArrays(measure.top);
  measure.bottom = filterOnlyUniqueArrays(measure.bottom);

  return measure;
};

export { countMeasures };
