// switch
let city = "abc";
switch (city) {
  case "Mumbai":
    console.log("it's mumbai");
    break;
  case "Pune":
    console.log("it's pune");
    break;
  case "Nashik":
    console.log("it's Nashik");
    break;
  default:
    console.log("city not found");
    break;
}
// loop
// run a same code for some iteration
// for
for (let start = 1; start <= 0; start++) {
  console.log(start, " for its awesome");
}
// while
let start = 1;
while (start <= 0) {
  console.log(start, " while its awesome");
  start++;
}
// do while
let start_1 = 1;

do {
  console.log(start_1, " do while its awesome");
  start_1++;
} while (start_1 <= 0);

// functions
// block of code to perform a logical operation
// () => parameter/argument
function funName() {
  console.log("it's function");
} // functions definition

// call a function
funName();

let a = 10; // global variables
let b = 20; // global variables

function add(v1 = 0, v2 = 0) {
  // v1 & v2 are local variables
  let result = v1 + v2;
  console.log(v1 + v2); // undefined + undefined = NaN
  console.log(result);
  // NaN = not a number
}
add(a, b);

add();
// array
// array collection data with same or different datatype
let array = [1, "a", true, null];
console.log(array);
