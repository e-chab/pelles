/*formulaire pour "nous" contacter*/
function controlEmail(idAdresse) // vérifie la conformité de l'adresse mail (juste la présence d'un seul caractère "@")
	{caracteresAdresse=document.getElementById(idAdresse).value.split(''); 
	var nbArobase = 0; for(var i=0; i<caracteresAdresse.length; ++i){if(caracteresAdresse[i] == '@'){nbArobase++;}};//compte nombre @
	if(nbArobase ==1){document.getElementById(idAdresse).style.borderColor="green";} else{document.getElementById(idAdresse).style.borderColor="red";}} 
function confirEmail(idAdresse, idAdresse2) // vérifie que les deux adresses mail sont les mêmes
	{adresse=document.getElementById(idAdresse).value;
	adresse2=document.getElementById(idAdresse2).value;
	if(adresse==adresse2){document.getElementById(idAdresse).style.borderColor="green"; document.getElementById(idAdresse2).style.borderColor="green";}
	else{document.getElementById(idAdresse).style.borderColor="red"; document.getElementById(idAdresse2).style.borderColor="red";}}	
function obligations() //alerte si tout les champs obligatoires n'ont pas été remplis (en vérité assez inutile pour mon site mais je l'ai laissé car il ne fait pas trop tache)
	{if( (document.getElementById('message').value== "") ) 
	{alert("Merci de remplir les champs obligatoires");} }
function creerHref() //création du href d'envoi du mailto du formulaire (pour le pré-remplir d'apres e qui a été entré dans le formulaire)
	{var sujets = document.getElementById("sujets");
	var sujet = sujets.options[sujets.selectedIndex].text;
	var message = document.getElementById('message').value;
	var message = message.replace(/\n/g, '%0A'); // Le sigle %0A signifie un saut de ligne
	var signature = document.getElementById('prenom').value + " " + document.getElementById('nom').value;
	var emailClient = document.getElementById('email').value 
	var ref = "histoiredeparis.org@gmail.com?subject=" + sujet + "&body=" +message + "%0A%0A" + signature + "%0A" + emailClient;
	document.getElementById('valider').href = "mailto:" +ref;}

/*tabeau coordonnees utilisé plusieurs fois plus tard*/
coordonnees =                               //copie du fichier .csv
				[[1,48.84388889,2.355],
				[2,48.84916667,2.345555556], 
				[3,48.85166667,2.347777778],
				[4,48.85027778,2.348888889],
				[5,48.84694444,2.345833333],
				[6,48.84472222,2.346944444],
				[7,48.84194444,2.344166667],
				[8,48.84888889,2.35],
				[9,48.83888889,2.356944444],
				[10,48.84972222,2.355555556],
				[11,48.84861111,2.343055556],
				[12,48.84722222,2.348611111],
				[13,48.8425,2.341388889],
				[14,48.84527778,2.345],
				[15,48.84583333,2.350833333],
				[16,48.84722222,2.3475],
				[17,48.8525,2.348611111],
				[18,48.84416667,2.346111111],
				[19,48.85305556,2.346111111],
				[20,48.84972222,2.347222222],
				[21,48.84138889,2.356111111],
				[22,48.85222222,2.346388889],
				[23,48.85055556,2.343333333],
				[24,48.84361111,2.341666667],
				[25,48.8425,2.349722222],
				[26,48.84351424422003, 2.3444136861225333],   //pas dans l'application (fondation curie)
				[27,48.84083333,2.341111111],
				[28,48.84638889,2.3475],
				[29,48.84583333,2.35],
				[30,48.84638889,2.343333333],
				[31,48.84694444,2.346666667],
				[32,48.84222222,2.354722222],
				[33,48.84972222,2.355833333],
				[34,48.84666667,2.344722222],
				[35,48.8475,2.351666667],
				[36,48.85222222,2.345277778],
				[37,48.84861111,2.344444444],
				[38,48.85222222,2.346944444],
				[39,48.8475,2.346666667],
				[40,48.84903864036344, 2.357263484089448],   //pas dans l'application (institut du monde arabe)
				[41,48.84666667,2.351944444],
				[42,48.8469747148025, 2.3526074464351234],   //pas dans l'application (hotel le brun (maintenant cercle le brun))
				[43,48.85083333,2.351388889],
				[44,48.85027778,2.343888889],
				[45,48.83861111,2.353333333],
				[46,48.85166667,2.347777778],
				[47,48.84638889,2.344444444],
				[48,48.84611111,2.345],
				[49,48.84722222,2.353055556],
				[50,48.84111111,2.3475],
				[51,48.85055556,2.353611111],
				[52,48.84638889,2.3475],
				[53,48.85222222,2.348055556],
				[54,48.845,2.352222222],
				[55,48.843083,2.346688],
				[56,48.84805556,2.353055556],
				[57,48.8463955,2.3490722],
				[58,48.848107,2.346042],
				[59,48.85222222,2.346944444],
				[60,48.83972222,2.35],
				[61,48.84638889,2.351944444]]


