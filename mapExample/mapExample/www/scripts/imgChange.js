function chngSrc(mod) {
    src = document.getElementById("panImg");
    if (mod == "bath") {
        src = "images/mapBath.png";
    } else if (mod == "reg") {
        src = "images/map.png";
    }
}