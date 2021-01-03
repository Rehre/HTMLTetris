const CANVAS = document.getElementById("canvas");
const CONTEXT = CANVAS.getContext("2d");

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 750;
const RECT_SIZE = 25;
const BG_COLOR = "#FFF";
const WALL_COLOR = "#222831";
const SHAPE_TYPE = {
  O: "O",
  I: "I",
  S: "S",
  Z: "Z",
  L: "L",
  J: "J",
  T: "T",
};
const SHAPE_COLOR = {
  O: "#f05454",
  I: "#f05454",
  S: "#f05454",
  Z: "#f05454",
  L: "#f05454",
  J: "#f05454",
  T: "#f05454",
};
const SHAPE_STARTING_COORDINATE = {
  O: {
    x: 10,
    y: -1,
  },
  I: {
    x: 10,
    y: -3,
  },
  S: {
    x: 10,
    y: -1,
  },
  Z: {
    x: 10,
    y: -2,
  },
  L: {
    x: 10,
    y: -2,
  },
  J: {
    x: 10,
    y: -2,
  },
  T: {
    x: 10,
    y: -2,
  },
};

// grid number starting from zero(0)
// return [x, y]
function getCoordinateFromGridNumber(gridNumberX, gridNumberY) {
  const xCoordinate = gridNumberX * RECT_SIZE;
  const YCoordinate = gridNumberY * RECT_SIZE;

  return [xCoordinate, YCoordinate];
}

// return [width, height]
function getRectSize() {
  return [RECT_SIZE, RECT_SIZE];
}
