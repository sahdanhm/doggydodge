// =====================
// UPDATE WAKTU
// delta = selisih waktu antar frame
// =====================
function updateTime(delta) {
  // tambah waktu bermain
  state.elapsedTime += delta;

  updateTimeUI();
}

// =====================
// FORMAT WAKTU
// 65 detik → 01:05
// =====================
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);

  const secs = Math.floor(seconds % 60);

  return String(minutes).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
}

// =====================
// UPDATE TAMPILAN
// =====================
function updateTimeUI() {
  const timeEl = document.querySelector('#time');

  if (timeEl) {
    timeEl.textContent = formatTime(state.elapsedTime);
  }
}
