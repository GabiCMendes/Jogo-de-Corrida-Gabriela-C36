var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player, game;
var playerCount, gameState;
var track
var car_1, car_2, cars = [], carImg_1, carImg_2
var allPlayers
var powerCoins, powerCoinsImg
var fuels, fuelsImg
var obstacles, obstacle1Image, obstacle2Image
var lifeImage
var blast 

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  track = loadImage("./assets/track.jpg")
  carImg_1 = loadImage("./assets/car1.png")
  carImg_2 = loadImage("./assets/car2.png")
  powerCoinsImg = loadImage("./assets/goldCoin.png")
  fuelsImg = loadImage("./assets/fuel.png")
  obstacle1Image = loadImage("./assets/obstacle1.png")
  obstacle2Image = loadImage("./assets/obstacle2.png")
  lifeImage= loadImage("./assets/life.png")
  blast = loadImage("./assets/blast.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount == 2) {
    game.updateState(1)
  }
  if (gameState == 1) {
    game.play()
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