/*les affiches des pelles du 5eme*/
function afficher(idPelle) /*affiche la pelle en grand et tout ce qui va avec, appel la fonction chemin()*/
	{getDestination(idPelle);
	var srcPelle = document.getElementById(idPelle).src;
	var imagePelle = "<img src='"+srcPelle+"'/>" 
		var numPelle = document.getElementById(idPelle).alt;
		if (numPelle<10) {var audio = " <figcaption>La lire:</figcaption><audio controls src='audios/C050" + numPelle +".mp3' type='audio/mpeg'></audio>";}
		else {var audio = "<div id='audio'><figcaption>La lire:</figcaption><audio controls src='audios/C05" + numPelle +".mp3' type='audio/mpeg'></audio></div>";}
	var yAller = "<img id='yAller' onclick ='chemin()' height='200px' width='auto' src='images/soleil.jpg'/>"
	document.getElementById("vaChanger").innerHTML= imagePelle + yAller + audio;
	document.getElementById("retourToutesPelles").innerHTML= "<a id='retourPelles' href='pellesProjet.html'>revenir à la liste des pelles</a>";}
function getDestination(idPelle)
	{var numPelle = document.getElementById(idPelle).alt;
	var latitud = coordonnees[parseInt(numPelle, 10)-1][1]; //cf tableau coordonnees
	var longitud = coordonnees[parseInt(numPelle, 10)-1][2];
	destination = latitud + "," + longitud;}
function localiser() //récupère la géolocalisation
	{navigator.geolocation.getCurrentPosition
		(function(position) 
		{localisation = position.coords.latitude + "," + position.coords.longitude;})
	}
function chemin() //créer l'url que google maps pourra utiliser afin de créer le parcourt à pied allant de la géolocalisation à la pelle et la met en tant que href
	{localiser();
	urlGGmaps ="https:"+"//www.google.com/maps/dir/?api=1&origin="+window.localisation+"&destination="+window.destination + "&travelmode=walking";
	if (localisation != "undefined")
		{window.open(urlGGmaps);}
	}

/*le jeu chaud-froid*/
function commenceJeu() //met ce qui est utile au jeu en plein écran et appel la fonction hasardImage ainsi que la fonction changeBoutton
	{document.getElementById("codeCouleur").style.color ="white";
	document.getElementById("jeu").requestFullscreen();
	hasardPelle();
	changeBoutton();}
function hasardPelle() //affiche une des images de pelle (sans l'inscription en bas à droite) du 5eme au hasard
	{var nbPelle = 61;
	numPelle = Math.floor((Math.random()*nbPelle)+1); //variable globale réutilisées
	if(numPelle <10){var srcPelle ="images/pelles/Q050"+numPelle+".png";}
	else{var srcPelle = "images/pelles/Q05"+numPelle+".png";};
	document.getElementById("pelleDuHasard").innerHTML= "<img style='margin:0px 50px 50px 50px; bottom : 0;' alt='imageHasardPelle' class='droite' src='"+srcPelle+"'/>";}
function changeBoutton() //change le boutton commencer en recommencer
	{document.getElementsByTagName("button")[0].innerHTML = "Recommencer";
	document.getElementsByTagName("button")[0].id = "buttonRecommercer";
	document.getElementsByTagName("button")[0].onclick = function(){recommercer();};}
function cursor(e) //affiche le curseur petite main sur la zone clickable
	{var carte=document.getElementById("carteParis5eme");
	carte.style.cursor="pointer";}
function chaudOUfroid(e) //appel d'autres fonctions quand click sur carte
	{calculDistance(e);
	deplace(e);
	afficheReponse();}
