window.onload = function() {
	stage.init();
	levelParser.generate();
	gameloop();
};

function gameloop() {
	
	player.draw();
	requestAnimationFrame(gameloop);
};

function _log(text, id) {
	
	var element = document.querySelector('#info #' + id);
	
	if (!element) {
		var element = document.createElement('p');
		element.id = id;
		document.querySelector('#info').appendChild(element);
	}
	
	element.innerHTML = text;
}