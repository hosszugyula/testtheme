var images = new Array(5);
images[0] = "img/nagyban.png";
images[1] = "img/nagyban.png";
images[2] = "img/nagyban.png";
images[3] = "img/nagyban.png";
images[4] = "img/nagyban.png";

var numimg = 4;
var curimg = 1;

function goback() {
    var im = document.getElementById("image");
    if (curimg > 0) {
        im.src = images[curimg - 1];
        curimg = curimg - 1;
    } else {
        alert("This is the first image");
    }


}

function gofwd() {
    var im = document.getElementById("image");
    if (curimg < numimg) {
        im.src = images[curimg + 1];
        curimg = curimg + 1;
    } else {
        alert("This is the last image");
    }


}