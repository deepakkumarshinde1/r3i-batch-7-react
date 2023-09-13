// DOM => Document Object Model
// Logical Representation Of HTML code
// document ::=> we can collect and work with element in javascript

// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// document.querySelector();
// document.querySelectorAll();
// uses a css selector
// .class #id h1
// parent > child
// selector + selector
// selector ~ selector
// selector[attr=value]
// parent selector
function getElement(element) {
  let value = document.querySelector(element);
  if (value !== null) {
    return value;
  } else {
    alert("Element not found, please check console");
    throw new ReferenceError("Element " + element + " Not found.");
  }
}

let element = getElement("#text");
let button = getElement("button");
let input = getElement("#inputText");
let input2 = getElement("#inputText2");

// if you to collect a html/text data of a element ==> .innerHTML
// console.log(element.innerHTML);

// if you to set a html/text to the element ==> .innerHTML

// on click we want to change text
// click is event
// event are user actions
// work with event ==> .addEventListener('event',cbFn)
button.addEventListener("click", function () {
  // collect input value ==> .value
  element.innerHTML = Number(input.value) + Number(input2.value);
  // set or reset input ==> .value
  input.value = "";
  input2.value = "";
});
