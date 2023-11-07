//your JS code here. If required.
let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);

let ind = 1;
function onNextClick() {
	if(ind >= 5){
		
		return;
	}
	let line = document.getElementById(`line${ind}`);
	line.classList.toggle("active");
	ind++;
	let circle = document.getElementById(`circle${ind}`);
	circle.classList.toggle("active");
}

function onPrevClick() {
	
}