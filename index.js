var modal = document.getElementById('the-modal');
var btn = document.getElementById("submit");
var exit = document.getElementById("exit");

function modalDelay() {
	modal.style.display = "block"
}

setTimeout(function() { 
	modalDelay(); 
}, 3000);

btn.addEventListener('click', function(){
		modal.style.display = "none"
});

exit.addEventListener('click', function(){
		modal.style.display = "none"
});
