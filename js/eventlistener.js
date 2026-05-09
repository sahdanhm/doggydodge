document.addEventListener('keydown', function (e) {
  const key = e.key.toLowerCase();

  // // Pause/Resume dengan ESC atau P
  // if (key === 'escape' || key === 'p') {
  //   e.preventDefault();
  //   if (state.gameOver) return;
  //   togglePause();
  //   return;
  // }

  // // Jika game tidak berjalan atau paused atau game over, abaikan input gerak
  // if (!state.running || state.paused || state.gameOver) return;

  // function togglePause() {
  //   if (state.gameOver) return;
  //   if (state.paused) {
  //     resumeGame();
  //   } else {
  //     pauseGame();
  //   }
  // }

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
