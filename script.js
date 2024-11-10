 let mylist = document.querySelector(".list");
let Hero = document.querySelector("#hero");
let ul = document.querySelector(".itemList");

console.log(mylist);
console.log(Hero);

let li1 = Hero.previousElementSibling;
let li3 = Hero.nextElementSibling;

console.log(li1);
console.log(li3);

let fElem = mylist.firstElementChild.firstElementChild;
let lElem = mylist.firstElementChild.lastElementChild;

console.log(fElem);
console.log(lElem);

let items = ul.children;
console.log(item[0] , items[0]);
console.log(item[1] , items[1]);
console.log(item[2] , items[2]);
console.log(item[3] , items[3]);

let pElem = Hero.parentElement;
console.log(pElem);
