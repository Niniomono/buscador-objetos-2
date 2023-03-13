function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createVideo(240, 240);
  }
  
  function start()
  {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estado: detectando objetos";
  }
  function draw() {

  }