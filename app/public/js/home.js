var matchInfo = document.querySelector('.middle');

var sidebarCont = document.querySelector('.a');
var gameBar = sidebarCont.querySelector('.c');
gameBar.querySelector('.date').innerHTML = Games[0].date;
//gameBar.querySelector('.game').innerHTML = Games[0].p1name + " - " + Games[0].p2name;
gameBar.id = "gameBar-0";


function gamesList(){
	clone(Games[0], 0);
	Games.forEach(function(elem, i){
		if(i != 0){
			clone(elem, i);
		}else
			return;
	})
	sidebarCont.removeChild(sidebarCont.childNodes[1]);    
}

function clone(elem, i){
	var clone = gameBar.cloneNode(true);
	clone.querySelector('.date').innerHTML = elem.date;

	var gamesArr = elem.gamesArr;
	var b_game_ul = clone.querySelector('.b');
	var b_game = b_game_ul.querySelector('.game');

	b_game.innerHTML = gamesArr[0].p1name + " - " + gamesArr[0].p2name;
	b_game.id = "gameBar-"+i+"+0";

	for(var k = 1; k < gamesArr.length; k++){
		
		var b_game_clone = b_game.cloneNode(true);
		b_game_clone.innerHTML = gamesArr[k].p1name + " - " + gamesArr[k].p2name;
		b_game_clone.id = "gameBar-"+i+"+"+k;
		b_game_ul.appendChild(b_game_clone);
	}

	//clone.querySelector('.game').innerHTML = elem.p1name + " - " + elem.p2name;
	clone.id = "gameBar-"+i;
	sidebarCont.appendChild(clone);
}

function listeners(){
	for(var i = 0; i<Games.length; i++){
		var gameObj = Games[i];
		for(var k = 0; k<Games[i].gamesArr.length; k++){
			var x = document.getElementById("gameBar-"+i+"+"+k);
			x.addEventListener("click", function(e){
				var i_str = e.target.id;
				var i_idx = i_str.indexOf("-");

				var k_idx = i_str.indexOf("+");
				var k_ = i_str.substring(k_idx+1);
				var i_ = i_str.substring(i_idx+1, k_idx);
				var gamesArr = Games[i_].gamesArr[k_];

				matchInfo.querySelector('.date').innerHTML = Games[i_].date;
				matchInfo.querySelector('.player1-name').innerHTML = gamesArr.p1name;
				matchInfo.querySelector('.player2-name').innerHTML = gamesArr.p2name;

				var res1 = Flags.filter(flag => flag.name == gamesArr.p1name);
				var res2 = Flags.filter(flag => flag.name == gamesArr.p2name);

				matchInfo.querySelector('.player1-logo').src = res1[0].img;
				matchInfo.querySelector('.player2-logo').src = res2[0].img;
			});

		}
	}
}

gamesList();
listeners();

var placer = document.querySelector('.bets');

var positions = [];

document.getElementById('place1').addEventListener("click", function(e){
	var p1 = document.querySelector('.player1-name').innerHTML;
	var p2 = document.querySelector('.player2-name').innerHTML;
	addPosition("1", p1, p2);
});

document.getElementById('place2').addEventListener("click", function(e){
	var p1 = document.querySelector('.player1-name').innerHTML;
	var p2 = document.querySelector('.player2-name').innerHTML;
	addPosition("2", p1, p2);
});

document.getElementById('placeX').addEventListener("click", function(e){
	var p1 = document.querySelector('.player1-name').innerHTML;
	var p2 = document.querySelector('.player2-name').innerHTML;
	addPosition("X", p1, p2);
});

function addPosition(prediction, p1, p2) {
	if(positions.includes(p1) || positions.includes(p2)) {
		// Do nothing
	} else {
		console.log(p1);
		placer.querySelector('.betul').innerHTML += "<li>" + p1 + " vs " + p2 + " - " + prediction + "</li>";
		positions.push(p1);
	}
}