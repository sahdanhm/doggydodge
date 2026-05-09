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
    speed: 0, // nanti dinamis
    stepCounter: 0, // untuk kontrol gerak
    moveThreshold: 5, // makin kecil → makin cepat
  });
}

// =====================
// GERAK MUSUH DINAMIS
// =====================
function updateEnemies() {
  for (let i = state.enemies.length - 1; i >= 0; i--) {
    const e = state.enemies[i];

    // kontrol kecepatan (frame skipping)
    e.stepCounter++;

    if (e.stepCounter >= e.moveThreshold) {
      e.row += e.vRow;
      e.col += e.vCol;

      e.stepCounter = 0;
    }

    // hapus kalau keluar grid
    if (!inBounds(e.col, e.row)) {
      state.enemies.splice(i, 1);
    }
  }
}

// =====================
// DIFFICULTY SYSTEM
// =====================
let spawnInterval = 1000; // awal 1 detik
let spawnTimer;

// mulai spawn loop
function startSpawning() {
  clearInterval(spawnTimer);
  spawnTimer = setInterval(() => {
    if (state.running && !state.paused) {
      spawnEnemy();
    }
  }, spawnInterval);
}

// =====================
// DIFFICULTY RAMP
// =====================
function increaseDifficulty() {
  // spawn makin cepat
  spawnInterval = Math.max(200, spawnInterval - 50);

  // restart interval dengan kecepatan baru
  clearInterval(spawnTimer);
  startSpawning();

  // musuh makin cepat
  state.enemies.forEach((e) => {
    if (e.moveThreshold > 1) {
      e.moveThreshold = Math.max(1, e.moveThreshold - 0.2);
    }
  });

  console.log(`⚡ Level ${state.speedLevel} | spawn=${spawnInterval}ms`);
}

// setiap 5 detik naik level
setInterval(() => {
  if (state.running && !state.paused) {
    increaseDifficulty();
  }
}, 5000);

// =====================
// MAKIN SULIT
// =====================
// function getEnemySpeed() {
//   const t = state.elapsed / 1000; // detik
//   console.log(t);
//   return 2 + t * 0.1; // makin lama makin cepat
// }
