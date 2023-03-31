
//Web and Effects, section 00001
//Feed the Creature
//https://openprocessing.org/sketch/1870088 

/* 
Instructions
Move the mouse to the left or to the right to change 
the expression of the creature. 
click on either choice of "snack". 
Press spacebar to restart.

Analysis/artist statement
This artwork allows the viewer to offer a snack to a pink creature. 
The creature would prefer a sweet snack, but this makes it sick.
the healthy snacks does not please the creature, but it makes
it healthy. This story is about the choices that we make
everyday, and how sometimes we should use the choice that 
is less appealing, but more constructive in the end. 
We have to option to restart the story when the creature gets sick,
because we have the power to change the choices we make day to day
*/

let brocoli;
let candy;
let spiral;
let h;
let chapter =0;

function preload() {
  brocoli = loadImage('brocoli.png');
  candy = loadImage('candy.png');
  spiral = loadImage('spiral.png');
}

function setup() {
  createCanvas(1000,600);
  background(172, 243, 157);
  h = 330;
}

function draw() {
  if (chapter === 0){ //to make it so that the mouth does not change all the time, only before the choice of snack is made, and to stop 
    //the text from staking and becoming illegible when starting over.
    
    background (172, 243, 157);
    
    fill (0);
    textSize(30);
    text("Choose snack to give to The Creature", 250, 50);
    
    image(brocoli, 50,50);
    image(candy, 750,50);
    
    //shelf
    fill (122, 65, 50);
    rect(50,250, 200, 20);
    rect(750,250,200,20);
  
    //creature
    fill(251, 197, 214);
    circle (380, 200, 150);
    circle (620, 200, 150);
    fill(251, 197, 214)
    ellipse (500, 550, 250, 400);
    circle (500,300,250);
    line (500, h, 470, 360);
    line (500, h, 530, 360);
    fill(50);
    ellipse (440, 300, 30, 50);
    ellipse (560, 300, 30, 50);
    ellipse (440, 250, 40, 20);
    ellipse (560, 250, 40, 20);
  
    //smile and frown
    if (mouseX>500) {
      h=h+1  //if the mouse is on the right side of the canvas, the creature smiles. the height of the lines of the mouth goes down.
    }
    if (h> 380){
      h=380; //to make it so that the mouth stops going down at a certain point.
    }
    if (mouseX<500) {
      h=h-1 //if the mouse is on the left side of the canvas, the creature frowns. the height of the lines of the mouth goes up
    } 
    if (h<330) {
      h= 330; //to make it so that the mouth stops going up at a certain point.
    }
  }
}

//effect of pressing on the different snack
function mouseClicked(){
  
  //if press on brocoli
  if (mouseX>50 && mouseX<250 && mouseY>50 && mouseY<250){
    chapter = 1; //to remove the text from chapter 0 and the images of the snack.
    background(172, 243, 157);
      
    //shelf
    fill (122, 65, 50);
    rect(50,250, 200, 20);
    rect(750,250,200,20);
    
    fill (0);
    text("The Creature is not happy, but it is healthy", 250,50);
  
    //creature
    fill(251, 197, 214);
    circle (380, 200, 150);
    circle (620, 200, 150);
    fill(251, 197, 214);
    ellipse (500, 550, 250, 400);
    circle (500,300,250);
    line (500, 330, 470, 360);
    line (500, 330, 530, 360);
    fill(50);
    ellipse (440, 300, 30, 50);
    ellipse (560, 300, 30, 50);
    ellipse (440, 250, 40, 20);
    ellipse (560, 250, 40, 20);
    fill(172, 243, 157);
  }
  
//if press on chocolate
  if (mouseX>750 && mouseX<950 && mouseY>50 && mouseY<250){
    chapter = 2;  //to remove the text from chapter 0 and the images of the snack.
    
    background(172, 243, 157);
      
    //shelf
    fill (122, 65, 50);
    rect(50,250, 200, 20);
    rect(750,250,200,20);
    
    fill (0);
    text("The Creature got sick from eating too much sugar", 180,50);
    text("Press Spacebar to try again", 300,100)
    
    //creature
    fill(251, 197, 214);
    circle (380, 200, 150);
    circle (620, 200, 150);
    fill(251, 197, 214);
    ellipse (500, 550, 250, 400);
    circle (500,300,250);
    line (500, 330, 470, 360);
    line (500, 330, 530, 360);
    fill(50);
    image(spiral,410,270);
    image(spiral,530,270)
    ellipse (440, 250, 40, 20);
    ellipse (560, 250, 40, 20);
    fill(172, 243, 157);
  }  
}

function keyPressed(){ //to restart when the creature is sick.
  if (key == " "){
  chapter = 0
  }
}
