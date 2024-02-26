$(document).ready(function() {
    $("#lightModeTopBar").load("/portfolio/headers.html #lightmodeheadbar");
    $("#bottomBar").load("/portfolio/headers.html #footbar");
    $("#darkModeTopBar").load("/portfolio/headers.html #darkmodeheadbar");
});

var labeltext = document.getElementsByClassName('projectThumb').innerText;

labeltext.style.display = "none";

function showlabels(){
  if (labeltext.style.display === "none")
  {labeltext.style.display = "block";}
  else {labeltext.style.display = "none"}
}
