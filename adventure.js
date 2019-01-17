var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var img = document.getElementById('AchtergrondFoto');
var description = document.getElementById('description');
var title = document.getElementById('title');

var makeInventory = document.createElement("DIV");
var x = document.createElement("IMG");

var mes = false;
var PijlenBoog = false;
var zwaard = false;

function setText(but1, but2, but3) {
	if (but1 != null) {
		button1.style.display = 'inline';
		button1.innerHTML = but1;
	}else{
		button1.style.display = 'none';
	}
	if (but2 != null) {
		button2.style.display = 'inline';
		button2.innerHTML = but2;
	}else{
		button2.style.display = 'none';
	}
	if (but3 != null) {
		button3.style.display = 'inline';
		button3.innerHTML = but3;
	}else{
		button3.style.display = 'none';
	}
};
function begin() {
	title.innerHTML = 'A clicky way to heaven';
	description.innerHTML = 'Het is een point en click game, waarbij je een duister monster moet verslaan';
	setText('Play!', null, null);
	img.src = 'images/Start.png'
	btn1.onclick = StartGame;
}
begin();
function StartGame() {
	title.innerHTML = 'De misterieuze grot';
	description.innerHTML = 'Je hebt een grot ontdekt.';
	setText('Ga de grot in', 'Blijf buiten', null);
	img.src = 'images/StartGame.png';
	btn1.onclick = Cave;
	btn2.onclick = GameOver;
}
function Cave() {
	description.innerHTML = 'Ga je het avontuur aan?';
	img.src = 'images/Inganggrot.png';
	btn1.onclick = InCave;
	btn2.onclick = GameOver;
}
function GameOver() {
	title.innerHTML = 'GameOver';
	description.innerHTML = 'Je hebt een verkeerde keuze gemaakt, probeer het later opnieuw.';
	img.src = 'images/GameOver.png';
}
function InCave() {
	description.innerHTML = 'Zie ik daar een kist?!';
	setText('Ga toch weer naar buiten', 'Loop naar de kist', 'Raak een smaragd aan');
	img.src = 'images/Grot.png'
	btn1.onclick = GameOver;
	btn2.onclick = Kijkinkist;
	btn3.onclick = GameOver;
}
function Kijkinkist() {
	title.innerHTML = 'Maak een keuze';
	description.innerHTML = 'Welke denk jij dat de beste is?';
	setText('Mes', 'Pijl en boog', 'Zwaard')
	img.src = 'images/Kist.png'
	btn1.onclick = GetMes;
	btn2.onclick = GetPijlenBoog;
	btn3.onclick = GetZwaard;
}
function GetMes(){
	mes = true;
	if(mes){
		setText('Ga verder', null, null);
		img.src = 'images/kistzondermes.png';

		image = document.createElement("img");
		image.src = 'images/mes.png';
		image.setAttribute("id", "mes");

		description.appendChild(image);

		title.innerHTML = 'Ga verder';
		description.innerHTML = 'Youve got a mes.';

		btn1.onclick = Hangburg;
	}
};
function GetPijlenBoog(){
	PijlenBoog = true;
	if(PijlenBoog){
		setText('Ga verder', null, null);
		img.src = 'images/kistzonderpijlenboog.png';

		image = document.createElement("img");
		image.src = 'images/pijlenboog.png';
		image.setAttribute("id", "mes");

		description.appendChild(image);

		title.innerHTML = 'Ga verder';
		description.innerHTML = 'Youve got a pijl en boog.';

		btn1.onclick = Hangburg;
	};
};
function GetZwaard(){
	zwaard = true;
	if(zwaard){
		setText('Ga verder', null, null);
		img.src = 'images/kistzonderzwaard.png';

		image = document.createElement("img");
		image.src = 'images/zwaard.png';
		image.setAttribute("id", "mes");

		description.appendChild(image);

		title.innerHTML = 'Ga verder';
		description.innerHTML = 'Youve got a zwaard.';

		btn1.onclick = Hangburg;
	};
};
function Hangburg() {
	title.innerHTML = 'De rottende brug';
	description.innerHTML = 'Ga je erover heen?';
	setText('Loop de brug over', 'Ga terug', null);
	img.src = 'images/Hangburg.png';
	btn1.onclick = Kamp;
	btn2.onclick = Kijkinkist;
}
function Kamp() {
	title.innerHTML = 'Nieuwe mensen';
	description.innerHTML = 'Wil je alleen verder?';
	setText('Loop naar het kamp', 'Blijf waar je bent', null)
	img.src = 'images/Kamp.png';
	btn1.onclick = LoopnaarKamp;
	btn2.onclick = GameOver;
}

function LoopnaarKamp() {
	setText('Praat met de mensen', 'Loop verder', 'Blijf verstijft stilstaan')
	img.src = 'images/Kamplopen.png';
	btn1.onclick = Praatmetmensen;
	btn2.onclick = GameOver;
	btn3.onclick = GameOver;
}
function Praatmetmensen() {
	title.innerHTML = 'Alles hangt ondersteboven!';
	description.innerHTML = 'Denk goed na over je keuzes. Niet alles is zoals het lijkt.';
	setText('Loop door', 'Ga terug', null)
	img.src = 'images/Omgekeerde wereld.png';
	btn1.onclick = LoopnaarKamp;
	btn2.onclick = Kasteel;
	btn3.onclick = GameOver;
}
function Kasteel() {
	setText('Ga het Kasteel in', 'Blijf waar je bent','Loop van het Kasteel weg')
	img.src = 'images/Kasteel.png';
	btn1.onclick = Praatmetmensen;
	btn2.onclick = GameOver;
	btn3.onclick = DeDuivel;
}
function DeDuivel() {
	title.innerHTML = 'Hallo?';
	description.innerHTML = '';
	setText('Help hem: de legale manier', 'Help hem: the secret way', null)
	img.src = 'images/DeDuivel.png'
	btn1.onclick = GameOver;
	btn2.onclick = einde;
}
function einde() {
	title.innerHTML = 'Goed gedaan! U heeft gewonnen';
	setText(null, null, null);
	img.src = 'images/Start.png'
	btn1.onclick = StartGame;
}
