// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]

// Write code here. 
count = 0
let new_arr = []

for (let i = 0; i < array.length; i++){
    if (!new_arr.includes(array[i])) {
        count++
        new_arr.push(array[i])
    }
}

console.log(count)
