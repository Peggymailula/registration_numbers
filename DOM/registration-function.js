function regNumbers(){

    var regList=[];
    var forCapeTown=[];
    var forStellenbosch=[];
    var forBellville=[];
   
    
    function setRegNumber(reg){
        if(!regList[reg]){
        regList=reg;
        }

    }

    function getRegNumber(){
        return regList;

    }

    function setTown(regList){
        for(var i=0;i<regList.length;i++){
     if(town ==='Cape Town' && regList[i].startsWith('CA')){
         return regList[i];}

         if(town ==='Bellville' && regList[i].startsWith('CY')){
            return regList[i];}

            if(town ==='Stellenbosch' && regList[i].startsWith('CL')){
                return regList[i];}
    }
    }

    // function getTown(value){
    //     if(value=='Cape Town'){
    //         return forCapeTown;
    //     }
    //     else if (value== 'Stellenbosch'){
    //         return forStellenbosch;
    //     }
    //     else if (value == 'Bellville')
    //     {
    //         return forBellville
    //     }
    // }
    // function CapeTown(){
    //     return forCapeTown;
    // }

    // function Stellenbosch(){
    //     return forStellenbosch;
    // }

    // function Bellville(){
    //     return forBellville;
    // }

    return {
        setRegNumber,
        getRegNumber,
        setTown
       

    }
}