function coordonneesPelle() //calcul les coordonnees sur la carte du 5eme de la pelle choisie au hasard
	{var lonMax = 2.365202; //d'après les 4 points extrèmes de la carte du 5eme google maps
	var lonMin = 2.336777;
	var latMax = 48.853833;
	var latMin = 48.836809;
	xMax = document.getElementById("gauche").clientWidth;
    yMax = document.getElementById("gauche").clientHeight;
	var lonPelle = coordonnees[numPelle-1][2]; //cf tableau coordonnees
	var latPelle = coordonnees[numPelle-1][1];
	xPelle = ((lonPelle - lonMin)/(lonMax-lonMin))*xMax;
	yPelle = ((latMax - latPelle)/(latMax-latMin))*yMax;
	}
function calculDistance(e) //obtient la position du click et calcul sa distance à la position de la pelle
	{coordonneesPelle();
	xPoint=e.clientX; //création de variables globales pour les réutilisées
	yPoint=e.clientY;
	d = Math.sqrt(Math.pow((window.xPoint-window.xPelle),2)+Math.pow((window.yPoint-window.yPelle),2))}
function choixPoint() //choisi le point (sa couleur) et le met dans le HTML
	{couleursPoint = ["Rouge", "Orange", "Jaune", "VertClair", "VertFonce", "BleuClair", "BleuFonce", "Violet"];
	var intervalleX = xMax/couleursPoint.length;
	var intervalleY = yMax/couleursPoint.length;
	var dIntervalle = Math.sqrt(Math.pow((intervalleX),2)+Math.pow((intervalleY),2));
	if (window.d <= dIntervalle - 4*(dIntervalle/6)){couleurPoint = couleursPoint[0]} //les quantités ajoutées et enlevées sont pour que les zones autours du point soit de plus en plus large (zone rouge la plus petite, zone violette la plus grande)
	else if (window.d <= 2*dIntervalle - 3*(dIntervalle/6)){couleurPoint = couleursPoint[1]} //couleurPoint variables globales réutilisées
	else if (window.d <= 3*dIntervalle - 2*(dIntervalle/6)){couleurPoint = couleursPoint[2]}
	else if (window.d <= 4*dIntervalle - (dIntervalle/6)){couleurPoint = couleursPoint[3]}
	else if (window.d <= 5*dIntervalle + (dIntervalle/6)){couleurPoint = couleursPoint[4]}
	else if (window.d <= 6*dIntervalle + 2*(dIntervalle/6)){couleurPoint = couleursPoint[5]}
	else if (window.d <= 7*dIntervalle + 3*(dIntervalle/6)){couleurPoint = couleursPoint[6]}
	else if (window.d <= 8*dIntervalle + 4*(dIntervalle/6)){couleurPoint = couleursPoint[7]}
	var srcPoint = "images/points/point"+couleurPoint+".jpg";
	document.getElementById("imagePoint").src = srcPoint;}
function deplace(e) /*déplace le point et le rend visible*/
	{choixPoint();
	var point=document.getElementById("point");
	var lPoint = document.getElementById("imagePoint").clientWidth; //c'est un carré donc normalement l = L mais on ne sait jamais
    var Lpoint = document.getElementById("imagePoint").clientHeight;
	var xpoint =window.xPoint - lPoint/2; //le calcul est pour que ce soit le centre du point qui soit à l'endroit cliqué
	var ypoint=window.yPoint - Lpoint/2;
	point.style.left=xpoint.toString()+"px";
	point.style.top=ypoint.toString()+"px";
	point.style.visibility="visible";}
function afficheReponse() //
	{if(couleurPoint == "Rouge") 
		{var decalageY = (document.getElementById("imageLocalisation").clientWidth);
		document.getElementById("localisation").style.top=(window.yPelle-decalageY).toString()+"px";
		var decalageX = (document.getElementById("imageLocalisation").clientWidth)/2;
		document.getElementById("localisation").style.left=(window.xPelle-decalageX).toString()+"px";
		document.getElementById("imageLocalisation").style.visibility="visible";}
	} 
document.addEventListener('keypress',  //quand une touche est pressée le jeu est remis à zero
	function(event){
	couleurPoint ="";
	document.getElementById("point").style.visibility="hidden";
	document.getElementById("imageLocalisation").style.visibility="hidden";
	document.getElementById("codeCouleur").style.color ="black";
	document.getElementById("buttonRecommercer").style.fontSize ="12px";
    document.exitFullscreen();
	});
function recommercer()
	{document.getElementById("point").style.visibility="hidden";
	document.getElementById("imageLocalisation").style.visibility="hidden";
	document.getElementById("buttonRecommercer").style.fontSize ="13.3px";
	commenceJeu();
	}