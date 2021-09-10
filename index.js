// task__1 

const uniqueList = [1, 2, 2, 2, 3, 4, 5, 5, 7];

const filterInique = uniqueList.filter((number, index, self) => {
    if (self.indexOf(number) === index)
    return uniqueList;
});

console.log("Result task_1.1(filter)", filterInique);




const uniqueListFor = [1, 1, 2];

const filterIniqueFor = number => {
    let filterIniqueResult = [];
    for (let numberInique of number) {
        if (!filterIniqueResult.includes(numberInique)) {
            filterIniqueResult.push(numberInique)
        }
    }
    return filterIniqueResult
};

console.log("Result task_1.1(For)",filterIniqueFor(uniqueListFor))


// task__2

const cubizerList = [1, 2, 3];

const cubizer = cubizerList.map((number) => Math.pow(number, 3));

console.log("Result task_2.1(map)", cubizer);




const cubizerListFor = [1, 1, 2];
const cubizerFor = [];

for (i in cubizerListFor) {
    cubizerFor[i] = Math.pow(cubizerListFor[i], 3);
}

console.log("Result task_2.1(For)",cubizerFor);




// task__3 

const longString = ['a', 'b', 'sqw'];

const filterLongString = longString.filter((element) => element.length <= 1)

console.log("Result task_3.1(Filter)", filterLongString);





// task__4

const onlyNumbers = ['a', 1, 'b', 2, 'sqw', [1,2,3]];


const filterOnlyNumbers = onlyNumbers.filter((number) => {
    if (typeof number === 'number') {
        return number;
        };
    });

console.log("Result task_4.1(Filter)", filterOnlyNumbers);






const onlyNumbersFor = ['Hello', 'World', 'Hello world'];

for (let i = onlyNumbersFor.length - 1; i >= 0; i--) {
    if (typeof onlyNumbersFor[i] !== "number")
        onlyNumbersFor.splice(i);
};

console.log("Result task_4.1(For)", onlyNumbersFor);






// task__5 

const maxNumber = [1, 3, 4, 2];

const findMaxNumber = maxNumber.reduce((previousValue, currentValue) => 
    Math.max(previousValue, currentValue));

console.log("Result task_5.1(Reduce)", findMaxNumber);







const maxNumberFor = [3, 4, 5, 12, 10, 25];

const findMaxNumberFor = number => {
    let maxNumber = number[0];
    for (let i = 1; i < number.length; i++) {
        if (number[i] > maxNumber) {
            maxNumber = number[i];
        };
    };
    return maxNumber;
};

console.log("Result task_5.2(For)", findMaxNumberFor(maxNumberFor));


