var prediction1 = "" 
var prediction2 = "" 
Webcam.set ({
    width: "350",
    height:"350", 
    image_format: "png", 
    png_quality: "1080"
})
camera = document.getElementById("camera")
Webcam.attach("#camera")
function takesnapshot() {
    Webcam.snap(function(snapshot) {
        document.getElementById("result").innerHTML = "<img src='" + snapshot + "' id='captured_image'>"
     
    })
}
console.log("ml5 version idk loaded successfully")
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6XLdpJ2Of/model.json" , teachable)
function teachable() {
    console.log("teachable idk loaded successfully again")
}
function speak() {
    var synthesis = window.speechSynthesis
    speak_1 = "the first prediciton is" + prediction1
    speak_2 = "the second predicition is " + prediction2
    var utterance = new SpeechSynthesisUtterance(
        speak_1 + speak_2
    ); 
    synthesis.speak(utterance);
}
function predictemotion(){ 
    img = document.getElementById("captured_image") 
    classifier.classify(img, gotresult)
}
function gotresult(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results);   
        document.getElementById("emotion_name1").innerHTML = results[0].label
        document.getElementById("emotion_name2").innerHTML = results[1].label
        prediction1 = results[0].label
        prediction2 = results[1].label
        speak()
        if (results[0].label == "Happy") {
            document.getElementById("emoji_1").innerHTML = "&#128512"
        }
        if (results[0].label == "Sad") {
            document.getElementById("emoji_1").innerHTML = "&#128577"
        }
        if (results[0].label == "Angry") {
            document.getElementById("emoji_1").innerHTML = "&#128548"
        }
        
        if (results[1].label == "Happy") {
            document.getElementById("emoji_2").innerHTML = "&#128512"
        }
        if (results[1].label == "Sad") {
            document.getElementById("emoji_2").innerHTML = "&#128577"
        }
        if (results[1].label == "Angry") {
            document.getElementById("emoji_2").innerHTML = "&#128548"
        }
     }
}
