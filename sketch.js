var color = 0; 
var x = 30; 

var x2 = -200; 
var x3 = 200;

var tab = [ "#FFF", "#459BEB",];

var interrup01 = 0;
var X01 =0;
var Y01 =0;

function setup() {
	
	createCanvas(innerWidth, innerHeight);
	
	background(0);
}

function draw() {
	
	background(0);
	//lines left
/*	line(x, 0, 30, 5000);
	line(40, 0, 40, 5000);
	
	//line2 right
	line(1550, 0, 1550, 5000);
	line(1540, 0, 1540, 5000);
	
	*/
	
	
	
	if (interrup01 == 1) {
		rect(-width + X01, Y01, width, 20);
		X01 += 100;		
	}
	
	
	
	//CONDITION TOUCHES
	
	if (keyIsPressed === true) {
	if (( key === 'd' ) || ( key === 'o' ) || (key === 'm')|| (key === 'i')|| (key === 'n')|| (key === 'a')|| (key === 't')|| (key === 'r'))
		{
		
	background(0);
		X01 = 0;
		Y01 = random(0, 700);
		
		fill(random(tab));
        interrup01 =1;
		
		
  			}
		
	}
	
	




	push();
	//background(0);                          COMMENT LANCER LIGNE RANDOM  Y  EN PRESSANT 'n' QUI CONTINU SEULE
	//COMMENT REUSSIR A PLACER LE BACKGROUND COLOR POUR NE PAS QU'IL ATTEIGNE LE RESTE
	
	x2 = x2 + 2;
	x3 = x3 +2;
	
	
	
	
	
	if (keyIsPressed === true) {
	if ( key === 'n' ) {
		
	pop();
	
		
		
		/*line(-200,random(0,100),0,random(0,100));*/
		
		
		
  }

	
	
	
}














}