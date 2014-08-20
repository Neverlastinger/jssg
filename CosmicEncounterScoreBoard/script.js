var score = {};

games.forEach(function(game) {

	var playersCount = game.winners.length + game.losers.length;
	var winnersCount = game.winners.length;
	
	var points = playersCount / winnersCount;

	game.winners.forEach(function(winner) {
		
		if (!score[winner]) {
			score[winner] = {
				totalPoints: points,
				games: 1,
				ratio: points,
			}
		} else {
			score[winner].totalPoints += points
			score[winner].games += 1;
			score[winner].ratio = score[winner].totalPoints / score[winner].games;
		}
	});
	
	game.losers.forEach(function(loser) {
		
		if (!score[loser]) {
			score[loser] = {
				totalPoints: 0,
				games: 1,
				ratio: 0
			}
		} else {
			score[loser].games += 1;
			score[loser].ratio = score[loser].totalPoints / score[loser].games;
		}
	});

});
