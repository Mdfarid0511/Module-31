/* const numbers = [3, 5, 7, 9, 5];
const goodJob = x => x * x ;
const quibe = numbers.map(goodJob);
console.log(quibe); */

// for another method
const myBrothers = ['Faruk', 'bodbud', 'ashikh', 'rabbi', 'sohag'];
const theirNameLength = myBrothers.map(n => n.length);
console.log(theirNameLength);

const phones = [
   {name:'samsung', price:'50000', color:'red'},
   {name:'sony', price:'60000', color:'black'},
   {name:'nokia', price:'25000', color:'white'},
   {name:'iPhone', price:'250000', color:'gray'}
];

const phoneName = phones.map(n => n.color);
console.log(phoneName);