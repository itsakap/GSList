var foods = ["apple", "banana", "coconut", "donuts", "eggs", "franks", "grapes"];



function addItem(){
	if(itemHasName() && itemHasPrice() && itemHasCategory()){
		addToList();	
	}
	else {
		alert('incomplete!!!');
	}
}

function itemHasName(){
	var nameValue = document.getElementById('name').value;
	return nameValue != "";
}
function itemHasPrice(){
	var priceValue = document.getElementById('price').value;
	return priceValue!="";
}
function itemHasCategory(){
	var categoryValue = document.getElementById('category').value;
	return categoryValue!="";
}
function addToList(){
	console.log('added');
}

// When submit button is clicked, verify that the item has a name, a price, and a category. If so, add to list.
