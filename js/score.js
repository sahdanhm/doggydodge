// =====================
// LOAD HIGHSCORE
// Ambil score tertinggi dari localStorage
// =====================
function loadHighScore() {
  return Number(localStorage.getItem('highScore')) || 0;
}

// =====================
// SAVE HIGHSCORE
// Simpan score tertinggi
// =====================
function saveHighScore() {
  localStorage.setItem('highScore', state.highScore);
}

// =====================
// RESET SCORE
// Dipakai saat game mulai ulang
// =====================
function resetScore() {
  state.score = 0;
}

// =====================
// UPDATE SCORE
// delta = waktu antar frame (detik)
// =====================
function updateScore(delta) {
  // tambah timer
  state.scoreTimer += delta;

  /*
    Tambah score tiap 0.1 detik
    supaya score tidak terlalu cepat
  */

  if (state.scoreTimer >= 0.1) {
    state.score += 1;

    state.scoreTimer = 0;

    // // cek highscore setelah game over
    // if (state.score > state.highScore) {
    //   state.highScore = state.score;

    //   saveHighScore();
    // }

    updateScoreUI();
  }
}

// =====================
// UPDATE TAMPILAN HTML
// =====================
function updateScoreUI() {
  const scoreEl = document.querySelector('#score');

  const highScoreEl = document.querySelector('#high-score');

  if (scoreEl) {
    scoreEl.textContent = state.score;
  }

  if (highScoreEl) {
    highScoreEl.textContent = state.highScore;
  }
}

// =====================
// INIT
// =====================
state.highScore = loadHighScore();

updateScoreUI();
