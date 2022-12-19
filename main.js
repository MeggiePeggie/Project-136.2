status1 = "";

function preload()
{
    video = createCapture(VIDEO);
    video.hide();
    video.size(480, 480);
}

function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 480, 480);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status1 = true;
}