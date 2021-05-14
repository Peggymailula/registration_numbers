var inputText = document.querySelector(".inputText");
// // var addBtn = document.querySelector(".addBTn");
//  var numberPlate= document.querySelector(".plate");
town=document.querySelector(".radio");
display= document.querySelector(".display");
var radioo = document.querySelector(".radio")

var ul = document.getElementById("dynamic-list");
var candidate = document.getElementById("candidate");
var uls = document.getElementById("showMe");


var regList = [];
var forBellville=[];
var forStellenbosch=[];
var Cape;

// if (localStorage['registration']) {

//   regList = JSON.parse(localStorage.getItem('registration'));

// }
// var myPlate = regNumbers();
// myPlate.setRegNumber(regList)




function clearInput() {
  inputText.value = ""; // Clears the text field after "add" button is pressed
}

function uncheck(){
  checkedRadioBtn = document.querySelector("input[name='town']:checked").checked = false;
}


function addItem() {
  if (inputText.value != "") {
 
  
    var list = document.createElement("li"); // variable used to make my variables a list
    regList.push(inputText.value); // pushes all reg plates into array
    list.innerText = inputText.value; //displays all reg plates after "add button" is called

    ul.appendChild(list); // appends my list to the UL 
  
    clearInput(); //Clears the text field
    
  }
  else {
    return false; // Function will not work if text field does not have a value
  }
}
var uls = document.getElementById("showMe"); //variable to link to my unordered list section


function showTown(){
  var forCapeTown=[];

  var checkedRadioBtn = document.querySelector("input[name='town']:checked");
  if (checkedRadioBtn){
      var towns = checkedRadioBtn.value; // the value of the checked radio button
     
  }

   for(var i=0;i<regList.length;i++){
 
     if(regList[i].startsWith('CA')){
         forCapeTown.push(regList[i]); //pushes all reg plates from cpt to a seperate array
         
    }

     if(regList[i].startsWith('CY')){
        forBellville.push(regList[i]);//pushes all reg plates from Bellville to a seperate array
   }

     if(regList[i].startsWith('CL')){
        forStellenbosch.push(regList[i]);//pushes all reg plates from Stellenbosch to a seperate array
    }}

    var towning = document.createElement("li");


    if(towns ==='Cape Town'){
      for(var x=0; x<forCapeTown.length;x++){

         Cape= forCapeTown[x];
        
           //uls.appendChild(towning);      
      
     }

     towning.innerText= Cape;
     console.log(Cape);

         uls.appendChild(towning);
    }

      if(towns ==='Stellenbosch'){
      //     //towning.appendChild(forCapeTown);
          towning.innerHTML= forStellenbosch;
           uls.appendChild(towning);
         }

         if(towns ==='Bellville'){
          
              towning.innerHTML= forBellville;
          
               uls.appendChild(towning);
             }

             uncheck();
  

  // var showing = document.createElement("li");
  // showing.setAttribute('id', inputText.value);
  // myPlate.setRegNumber(inputText.value);
  // showing.innerText = myPlate.getRegNumber();
  // myPlate.getRegNumber();
  // myPlate.getTown(towns);
  // showing.appendChild(document.createTextNode(myPlate.setTown(inputText.value)));

  //myPlate.setTown(inputText.value);
    }


  
