var Brick = function(parts) {
	
	this.name = 'Brick';
	
	var brickletts = [
		    [1, 1, 1, 1],
		    [1, 1, 1, 1],
		    [1, 1, 1, 1],
		    [1, 1, 1, 1]
	    ];
	
	if (!parts) {
		return;
	}
	
	for (var x = 0; x <= 1; x++) {
		for (var y = 0; y <= 1; y++) {
			if (parts[x][y] == 0) {
				brickletts[x * 2][y * 2] = 0;
				brickletts[x * 2][y * 2 + 1] = 0;
				brickletts[x * 2 + 1][y * 2] = 0;
				brickletts[x * 2 + 1][y * 2 + 1] = 0;
			}
		}
	}
};
