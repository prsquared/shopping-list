var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var div = createItemDiv();
	li.appendChild(div);
	var button = createDeleteButton();
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}
function createItemDiv(){
	var div = document.createElement("div");
	div.classList.add("item");
	div.appendChild(document.createTextNode(input.value));
	return div;
}
function createDeleteButton() {
	var button = document.createElement("input");
	button.type ="button";
	button.value = "X";
	button.classList.add("delete");
	return button;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.getElementById("list").addEventListener("click",function(event){
	if(event.target && event.target.classList.contains("item")) {
		event.target.classList.toggle("done");
	} else if(event.target && event.target.classList.contains("delete")){
		var litem = event.target.parentNode;
		litem.parentNode.removeChild(litem);
	}
});