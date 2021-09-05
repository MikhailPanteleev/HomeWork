// task__1

const sayHello = function (name) {
    if (name.toLowerCase() == 'mark'.toLowerCase()) {
        return `Hi, ${name}`;
    } else {
        return `Hello, ${name}`;
    }
};

// const sayHello = name => {
//     if (name.toLowerCase() == 'mark'.toLowerCase()) {
//         return `Hi, ${name}`;
//     } else {
//         return `Hello, ${name}`;
//     }
// };

console.log(sayHello('Mark'));
console.log(sayHello('Oleg'));
console.log(sayHello('Viktor'));




// task__2 

const hypotenuse = function(n, m) {
    return Math.sqrt((n * n) + (m * m));
};

// const hypotenuse = (n, m) => {
//     return Math.sqrt((n * n) + (m * m));
// }

console.log(hypotenuse(3, 4));





// task__3

const min = function(a, b) {
    return Math.min (a, b);
}

// const min = (a, b) => {
//     return Math.min (a, b);
// };

console.log(min(5, 2));
console.log(min(3, -1));
console.log(min(1, 1));







// task__4 

const isEven = function(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// const isEven = (number) => {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(3));
console.log(isEven(6));





//  task__5 

const deleteChars = function(str) {
    return str.slice(1, -1);
};

// const deleteChars = (str) => {
//     return str.slice(1, -1);
// }


console.log(deleteChars('Hello'));
console.log(deleteChars('A'));






// task__6

function someFn(someFnLower) {
    someFnUpper = someFnLower.toLowerCase();
    return someFnUpper[0].toUpperCase() + someFnUpper.slice(1);
};

// someFn = (someFnLower) => {
//     someFnUpper = someFnLower.toLowerCase();
//     return someFnUpper[0].toUpperCase() + someFnUpper.slice(1);
// };

console.log(someFn('пиТеР'));
console.log(someFn('javaScript'));







// task__9

function stringCutter(anyString, symbol) {
    symbol = '...';
    return anyString.substr(0, 6) + symbol;
};

// stringCutter = (anyString, symbol) => {
//     symbol = '...';
//     return anyString.substr(0, 6) + symbol;
// };

console.log(stringCutter('Привет Мир!', 6));
