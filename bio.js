function allowDrop(event) {
    event.preventDefault();
}
  
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    console.log(event.dataTransfer.setData("text", event.target.id))
}
  
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    document.querySelector(".popup").style.display = "block";
}

function closePopUp() {
    // console.log("click")
    document.querySelector(".popup").style.display = "none";
    if (document.getElementById("popUpBold").innerHTML == "Welcome") {
        // console.log("check 1")
        document.getElementById("popUpBold").innerHTML = "Congratulations";
        document.getElementById("para1").innerHTML = "Great! Now that you have your tree down, it will start to absorb carbon dioxide from the air via the process of photosynthesis.";
        document.getElementById("photosynthesiseqn").innerHTML = "Photosynthesis chemical equation: 6CO<sub>2</sub> (Carbon dioxide) + 6H<sub>2</sub>O (Water) + light energy (From the sun) → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (Glucose) + 6O<sub>2</sub> (Oxygen)";
    } else {
        console.log("check 2")
    }
}

function onloadPopUp() {
    document.getElementById("popUpBold").innerHTML = "Welcome";
    document.getElementById("para1").innerHTML = "Start by dragging the tree into the box shown";
    document.getElementById("photosynthesiseqn").innerHTML = "";
    document.querySelector(".popup").style.display = "block";
}

window.onload = function() {
    onloadPopUp();
};