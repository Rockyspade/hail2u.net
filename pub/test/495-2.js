var count = 0;

function countUp() {
  count++;
  alert(count);
}

document.getElementById('test').addEventListener('click', countUp, false);
