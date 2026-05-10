// =====================
// BUILD GRID
// =====================
const grid = document.getElementById('grid-container');

function buildGrid() {
  grid.innerHTML = ''; // penting kalau rebuild
  state.cells.length = 0;

  grid.style.gridTemplateColumns = `repeat(${config.cols}, 1fr)`;

  for (let row = 0; row < config.rows; row++) {
    for (let col = 0; col < config.cols; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      grid.appendChild(cell);
      state.cells.push(cell);
    }
  }
}

// =====================
// HELPER
// =====================
function index(col, row) {
  return row * config.cols + col;
}

function inBounds(col, row) {
  return col >= 0 && col < config.cols && row >= 0 && row < config.rows;
}
