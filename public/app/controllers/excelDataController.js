(function() {
    var ExcelController = function ($scope, $log, excelFactory) {
      var multiSelectTemp = [];
    /** Rendring Notes **/
     $scope.getText = function(){
       if (localStorage.getItem('excel-content'))
       $scope.textData = JSON.parse(localStorage.getItem('excel-content'));
       else
           excelFactory.getexcel()
            .then(function(response) {
                $scope.textData = response.data;
            }, function(data, status, headers, config) {
                $log.log(data.error + ' ' + status);
            });
     };

     /** Save Excel Data **/
     $scope.saveText = function() {
       console.log($scope.textData);
       //saving data to localstorage
        localStorage.setItem('excel-content' , JSON.stringify($scope.textData));
      };

     /** Save Excel Data **/
     $scope.multiSelect = function(elementId) {
        multiSelectTemp.push
       console.log(elementId);
      };

     /** Disable Multiselect **/
     $scope.disableMultiSelect = function(elementId) {
        multiSelectTemp = [];
       console.log(elementId);
      };

    /** Add New Column **/
     $scope.addCoulum = function() {
        var newCoulum =   {"colName": "G",
    "data": [{"value": "", "rowPosition": "G1"},{"value": "","rowPosition": "G2"},
      {"value": "","rowPosition": "G3"},{"value": "","rowPosition": "G4"},
      {"value": "","rowPosition": "G5"}]}
        $scope.textData.push(newCoulum);
       console.log($scope.textData);
     };

     /** Initialize Application **/
     $scope.InitializeAPP = function() {
       /** Get Excel Data **/
        $scope.textData = [];
        $scope.getText();
     };

     /** call Initialize **/
     $scope.InitializeAPP();
    };

    ExcelController.$inject = ['$scope', '$log', 'excelService'];

    angular.module('excelApp')
      .controller('ExcelController', ExcelController);

}());
