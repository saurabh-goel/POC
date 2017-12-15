myApp.factory('MathNumbers', function() {
    var factory = {};
    
    factory.calcnumbers = function() {
       var numbs =  [ 'c','->','/',
                      '7','8','9','+',
                      '4','5','6','-',
                      '1','2','3','*',
                      '0','.','='];
         
       return numbs;
    }
    return factory;
 }); 