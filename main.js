img = " ";
objects = [];
modelStatus = " ";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detectando Objetos"
}
function preload(){
    img = loadImage("dog_cat.jpg");
}
function draw() {
  image(img, 0, 0, 640, 420);
  
  if(modelStatus != "")
  {
    for (i = 0; i < objects.length; i++) {
      document.getElementById("status1").innerHTML = "Status: Achei Objetos";

      fill("blue");
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke("blur");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}
function modelLoaded() {
    console.log("BASKAHA")
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) 
{
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}