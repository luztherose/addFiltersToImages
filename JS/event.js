// function pageLoadedHandler() {
//     alert("I'm alive!");
// }
// window.onload = pageLoadedHandler;

let bodyBackground = document.querySelector("body");
let toggleButton = document.querySelector("button");
let inputText = document.querySelector("input").value;
let h1 = document.querySelector("h1");
let cleanFieldButton = document.querySelector("#cleanField");

function changeBackgroundColor() {
    h1.style.color ="navy";
    toggleButton.innerText = "Change to default";
    bodyBackground.style.backgroundColor = inputText;
    
}

function changeBackgroundToDefault() {
    bodyBackground.style.backgroundColor = "white";
    location.reload();
    toggleButton.innerText = "Change Color";
}

toggleButton.addEventListener("click", () => {
    if (h1.style.color != "navy"){
        changeBackgroundColor();
    } else {
        changeBackgroundToDefault();
    }
});

cleanFieldButton.addEventListener("click", () => {
    document.getElementById("textField").value = " ";
})
//Adding Filter to the image
let filterOut = document.querySelector("#imageDiv img");
let h2Heading = document.querySelector("h2");
let uploadFile = document.querySelector("#loadImage input");

filterOut.addEventListener("click", () => {
    if (filterOut.style.filter != "none") {
        h2Heading.style.color = "#333";
        filterOut.style.filter="none";
    } else {
        filterOut.style.filter="";
    }
});
if (uploadFile != null) {
    uploadFile.addEventListener("change", () => {
        filterOut.src = window.URL.createObjectURL(uploadFile.files[0]);
    });
    
}
