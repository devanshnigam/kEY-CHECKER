canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_image = "Alpkey.png";

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		//write a code to check the type of key pressed
		aplhabetkey()
		document.getElementById("d1").innerHTML="You pressed alpebet key"
	}
	else if(keyPressed >= 48 && keyPressed <=57){
		document.getElementById("d1").innerHTML="You pressed number key"
		numberkey()
	}
	else if(keyPressed >=37 && keyPressed <=40)
	{
		document.getElementById("d1").innerHTML="You pressed arrow key"
		arrowkey()
	}
	else if(keyPressed == 17||keyPressed == 18||keyPressed == 27)
	{
		document.getElementById("d1").innerHTML="You pressed special key"
		specialkey()
	}
	
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		otherkey()
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add();
	//upload respective image with the message. 
}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
