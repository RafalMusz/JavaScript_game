/** @type {HTMLCanvasElement}*/

const enemyCanvas = document.querySelector("#enemy1");
const ectx = enemyCanvas.getContext("2d");

const CANVASE_WIDTH = (enemyCanvas.width = 500);
const CANVASE_HEIGHT = (enemyCanvas.height = 1000);

let numberOfEnemies = 100;
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
    this.speed = Math.random() * 4-2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth ;
    this.height = this.spriteHeight ;
    this.x = Math.random() * (enemyCanvas.width-this.width);
    this.y = Math.random() * (enemyCanvas.height-this.width);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3+1);
  
  }
  update() {
    this.x += Math.random() * 5-2.5;
    this.y += Math.random() * 5-2.5;
    if (gameFrame % this.flapSpeed === 0){
      this.frame > 4 ? this.frame = 0 : this.frame++;
      }
  }
  draw() {
    ectx.drawImage(this.image, this.frame * this.spriteWidth,0, this.spriteWidth, this.spriteHeight, this.x,this.y, this.width, this.height)
  }
};

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy(enemy1,));
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
