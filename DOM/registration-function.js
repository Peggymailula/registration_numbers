function regNumbers(){

    var regList={};
    var forCapeTown={};
    var forStellenbosch={};
    var forBellville={};
    
    function setRegNumber(reg){
        regList=reg;


    }

    function getRegNumber(){
        return regList;

    }

    function setTown(regList){
        for(var i=0;i>regList.length;i++){
 
        if(myList[i].startsWith('CA')){
            forCapeTown.push(myList[i]);
        }

       else if(myList[i].startsWith('CY')){
            forBellville.push(myList[i]);
        }

        else if(myList[i].startsWith('Cl')){
            forStellenbosch.push(myList[i]);
        }
    }
    }

    function getTown(value){
        if(value=='Cape Town'){
            return forCapeTown;
        }
        else if (value== 'Stellenbosch'){
            return forStellenbosch;
        }
        else if (value == 'Bellville')
        {
            return forBellville
        }
    }
    function CapeTown(){
        return forCapeTown;
    }

    function Stellenbosch(){
        return forStellenbosch;
    }

    function Bellville(){
        return forBellville;
    }

    return {
        setRegNumber,
        getRegNumber,
        setTown,
        getTown,
        CapeTown,
        Stellenbosch,
        Bellville

    }
}