// returns a random hex colour, e.g. "#3e8af2"
function randomHex () {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
}

document.getElementById('change-btn').addEventListener('click', () => {
  document.body.style.background = randomHex();
});
