results_array = [];
status ="";
function preload()
{
  img = loadImage('bedroom pic.jpg');
}
function draw()
{
  image(img,0,0,640,420);

  if(status!= "")
  {
    for(i = 0; i < object.length; i++)
    {
      document.getElementById("status").innerHTML = "Status : object Detected";
      percent = floor(object[i].confidence * 100);
      text(object[i].label + "" + percent + "%",object[i].x,object[i].y);
      fill("#FF0000");
      noFill();
      stroke("#FF0000");
      rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
  }
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
   results_array = results;
}