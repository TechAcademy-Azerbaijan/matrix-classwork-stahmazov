// Use this matrices for solution

let matrix_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; 

let matrix_2 = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
]; 

// Write code here. 
let sum= 0

for (let i = 0; i < matrix_1.length; i++){
    for (let j = 0; j < matrix_2.length; j++){
        if (matrix_2[i][j] == 1) {
            sum += matrix_1[i][j]
        }
    }
}

console.log(sum)
