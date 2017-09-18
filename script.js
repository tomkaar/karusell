window.onload = function() {
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var carousel = document.getElementById("carousel");

	var currentSpin = 0;

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
		spinCheck();
		carousel.style.transform = "rotateY("+currentSpin+"deg)";
	}

	function spinRight() {
		currentSpin += 40;		
		spinCheck();
		carousel.style.transform = "rotateY("+currentSpin+"deg)";
	}

	function spinCheck() {
		switch(currentSpin) {
			case 0:
				if (currentSpin == 0) {
					console.log(currentSpin);
					a1.style.transform = "rotateY(0deg) translateZ(392px) scale(1.3)";
				}
				else {
					a1.style.transform = "rotateY(0deg) translateZ(392px) scale(1)";
				}	
				break;
			case 40:
				if (currentSpin == 40) {
					console.log(currentSpin);
					a2.style.transform = "rotateY(40deg) translateZ(392px) scale(1.3)";
				}
				else {
					a2.style.transform = "rotateY(40deg) translateZ(392px) scale(1)";
				}	
				break;
			case 80:
				if (currentSpin == 80) {
					console.log(currentSpin);
					a3.style.transform = "rotateY(80deg) translateZ(392px) scale(1.3)";
				}
				else {
					a3.style.transform = "rotateY(80deg) translateZ(392px) scale(1)";
				}	
				break;
			case 120:
				if (currentSpin == 120) {
					console.log(currentSpin);
					a4.style.transform = "rotateY(120deg) translateZ(392px) scale(1.3)";
				}
				else {
					a4.style.transform = "rotateY(120deg) translateZ(392px) scale(1)";
				}	
				break;
			case 160:
				if (currentSpin == 160) {
					console.log(currentSpin);
					a5.style.transform = "rotateY(160deg) translateZ(392px) scale(1.3)";
				}
				else {
					a5.style.transform = "rotateY(160deg) translateZ(392px) scale(1)";
				}	
				break;
			case 200:
				if (currentSpin == 200) {
					console.log(currentSpin);
					a6.style.transform = "rotateY(200deg) translateZ(392px) scale(1.3)";
				}
				else {
					a6.style.transform = "rotateY(200deg) translateZ(392px) scale(1)";
				}	
				break;
			case 240:
				if (currentSpin == 240) {
					console.log(currentSpin);
					a7.style.transform = "rotateY(240deg) translateZ(392px) scale(1.3)";
				}
				else {
					a7.style.transform = "rotateY(240deg) translateZ(392px) scale(1)";
				}	
				break;
			case 280:
				if (currentSpin == 280) {
					console.log(currentSpin);
					a8.style.transform = "rotateY(280deg) translateZ(392px) scale(1.3)";
				}
				else {
					a8.style.transform = "rotateY(280deg) translateZ(392px) scale(1)";
				}	
				break;
			case 320:
				if (currentSpin == 320) {
					console.log(currentSpin);
					a1.style.transform = "rotateY(320deg) translateZ(392px) scale(1.3)";
				}
				else {
					a1.style.transform = "rotateY(320deg) translateZ(392px) scale(1)";
				}	
				break;
			default:
				console.log("wat?");
		}	
	}
} // end onload