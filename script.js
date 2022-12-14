let playerState = "idle";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function (e) {
  playerState = e.target.value;
});

const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "graphics/shadow_dog.png";

const dogWidth = 575;
const dogHeight = 523;
let gameFrame = 0;
const staggerFrames = 8;

const dogAnimation = [];
const animationState = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },
];

animationState.forEach((state, index) => {
  let frames = {
    location: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * dogWidth;
    let positionY = index * dogHeight;
    frames.location.push({ x: positionX, y: positionY });
  }
  dogAnimation[state.name] = frames;
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position =
    Math.floor(gameFrame / staggerFrames) %
    dogAnimation[playerState].location.length;
  let frameX = dogWidth * position;
  let frameY = dogAnimation[playerState].location[position].y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    dogWidth,
    dogHeight,
    0,
    0,
    dogWidth,
    dogHeight
  );

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
