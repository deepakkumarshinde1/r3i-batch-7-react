// array
// array collection data with same or different datatype
// index of array is auto gen
// index it start with zero i.e 0
let array = [10, 20, 30, 40, 50];
// console.log(array);
// add data (push)
array.push(50, 60, 70, 60);
// console.log(array);
// delete data (splice)
//array.splice(4, 1); // index , deleteCunt
console.log(array);
// read data (forEach)
// single
// console.log(array[6]);

// we have created a function inside a function call
// such a kind of function is called as a callback function
// inline function / callback function
// array.forEach(function (value, index) {
//   console.log(value);
// });

// search data (find , filter)
let search = 100;
// find ==> return a single record
// if match not found ==> undefined
let findData = array.find(function (value, index) {
  return value === search;
});
// console.log(findData);
// filter ==> return a array list
// if match not found ==> []
let filterData = array.filter(function (value, index) {
  return value === search;
});
// console.log(filterData);
// re-create data (map)
let array2 = array.map(function (value, index) {
  return "<li>" + value * 2 + "</li>";
});

// array == convert to ==> string
// join()
console.log(array2.join(""));

// callback function

// includes
// every
// reducer
// sort
// findIndex

// without callback
// push , pop , unshift , shift , includes, join, fill ,from

// with callback
// find , findIndex , filter , map , reducer , sort

// strings / maths ==> dom
