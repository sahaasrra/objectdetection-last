status ="";
function movetobed()
{
  window.location = "bedroom.html";
}

function preload()
{
  img = loadImage('bedroom pic.jpg');
}
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status - Detecting Objects";
}
function modelLoaded()
{
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(img, gotResult);
}
function gotResult(error,results)
{
   if(error)
   {
     console.log(error);
   }
   console.log(results);

}