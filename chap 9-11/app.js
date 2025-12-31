var cityQues = prompt("Enter your city name.");
if (cityQues == "karachi") {
  alert("Welcome to city of lights.");
}

var gender = prompt("What’s your gender?");
if (gender == "male") {
  alert("Good morning Sir!");
}
else if (gender == "female") {
  alert("Good morning Mam!");
}

let color = prompt("Enter traffic signal color").toLowerCase();

if (color === "red") {
  alert("Must Stop");
} else if (color === "yellow") {
  alert("Ready to move");
} else if (color === "green") {
  alert("Move now");
} else {
  alert("Invalid color");
}

let fuel = prompt("Enter remaining fuel in litres");
fuel = Number(fuel);

if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("Fuel level is sufficient");
}


let secretNumber = 7; // 1 se 10 ke beech koi bhi number
let guess = Number(prompt("Guess the secret number (1 to 10)"));

if (guess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Try again");
}


let num = Number(prompt("Enter a number"));

if (num % 3 === 0) {
  alert("The number is divisible by 3");
} else {
  alert("The number is not divisible by 3");
}


let number = Number(prompt("Enter a number"));

if (number % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}

var sub1 = +prompt("enter ur subject1 marks");
var sub2 = +prompt("enter ur subject2 marks");
var sub3 = +prompt("enter ur subject3 marks");
var totalMarks = 300;
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade, remarks;
if (percentage > 100) {
  percentage = "Invalid";
  grade = "Invalid";
  remarks = "enter ur percentage in 100s";
}
else if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
}
else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
}
else if (percentage >= 60) {
  grade = "B";
  remarks = "you need improvement!";
}
else if (percentage >= 50) {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h1>Grade Mark Sheet</h1>");
document.write("Total Marks" + totalMarks + "<br>");
document.write("Obtained Marks" + obtainedMarks + "<br>");
document.write("Percantage" + percentage + "<br>");
document.write("Grade" + grade + "<br>");
document.write("Remarks" + remarks + "<br>");



// Create a simple calculator using prompt() that takes two numbers and an operator (+, -, , /), and performs the correct operation
function myFunction10() {
  var vb1 = Number(prompt("Enter first number"));
  var vb2 = Number(prompt("Enter second number"));
  var operater = prompt("Enter operater +,-,/,*");
  var result;

  if (operater === "+") {
    result = vb1 + vb2;
  } else if (operater === "*") {
    result = vb1 * vb2;
  } else if (operater === "-") {
    result = vb1 - vb2;
  } else if (operater === "/") {
    result = vb1 / vb2;
  } else {
    result = "Invalid operater";
  }
  alert(result);
}