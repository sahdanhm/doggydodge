function movePlayer(vRow, vCol) {
  if (!state.running || state.paused || state.gameOver) return;

  const newRow = state.player.row + vRow;
  const newCol = state.player.col + vCol;

  // pakai config
  if (newRow < 0 || newRow >= config.rows) return;
  if (newCol < 0 || newCol >= config.cols) return;
  state.player.row = newRow;
  state.player.col = newCol;

  checkCollision();
  render();
}
function pressBtn(el, dir) {
  // gerakkan player
  switch (dir) {
    case 'up':
      movePlayer(-1, 0);
      break;

    case 'down':
      movePlayer(1, 0);
      break;

    case 'left':
      movePlayer(0, -1);
      break;

    case 'right':
      movePlayer(0, 1);
      break;
  }
}
// ======================
// CHECK COLLISION
// ======================

function checkCollision() {
  const player = state.player;

  const hit = state.enemies.some((enemy) => {
    return enemy.row === player.row && enemy.col === player.col;
  });

  // kalau tidak tabrakan
  if (!hit) return;

  // ======================
  // GAME OVER
  // ======================

  state.running = false;
  state.gameOver = true;

  // ======================
  // UPDATE HIGHSCORE
  // ======================

  if (state.score > state.highScore) {
    state.highScore = state.score;

    saveHighScore();

    updateScoreUI();
  }

  // ======================
  // SIMPAN DATA GAME TERAKHIR
  // ======================

  sessionStorage.setItem('lastScore', Math.floor(state.score));

  sessionStorage.setItem(
    'lastTime',
    document.getElementById('time').textContent,
  );

  sessionStorage.setItem('lastHighScore', state.highScore);

  // pindah halaman
  window.location.href = 'gameover.html';
}
