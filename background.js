const backgroundCanvas = document.querySelector("#background1");
const bctx = backgroundCanvas.getContext("2d");

const CANVASB_WIDTH = (backgroundCanvas.width = 800);
const CANVASB_HEIGHT = (backgroundCanvas.height = 700);

const backgroundLayer1 = new Image();
backgroundLayer1.src = "graphics/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "graphics/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "graphics/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "graphics/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "graphics/layer-5.png";

let backgroundSpeed = 1;

class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = backgroundSpeed * this.speedModifier;
  }
  update() {
    this.speed = backgroundSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }

  draw() {
    bctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    bctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

const layer1 = new Layer(backgroundLayer1, 0,7);
const layer2 = new Layer(backgroundLayer2, 1,5);
const layer3 = new Layer(backgroundLayer3, 2,3);
const layer4 = new Layer(backgroundLayer4, 3);
const layer5 = new Layer(backgroundLayer5, 5);

const allLayers = [layer1, layer2, layer3, layer4, layer5];

function animate() {
  bctx.clearRect(0, 0, CANVASB_WIDTH, CANVASB_HEIGHT);
  allLayers.forEach((element) => {
    element.update();
    element.draw();
  });

  requestAnimationFrame(animate);
}

animate();
