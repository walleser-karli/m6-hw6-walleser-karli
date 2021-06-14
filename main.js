// document.getElementsByClassName("col-sm-4").addEventListener("mouseover", function() {
//     document.getElementsByClassName("col-sm-4").style.backgroundColor = "white";
// });
    
// document.getElementsByClassName("col-sm-4").addEventListener("mouseout", function() {
//     document.getElementsByClassName("col-sm-4").style.backgroundColor = "red";
// });

var boxes = document.getElementsByClassName("col-sm-4");
console.log(boxes);

for(i=0; i<boxes.length; i++){
    boxes[i].addEventListener("mouseenter", function(){ document.getElementsByClassName("col-sm-4").style.backgroundColor = "white"; });
    boxes[i].addEventListener("mouseleave", function(){ document.getElementsByClassName("col-sm-4").style.backgroundColor = "black"; });
    }

boxes[0].addEventListener("click", function(){ alert("Oooh - so close, but no cigar");})

boxes[1].addEventListener("click", function(){ alert("DING DING DING - We have a winner");})

boxes[2].addEventListener("click", function(){ alert("Oops, butter luck next time");})