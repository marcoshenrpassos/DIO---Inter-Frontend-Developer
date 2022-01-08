// vectors and arrays

/* //declaring arrays
let array = ['string', 1, true];
console.log(array); */

//storing other data types
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
/* console.log(array);
console.log(array[3]); */

/* //forEach
array.forEach(function(item, index){console.log(item, index)}); */

/* //push
array.push('new item at the end');
console.log(array); */

/* //pop
array.pop();
console.log(array); */

/* //unshift
array.unshift('new item at the beginning');
console.log(array); */

/* //indexOf
console.log(array.indexOf(true)); */

/* //splice
array.splice(0,3)
console.log(array); */

/* //slice
let newArray = array.slice(0, 3);
console.log(newArray); */

//objects
let object = { string: 'string', number: 1, boolean: true, array: ['array'], internalObject: {internalObject: 'internal object'}};
// console.log(object);
console.log(object.internalObject);

var string = object.string;
console.log(string);

var internalArray = object.array;
console.log(internalArray);

var { string, boolean, internalObject} = object;
console.log(string, boolean, internalObject);

