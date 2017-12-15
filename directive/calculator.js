myApp.directive('calculator', function() {
    var dir = {};
        dir.restrict   = 'E'; /* restrict this directive to elements */
        dir.controller = 'CalcuController'; /* controller this directive function belongs */
        dir.templateUrl = 'calculator.html'; 
    return dir;
});

