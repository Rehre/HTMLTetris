function renderI(x, y) {
  CONTEXT.fillStyle = SHAPE_COLOR.I;
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y - 1), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y + 1), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y + 2), ...getRectSize());
}

function renderS(x, y) {
  CONTEXT.fillStyle = SHAPE_COLOR.S;
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x - 1, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y - 1), ...getRectSize());
  CONTEXT.fillRect(
    ...getCoordinateFromGridNumber(x + 1, y - 1),
    ...getRectSize()
  );
}

function renderZ(x, y) {
  CONTEXT.fillStyle = SHAPE_COLOR.Z;
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x - 1, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y + 1), ...getRectSize());
  CONTEXT.fillRect(
    ...getCoordinateFromGridNumber(x + 1, y + 1),
    ...getRectSize()
  );
}

function renderL(x, y) {
  CONTEXT.fillStyle = SHAPE_COLOR.L;
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y - 1), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y + 1), ...getRectSize());
  CONTEXT.fillRect(
    ...getCoordinateFromGridNumber(x + 1, y + 1),
    ...getRectSize()
  );
}

function renderJ(x, y) {
  CONTEXT.fillStyle = SHAPE_COLOR.J;
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y - 1), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y + 1), ...getRectSize());
  CONTEXT.fillRect(
    ...getCoordinateFromGridNumber(x - 1, y + 1),
    ...getRectSize()
  );
}

function renderT(x, y) {
  CONTEXT.fillStyle = SHAPE_COLOR.T;
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x - 1, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x + 1, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y + 1), ...getRectSize());
}

function renderO(x, y) {
  CONTEXT.fillStyle = SHAPE_COLOR.O;
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x - 1, y), ...getRectSize());
  CONTEXT.fillRect(...getCoordinateFromGridNumber(x, y - 1), ...getRectSize());
  CONTEXT.fillRect(
    ...getCoordinateFromGridNumber(x - 1, y - 1),
    ...getRectSize()
  );
}

function renderShape(x, y, shape) {
  switch (shape) {
    case SHAPE_TYPE.I: {
      renderI(x, y);
      return;
    }
    case SHAPE_TYPE.S: {
      renderS(x, y);
      return;
    }
    case SHAPE_TYPE.Z: {
      renderZ(x, y);
      return;
    }
    case SHAPE_TYPE.L: {
      renderL(x, y);
      return;
    }
    case SHAPE_TYPE.J: {
      renderJ(x, y);
      return;
    }
    case SHAPE_TYPE.T: {
      renderT(x, y);
      return;
    }
    default: {
      renderO(x, y);
    }
  }
}

function checkCollision(newXCoordinate, newYCoordinate, currentShape) {
  switch (shape) {
    case SHAPE_TYPE.I: {
      return true;
    }
    case SHAPE_TYPE.S: {
      return true;
    }
    case SHAPE_TYPE.Z: {
      return true;
    }
    case SHAPE_TYPE.L: {
      return true;
    }
    case SHAPE_TYPE.J: {
      return true;
    }
    case SHAPE_TYPE.T: {
      return true;
    }
    default: {
      return true;
    }
  }
}
