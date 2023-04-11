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
    document.querySelector(".popup").style.display = "none";
}