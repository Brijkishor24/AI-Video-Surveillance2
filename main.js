status="";
input_value="";
objects=[];
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,500);

    objectDetector.detect(video,getResult);
    if(status != ""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status:Objects Detected";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected:"+objects.length;
            
            fill("gold");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            textSize(20);
            noFill();
            stroke("gold");
            strokeWeight(3);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function start(){
objectDetector=ml5.objectDetector("cocossd".modelloaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
input_value=document.getElementById("Object_name").value;

}function modelloaded(){
 console.log("Model Loaded!");
 status=true;
}
function getResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        objects=results
    }
}