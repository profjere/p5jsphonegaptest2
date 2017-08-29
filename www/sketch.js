function setup() {
   //around 350 x 650
  createCanvas(350,650);
  var inp = createInput('');
   inp.input(myInputEvent);
   inp.position(10,50);
   slider = createSlider(0, 255, 100);
  slider.position(10, 70);
  slider.style('width', '80px');
  
}

function draw() {
   fill(255,0,0);
 ellipse(340,600,20,20);
 ellipse(mouseX,mouseY,20,20);
  
}

function myInputEvent(){
   text(this.value(),50,50);
   
}