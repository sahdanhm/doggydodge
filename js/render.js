function render() {
  // reset semua cell
  state.cells.forEach((c) => (c.className = 'cell'));

  // enemies
  state.enemies.forEach((e) => {
    const col = Math.floor(e.col);
    const row = Math.floor(e.row);

    if (inBounds(col, row)) {
      state.cells[index(col, row)].classList.add('enemy');
    }
  });

  // player
  state.cells[index(state.player.col, state.player.row)].classList.add(
    'player',
  );
}
