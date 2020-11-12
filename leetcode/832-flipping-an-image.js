/** need to swap position
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (i = 0; i < A.length; i++) {
        A[i].reverse()
        for (j = 0; j < A.length; j++) {
            if (A[i][j] === 0) {
                A[i][j] = 1
            } else {
                A[i][j] = 0
            }
        }
    }
    return A
};