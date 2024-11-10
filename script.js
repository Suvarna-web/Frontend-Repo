// Ex.1
// console.log("Object: Player");

// let Player = {
//   name: "Prakash",
//   age: 25,
//   noOfMadels: 11,
//   level: "National",
// };

// console.log(Player);
// console.log(Player.name);
// console.log(Player.level);
// console.log(Player.age);
// Player.age = 30;
// ---------------------------------------
// method 1
let u1 = { name: "Prakash", age: 25 };
let u2 = { name: "Rakesh", age: 30 };
let u3 = { name: "Rajesh", age: 35 };

var users = [u1, u2, u3];

// // method 2
var user = [
  { name: "Prakash", age: 25 }, //0
  { name: "Rakesh", age: 30 }, //1
  { name: "Rajesh", age: 35 }, //2
  { name: "Ramesh", age: 65 },
  { name: "Ranjeet", age: 85 },
  { name: "jeet", age: 25 },
  { name: "Abhijeet", age: 51 },
  { name: "Sujeet", age: 35 }, //n-1
];
//n = user.lenght
// for (let i = 0; i < user.length; i++) {
//   console.log("User " + (i + 1) + " : " + user[i].name);
// }
// using for of loop:
for (let u of user) {
  console.log(u.name + "'s age : " + u.age);
}
// Ex.2 
// animal
// Ex.3
// Electronic_Devices
// Ex.4
// loctions
// Ex.5
// subject