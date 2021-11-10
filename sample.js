const sample1 = document.getElementById('sample1')
const sample2 = document.getElementById('sample2')

function toggleSample1Play() {
  return sample1.paused ? sample1.play() : sample1.pause();
}

function toggleSample2Play() {
  return sample2.paused ? sample2.play() : sample2.pause();
}
