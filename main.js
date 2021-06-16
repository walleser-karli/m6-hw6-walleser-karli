var boxes = document.getElementsByClassName("col-sm-4");
console.log(boxes);

// document.getElementsByClassName("col-sm-4").addEventListener("mouseover", function() {
//     boxes[0].classList.toggle("box-white");
// });

// boxes[0].addEventListener("mouseenter",
//     function () {
//         var colorChange = document.getElementsByClassName("col-sm-4");
//         colorChange.classList.toggle("box-white");
//     }
// );

function colorChange () {
    boxes[0].classList.toggle("box-white");
}

for(i=0; i<boxes.length; i++){
    boxes[i].addEventListener("mouseenter", colorChange);
    boxes[i].addEventListener("mouseleave", colorChange);
}
    

// document.getElementsByClassName("col-sm-4").addEventListener("mouseout", function() {
//     document.getElementsByClassName("col-sm-4").style.backgroundColor = "red";
// });

// for(i=0; i<boxes.length; i++){
// boxes[i].addEventListener("mouseenter", 
//     function() {
//         var colorChange = document.getElementsByClassName("col-sm-4");
//         colorChange.classList.toggle("box-white");
//       });
    // function() {
    //     document.getElementsByClassName("col-sm-4").style.backgroundColor = "white"; });
    // boxes[i].addEventListener("mouseleave", function(){ document.getElementsByClassName("col-sm-4").style.backgroundColor = "black"; });
    // }

var newPara = document.createElement("p");
newPara.innerHTML = "";

document.getElementById("box1").addEventListener("click",
    function() {
        document.getElementById("container_fluid").appendChild(newPara);
        newPara.innerHTML = "Oooh - so close, but no cigar";
    }, false
);

document.getElementById("box2").addEventListener("click",
    function () {
        document.getElementById("container_fluid").appendChild(newPara);
        newPara.innerHTML = "DING DING DING - We have a winner";
    }, false
);

document.getElementById("box3").addEventListener("click",
    function () {
        document.getElementById("container_fluid").appendChild(newPara);
        newPara.innerHTML = "Oops, butter luck next time";
    }, false 
);