musX=0;
musY=0;



function preload()
{
img=loadImage("https://i.postimg.cc/RVk4ZHk5/Nice-Png-real-mustache-png-644325.png");
}

function setup()
{
 canvas=createCanvas(300,300);
 canvas.center();

 video=createCapture(VIDEO);
 video.size(300,300);
 video.hide();

 poseNet=ml5.poseNet(video,modelloaded);
 poseNet.on("pose",gotPoses);

}
function modelloaded()
{
  console.log("model is inital initialized");
  
}
function gotPoses(results)
{
  if (results.length>0)
  {
    console.log(results);
    musX=results[0].pose.nose.x-50
    musY=results[0].pose.nose.y
    console.log("mustache x="+results[0].pose.nose.x);
    console.log("mustache y="+results[0].pose.nose.y);
  }
}
function draw()
{
image(video,0,0,300,300);

image(img,musX,musY,150,25);
}

function take_snapshot()
{
  save("ByAdvay.png")
}

