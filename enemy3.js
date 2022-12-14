/** @type {HTMLCanvasElement}*/

const enemyCanvas = document.querySelector("#enemy1");
const ectx = enemyCanvas.getContext("2d");

const CANVASE_WIDTH = (enemyCanvas.width = 500);
const CANVASE_HEIGHT = (enemyCanvas.height = 1000);

let numberOfEnemies = 50;
let enemySize = Math.random() ;
let gameFrame = 0;
const enemiesArray = [];


const enemy1 = new Image();
enemy1.src = "graphics/enemy1.png";
const enemy2 = new Image();
enemy2.src = "graphics/enemy2.png";
const enemy3 = new Image();
enemy3.src = "graphics/enemy3.png";
const enemy4 = new Image();
enemy4.src = "graphics/enemy4.png";


class Enemy {
  constructor(image, ) {
    
    this.image = image;
    this.speed = Math.random() * 4+1;
    this.spriteWidth = 1308/6;
    this.spriteHeight = 177;
    this.width = this.spriteWidth /2.5;
    this.height = this.spriteHeight /2.5;
    this.x = Math.random() * (enemyCanvas.width-this.width);
    this.y = Math.random() * (enemyCanvas.height-this.width);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3+1);
    this.angle = 0;
    this.angleSpeed = Math.random() * 1.5 + 0.05;
    this.curve = Math.random() * 200;
  }

  update() {
    this.x = enemyCanvas.width/2 * Math.sin(this.angle * Math.PI/90) + (enemyCanvas.width/2 - this.width/2);
    this.y = enemyCanvas.height/2 * Math.cos(this.angle * Math.PI/360) + (enemyCanvas.height/2 - this.height/2);
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) this.x = enemyCanvas.width;
    if (gameFrame % this.flapSpeed === 0){
      this.frame > 4 ? this.frame = 0 : this.frame++;
      }
  }
  draw() {
    ectx.drawImage(this.image, this.frame * this.spriteWidth,0, this.spriteWidth, this.spriteHeight, this.x,this.y, this.width, this.height)
  }
};

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy(enemy3,));
}

function animate() {
  ectx.clearRect(0, 0, CANVASE_WIDTH, CANVASE_HEIGHT);
  enemiesArray.forEach(enemy =>{
    enemy.update();
    enemy.draw();
  })
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
