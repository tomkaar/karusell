window.onload = function() {
	var left = document.getElementsByClassName("left");
	var right = document.getElementsByClassName("right");
	var carousel = document.getElementsByClassName("carousel");

	var currentSpin = 0;

	left.onclick = function() {
		console.log("left");
		spinLeft();
	}

	right.onclick = function() {
		console.log("left");
		spinRight();
	}

	function spinLeft() {
		currentSpine -= 40;
		carousel.style.transform = "rotateY("+currentSpin+")";
	}

	function spinRight() {
		currentSpine += 40;
		carousel.style.transform = "rotateY("+currentSpin+")";
	}


} // end onload