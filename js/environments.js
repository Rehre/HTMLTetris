function renderBackground() {
  CONTEXT.fillStyle = BG_COLOR;
  CONTEXT.fillRect(
    ...getCoordinateFromGridNumber(0, 0),
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
}

function renderWalls() {
  CONTEXT.fillStyle = WALL_COLOR;
  // render left wall
  for (let i = 0; i < 30; i++) {
    CONTEXT.fillRect(...getCoordinateFromGridNumber(0, i), ...getRectSize());
  }
  // render right wall
  for (let i = 0; i < 30; i++) {
    CONTEXT.fillRect(...getCoordinateFromGridNumber(19, i), ...getRectSize());
  }
  // render bottom wall
  for (let i = 1; i < 19; i++) {
    CONTEXT.fillRect(...getCoordinateFromGridNumber(i, 29), ...getRectSize());
  }
}

function renderGridData(currentGrid) {}
