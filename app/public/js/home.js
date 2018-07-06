var matchInfo = document.querySelector('.middle');



var sidebarCont = document.querySelector('.a');
var gameBar = sidebarCont.querySelector('.c');
gameBar.querySelector('.date').innerHTML = Games[0].date;
gameBar.querySelector('.game').innerHTML = Games[0].p1name + " - " + Games[0].p2name;
gameBar.id = "gameBar-0";


function listeners(){
	for(var i = 0; i<Games.length; i++){
		var x = document.getElementById("gameBar-"+i);
		x.addEventListener("click", function(e){
			var idstr = e.target.id;
			var ididx = idstr.indexOf("-");
			var id = idstr.substring(ididx+1);
			var gameObj = Games[id];
			matchInfo.querySelector('.date').innerHTML = gameObj.date;
			matchInfo.querySelector('.player1-name').innerHTML = gameObj.p1name;
			matchInfo.querySelector('.player2-name').innerHTML = gameObj.p2name;
			matchInfo.querySelector('.player1-logo').src = gameObj.img1;
			matchInfo.querySelector('.player2-logo').src = gameObj.img2;
		});
	}
}

function gamesList(){
	Games.forEach(function(elem, i){
		if(i != 0){
			var clone = gameBar.cloneNode(true);
			clone.querySelector('.date').innerHTML = elem.date;
			clone.querySelector('.game').innerHTML = elem.p1name + " - " + elem.p2name;
			clone.id = "gameBar-"+i;
			sidebarCont.appendChild(clone);
		}else
			return;
	})
}

gamesList();
listeners();

/*





var frinedsBar = document.querySelector('.friends-bar');
var friend = frinedsBar.querySelector('.friend');
friend.querySelector('.fr-bar-text').innerHTML = friends[0].name;
friend.querySelector('.fr-bar-avatar').src = friends[0].img;

function friendsList(data, x){
	data.forEach(function(elem, idx){
		if(idx == x) return;
		var clnNode = friend.cloneNode(true);
		clnNode.querySelector('.fr-bar-text').innerHTML = elem.name;
		clnNode.querySelector('.fr-bar-avatar').src = elem.img;
		frinedsBar.appendChild(clnNode);
	})
}*/