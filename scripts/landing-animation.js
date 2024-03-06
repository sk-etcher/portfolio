//this interactive landing page is built upon a project I did in the Digital Craft course.

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
      textAlign(CENTER);
    colorMode(HSB, 100)
  }
  
  let h;
  let s;
  let b;
  //referred to https://p5js.org/reference/#/p5/pmouseX
  
  function draw() {
    
    fill(0);
  noStroke();
    textFont("Verdana");
    textSize(36);
    text("Click Anywhere to Enter", width/2, height/2);
    
    h = random(0,100);
    s = random(25,75);
    b = random(50,100);
    
    stroke(h, s, b);
    strokeWeight(8);
    
  line(mouseX, mouseY, pmouseX, pmouseY);
    print(h + ', ' + s + ', ' + b);
    
  }
  //open in the same window
    function mouseClicked(){
      window.open("https://sk-etcher.github.io/portfolio/code.html","_self");
    }
