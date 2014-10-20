/* A page should be formatted somewhat like this:
 <html><body>
	<span id="sprites" />
	<div id="options" />
 </body></html>

/* Render a VN page
 * Args are:
 * 	background: the url of a background image
 *	sprites: a list of images, for sprites, to be rendered left to right in order
 *	options: a dictionary where keys are option text and values are URLs
 */
function renderPage(background, sprites, options) {
	document.body.style.backgroundImage="url('"+background+"')";
	spritepane=document.getElementById("sprites");
	spritepane.innerHTML="";
	for (sprite in sprites) {
		sp=document.createElement("img");
		sp.src=sprite;
		spritepane.appendChild(sp);
	}
	optpane=document.getElementById("options");
	optpane.innerHTML="";
	optlist=document.createElement("ul");
	for (opt in options) {
		oli=document.createElement("li");
		otn=document.createTextNode(opt);
		oa=document.createElement("a");
		oa.href=options[opt];
		oa.appendChild(otn);
		oli.appendChild(oa);
		optlist.appendChild(oli);
	}	
}
