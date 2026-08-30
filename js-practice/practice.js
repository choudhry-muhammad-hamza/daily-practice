// document.write("hello hamza! how are you?");

// document.write("hello hamza! 2nd time how are you?");

// document.getElementsByTagName("h1")[0].innerHTML = "inner text changed";

// document.getElementsByTagName("h1")[0].style.background = "red";

// document.getElementsByTagName("h1")[0].style.visibility = "hidden";

// document.getElementsByTagName("h1")[0].style.display = "none";

// console.warn("this is a warning.");

// console.error("this is error.");

// console.clear();

// var num1 = 34;

// var num2 = 76.3435;

// console.log(num1 + num2);

// var str1 = "this is a string data type";

// var str2 = "this is also a string data type";
// console.log(num1, num2, str1, str2);

// function avg(a, b) {
//   let c = (a + b) / 2;
//   return c;
// }
// let c1 = avg(4, 6);
// let c2 = avg(4, 6);
// console.log(c1, c2);
// console.log(c1 == c2);
// console.log(c1 === c2);

// console.log(abc);
// var abc = 10;

// const fruits = ["apple", "banana", "cherry"];

// for (let index in fruits) {
//   console.log(index);
//   console.log(fruits[index]);
// }

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// let c = document.getElementsByClassName("container");
// console.log(c);
// c[0].style.background = "purple";
// window.addEventListener("scroll", function () {
//   console.log("Scroll kiya!");
// });

// const btn = document.getElementById("counterBtn");
// let count = 0;
// btn.addEventListener("click", function () {
//   count++;
//   btn.textContent = `Click Me: ${count}`;
//   console.log("button is clicked.");
// });
// btn.addEventListener("mouseover", function () {
//   console.log("you are in the button");
//   this.style.transform = "scale(0.95)";
// });
// btn.addEventListener("mouseout", function () {
//   console.log("you are out from the button");
//   this.style.transform = "scale(0.95)";
// });
// btn.addEventListener("mousedown", function () {
//   console.log("mousedown");
//   this.style.transform = "scale(0.95)";
// });
// btn.addEventListener("mouseup", function () {
//   console.log("mouseup");
//   this.style.transform = "scale(0.95)";
// });

// setTime = () => {
//   console.log("3 seconds completed");
//   document.querySelectorAll(".container")[0].innerHTML =
//     "<b>completed 3 seconds</b>";
// };
// let t = setTimeout(setTime, 3000);
// let i = setInterval(setTime, 3000);
// clearTimeout(t);
// clearInterval(i);

// // javaScript localStorage
// localStorage.setItem("Name", "Hamza");
// localStorage;
// console.log(localStorage.getItem("Name"));
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");
// localStorage.clear();

// // json
// let obj = { name: "Hamza", length: 1, a: { age: "twentyfive" } };
// // convert object to string
// console.log(obj, typeof obj);
// let json = JSON.stringify(obj);
// console.log(json, typeof json);
// // convert string to object
// let parsed = JSON.parse(
//   `{ "name": "Hamza", "length": 1, "a": { "age": "twentyfive" } }`,
// );
// console.log(parsed, typeof parsed);

Event Bubbling and stopping propagation
document.getElementById("grandparent").addEventListener("click", function () {
  console.log("Grandparent clicked!");
});
document.getElementById("parent").addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Parent clicked!");
});
document.getElementById("child").addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Child clicked!");
});
