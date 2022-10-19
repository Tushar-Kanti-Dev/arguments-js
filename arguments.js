function argument(number1, number2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const numbers = argument(12, 12, 12, 12, 48, 4, 100, 1000000);
console.log(numbers);

function getFullName(firstName, lastName) {
    let fullName = '';
    for (const name of arguments) {
        fullName = fullName + name + ' ';
    }
    return fullName;
}
const nameIs = getFullName('Kutto', 'uddin', 'Miya', 'Hasil', 'Fasil', 'Buddin', 'Faisla');
console.log(nameIs);