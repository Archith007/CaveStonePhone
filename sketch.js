var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ac6ae9cc-1ff6-4501-a779-bb071251be3f","1aeca795-9c70-4157-b404-c8740e5e1f59","484aa7c5-5369-465e-98f8-2ad8eb041f8e","80f53cb4-8ac7-425b-8d18-274fc21f78d0","5ccf48e1-4346-4437-b4e6-04c50e5ee396","2d1af3b6-5ec8-490a-8909-bdb9ba0a2c87"],"propsByKey":{"ac6ae9cc-1ff6-4501-a779-bb071251be3f":{"name":"assets/ac6ae9cc-1ff6-4501-a779-bb071251be3f.png","sourceUrl":null,"frameSize":{"x":66,"y":118},"frameCount":3,"looping":true,"frameDelay":12,"version":"oCG6nlRiT7eLG3.XEY8zeyXJsTV70ZR9","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":236},"rootRelativePath":"assets/ac6ae9cc-1ff6-4501-a779-bb071251be3f.png"},"1aeca795-9c70-4157-b404-c8740e5e1f59":{"name":"assets/1aeca795-9c70-4157-b404-c8740e5e1f59.png","sourceUrl":null,"frameSize":{"x":200,"y":73},"frameCount":3,"looping":true,"frameDelay":12,"version":"hfDVgZ6otUpliZq8nxo4bOzqoyRiZjQ6","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":219},"rootRelativePath":"assets/1aeca795-9c70-4157-b404-c8740e5e1f59.png"},"484aa7c5-5369-465e-98f8-2ad8eb041f8e":{"name":"assets/484aa7c5-5369-465e-98f8-2ad8eb041f8e.png","sourceUrl":null,"frameSize":{"x":641,"y":480},"frameCount":6,"looping":true,"frameDelay":12,"version":"tUoWcSVhR4RZKh29NoH7FdwkORLGFtuf","loadedFromSource":true,"saved":true,"sourceSize":{"x":1282,"y":1440},"rootRelativePath":"assets/484aa7c5-5369-465e-98f8-2ad8eb041f8e.png"},"80f53cb4-8ac7-425b-8d18-274fc21f78d0":{"name":"assets/80f53cb4-8ac7-425b-8d18-274fc21f78d0.png","sourceUrl":null,"frameSize":{"x":900,"y":560},"frameCount":1,"looping":true,"frameDelay":12,"version":"3.y9j7aaXSFsxNBiHAH3aNJCzPUl973S","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":560},"rootRelativePath":"assets/80f53cb4-8ac7-425b-8d18-274fc21f78d0.png"},"5ccf48e1-4346-4437-b4e6-04c50e5ee396":{"name":"assets/5ccf48e1-4346-4437-b4e6-04c50e5ee396.png","sourceUrl":null,"frameSize":{"x":900,"y":560},"frameCount":1,"looping":true,"frameDelay":12,"version":"zuathp82_0upkC3ldq0CHntMEFRNih9M","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":560},"rootRelativePath":"assets/5ccf48e1-4346-4437-b4e6-04c50e5ee396.png"},"2d1af3b6-5ec8-490a-8909-bdb9ba0a2c87":{"name":"assets/2d1af3b6-5ec8-490a-8909-bdb9ba0a2c87.png","sourceUrl":null,"frameSize":{"x":96,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"dtSb.LhTP0k5EvAU5Z.phKcXwFVBj1TV","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":94},"rootRelativePath":"assets/2d1af3b6-5ec8-490a-8909-bdb9ba0a2c87.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----
    
var gamestate = "standing";
var a = 1;
var b = 0;
var c = 1;

var half, block, trophy;
var start, start1, start3, jumpstart;

var form, platform, plat;
var form1, platform1, plat1;
var form2, platform2, plat2, platform2_1;
var form3, platform3, plat3;
var form4, platform4, plat4;
var form5, platform5, plat5;

var startImage, starImage, spotImage
var boxAnimation, blockAnimation, lavaAnimation

var jumpSound, dieSound, checkSound, starSound

