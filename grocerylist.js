function GroceryCtrl($scope){
	$scope.groceries = [];
	$scope.addItem = function(){
		if($scope.name != "" && $scope.price >= 0 && $scope.category != "")
	$scope.groceries.push({name: $scope.name, category: $scope.category, organic: $scope.organic, price: $scope.price});
	$scope.name = "";
	$scope.category = "";
	$scope.organic = false;
	$scope.price = 0;
	};
}
function addToList(){
	
	


}

// When submit button is clicked, verify that the item has a name, a price, and a category. If so, add to list.
