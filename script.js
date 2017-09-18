window.onload = function() {

	//Deklarera lite variabler
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var carousel = document.getElementById("carousel");

	var currentSpin = 0;

	var currentBox = 1;
	var multiplier = 1;

	//a ska bli våra rutor. Deklarerar en array.
	var a = [];

	//kör en liten loop som ger oss 9 arrayer i "a" variabeln. 9 eftersom vi börjar med 1 och inte 0.
	for (x = 1; x < 10; x++) {
		a[x] = document.getElementById("a"+x);
	}

	//trycker man högerpilen så skjuts rutorna åt vänster. Ser också till att inga värden hamnar "Out of bounds"
	left.onclick = function() {
		console.log("left");
		spinLeft();
		currentBox++;
		if (currentBox > 9) {
			currentBox = 1;
			multiplier++;
			if(multiplier == 0) {
				multiplier = 1;
			}
		}
		boxGrow();
	}

	//Trycker man vänsterpilen så skjuts rutorna åt höger. Samma som ovan funktion men spegelvänt.
	right.onclick = function() {
		console.log("left");
		spinRight();
		currentBox--;
		if (currentBox < 1) {
			currentBox = 9;
			multiplier--;
			if (multiplier == 0) {
				multiplier = -1;
			}
		}
		boxGrow();
	}

	//Funktionerna som vrider hela Carousel elementet.
	function spinLeft() {
		currentSpin -= 40;
		carousel.style.transform = "rotateY("+currentSpin+"deg)";
	}

	function spinRight() {
		currentSpin += 40;	
		carousel.style.transform = "rotateY("+currentSpin+"deg)";
	}

	//Funktionen förstorar den valda lådan men ska se till att förminska alla andra först.
	//Behövde tyvärr göra detta extra krångligt eftersom a1 ska ha rotateY på 0deg. 0 * vad som helst blir alltid 0...
	function boxGrow() {
		//Måste börja så här. 0 kan inte multipliceras md nåt.
		if (currentBox == 1) { 
			a[1].style.transform = "rotateY(0deg) translateZ(392px) scale(1.3)";
			for(i = 1; i < 9; i++) {
				a[(i+1)].style.transform = "rotateY("+ i * 40 + "deg) translateZ(392px) scale(1)";
			}
		}

		//vi vet redan att 1 inte berörs av detta.
		else { 
			a[1].style.transform = "rotateY(0deg) translateZ(392px) scale(1)";

			//Loopar igenom rutorna och ser till att de håller sig små.
			for(i = 1; i < 9; i++) { 
				a[(i+1)].style.transform = "rotateY("+ i * 40 + "deg) translateZ(392px) scale(1)";
			}

			//Den nuvarande lådan skall bli förstorad.
			a[currentBox].style.transform = "rotateY(" + (currentBox-1) * 40 + "deg) translateZ(392px) scale(1.3)"
		}
	}

} // end onload