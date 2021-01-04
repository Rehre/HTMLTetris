function getRandomShape() {
  // const RNG = Math.ceil(Math.random() * 7);

  // return Object.keys(SHAPE_TYPE)[RNG - 1];
  return SHAPE_TYPE.O;
}

let currentShape = getRandomShape();
let currentShapeInitialCoordinate = SHAPE_STARTING_COORDINATE[currentShape];

function keyIn(ev) {
  switch (ev.keyCode) {
    // left
    case 37: {
      if (
        // check if its colliding with other shape or left wall
        checkCollision(
          currentShapeInitialCoordinate.x - 1,
          currentShapeInitialCoordinate.y,
          currentShape
        )
      ) {
        currentShapeInitialCoordinate.x -= 1;
      }
      break;
    }
    // right
    case 39: {
      if (
        // check if its colliding with other shape or right wall
        checkCollision(
          currentShapeInitialCoordinate.x + 1,
          currentShapeInitialCoordinate.y,
          currentShape
        )
      ) {
        currentShapeInitialCoordinate.x += 1;
      }
      break;
    }
  }
}

function gravity() {
  // check if its colliding with other shape or bottom wall
  if (
    checkCollision(
      currentShapeInitialCoordinate.x,
      currentShapeInitialCoordinate.y + 1,
      currentShape
    )
  ) {
    currentShapeInitialCoordinate.y += 1;
    return;
  }

  // if its collided then need to put the shape last coordinate in the
  // grid system

  // then generate another shape with initial coordinate
}

function game() {
  // setup environments
  CONTEXT.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  renderBackground();
  renderWalls();
  renderShape(
    currentShapeInitialCoordinate.x,
    currentShapeInitialCoordinate.y,
    currentShape
  );
  renderGridData([]);

  requestAnimationFrame(game);
}

document.addEventListener("keydown", keyIn);
setInterval(gravity, 1000);
requestAnimationFrame(game);
