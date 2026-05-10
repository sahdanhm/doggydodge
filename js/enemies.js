// =====================
// SPAWN ENEMY (SEMUA ARAH)
// =====================
function spawnEnemy() {
  const side = Math.floor(Math.random() * 4); // 0-3 (4 sisi)
  //   const speed = getEnemySpeed();
  let row, col, vRow, vCol;

  if (side === 0) {
    // dari atas → turun
    row = 0;
    col = Math.floor(Math.random() * config.cols);
    vRow = 1;
    vCol = 0;
  } else if (side === 1) {
    // dari kanan → ke kiri
    row = Math.floor(Math.random() * config.rows);
    col = config.cols - 1;
    vRow = 0;
    vCol = -1;
  } else if (side === 2) {
    // dari bawah → naik
    row = config.rows - 1;
    col = Math.floor(Math.random() * config.cols);
    vRow = -1;
    vCol = 0;
  } else {
    // dari kiri → ke kanan
    row = Math.floor(Math.random() * config.rows);
    col = 0;
    vRow = 0;
    vCol = 1;
  }

  // masukkan ke state
  state.enemies.push({
    row,
    col,
    vRow,
    vCol,
    moveTimer: 0,
  });
}
function isFarFromPlayer(row, col) {
  const dRow = row - state.player.row;

  const dCol = col - state.player.col;

  // Manhattan Distance
  const distance = Math.abs(dRow) + Math.abs(dCol);

  return distance >= 3;
}
// ======================================
// HITUNG MAX MUSUH
// ======================================
function getMaxEnemies() {
  const elapsed = getElapsedSeconds();

  return Math.min(15, 5 + Math.floor(elapsed / 10));
}
// ======================================
// HITUNG DELAY SPAWN MUSUH
// ======================================
function getSpawnDelay() {
  const elapsed = getElapsedSeconds();

  const delay = 2 / (1 + elapsed * 0.015);

  // batas minimum
  return Math.max(0.2, delay);
}

// ======================================
// HITUNG DELAY GERAK MUSUH
// ======================================
function getEnemyMoveDelay() {
  const elapsed = getElapsedSeconds();

  const delay = 0.8 / (1 + elapsed * 0.008);

  return Math.max(0.1, delay);
}

// ======================================
// SPAWN ENEMY TIMER
// ======================================

// penampung waktu spawn
let spawnAccumulator = 0;

// waktu frame sebelumnya
let lastTime = performance.now();

// ======================================
// UPDATE MUSUH
// ======================================
function updateEnemies(delta) {
  // ambil delay gerak terbaru
  const moveDelay = getEnemyMoveDelay();

  for (let i = state.enemies.length - 1; i >= 0; i--) {
    const enemy = state.enemies[i];

    // =====================
    // TIMER GERAK MUSUH
    // =====================

    enemy.moveTimer += delta;

    // kalau sudah waktunya gerak
    if (enemy.moveTimer >= moveDelay) {
      enemy.row += enemy.vRow;
      enemy.col += enemy.vCol;

      // reset timer gerak
      enemy.moveTimer = 0;
    }

    // =====================
    // HAPUS MUSUH
    // =====================

    if (!inBounds(enemy.col, enemy.row)) {
      state.enemies.splice(i, 1);
    }
  }
}