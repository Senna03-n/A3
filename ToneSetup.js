const backgroundMusic = document.getElementById('backgroundMusic');
const playButton = document.getElementById('dialogCloseButton');

playButton.addEventListener('click', () => {
  backgroundMusic.play();
});

const mousedrag = document.getElementById('mousedrag');
const SoundEffect = document.getElementById('SoundEffect');
const eyes = document.querySelectorAll('.eye');

let isHolding = false;
mousedrag.addEventListener('mousedown', () => {
  isHolding = true;
  SoundEffect.currentTime = 0;
  SoundEffect.play();
});

mousedrag.addEventListener('mouseup', () => {
  isHolding = false;
  SoundEffect.pause();
});
