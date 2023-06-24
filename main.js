Webcam.set({
    width: 350,
    height: 300,
    img_format: png,
    png_quality: 90
});
webcam_era = document.getElementById("webcam");
Webcam.attach(webcam_era);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img src = " + data_uri + ">";
    })
}
