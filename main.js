status="";
input_value="";
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,500);
}

function start(){
objectDetector=ml5.objectDetector("cocossd".modelloaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
input_value=document.getElementById("Object_name").value;
}function modelloaded(){
 console.log("Model Loaded!");
 status=true;
}