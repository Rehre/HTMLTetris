function getRandomShape() {
  const RNG = Math.ceil(Math.random() * 7);

  return Object.keys(SHAPE_TYPE)[RNG - 1];
}

let currentShape = getRandomShape();
let currentShapeInitialCoordinate = SHAPE_STARTING_COORDINATE[currentShape];

function keyIn(ev) {
  switch (ev.keyCode) {
    // left
    case 37: {
      currentShapeInitialCoordinate.x -= 1;
      break;
    }
    // right
    case 39: {
      currentShapeInitialCoordinate.x += 1;
      break;
    }
  }
}

function runGameSystem() {
  renderShape(
    currentShapeInitialCoordinate.x,
    currentShapeInitialCoordinate.y,
    currentShape
  );
}

function gravity() {
  currentShapeInitialCoordinate.y += 1;
}

function game() {
  // setup environments
  CONTEXT.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  renderBackground();
  renderWalls();
  // run the game system
  // shape generator, collision detector, scoring system
  runGameSystem();

  requestAnimationFrame(game);
}

document.addEventListener("keydown", keyIn);
setInterval(gravity, 1000);
requestAnimationFrame(game);
