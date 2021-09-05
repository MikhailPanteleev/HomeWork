// task__1

const sayHello = function (name) {
    if (name == 'Mark') {
        return console.log(`Hi, ${name}`);
    } else {
        return console.log(`Hello, ${name}`);
    }
};

// const sayHello = name => {
//     if (name == 'Mark') {
//         return console.log(`Hi, ${name}`);
//     } else {
//         return console.log(`Hello, ${name}`);
//     }
// };

sayHello('Mark');
sayHello('Oleg');
sayHello('Viktor');




// task__2 

const result = function(n, m) {
    return Math.sqrt((n * n) + (m * m));
};

// const result = (n, m) => {
//     return Math.sqrt((n * n) + (m * m));
// }

console.log(result(3, 4));





// task__3

let min = function(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

// let min = (a, b) => {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// };

console.log(min(5, 2));
console.log(min(3, -1));
console.log(min(1, 1));







// task__4 

const isEven = function(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

// const isEven = (number) => {
//     if (number % 2 == 0) {
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

const deleteCharsResult = function(deleteChar) {
    return deleteChar.substring(1, deleteChar.length - 1);
};

// const deleteCharsResult = (deleteChar) => {
//     return deleteChar.substring(1, deleteChar.length - 1);
// }


console.log(deleteCharsResult('Hello'));
console.log(deleteCharsResult('A'));






// task__6

function someFn(string) {
    string = string.toLowerCase();
    return string[0].toUpperCase() + string.slice(1);
}

// someFn = (string) => {
//     string = string.toLowerCase();
//     return string[0].toUpperCase() + string.slice(1);
// };

console.log(someFn('пиТеР'));
console.log(someFn('javaScript'))







// task__9

function stringCutter(string, amount, symbol) {
    if (amount && symbol) return string;
    symbol = symbol || '...';
    return string.substr(0, amount) + symbol;
};

// stringCutter = (string, amount, symbol) => {
//     if (amount && symbol) return string;
//     symbol = symbol || '...';
//     return string.substr(0, amount) + symbol;
// };

console.log(stringCutter('Привет Мир!', 6));