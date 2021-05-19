var inputText = document.querySelector(".inputText");
// // var addBtn = document.querySelector(".addBTn");
var message= document.getElementById('message');
var town=document.querySelector(".radio");
var display= document.querySelector(".display");
var radioo = document.querySelector(".radio")

var ul = document.getElementById("dynamic-list");
var candidate = document.getElementById("candidate");
var uls = document.getElementById("showMe");


var regList = [];
var regPlate= regNumbers();




 if (localStorage.getItem('registration')==null) {

   localStorage.setItem('registration','[]');

 }

// myPlate.setRegNumber(regList)

regList = JSON.parse(localStorage.getItem('registration'));
regList.push(inputText.value);

// function show(){
//   if(localStorage.getItem('registration') != null){
//     list.innerText = regPlate.getRegNumber();
//   }
// }
function clearInput() {
  inputText.value = ""; // Clears the text field after "add" button is pressed
}

function uncheck(){
  checkedRadioBtn == null;
}


function addItem() {


  if(inputText.value == "" || inputText.value == null){
    message.classList.add('red');
    var t3 = setTimeout(function () { message.innerText= "Please enter a valid registration number";}, 0);
    
    var t2 =  setTimeout(function () {  message.innerText= ""; }, 3000) ;
 }

 

  if (inputText.value != "") {
 
  
    var list = document.createElement("li"); // variable used to make my variables a list
    regPlate.setRegNumber(inputText.value);
    regList.push(inputText.value); // pushes all reg plates into array
    localStorage.setItem('registration', JSON.stringify(regList));
    
    list.innerText = regPlate.getRegNumber(); //displays all reg plates after "add button" is called

    ul.appendChild(list); // appends my list to the UL 
  
    clearInput();
     //Clears the text field
    
  }
  else {
    
    return false; // Function will not work if text field does not have a value
  }
}



var uls = document.getElementById("showMe"); //variable to link to my unordered list section


function showTown(){
  // if(checkedRadioBtn==null){
  //   message.classList.add('red');
  //   var t1 = setTimeout(function () { message.innerText= "Please choose your city of choice";}, 0);
    
  //   var t4 =  setTimeout(function () {  message.innerText= ""; }, 3000) ;
   
  // }
  var checkedRadioBtn = document.querySelector("input[name='town']:checked");
  if (checkedRadioBtn){
      var towns = checkedRadioBtn.value; // the value of the checked radio button
     
  }
 // var towning = document.createElement("li");
 // var towning = document.createElement("li");
   for(var i=0;i<regList.length;i++){
 
     if(towns ==='Cape Town' && regList[i].startsWith('CA')){
      var towning = document.createElement("li");
      var Cape=document.createTextNode(regList[i]);
    //towning.innerText=(regList[i]);
    towning.appendChild(Cape);
      uls.appendChild(towning);
      console.log(towning);
      
    }

    
    if(towns ==='Bellville' && regList[i].startsWith('CY')){
       towning = document.createElement("li");
      Cape=document.createTextNode(regList[i]);
    //towning.innerText=(regList[i]);
    towning.appendChild(Cape);
      uls.appendChild(towning);
      console.log(towning);
      
    }

    if(towns ==='Stellenbosch' && regList[i].startsWith('CL')){
       towning = document.createElement("li");
       Cape=document.createTextNode(regList[i]);
    //towning.innerText=(regList[i]);
    towning.appendChild(Cape);
      uls.appendChild(towning);
      console.log(towning);
      
    }}

    checkedRadioBtn.checked=false;


    }


    // if(localStorage.getItem('registration') != null){
    //   document.getElementById("dynamic-list").innerHTML=JSON.parse(localStorage.getItem('registration'));
    // }

    function resetData(){
     message.classList.remove('red');
     message.classList.add('green');
     var t5 = setTimeout(function () { message.innerText= "Program has been reset succesfully";}, 0);
    
     var t6 =  setTimeout(function () {  message.innerText= ""; }, 3000) ;
      
     localStorage.clear();
    location.reload();

    }