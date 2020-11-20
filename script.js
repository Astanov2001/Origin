const arrayString=prompt('Пиши числа через запятую');
const array=arrayString.split(',').map(Number);
const reducer=(accumulator, currentValue) => accumulator + currentValue;

const answer=prompt('How old are you');

console.log(array.reduce(reducer) / array.length);

console.log(answer+' Лет');