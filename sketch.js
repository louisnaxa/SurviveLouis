let x = 100;
let y = 100;
let posObstacleX = 300;
let posObstacleY = 250;
var d = 20;
var vitesse = 2;
var direction = 2;
var secondes;
var tempsPasse;
var temps;
var alive = true; 

function setup() {
  createCanvas(640, 480);

}

function countSeconds() {

	secondes = Math.trunc((millis() / 1000));
}

function draw() {
	console.log(alive); 
	if(alive == true) { 
		countSeconds();
		console.log("nmbr de sec " + secondes)

	   background(0);
	   updatePositionEllipse();
	   testOutOfScreen();
	   fill(0,0,255)
	   testDistancePlayer();
	   strokeWeight();
	   ellipse(x, y, 60, 60);
	   fill(0,255,0)
	   textSize(32);
	   text(secondes, width/2, 475);
	   ellipse(posObstacleX, posObstacleY, d, d);
		posObstacleX += vitesse * direction;
		if ((posObstacleX > width-d/2) || (posObstacleX< d/2)) {
			direction = -direction; // Changer de direction
		}
	} else {
		fill(255, 255, 255);
		textAlign(CENTER, CENTER)
		text('Score :', width/2, height/2);
		text(secondes, 320, 280);
		reset()
	} 
}

function updatePositionEllipse() {


	if (keyIsDown(LEFT_ARROW)) {
    	
    	x =  x - 5;

    //  x = x - 5; 
  	}

  if (keyIsDown(RIGHT_ARROW)) {
    
    x += 5;

  }

  if (keyIsDown(UP_ARROW)) {
    
    y -= 5;

  }

  if (keyIsDown(DOWN_ARROW)) {
    
    y += 5;

  }

}



function testOutOfScreen(){
	
	if (x < 30){ 
    	
    	x += 5;
    	strokeWeight(10);
		stroke(255,0,0);
    	line(0,0,0,480);

    }

    if (y < 30){
    	
    	y += 5;
    	strokeWeight(10);
		stroke(255,0,0);
    	line(0,0,640,0);

    }

    if (y > 450){
    	
    	y -= 5;
    	strokeWeight(10);
		stroke(255,0,0);
    	line(0,480,640,480);

    }

    if (x > 610){
    	
    	x -= 5;
    	strokeWeight(10);
		stroke(255,0,0);
    	line(640,0,640,480);

    }  		

}


function testDistancePlayer(){
	distanceX = Math.pow(x - posObstacleX, 2);
	distanceY = Math.pow(y - posObstacleY, 2);
	distance  = Math.sqrt(distanceX + distanceY);

	if(distance <= 42) {

		fill('red');
		alive = false; 




	}

}





