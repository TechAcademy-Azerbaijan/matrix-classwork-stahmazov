// Use this matrix for solution

let matrix = [
    [134, 475, 30, 424],
    [303, 151, 419, 235],
    [248, 166, 90, 42],
    [318, 237, 184, 36]
];

// Write code here. 
let f_sum = 0
let l_sum = 0

for (let i = 0; i < matrix.length; i++){
    f_sum += matrix[i][i]
    
}

for (let i = matrix.length - 1; i >= 0; i--){
    l_sum+=matrix[matrix.length-1 - i][i]
}

console.log(f_sum, l_sum)
