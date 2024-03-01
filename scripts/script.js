$(document).ready(function() {
    $("#topBar").load("/portfolio/headers.html #headbar");
    $("#bottomBar").load("/portfolio/headers.html #footbar");
});

var labeltext = document.getElementsByClassName('projectThumb').innerText;

labeltext.style.display = "none";

function showlabels(){
  if (labeltext.style.display === "none")
  {labeltext.style.display = "block";}
  else {labeltext.style.display = "none"}
}

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#simple-list-example'
})
