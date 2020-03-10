var ballX = 200.0
var ballY = 100.0
var ballSpeedY = 1.0
var r = 10
var yder = 1
var gravity = 0.1;
var x = 1
var y = 1

function setup() {
  createCanvas(400, 400);
  print("Move the mouse around and see the circle change shapes")

}

function draw() {
  background(150, 200, 250);
  if (keyIsPressed === true) {
    ballX = 200.0
ballY = 100.0
  }
    print("not pressed")
//     ballSpeedY += gravity;
//     ballY = ballY + ballSpeedY;
//     fill(255, 0, 0)
//     ellipse(ballX, ballY, mouseX, mouseY)
  

//     if (ballY > height - 10 && ballSpeedY > 0) {

//       ballY = height
//       ballSpeedY *= -0.9
//     }
    
  
  

  //to make the ball "fall" down, every frame we increase its speed by a tiny amount. We call this amount gravity. 



  ballSpeedY += gravity;
  ballY = ballY + ballSpeedY;
  fill(255, 0, 0)
  ellipse(ballX, ballY, mouseX, mouseY)

  if (ballY > height - 10 && ballSpeedY > 0) {

    ballY = height
    ballSpeedY *= -0.9
  }

console.log("hello")


}
//function mousePressed() {
//x = mouseX
//y = mouseY


//}
