
/**
 * Rotate matrix
 * Image is N X N matrix with integer for pixel.  Rotate image 90 deg
 *
 * Solution:
 * Time: O(N^2)
 * Space: O(1) in-place, O(N^2) brute force
 **/
module.exports = (input) => {
  const N = input[0];

  function getMatrixCol(mat, col) {
    let res = [];
    for (let i = 0; i < N; i++) {
      res.push(mat[i][col]);
    }
    return res;
  }

  /**
   * rotates 90 clockwise
   */
  function bruteForce(mat) {
    // Brute force solution:
    //
    let rotated = new Array(N);
    for (let i = 0; i < N; i++) {
      // get column at i values
      let col = getMatrixCol(mat, i);
      rotated[i] = col.reverse();
    }
    return rotated;
  }

  /**
   * rotates 90 counter-clockwise only :)
   * Found this solution online https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/
   */
  function inPlace(mat) {
    // reverse every row
    for (let i = 0; i < N; i++) {
      mat[i] = mat[i].reverse();
    }

    // transpose the matrix
    for (let i = 0; i < N; i++) {
      for (let j = i; j < N; j++) {
        let tmp = mat[i][j];
        mat[i][j] = mat[j][i];
        mat[j][i] = tmp;
      }
    }
  }

  // build the N x N matrix
  let matrix = new Array(N);
  for (let i = 0; i < N; i++) {
    matrix[i] = new Array(N);
    for (let j = 0; j < N; j++) {
      matrix[i][j] = (N * i) + j;
    }
  }
  console.log({matrix});

  //return bruteForce(matrix);
  inPlace(matrix);
  return {rotated: matrix};
};

