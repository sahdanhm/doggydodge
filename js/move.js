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
