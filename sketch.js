function setup() {
    createCanvas(900, 600);
    background("white")
  }
  
  
  function draw() {
    
  
    stroke("white");
    fill("black");
  
    // console.log(mouseIsPressed);
     
    if (mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }   
  }
  