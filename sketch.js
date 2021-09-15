var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(880,400);
  backgroundImage = loadImage("./js/bg.png");
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
  
}


function draw(){
  background(backgroundImage);

}
