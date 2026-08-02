// use of totoLocaleDateString(undefined, options);
let a;
let date;
let time;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  // second: "2-digit",
};
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  time =
    String(a.getHours()).padStart(2, "0") +
    ":" +
    String(a.getMinutes()).padStart(2, "0") +
    ":" +
    String(a.getSeconds()).padStart(2, "0");
  // time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  // ":" +
  // a.getMilliseconds();
  document.getElementById("time").innerHTML = time + " on date " + date;
}, 1000);

// // use of totoLocaleString(undefined, options);
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
// };
// setInterval(() => {
//   a = new Date();
//   document.getElementById("time").innerHTML = a.toLocaleString(
//     undefined,
//     options,
//   );
// }, 1000);
