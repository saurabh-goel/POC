myApp.controller('CalcuController',function docal($scope,MathNumbers){
  
     $scope.out     = '';
     $scope.result  = 0;

     
    //display function. click 
     $scope.display = function (number){
  
    	if($scope.out!='undefined' && number!='=' && number!='c' && number!='->'){
    		$scope.out = $scope.out+number;
    	}

     if($scope.calinput!=''){
      switch(number){

         case 'c':
            //Cancel /reset the display
            $scope.out = '';
            break;

         case '->':
           //Backspace operation 
           $scope.out =  $scope.out.slice(0, -1);
           break;

         case '=':
            //do calculation 
            if($scope.checksymbol($scope.out)){
            $scope.out = isFinite(eval($scope.out))? eval($scope.out).toString():'0';
              
           }
         break;

         default:
          break
         }
        }

    }

  /* 
    Check whether the string contains a restricted charater
    in first or last postion .
    @param strin number
  */
    $scope.checksymbol = function (number){
        
        var notallow = ['+','-','/','*','.',''] ;
         if(notallow.indexOf(number.slice(-1))> -1 || notallow.indexOf(number.slice(0,1))>-1){
           console.log('Operator should not present on first and last position' ) 
           return false;
         }
            return true;
       
    }

    //Set the keyboard values using the factory method.  
    $scope.mykeys = MathNumbers.calcnumbers();
   
});