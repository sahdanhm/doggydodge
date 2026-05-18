// volume
sounds.move.volume = 0.09;
sounds.hit.volume = 0.6;
sounds.bgm.volume = 0;
sounds.bgm.loop = true;

// ======================
// PLAY SOUND
// ======================

function playSound(sound) {
  sound.currentTime = 0;
  sound.play().catch(() => {});
}
function startBGM() {

  const targetVolume = 0.1; // volume akhir
  const fadeDuration = 5000; // 3 detik

  sounds.bgm.volume = 0;

  sounds.bgm.play().catch(() => {});

  let current = 0;

  const step = targetVolume / (fadeDuration / 100);

  const fade = setInterval(() => {

    current += step;

    if (current >= targetVolume) {
      current = targetVolume;
      clearInterval(fade);
    }

    sounds.bgm.volume = current;

  }, 100);

}