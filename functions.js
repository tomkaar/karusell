var left = document.getElementById("left");
var right = document.getElementById("right");
var carousel = document.getElementById("carousel");
var spinDeg = 0;

// Left button click
left.onclick = function(){
	spinLeft();
}
// Right Button click
right.onclick = function(){
	spinRight();
}
// Arrow Keydown
document.onkeydown = checkKey;
	function checkKey(e) {
	e = e || window.event;
	if (e.keyCode == '38') {
	    console.log("Up");
	    spinZero();
	}
	else if (e.keyCode == '40') {
	    console.log("Down");
	    spinOneSixty();
	}
	else if (e.keyCode == '37') {
	    console.log("Left");
	    spinLeft();
	}
	else if (e.keyCode == '39') {
	    console.log("Right");
	    spinRight();
	}
}

// Called Spin Fuctions
function spinLeft(){
	spinDeg += 40;
	carousel.style.transform = "rotateY("+ spinDeg +"deg)"; 
}
function spinRight(){
	spinDeg -= 40;
	carousel.style.transform = "rotateY("+ spinDeg +"deg)"; 
}
function spinZero(){
	spinDeg = 0;
	carousel.style.transform = "rotateY("+ spinDeg +"deg)"; 
}
function spinOneSixty(){
	spinDeg = 160;
	carousel.style.transform = "rotateY("+ spinDeg +"deg)"; 
}