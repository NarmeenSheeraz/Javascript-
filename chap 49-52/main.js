var fname = document.getElementById("fname")
var faname = document.getElementById("faname")
var email = document.getElementById("email")
var pnum = document.getElementById("num")
var dateOb = document.getElementById("dob")

function yourForm(){
    // alert("Your form is sucssesfully submitted")
    // var formcontainer = document.getElementById('formcontainer')
    // formcontainer.style.width = "600px"
    // formcontainer.style.padding = "10px"

    if( fname.value === "" ||  faname.value === "" || email.value === "" || pnum.value === ""){
        alert("fill out the form")
    }else{
        alert("Your form is sucssesfully submitted")
    var formcontainer = document.getElementById('formcontainer')
    formcontainer.style.width = "600px"
    formcontainer.style.padding = "10px"
    
         formcontainer.innerHTML = `<h1>Name : ${fname.value}</h1> 
        <h1>Father Name : ${faname.value}</h1> 
        <h1>Email : ${email.value}</h1> 
        <h1>Phone Number : ${pnum.value}</h1> 
        <h1>Date of birth: ${dateOb.value}</h1> `

        
    }

   
}