// READ THE WIKI BEFORE USING THIS CODE
// Seriusly You Wont Understand this
// maybe but newbies before editing on your own fork on github or on our handy dandy Text Editor/Ide


function main(){
  
  var canvasWidth = 600;
  var canvasHeigth = 600;
  
  var canvas = document.getElemntById("canvas");
  canvas.width = canvasWidth;
  canvas.heigth = canvasHeigth;
  context = canvas.getContext("2d");
  
  // Define The "Ball" Image Object
  var ball = new Image();
  // Get Image From This Repo
  ball.src = 'https://tpelaaja.github.io/BallHole/ball.png;
  // Starting Positions. Change Them How ever you like them!
  var ballX = 0
  var ballY = 0;
  // Info About The Balls Size (64x64) Read About Changing The Ball On The Wiki!
  var ballWidth = 64;
  var ballHeight = 64;
  
  var Background = new Image();
  Background.src="https://tpelaaja.github.io/BallHole/randombg.png";
  context.drawImage(Background,0,0);
  
  function draw(){
    drawBackGround();
    drawBall();
  }
  
  function drawBackGround(){
    context.drawImage(Background,0,0);
  };
  
  // This Function Draws The Ball. Read About The Changing Ball On The Wiki!
  function drawBall();
    context.drawImage(ballX,ballY,ballWidth,ballHeight);
  };
  
  function eraseBall(){
      context.clearRect(ballX,ballY,ballWidth,ballHeight,);
  }

drawBall()
// Prevent Console Spam For Users By Removing This Code Under This Comment. Its Only For Debugging Purposes
console.log("Drew Ball")
