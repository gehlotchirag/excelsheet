(function() {
    var excelService = function($http) {
    
        var factory = {};
        
        factory.getexcel = function() {
            return $http.get('https://api.myjson.com/bins/j0hl9');
        };
        
        return factory;
    };
    
    excelService.$inject = ['$http'];
        
    angular.module('excelApp').factory('excelService', 
                                           excelService);
                                           
}());