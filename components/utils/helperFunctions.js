const countMeasures = (matrix, width, height) => {

let measure = {left: [[]], right: [[]], top:[[]], bottom:[[]]}


  measure.top = [[width]];
  measure.right = [[height]];




    matrix.forEach(row => {
        if (matrix.length > 1) {
            if (measure.right.length === 1) {
                measure.right.push([]);
            }
            measure.right[1].push(row[0].height);
        }

        row.forEach(einheit => {
            if (row.length > 1) {
                if (measure.top.length ===1) {
                    measure.top.push([]);
                }
                measure.top[1].push(einheit.width);
            }
            
              einheit.division.forEach((fieldRow, fieldRowIndex) => {
                fieldRow.forEach((field, fieldIndex) => {
                    field.heightDivision.forEach((part,partIndex) => {     
                         
                    });
                });
            });  
        });     
    });
    return(measure);
}

export {countMeasures}