const ROWS = 16;
const COLS = 16;


function populateGrid(nRows, nCols) {
    let grid = document.querySelector("div#grid-container");
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    for (let i = 0; i < nRows; i++) {
        let row = makeRow(nCols);
        grid.appendChild(row);
    }
}

function makeRow(nCols) {
    let row = document.createElement("div");
    row.classList = "grid-row";
    for (let i = 0; i < nCols; i++) {
        let square = document.createElement("div");
        square.classList = "grid-square";
        row.appendChild(square);
    }
    return row;
}


populateGrid(ROWS, COLS);
