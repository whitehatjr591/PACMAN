var rect1,rect2,rect3,rect4;
var rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13,rect14,rect15,rect16,rect17,rect18,rect19,rect20;
var triangle1;
var blueghost,redghost,pinkghost,yellowghost;
var blueghostimg;





function preload() {

blueghostimg = loadImage("blueghost.png")







}

function setup() {
createCanvas(600,300)
rect1 = createSprite(300,30,400,10)
rect2 = createSprite(300,270,400,10)
rect3 = createSprite(100,100,10,150)
rect4 = createSprite(500,200,10,150)
rect5 = createSprite(125,130,50,10)
rect6 = createSprite(280,80,10,100)
rect7 = createSprite(200,80,50,10)
rect8 = createSprite(230,105,10,60)
//triangle1 = createSprite()
rect9 = createSprite(275,135,100,10)
rect10 = createSprite(360,80,60,10)
rect11 = createSprite(385,100,10,50)
rect12 = createSprite(385,250,10,40)
rect13 = createSprite(385,230,50,10)
rect14 = createSprite(365,200,10,50)
rect15 = createSprite(407,130,55,10)
rect16 = createSprite(430,160,10,70)
rect17 = createSprite(450,60,10,50)
rect18 = createSprite(150,200,10,50)
rect19 = createSprite(230,200,10,50)
rect20 = createSprite(255,230,60,10)

blueghost = createSprite(200,60,20,20)
blueghost.addImage("blueghost",blueghostimg)
blueghost.velocityX = 3;

blueghost.scale = 0.05;

redghost = createSprite(310,230,20,20)
redghost.velocityY = 3;

}

function draw() {

background(0);

if(blueghost.isTouching(rect3) ) {

blueghost.velocityX = 3;

}

if(blueghost.isTouching(rect6)) {

blueghost.velocityX = -3;


}
if(redghost.isTouching(rect2)) {

redghost.velocityY = -3;


}
if(redghost.isTouching(rect9)) {

    redghost.velocityY = -3;
    
    
    }
drawSprites()

}







