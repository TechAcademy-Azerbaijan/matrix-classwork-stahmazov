// Use this arrays for solution
let array_1 = [3, 1, 3, 4, 2, 4, 12]
let array_2 = [4, 15, 43, 1, 15, 1]

// Write code here. 

let new_array = []

for (let i = 0; i < array_1.length; i++){
    if (!array_2.includes(array_1[i])) {
        new_array.push(array_1[i])
    }
}

console.log(...new_array)
