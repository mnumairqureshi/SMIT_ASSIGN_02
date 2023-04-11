// // ACTIVITY 01 -============================================================

// function num(a) {
//     return function add(b) {
//         return a + b;
//     }
// }
// const addition = num(5);
// console.log(addition(5));
// console.log(addition(10));

// // ACTIVITY 02 -============================================================

// function searchArray(arr, value) {
//     if (arr.length === 0) {
//         return false;
//     }
//     if (arr[0] === value) {
//         return true;
//     } else {
//         return searchArray(arr.slice(1), value);
//     }
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(searchArray(arr, 3));
// console.log(searchArray(arr, 6));

// // ACTIVITY 03 -============================================================
// // please uncomment code on Assign01.html file for better result

// function addParagraph(text) {
//   let newParagraph = document.createElement("p");
//   newParagraph.textContent = text;
//   document.body.appendChild(newParagraph);
// }
// addParagraph("This is my New paragraph this paragraph add via createElement");

// // ACTIVITY 04 -============================================================
// // please uncomment code on Assign01.html file for better result

// function addListItem(text) {
//   let myList = document.getElementById("myList");
//   let listItem = document.createElement("li");
//   listItem.textContent = text ;
//   myList.appendChild(listItem);
// }

// // ACTIVITY 05 -============================================================
// // please uncomment code on Assign01.html file for better result

// function changeBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
//   document.body.style.backgroundColor = color;
//   let message = document.createElement("p");
//   document.body.appendChild(message);
// }
// let myElement = document.getElementById("my-para");
// changeBackgroundColor(myElement, "blue");

// // ACTIVITY 06 -============================================================

// function saveObjectToLocalStorage(key, object) {
//   localStorage.setItem(key, JSON.stringify(object));
// }
// let myKey = {
//   name: "Muhammad Numair Qureshi",
//   age: 30,
//   city: "Karachi, Pakistan"
// };
// saveObjectToLocalStorage("myKey", myKey);

// // ACTIVITY 07 -============================================================

// let myObject = getObjectFromLocalStorage("Object: Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object. ");
// console.log(myObject);
// function getObjectFromLocalStorage(key) {
//   let objectA = JSON.parse(localStorage.getItem(key));
//   let message = "" + key;
//   let paragraph = document.createElement("p");
//   paragraph.textContent = message;
//   document.body.appendChild(paragraph);
//   return objectA;
// }

// let myObjectA = getObjectFromLocalStorage("Ans: With the help of json create a function that retrieves an object from localStorage ");
// console.log(myObjectA);

// // ACTIVITY 08 -============================================================

// function saveObjectPropertiesToLocalStorage(object) {
//   for (let [key, value] of Object.entries(object)) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
//   let retrievedObject = {};
//   for (let key in object) {
//     retrievedObject[key] = JSON.parse(localStorage.getItem(key));
//   }
//   let paragraph = document.createElement("p");
//   document.body.appendChild(paragraph);
//   return retrievedObject;
// }
// let myObject = {
//   name: "Muhammad Numair Qureshi",
//   age: 30,
//   city: "Karachi, Pakistan"
// };

// let retrievedObject = saveObjectPropertiesToLocalStorage(myObject);
// console.log(retrievedObject);