var edges
function preload(){
  
 boxAnimation = loadAnimation("download (18).png", "download (17).png", "download (16).png");
 
 blockAnimation = loadAnimation("download (15).png", "download (14).png", "download (13).png");
  
 lavaAnimation = loadAnimation("lava1.png","lava2.png","lava3.png","lava4.png","lava5.png","lava6.png");
  
 starImage = loadImage("star.png");
 startImage = loadImage("start.png");
 spotImage = loadImage("spot.png");
  
 jumpSound = loadSound("bounce3.mp3");
 starSound = loadSound("star.mp3");
 dieSound = loadSound("fire.mp3");
 checkSound = loadSound("check.mp3");
}



function setup() {
 createCanvas(800,800);

half = createSprite(600,400,0.2,800);
start1 = createSprite(120,650,180,20);
block = createSprite(120,600,40,40); 
start = createSprite(120,662,180,0.2);
start3 = createSprite(120,654,180,48);
jumpstart = createSprite(120,628,180,0.2);
trophy = createSprite(random(40, 660),100,40,40);

form = createSprite(random(0, 800),520,20,20);
platform = createSprite(form.x,521,130,24);
plat = createSprite(form.x,508,130,0.2);

form1 = createSprite(random(0, 600),420,20,20);
platform1 = createSprite(form1.x,420,130,24);
plat1 = createSprite(form1.x,408,130,0.2);

form2 = createSprite(700,420,20,20);
platform2 = createSprite(form2.x,420,130,24);
plat2 = createSprite(form2.x,408,130,0.2);
platform2_1 = createSprite(form2.x,412,130,0.2);

form3 = createSprite(random(0, 800),320,20,20);
platform3 = createSprite(form3.x,320,130,24);
plat3 = createSprite(form3.x,308,130,0.2);

form4 = createSprite(random(0, 800),220,20,20);
platform4 = createSprite(form4.x,220,130,24);
plat4 = createSprite(form4.x,208,130,0.2);

form5 = createSprite(random(0, 800),720,20,20);
platform5 = createSprite(form5.x,720,130,24);
plat5 = createSprite(form5.x,708,130,0.2);

lava = createSprite(384, 770, 40, 40);
lava2 = createSprite(128, 770, 40, 40);
lava3 = createSprite(640, 770, 40, 40);
lava4 = createSprite(896, 770, 40, 40);
  
edges = createEdgeSprites()


block.debug = false;
half.debug = false;
start.debug = false;
start1.debug = false;
start3.debug = false;
jumpstart.debug = false;
trophy.debug = false;

form.debug = false;
platform.debug = false;
plat.debug = false;

form1.debug = false;
platform1.debug = false;
plat1.debug = false;

form2.debug = false;
platform2.debug = false;
plat2.debug = false;
platform2_1.debug = false;

form3.debug = false;
platform3.debug = false;
plat3.debug = false;

form4.debug = false;
platform4.debug = false;
plat4.debug = false;

form5.debug = false;
platform5.debug = false;
plat5.debug = false;

lava.debug = false;
lava2.debug = false;
lava3.debug = false;
lava4.debug = false;

form.velocityX = a*0.650;
plat.velocityX = a*0.650;
platform.velocityX = a*0.650;

form1.velocityX = a*-1*0.5;
plat1.velocityX = a*-1*0.5;
platform1.velocityX = a*-1*0.5;

form3.velocityX = a*1;
plat3.velocityX = a*1;
platform3.velocityX = a*1;

form4.velocityX = a*-0.650;
plat4.velocityX = a*-0.650;
platform4.velocityX = a*-0.650;

form5.velocityX = a*-1;
plat5.velocityX = a*-1;
platform5.velocityX = a*-1;




start1.addImage(startImage);
start1.scale = 0.2;
trophy.addImage(starImage);
trophy.scale = 0.50;


form.addImage(spotImage);
form.scale = 0.15;

form1.addImage(spotImage);
form1.scale = 0.15;

form2.addImage(startImage);
form2.scale = 0.15;

form3.addImage(spotImage);
form3.scale = 0.15;

form4.addImage(startImage);
form4.scale = 0.15;

form5.addImage(spotImage);
form5.scale = 0.15;
  
  lava.addAnimation("lava",lavaAnimation) ;
  lava.scale = 2.7;
  
  lava2.addAnimation("lava",lavaAnimation) ;
  lava2.scale = 2.7;
  
  lava3.addAnimation("lava",lavaAnimation) ;
  lava3.scale = 2.7;
  
  lava4.addAnimation("lava",lavaAnimation) ;
  lava4.scale = 2.7;
  
  block.addAnimation("block", boxAnimation)
  block.addAnimation("box1",blockAnimation);
  

  


}


