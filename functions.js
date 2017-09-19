var left = document.getElementById("left");
var right = document.getElementById("right");
var carousel = document.getElementById("carousel");
var spinDeg = 0;
var curIndex = 0;

var defaultTranslateZ = 392;
var zoomTranslateZ = 592;

currentIndex(0);

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
	    spinRight();
	}
	else if (e.keyCode == '40') {
	    spinLeft();
	}
	else if (e.keyCode == '37') {
	    spinLeft();
	}
	else if (e.keyCode == '39') {
	    spinRight();
	}
}

// Called Spin Fuctions
function spinLeft(){
	spinDeg += 40;
	carousel.style.transform = "rotateY("+ spinDeg +"deg)"; 
	removeIndex();
}
function spinRight(){
	spinDeg -= 40;
	carousel.style.transform = "rotateY("+ spinDeg +"deg)"; 
	addIndex();
}

// currentIndex
function addIndex(){
	curIndex += 1;
	currentIndex(curIndex);
}
function removeIndex(){
	curIndex -= 1;
	currentIndex(curIndex);
}
function currentIndex(cIndex){
	if (cIndex > 8) {
		curIndex = 0;
	} else if( cIndex < 0){
		curIndex = 8;
	} else{
		curIndex = cIndex;
	}
	
	shrink();
	grow(curIndex);
}

// Shrink Box
function shrink(){
	for(i = 0; i < 9; i++) { 
		var thisElement = document.getElementById("a"+ i);
		thisElement.style.transform = "rotateY("+ i * 40 +"deg) translateZ("+ defaultTranslateZ +"px)"; 
	}
}
// Grow box
function grow(index){
	var thisElement = document.getElementById("a"+ index);
	thisElement.style.transform = "rotateY("+ index * 40 +"deg) translateZ("+ zoomTranslateZ +"px)"; 
}
