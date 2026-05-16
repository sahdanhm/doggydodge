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
