function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function sliderChange(x,y){
	document.getElementById(y).value=x;
	
}
function inputChange(x,y){
	document.getElementById(y).value=x;
}