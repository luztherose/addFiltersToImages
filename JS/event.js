
//Adding Filter to the image
let filterOut = document.querySelector("#imageDiv img");
let h2Heading = document.querySelector("h2");
let uploadFile = document.querySelector("#loadImage input");
let original = document.getElementById("filterOut");
let inputBlur = document.getElementById("blurRange");
let inputBright = document.getElementById("brightRange");
let inputGray = document.getElementById("grayRange");
let inputSepia = document.getElementById("sepiaRange");
let inputSaturate = document.getElementById("saturateRange");

inputBlur.addEventListener("change", () => {
    let rangeValue = document.getElementById("blurRange").value;
    filterOut.style.filter="blur(" + rangeValue + "px)";
});
inputBright.addEventListener("change", () => {
    let brightValue = document.getElementById("brightRange").value;
    filterOut.style.filter="brightness(" + brightValue + "%)";
});

inputGray.addEventListener("change", () => {
    let grayValue = document.getElementById("grayRange").value;
    filterOut.style.filter="grayscale(" + grayValue + "%)";
});
inputSepia.addEventListener("change", () => {
    let sepiaValue = document.getElementById("sepiaRange").value;
    filterOut.style.filter="sepia(" + sepiaValue + "%)";
});
inputSaturate.addEventListener("change", () => {
    inputSaturate.style.color="blue";
    let saturateValue = document.getElementById("saturateRange").value;
    filterOut.style.filter="saturate(" +  saturateValue  + ")";
});

original.addEventListener("click", () => {
    filterOut.style.filter="";
});
if (uploadFile != null) {
    uploadFile.addEventListener("change", () => {
        filterOut.src = window.URL.createObjectURL(uploadFile.files[0]);
    });
    
}
