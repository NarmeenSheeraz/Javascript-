// Question 1

// i
var mainContent = document.getElementById("main-content");
console.log(mainContent);


// ii
var childElements = mainContent.children;

for (var i = 0; i < childElements.length; i++) {
    console.log(childElements[i]);
}


// iii
var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}


// iv 
document.getElementById("first-name").value = "Alex";


// v
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";



// Question 2

// i
var formContent = document.getElementById("form-content");
console.log("Node Type of form-content:", formContent.nodeType);


// ii
var lastName = document.getElementById("lastName");

console.log("Node Type of lastName:", lastName.nodeType);
console.log("Node Type of child node:", lastName.childNodes[0].nodeType);


// iii
lastName.childNodes[0].nodeValue = "Last Name: Doe";


// iv
console.log("First Child:", mainContent.firstElementChild);
console.log("Last Child:", mainContent.lastElementChild);


// v 
console.log("Next Sibling:", lastName.nextElementSibling);
console.log("Previous Sibling:", lastName.previousElementSibling);


// vi
var email = document.getElementById("email");

console.log("Parent Node:", email.parentNode);
console.log("Node Type:", email.nodeType);