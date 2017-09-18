window.onload = function() {
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var carousel = document.getElementById("carousel");

	var currentSpin = 0;

	var a1 = document.getElementsByClassName("a1");
	var a2 = document.getElementsByClassName("a2");
	var a3 = document.getElementsByClassName("a3");
	var a4 = document.getElementsByClassName("a4");
	var a5 = document.getElementsByClassName("a5");
	var a6 = document.getElementsByClassName("a6");
	var a7 = document.getElementsByClassName("a7");
	var a8 = document.getElementsByClassName("a8");
	var a9 = document.getElementsByClassName("a9");

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

	switch(currentSpin) {
		case 0:
			a1.style.transform = "scale(1.2)";
			break;
	}
} // end onload