const state = {
  player: { row: 4, col: 4 },
  enemies: [],
  cells: [],
  running: true,
  paused: false,
  gameOver: false,
  speedLevel: 1,
  score: 0,
  highScore: 0,
  scoreTimer: 0,
  elapsedTime: 0,
};
const config = {
  rows: 8,
  cols: 8,
};
const sounds = {
  move: new Audio('assets/sound/move.wav'),
  hit: new Audio('assets/sound/hit.wav'),
  bgm: new Audio('assets/sound/bgm.mp3'),
};