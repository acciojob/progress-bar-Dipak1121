let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);
prev.disabled = true;
prev.classList.add("disable");
let ind = 1;
document.getElementById(`circle-${ind}`).classList.add("active");
function onNextClick() {
	if(ind >= 5){
		return;
	}
	else if(prev.classList.contains("disable")){
		prev.classList.remove("disable");
		prev.disabled = false;
	}
	let line = document.getElementById(`line${ind}`);
	line.classList.toggle("active");
	ind++;
	let circle = document.getElementById(`circle-${ind}`);
	circle.classList.toggle("active");
	if(ind == 5){
		next.classList.add("disable");
		next.disabled = true;
	}
}

function onPrevClick() {
	if(ind == 1 ){
		return;
	}
	else if(next.classList.contains("disable")){
		next.classList.remove("disable");
		next.disabled = false;
	}
	let circle = document.getElementById(`circle-${ind}`);
	circle.classList.toggle("active");
	ind--;
	let line = document.getElementById(`line${ind}`);
	line.classList.toggle("active");
	if ( ind == 1 ){
		prev.classList.add("disable");
		prev.disabled = true;
	}
}