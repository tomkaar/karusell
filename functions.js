var left = document.getElementById("left");
var right = document.getElementById("right");
var carousel = document.getElementById("carousel");

left.onclick = function(){
	carousel.style.transform = "rotateY(40deg)"; 
}