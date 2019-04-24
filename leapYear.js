const leapYear = function(numper){
    if (typeof(numper)==='numper');{

            if(numper>= 0){


                if(numper%4===0){
                    if (numper%100===0){
                        if(numper%400===0){
                            return"true";

                        }
                        else {
                            return"false";
                        }
                        
                   
                    }

                    else{
                        return "true";
                    }
                }
                else{
                    return "false";
                }
               
            }

        else {
            return"should be numper";
        }
    }
}














const  leapYear = function(numper){
    if (typeof(numper)==='numper');{

            if(numper>= 0){

            

            if (numper%4===0 && numper%100===0 && numper%400===0){
                return"true";
            }else if(numper%4===0 && numper%100!==0){
                    return"true";
            }else {
                    return"fulse";
            }

        }
        else {
            return"should be a numper";
            }
    }


}



  