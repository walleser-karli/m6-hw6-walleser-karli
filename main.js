// console.log(boxes);

// document.getElementsByClassName("boxes").addEventListener("mouseover", function() {
//     boxes[0].classList.add("box-white");
// });
    

// document.getElementsByClassName("col-sm-4").addEventListener("mouseout", function() {
//     document.getElementsByClassName("col-sm-4").style.backgroundColor = "red";
// });


var boxes = document.getElementsByClassName("col-sm-4");
console.log(boxes);

// for(i=0; i<boxes.length; i++){
//     boxes[i].addEventListener("mouseenter", function(){ document.getElementsByClassName("col-sm-4").style.backgroundColor = "white"; });
//     boxes[i].addEventListener("mouseleave", function(){ document.getElementsByClassName("col-sm-4").style.backgroundColor = "black"; });
//     }

var newPara = document.createElement("p");
newPara.innerHTML = "";

// boxes[0].addEventListener("click",
//     function() {
//         document.getElementsByClassName("container-fluid").appendChild(newPara);
//     }, false
// );

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

boxes[0].addEventListener("click", function(){document.getElementsByClassName("message").innerHTML = "Oooh - so close, but no cigar"; });

// boxes[1].addEventListener("click", function(){ alert("DING DING DING - We have a winner");})

// boxes[2].addEventListener("click", function(){ alert("Oops, butter luck next time");})