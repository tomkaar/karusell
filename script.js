window.onload = function() {
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var carousel = document.getElementById("carousel");

	var currentSpin = 0;

	var currentBox = 1;

	var a1 = document.getElementById("a1");
	var a2 = document.getElementById("a2");
	var a3 = document.getElementById("a3");
	var a4 = document.getElementById("a4");
	var a5 = document.getElementById("a5");
	var a6 = document.getElementById("a6");
	var a7 = document.getElementById("a7");
	var a8 = document.getElementById("a8");
	var a9 = document.getElementById("a9");

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

	function boxGrow{
		switch(currentBox) {
			case 1:
				a1.style.transform = 
		}
	}

} // end onload