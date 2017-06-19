export const dataService = function ($log,$http, $q) {
	$log.log('Inside Service Data calling');
	var myService = {
		async: function() {
			var promise = $http.get('./test01/data.json')
			.then(function (response) {
              return response.data;
            });
			return promise;
		}
	};
	return myService;
};