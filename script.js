let li2= document.querySelector("hero");
let mylist = document.querySelector(".list");
let mycontainer = document.querySelector(".container");

let newElem=document.createElement("li");
let text="this is demo text 5";
newElem.innerText = text;
mylist.appendChild(newElem);

let newElem2=document.createElement("li");
let text2="this is demo text 6";
newElem2.innerText = text2;
mylist.appendChild(newElem2);

let newElem3=document.createElement("li");
let text3="this is demo text 0";
newElem3.textContent = text3;

mylist.insertBefore(newElem3, mylist.firstElementChild);

let newElem4=document.createElement("li");
let text4="this is demo text 2.5";
newElem4.innerText = text4;
mylist.insertBefore(newElem4,li2.nextElementSibling);

let items=mylist.children;
let newElem5=document.createElement("li");
let text5="this is demo text 4,5";
newElem5.textContent = text5;

//--------------------------------

let p1=document.createElement("p");
let p2=document.createElement("p");
let p3=document.createElement("p");
let p4=document.createElement("p");
p1.textContent="this a p1";
p2.textContent="this a p2";
p3.textContent="this a p3";
p4.textContent="this a p4";

mylist.append(p1);
mylist.prepend(p2);
mylist.before(p3);
mylist.after(p4);

