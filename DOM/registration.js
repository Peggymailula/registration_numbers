 var inputText= document.querySelector(".inputText");
// // var addBtn = document.querySelector(".addBTn");
//  var numberPlate= document.querySelector(".plate");



 function clearInput(){
    inputText.value="";
}


  function addItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
    clearInput();
}





  //http://kazytv.com/source_codes/js_addremove_items_dy.html