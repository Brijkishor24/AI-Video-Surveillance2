status="";
input_value="";
objects=[];
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
objectDetector=ml5.objectDetector("cocossd",modelloaded);
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

function draw(){
    image(video,0,0,500,500);

    
    if(status != ""){
        objectDetector.detect(video,getResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status:Objects Detected";
            /*document.getElementById("Object_detected_or_not").innerHTML="Number of objects detected:"+objects.length;*/
            
            
            if(objects[i].label==input_value){
             document.getElementById("Object_detected_or_not").innerHTML=input_value+" Found";
             fill("gold");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            textSize(20);
            noFill();
            stroke("gold");
            strokeWeight(3);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

            synth=window.speechSynthesis;
            utter=new SpeechSynthesisUtterance(input_value+"Found");
            synth.speak(utter);
            }else{
                document.getElementById("Object_detected_or_not").innerHTML=input_value+" Not Found";
            }
        }
    }
}
