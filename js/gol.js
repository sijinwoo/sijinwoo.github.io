const gridSize = 20;
const cellPadding = 2;
const cellRound = 4;

let cellNumX = Math.floor(window.innerWidth / gridSize);
let cellNumY = Math.floor(window.innerHeight / gridSize);

const life = new Life(cellNumX, cellNumY, gridSize, cellPadding, cellRound);
function setup() {
    let canvasWidth = Math.floor(window.innerWidth / gridSize) * gridSize;
    let canvasHeight = Math.floor(window.innerHeight / gridSize) * gridSize;
    createCanvas(canvasWidth, canvasHeight);
    rectMode(CENTER);
    strokeWeight(0.2);

    life.drawLife();

}

function draw() {
    clear();
    life.update();
}

function windowResized() {
    let canvasWidth = Math.floor(window.innerWidth / gridSize) * gridSize;
    let canvasHeight = Math.floor(window.innerHeight / gridSize) * gridSize;
    resizeCanvas(canvasWidth, canvasHeight);

    cellNumX = Math.floor(window.innerWidth / gridSize);
    cellNumY = Math.floor(window.innerHeight / gridSize);

    life.drawLife();
}

