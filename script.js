//your JS code here. If required.
const numbers = [1, 2, 3, 4];
const getArray = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(numbers);
        }, 3000);
    });
};
const filterOddNumbers = (array) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const evenNumbers = array.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
};
const multiplyByTwo = (array) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const multipliedNumbers = array.map(num => num * 2);
            resolve(multipliedNumbers);
        }, 2000);
    });
};
const updateOutput = (text) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = text;
};
getArray()
    .then(array => {
        return filterOddNumbers(array);
    })
    .then(evenNumbers => {
        updateOutput(evenNumbers.toString());
        return multiplyByTwo(evenNumbers);
    })
    .then(multipliedNumbers => {
        updateOutput(multipliedNumbers.toString());
    });
