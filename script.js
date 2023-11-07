let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);

let ind = 1;
document.getElementById(`circle${ind}`).classList.add("active");
function onNextClick() {
	if(ind >= 5){
		return;
	}
	else if(prev.classList.contains("disable")){
		prev.classList.remove("disable");
	}
	let line = document.getElementById(`line${ind}`);
	line.classList.toggle("active");
	ind++;
	let circle = document.getElementById(`circle${ind}`);
	circle.classList.toggle("active");
	if(ind == 5){
		next.classList.add("disable");
	}
}

function onPrevClick() {
	if(ind == 1 ){
		return;
	}
	else if(next.classList.contains("disable")){
		next.classList.remove("disable");
		
	}
	let circle = document.getElementById(`circle${ind}`);
	circle.classList.toggle("active");
	ind--;
	let line = document.getElementById(`line${ind}`);
	line.classList.toggle("active");
	if ( ind == 1 ){
		prev.classList.add("disable");
	}
}