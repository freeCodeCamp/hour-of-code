window.onload = init();

function init() {
  var canvas = document.getElementById('pane');
  var context = canvas.getContext('2d');

  context.fillStyle = 'rgb(250,0,0)';
  context.fillRect(10, 10, 55, 50);

  context.fillStyle = 'rgba(0, 0, 250, 0.5)';
  context.fillRect(30, 30, 55, 50);
}