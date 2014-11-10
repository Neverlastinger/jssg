function setLevel() {
	
	var level = levels[0];
	
	level.forEach(function(line, lineCount) {
		line.split('').forEach(function(symbol, symbolCount) {
			stage.set(symbol, lineCount, symbolCount);
		});
	});
	
}

setLevel();

window.onload = gameloop;

function gameloop() {
	
	player.draw();
	requestAnimationFrame(gameloop);
};