
var name = prompt("Enter your name:");
document.write("Hello " + name + "! Welcome 😊");




var num = prompt("Enter a number for table:");

if (num === "" || num === null) {
    num = 5;
}

document.write("<h2>Table of " + num + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}


var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

var totalMarks = 100;

var marks1 = +prompt("Enter marks for " + sub1);
var marks2 = +prompt("Enter marks for " + sub2);
var marks3 = +prompt("Enter marks for " + sub3);


var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

var totalMarks = 100;

var marks1 = +prompt("Enter marks for " + sub1);
var marks2 = +prompt("Enter marks for " + sub2);
var marks3 = +prompt("Enter marks for " + sub3);

document.write("<h2>Result</h2>");
document.write(sub1 + ": " + marks1 + "/100<br>");
document.write(sub2 + ": " + marks2 + "/100<br>");
document.write(sub3 + ": " + marks3 + "/100<br>");

var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / 300) * 100;

document.write("<br>Total Marks: 300");
document.write("<br>Marks Obtained: " + totalObtained);
document.write("<br>Percentage: " + percentage + "%");

