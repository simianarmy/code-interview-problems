/**
 * Zero matrix
 * Zero out row and column of M X N matrix where element = 0
 *
 * Solution:
 * Time: O(N X M)
 * Space: O(N) to store zero indices
 *
 **/
module.exports = (input) => {
  const mat = Array(input.length);

  for (let i = 0; i < mat.length; i++) {
    let row = input[i].split(' ').map(c => parseInt(c, 10));
    mat[i] = row;
  }
  console.log({mat});
  // collect zero indices
  let zeroedRows = {};
  let zeroedCols = {};

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] == '0') {
        zeroedRows[i] = 1;
        zeroedCols[j] = 1;
      }
    }
  }
  console.log({zeroedRows, zeroedCols});

  Object.keys(zeroedRows).forEach(row => {
      zeroRow(row);
  });
  Object.keys(zeroedCols).forEach(col => {
      zeroCol(col);
  });

  return mat;

  function zeroRow(row) {
    for (let j = 0; j < mat[row].length; j++) {
      mat[row][j] = 0;
    }
  }

  function zeroCol(col) {
    for (let i = 0; i < mat.length; i++) {
      mat[i][col] = 0;
    }
  }

  function getMatrixCol(mat, col) {
    let res = [];
    for (let i = 0; i < N; i++) {
      res.push(mat[i][col]);
    }
    return res;
  }
};

