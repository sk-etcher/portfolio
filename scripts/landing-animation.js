//this interactive landing page is built upon a project I did in the Digital Craft course.

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
      textAlign(CENTER);
  }
  
  let r;
  let g;
  let b;
  //referred to https://p5js.org/reference/#/p5/pmouseX
  
  function draw() {
    
    fill(0);
  noStroke();
    textFont("Courier New");
    textSize(36);
    text("Click Anywhere to Enter", width/2, height/2);
    
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    
    stroke(r,g,b);
    strokeWeight(5);
    
  line(mouseX, mouseY, pmouseX, pmouseY);
    print(pmouseX + ' -> ' + mouseX);
    
  }
  //open in the same window
    function mouseClicked(){
      window.open("https://sk-etcher.github.io/portfolio/code.html","_self");
    }