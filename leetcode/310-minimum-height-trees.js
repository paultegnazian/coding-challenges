/** Work In Progress
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    let MHT = []
    let graphMap = new Map();
    
    if (n === 1) {
        MHT = [0]
    } else if (n === 2) {
        MHT = [edge(0)]
    } else {
        for (i = 0; i < n; i++) {
        // process edges, create graph
            a = edge[i][0]
            b = edge[i][1]
            if (graphMap.has(a)) {
                graphMap.set(a, b)
            } else {
                graphMap.set(a, b)
            }
            
        // process graph to find answer
        }
    }
    // edge(i,1), edge(i,2) --> how get?
    return MHT
};