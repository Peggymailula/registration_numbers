function regNumbers(){

    var regList=[];
    var forCapeTown=[];
    var forStellenbosch=[];
    var forBellville=[];
    var validated=[];
   
    pattern1=/[A-Z]{2}   [0-9]{3,8}/;
    pattern2=/[A-Z]{3}   [0-9]{3,8}/;
    pattern3=/[A-Z]{2}   [0-9]{3}-[0-9]{3}/;

    var registrations = []
   
    
    function setRegNumber(reg){
        
        registrations = reg;
        registrations= registrations.match(pattern2) || registrations.match(pattern3) || registrations.match(pattern1)
    }
    
    function getRegNumber(){

        return  registrations ;
    }
    
 
    

    function setTown(){


        for(var i=0;i<registrations.length;i++){
     if(town ==='Cape Town' && registrations[i].startsWith('CA')){
         return registrations[i];}

         if(town ==='Bellville' && registrations[i].startsWith('CY')){
            return registrations[i];}

            if(town ==='Stellenbosch' && registrations[i].startsWith('CL')){
                return registrations[i];}
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
