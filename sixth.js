
const phones = [

   {name:'samsung', price:'50000', color:'red'},
   {name:'sony', price:'600', color:'black'},
   {name:'nokia', price:'250', color:'white'},
   {name:'iPhone', price:'250000', color:'gray'},
   {name:'Xaomi', price:'60000', color:'black'},
]

const bestPhone = phones.find(phone => phone.color == 'black');
console.log(bestPhone);