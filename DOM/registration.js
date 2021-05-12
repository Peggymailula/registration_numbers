var inputText = document.querySelector(".inputText");
// // var addBtn = document.querySelector(".addBTn");
//  var numberPlate= document.querySelector(".plate");
town=document.querySelector(".radio");
display= document.querySelector(".display");

var ul = document.getElementById("dynamic-list");
var candidate = document.getElementById("candidate");


var regList = {};
var displayed

if (localStorage['registration']) {

  regList = JSON.parse(localStorage['registration']);

}
var myPlate = regNumbers();
myPlate.setRegNumber(regList)




function clearInput() {
  inputText.value = "";
}



function addItem() {
  if (inputText.value != "") {
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
   // myPlate.setRegNumber(candidate.value);
    localStorage.setItem('registration', JSON.stringify(myPlate.getRegNumber()));
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
    // ul.appendChild(li);
    //console.log(li.value);
    // ul.innerHTML= ul.appendChild(li);
    //localStorage.setItem('registration', JSON.stringify(myPlate.getRegNumber()));


    clearInput();
  }
  else {
    return false;
  }
}


function showTown(){
  myPlate.setTown(regList);
 myPlate.getTown(candidate.value);
 var lis = document.createElement("lis");
 lis.setAttribute('id', candidate.value);
 lis.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(lis);
  
  
  
}


