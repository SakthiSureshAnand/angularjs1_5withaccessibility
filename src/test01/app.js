
export const test01 = {
    template: require('./app.html'),
    controller(dataService,$log,$scope,$translate) {
    	$scope.trnsLng = "French"
    	$scope.trns = false;
        var keyJson = [];
        var obj = {};
    	dataService.async().then(function(data){
    		$scope.dataJson = data;
            // Find the length of Json bcz we apply based on css style 
            $scope.lenOfJson = $scope.dataJson.length;
            // For data.json i customize it like key and value pair 
            angular.forEach($scope.dataJson, function(value, key) {
                $log.log(key + ': ' + value.text);
                var keyValue = key;
                obj[keyValue] = value.text;
            });
            keyJson.push(obj);   
            $log.log(angular.toJson(keyJson));
            $scope.items  = angular.copy(keyJson);
    	});
    	  
    	$scope.changeLang = function(langKey){
    		$scope.trns = !$scope.trns;
    		if($scope.trns){
    			$scope.trnsLng = "English"	
    		} else {
    			$scope.trnsLng = "French"
                  langKey = 'en'
    		}
    		  var data = $translate.use(langKey);
    	}
    }
};
