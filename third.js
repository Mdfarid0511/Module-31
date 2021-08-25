// Array basic
const numbers = [10, 20, 50, 70, 5,50];
numbers[3] = 200;
const maximum = Math.max(...numbers);
// console.log('The maximum number odf this array is :',maximum ,'.');

// Array destructing.
const [name, Age, year] = ['Kutkut', '50', 2015];
console.log('My name is:', name, '. ', 'I am', Age, 'Years old', '. ', 'I pass my ssc exam in',year);

// Object destructing
const market = {price:5000, color:'red', brand:'none', quality:'good', Quantity:25, structure:'normal'};
const{price, quality, Quantity} = market;
console.log(Quantity, quality);