function draw() {

  if((a%10 == 0)&&(block.isTouching(trophy))){
  checkSound.play();
}
  
    if (gamestate == "standing"){
   block.changeAnimation("box1",blockAnimation);
     block.scale = 1.2
 }
  
  if (gamestate == "not standing"){
   block.changeAnimation("block",boxAnimation);
     block.scale = 0.8
 }

plat.x = form.x;
platform.x = form.x;

plat1.x = form1.x;
platform1.x = form1.x;

plat3.x = form3.x;
platform3.x = form3.x;

plat2.x = form2.x;
platform2.x = form2.x;

plat4.x = form4.x;
platform4.x = form4.x;

plat5.x = form5.x;
platform5.x = form5.x;


background("white");
block.velocityY = block.velocityY + 2.5;
block.velocityX = 0;
createEdgeSprites();

block.collide(edges);
block.collide(start);
block.collide(start3);
block.collide(platform);
block.collide(platform1);
block.collide(platform2);
block.collide(platform2_1);
block.collide(platform3);
block.collide(platform4);
block.collide(platform5);

textSize(24)
  
text((a*10)-10,738,50);
text("score:",668,50);

text((b*10)-10,146,50);
text("highscore:",30,50);

text((c*10)-10,490,50);
text("previous score:",322,50);

if(a>b){
  b = a;
}


//console.log(block.y);
platform.visible = false;
platform1.visible = false;
platform2.visible = false;
platform3.visible = false;
platform4.visible = false;
platform5.visible = false;
start3.visible = false;
half.visible = false;
if((keyDown("UP_ARROW")||(keyDown("SPACE")||keyDown("W")))&&block.isTouching(jumpstart)){
 block.velocityY = -30;
 gamestate = "not standing";
 jumpSound.play();
}

if((keyDown("UP_ARROW")||(keyDown("SPACE")||keyDown("W")))&&block.isTouching(plat)){
 block.velocityY = -30;
 gamestate = "not standing";
 jumpSound.play();
}

if((keyDown("UP_ARROW")||(keyDown("SPACE")||keyDown("W")))&&block.isTouching(plat1)){
 block.velocityY = -30;
 gamestate = "not standing";
 jumpSound.play();
}

if((keyDown("UP_ARROW")||(keyDown("SPACE")||keyDown("W")))&&block.isTouching(plat2)){
 block.velocityY = -30;
 gamestate = "not standing";
 jumpSound.play();
}

if((keyDown("UP_ARROW")||(keyDown("SPACE")||keyDown("W")))&&block.isTouching(plat3)){
 block.velocityY = -30;
 gamestate = "not standing";
 jumpSound.play();
}

if((keyDown("UP_ARROW")||(keyDown("SPACE")||keyDown("W")))&&block.isTouching(plat4)){
 block.velocityY = -30;
 gamestate = "not standing";
 jumpSound.play();
}

if((keyDown("UP_ARROW")||(keyDown("SPACE")||keyDown("W")))&&block.isTouching(plat5)){
 block.velocityY = -30;
 gamestate = "not standing";
 jumpSound.play();
}

if((keyDown("UP_ARROW"))||(keyDown("SPACE")||keyDown("W"))){
  
plat.x = form.x;
platform.x = form.x;

plat1.x = form1.x;
platform1.x = form1.x;

plat3.x = form3.x;
platform3.x = form3.x;

plat2.x = form2.x;
platform2.x = form2.x;

plat4.x = form4.x;
platform4.x = form4.x;

plat5.x = form5.x;
platform5.x = form5.x;
}





if(keyDown("DOWN_ARROW")||keyDown("S")){
 block.velocitX = 0;
 gamestate = "standing";
}

if (gamestate == "not standing"){
block.addAnimation("box", blockAnimation);
}

if((keyWentUp("UP_ARROW"))||(keyWentUp("SPACE")||keyWentUp("W"))){
 gamestate = "standing";
}

if(keyWentUp("DOWN_ARROW")||keyWentUp("S")){
 gamestate = "standing";
}

if(keyDown("RIGHT_ARROW")||keyDown("D")){
 block.velocityX = 30;

}


if(keyDown("LEFT_ARROW")||keyDown("A")){
 block.velocityX = -30
}

if(block.y > 710){
  dieSound.play();
}

if(block.y > 750 ){
  block.y = 600;
  block.x = 160;
  c = a;
  a = 1;
  
if(form.velocityX > 0){
form.velocityX = a*0.65;
plat.velocityX = a*0.65;
platform.velocityX = a*0.65;
}else{
form.velocityX = a*-0.65;
plat.velocityX = a*-0.65;
platform.velocityX = a*-0.65;
}

if(form1.velocityX < 0){
form1.velocityX = a*-1*0.5;
plat1.velocityX = a*-1*0.5;
platform1.velocityX = a*-1*0.5;
}else{
form1.velocityX = a*1*0.5;
plat1.velocityX = a*1*0.5;
platform1.velocityX = a*1*0.5;
}

if(form3.velocityX > 0){
form3.velocityX = a*1;
plat3.velocityX = a*1;
platform3.velocityX = a*1;
}else{
form3.velocityX = a*-1;
plat3.velocityX = a*-1;
platform3.velocityX = a*-1;
}

if(form4.velocityX < 0){
form4.velocityX = a*-0.65;
plat4.velocityX = a*-0.65;
platform4.velocityX = a*-0.65;
}else{
form4.velocityX = a*0.65;
plat4.velocityX = a*0.65;
platform4.velocityX = a*0.65;
}

if(form5.velocityX < 0){
form5.velocityX = a*-1;
plat5.velocityX = a*-1;
platform5.velocityX = a*-1;
}else{
form5.velocityX = a*1;
plat5.velocityX = a*1;
platform5.velocityX = a*1;
}

plat.x = form.x;
platform.x = form.x;

plat1.x = form1.x;
platform1.x = form1.x;

plat3.x = form3.x;
platform3.x = form3.x;

plat2.x = form2.x;
platform2.x = form2.x;

plat4.x = form4.x;
platform4.x = form4.x;

}

if(block.isTouching(trophy)){
  a = a+1;
  
  starSound.play();

  trophy.x = random(40, 760);
  
if(form.velocityX > 0){
form.velocityX = a*0.65;
plat.velocityX = a*0.65;
platform.velocityX = a*0.65;
}else{
form.velocityX = a*-0.65;
plat.velocityX = a*-0.65;
platform.velocityX = a*-0.65;
}

if(form1.velocityX < 0){
form1.velocityX = a*-1*0.5;
plat1.velocityX = a*-1*0.5;
platform1.velocityX = a*-1*0.5;
}else{
form1.velocityX = a*1*0.5;
plat1.velocityX = a*1*0.5;
platform1.velocityX = a*1*0.5;
}

if(form3.velocityX > 0){
form3.velocityX = a*1;
plat3.velocityX = a*1;
platform3.velocityX = a*1;
}else{
form3.velocityX = a*-1;
plat3.velocityX = a*-1;
platform3.velocityX = a*-1;
}

if(form4.velocityX < 0){
form4.velocityX = a*-0.65;
plat4.velocityX = a*-0.65;
platform4.velocityX = a*-0.65;
}else{
form4.velocityX = a*0.65;
plat4.velocityX = a*0.65;
platform4.velocityX = a*0.65;
}

if(form5.velocityX < 0){
form5.velocityX = a*-1;
plat5.velocityX = a*-1;
platform5.velocityX = a*-1;
}else{
form5.velocityX = a*1;
plat5.velocityX = a*1;
platform5.velocityX = a*1;
}

plat.x = form.x;
platform.x = form.x;

plat1.x = form1.x;
platform1.x = form1.x;

plat3.x = form3.x;
platform3.x = form3.x;

plat2.x = form2.x;
platform2.x = form2.x;

plat4.x = form4.x;
platform4.x = form4.x;

}

form.bounceOff(edges);
platform.bounceOff(edges);
plat.bounceOff(edges);

form1.bounceOff(edges);
platform1.bounceOff(edges);
plat1.bounceOff(edges);

form1.bounceOff(half);
platform1.bounceOff(half);
plat1.bounceOff(half);

form3.bounceOff(edges);
platform3.bounceOff(edges);
plat3.bounceOff(edges);

form4.bounceOff(edges);
platform4.bounceOff(edges);
plat4.bounceOff(edges);

form5.bounceOff(edges);
platform5.bounceOff(edges);
plat5.bounceOff(edges);


drawSprites();
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
