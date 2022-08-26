 what = "";

 function preload() {
    img = loadImage("Bed_Image.jpeg");
 }

 function setup() {
    canvas = createCanvas(400, 600);
    canvas.position(center);

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
 }

 function modelLoaded() {
    console.log("doNE");
    what = "true";
    objectDetector.detect(img, gotResults);
 }

 
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }

    console.log(results);
}