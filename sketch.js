
var dogHappy,dogHappy2;
var foodS;
var dog,foodStock;
var database;
function preload()
{

dogHappy = loadImage("dogImg.png");
dogHappy2 = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  foodStock=database.ref('food');
foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",400,20);
text("Food remaining : "+ foodS,200,200);
fill("white");
textSize(20);
stroke(24);
dog = createSprite(400,500,50,50);
dog.addImage(dogHappy);
dog.scale=0.3;
  drawSprites();

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy2);
}

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x+1;
  }
  database.ref('/').update({
    foodS:x
  })
}



