function multiplyOddValues(matrix) {
  let newMatrix = matrix;
  let min = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
      }
    }
  }

  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (newMatrix[i][j] % 2 !== 0) {
        newMatrix[i][j] *= min;
      }
    }
  }

  return newMatrix;
}