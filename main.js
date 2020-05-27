
function add(a, b) {
    return a + b
}

console.log(add(2, 3))


function multiply(a, b) {
    let multiplier = a
    for (let i = 1; i < b; i++) {
        multiplier = add(a, multiplier)
    }
    return multiplier
}

console.log(multiply(3, 4))


function toThePower(x, n) {
    let baseNumber = x
    for (let i = 1; i < n; i++) {
        baseNumber = multiply(x, baseNumber)
    }
    return baseNumber
}

console.log(toThePower(2, 3))


function factorial (x) {
    let factor = 1
    for (let i = 1; i <= x; i++) {
        factor = multiply(i, factor)
    }
    return factor
}

console.log(factorial(5))

// let sequence = []
// let n = 0

function nthFibonacci (n) {

    let sequence = [0, 1]
    for (let currentIndex = 2; sequence.length < n; currentIndex++) {
        let oneBack = sequence[currentIndex-1]
        let twoBack = sequence[currentIndex-2]
        sequence[currentIndex] = add(oneBack, twoBack)
    }
    console.log(sequence)
    return sequence[n-1]
    
}

console.log(nthFibonacci(8))


// function nthFibonacci (n) {
//     let fibonacci1 = 0
//     let fibonacci2 = 0
//     let n = 0
//     for (let i = 0; sequence.length <= n; i++) {
//         fibonacci = add(i, fibonacci)
//         sequence.push(fibonacci)
//     }
//     return fibonacci
// }









