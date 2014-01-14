var foods = ["apple", "banana", "coconut", "donuts", "eggs", "franks", "grapes"];
var nameValue = document.getElementById('name').value;
var priceValue = document.getElementById('price').value;
var categoryValue = document.getElementById('category').value;
function Grocery(){

}


function addItem(){
	if(itemHasName() && itemHasPrice() && itemHasCategory()){
		addToList();	
	}
	else {
		alert('incomplete!!!');
	}
}

function itemHasName(){
	
	return nameValue != "";
}
function itemHasPrice(){

	return priceValue!="";
}
function itemHasCategory(){
	
	return categoryValue!="";
}
function addToList(){
	var template = document.createElement('ul');
	


}

// When submit button is clicked, verify that the item has a name, a price, and a category. If so, add to list.
