// Camel Case addTwoNumbers

// snake case add_two_numbers

// const thirdNumber = 5;

// function addTwoNumbers(firstNumber, secondNumber) {
//   console.log(thirdNumber);
//   console.log(firstNumber + secondNumber);
// }

// addTwoNumbers(5, 5);
// addTwoNumbers(9, 4);

// create a function to find the area of a triangle where only base and height are given
// function areaOfTraiagle(base, height) {
//   console.log((base / 2) * height);
// }
// areaOfTraiagle(7, 8);

//console.log(1 + 1);

//console.log("John" + " " + "Adam");
// function name("firstname", "secondname"){
//     console.log("firstname" + "secondname")
// }
// console.log("john" + "onos")

// function fullName(firstName, lastName) {
//   console.log("Hello" + " " + firstName + " " + lastName);
// }

// fullName("John", "Doe");

// function fourNumber(one, two, three, four) {
//   return one + two + three + four;
// }

// const total = fourNumber(4, 5, 3, 2);

//const myFavouriteNumbers = ["John", "Mark", "Paul"];

//console.log(myFavouriteNumbers[1]);
// function addFourNumbersFromArray(arr) {
//   return arr[0] + arr[1] + arr[2] + arr[3];
// }

// const total = addFourNumbersFromArray([1, 2, 3, 4]);

// console.log(total);

// function fullNameBar(arry) {
//   return arry[0] + arry[1] + arry[2];
// }
// const total = fullNameBar(["john", "james", "jerry"]);
// console.log(total);

// const numbers = ["a", "b", "c", 4];

// console.log(numbers);

// const alertValue = alert("Your deposit was succesful");

// console.log(alertValue);

// const confirmValue = confirm("Are you sure");
// console.log(confirmValue);

// const numbers = [1, 2, 3, 4];

// console.log(numbers[0]);

// numbers[0] = 100;

// console.log(numbers[0]);

// const users = [];

// const person = {
//   name: "John",
//   age: 24,
//   complesion: "dark",
//   isAdmin: true,
// };

// console.log(person);

// person.name = "Okoro";
// person.age = 50;

// console.log(person);

// DOM MANIPULATION

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const currEle = document.getElementById("number");
  currEle.textContent = +currEle.textContent + 1;
});

const person = {
  name: "john",
  age: 25,
  greet() {
    console.log("Good Morning");
  },
  talk: function () {
    console.log("My name is ", this.name);
  },
  run: () => {
    console.log("");
  },
};

person.greet();
person.talk();
