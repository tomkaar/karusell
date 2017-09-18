window.onload = function() {
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var carousel = document.getElementById("carousel");

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
		currentSpin -= 40;
		carousel.style.transform = "rotateY("+currentSpin+"deg)";
	}

	function spinRight() {
		currentSpin += 40;
		carousel.style.transform = "rotateY("+currentSpin+"deg)";
	}


} // end onload