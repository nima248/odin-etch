const DEFAULT_ROWS = 16;
const DEFAULT_COLS = 16;

let nRows = DEFAULT_ROWS;
let nCols = DEFAULT_COLS;


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


populateGrid(nRows, nCols);


let grid = document.querySelector("div#grid-container");
grid.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-square")) {
        e.target.classList.add("drawn");
    }
});

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let n = prompt("How many squares per side? (Max 100)");
    if (n === "") return;
    if (isNaN(n)) return;
    n = Math.round(n);
    if (n < 1) {
        alert("Must be positive");
        return;
    }
    if (n > 100) {
        alert("Can't be greater than 100");
        return;
    }
    nRows = nCols = n;
    populateGrid(nRows, nCols);
});
