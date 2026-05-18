document.addEventListener('keydown', function (e) {
  const key = e.key.toLowerCase();

  
if (key === 'escape' || key === 'p') {
  if (state.paused) {
    resumeGame();
  } else {
    pauseGame();
  }
}

  // Jika game tidak berjalan atau paused atau game over, abaikan input gerak
  if (!state.running || state.paused || state.gameOver) return;

   // prevent scroll untuk arrow
  if (['arrowup','arrowdown','arrowleft','arrowright'].includes(key)) {
    e.preventDefault();
  }

  switch (key) {
    case 'w':
    case 'arrowup':
      movePlayer(-1, 0); // atas
      break;

    case 's':
    case 'arrowdown':
      movePlayer(1, 0); // bawah
      break;

    case 'a':
    case 'arrowleft':
      movePlayer(0, -1); // kiri
      break;

    case 'd':
    case 'arrowright':
      movePlayer(0, 1); // kanan
      break;
  }
});
