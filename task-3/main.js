// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]

// Write code here. 

let new_arr = []
let warning = []

for (let i = 0; i < array.length; i++){
    start = i + 1
    last = array.length+1
    console.log(start, last)
    if (!array.slice(start,last).includes(array[i]) && !warning.includes(array[i])) {
        new_arr.push(array[i])
    }
    else {
        warning.push(array[i])
    }
}

console.log(...new_arr)
