img = ""
stat = ""
objects = []


function preload() {
    img = loadImage("OIP.jfif")
}

function setup() {
    canvas = createCanvas(800,450)
    canvas.center()
    CocoSsd = ml5.objectDetector("cocossd", cheat)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function cheat() {
    console.log("Cheat Operation Successful! Now time to hack into this computer/phone/laptop/tablet.")
    stat = true;
    CocoSsd.detect(img, gotResult)
}

function draw() {
    image(img, 0, 0, 800, 450)
    if (stat != "") {
       for (var i = 0; i < objects.length; i++) {
           document.getElementById("status").innerHTML = "Status: Object Detected"
           percent = Math.floor(objects[i].confidence * 100)
           document.getElementById("number").innerHTML = "There is 1 big object and " + objects.length + " were detected" 
           text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y)
           noFill()
           stroke("blue")
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
    }
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        objects = results;
    }
}