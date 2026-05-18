// ======================
// PAUSE GAME
// ======================

function pauseGame() {
  if (state.gameOver) return;

  state.paused = true;

  document.getElementById('pause-overlay').classList.add('active');

  // kecilkan bgm saat pause
  sounds.bgm.volume *= 0.3;
}

// ======================
// RESUME GAME + COUNTDOWN
// ======================

function resumeGame() {
  document.getElementById('pause-overlay').classList.remove('active');

  const overlay = document.getElementById('countdown-overlay');

  const number = document.getElementById('countdown-number');

  overlay.classList.add('active');

  let count = 3;

  number.textContent = count;

  const timer = setInterval(() => {
    count--;

    if (count > 0) {
      number.textContent = count;
    } else {
      clearInterval(timer);

      overlay.classList.remove('active');

      state.paused = false;

      // kembalikan volume bgm
      sounds.bgm.volume = 0.25;

      // reset waktu frame
      lastTime = performance.now();

      loop();
    }
  }, 1000);
}
