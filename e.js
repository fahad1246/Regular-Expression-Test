//Fahad Mohammed
// 03/10/21
// part e

function myFunction() {// creates a function 
    var str = "Q00-0000";//this declares the string variable
    var patt = /^[BQ]\d{2}-\d{4,6}$/g;// this is the given Regular Expression
    var result = patt.test(str);// this tests the function if its true or false
  
     
    document.getElementById("van").innerHTML = result + "<br>"  ;// this shows the result if the string was accepted in the given expression
  }
  function init () {//creates a function for the button
    var btn1 = document.getElementById("btn1");//declares the button variable
    btn1.addEventListener("click",myFunction );// waits for the button to be clicked to give  output of true or false
   }
   window.onload = init;// loads windows