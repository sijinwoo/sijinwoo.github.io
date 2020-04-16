class Life {
    constructor(xNum, yNum, gridSize, cellPadding, cellRound) {
        this.xNum = xNum;
        this.yNum = yNum;
        this.currentGeneration = new Array();
        this.nextGeneration = new Array();

        for(let x = 0; x < this.xNum; x++) {
            this.currentGeneration.push(new Array());
            this.nextGeneration.push(new Array());
            for(let y = 0; y < this.yNum; y++) {
                let xPos = (gridSize*x) + (gridSize/2);
                let yPos = (gridSize*y) + (gridSize/2);
                let state = Math.round(Math.random(1));
                this.nextGeneration[x].push(state);
                this.currentGeneration[x].push(new Cell(xPos, yPos, state, gridSize, cellPadding, cellRound));
            }
        }
    }

    countNeighbors(x, y) {
        let sum = 0;
        for(let i = -1; i < 2; i++) {
            for(let j = -1; j < 2; j++) {
                sum += this.currentGeneration[((x + i) + this.xNum) % this.xNum][((y + j) + this.yNum) % this.yNum].getState();
            }
        }

        sum -= this.currentGeneration[x][y].getState();

        return sum;
    }

    update() {
        this.currentGeneration.forEach((column, x) => {
            column.forEach((cell, y) => {
                let neighbors = this.countNeighbors(x,y);

                if(cell.getState()) {
                    if(neighbors < 2 || neighbors > 3) {
                        this.nextGeneration[x][y] = 0;
                    }
                } else if(neighbors == 3) {
                    this.nextGeneration[x][y] = 1;
                }
            });
        });

        this.drawLife();
    }

    drawLife() {
        this.currentGeneration.forEach((column, xIndex) => {
            column.forEach((cell, yIndex) => {
                cell.setState(this.nextGeneration[xIndex][yIndex]);
                cell.draw();
            });
        });
    }

    
}

class Cell {
    constructor(x, y, state, gridSize, cellPadding, cellRound) {
        // position
        this.xPos = x;
        this.yPos = y;

        this.width = gridSize - cellPadding;
        this.height = gridSize - cellPadding;

        this.state = state;
    }

    setState(state) {
        this.state = state;
    }

    draw() {
        stroke('#E0DFD5');
        fill(!this.state ? '#E0DFD5' : '#313638');
        rect(this.xPos, this.yPos, this.width, this.height, cellRound);
    }

    getState() {
        return this.state;
    }
}
