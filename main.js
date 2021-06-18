var boxes = document.getElementsByClassName("col-sm-4");
console.log(boxes);

function colorChange () {
    for(i=0; i<boxes.length; i++){
       boxes[i].classList.toggle("box-white")
    }
}

for(i=0; i<boxes.length; i++){
    boxes[i].addEventListener("mouseenter", colorChange);
    boxes[i].addEventListener("mouseleave", colorChange);
}

var newPara = document.createElement("p");
newPara.innerHTML = "";

var showButton = document.getElementById("button");

document.getElementById("box1").addEventListener("click",
    function() {
        document.getElementById("container_fluid").appendChild(newPara);
        newPara.innerHTML = "Oooh - so close, but no cigar";
        showButton.classList.remove("hidden-button");
    }, false
);

document.getElementById("box2").addEventListener("click",
    function () {
        document.getElementById("container_fluid").appendChild(newPara);
        newPara.innerHTML = "DING DING DING - We have a winner";
        showButton.classList.remove("hidden-button");
    }, false
);

document.getElementById("box3").addEventListener("click",
    function () {
        document.getElementById("container_fluid").appendChild(newPara);
        newPara.innerHTML = "Oops, butter luck next time";
        showButton.classList.remove("hidden-button");
    }, false 
);