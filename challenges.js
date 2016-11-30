const challenges = [
  {
    number: 0,
    name: "#0 Welcome to 'Hour of Code'!",
    instructions: [
      "In this adventure, we will be playing with an animal using code!",
      "Choose your animal, and your color.",
      "Here are your choices:",
      "<div class='animal-container'><div class='monkey'>Monkey: <img class='animal' src='assets/monkey.svg' alt='monkey'></div><div class='horse'>Horse: <img class='animal' src='assets/horse.svg' alt='horse'></div><div class='tiger'>Tiger: <img class='animal' src='assets/tiger.svg' alt='tiger'></div></div>",
      "<div class='color-container'><div class='red'>Red</div><div class='green'>Green</div><div class='blue'>Blue</div></div>",
      "Create your animal below by changing 'animal' and 'color' to your selection!"
    ],
    seedCode: [
      "<div id='preview-container'>",
      "<link rel='stylesheet' href='preview-style.css'>",
      "<img style='width: 150px; height: 150px' id='img-cont'>",
      "<script type='text/javascript'>",
      "var img = document.getElementById('img-cont');var body = document.getElementsByTagName('body')[0];",
      "var monkey='monkey'; var horse='horse'; var tiger='tiger'; var red='palevioletred'; var green='palegreen'; var blue='paleturquoise';",
      "function createAnimal(animal) {img.src = `assets/${animal}.svg`;}",
      "function chooseColor(color) {body.style=`background-color: ${color}`;}",
      "createAnimal(animal);",
      "chooseColor(color);",
      "</script>",
      "</div>"
    ],
    // array of functions to test the challenge?
    tests: []
  },
  {
    number: 1,
    name: "#1 Welcome to 'Hour of Code'!",
    instructions: [
      "First part of instructions for first challenge",
      "Second part of instructions with code: <span class='inline-code'>console.log('awesome')</span>",
      "Final set of instructions for this challenge"
    ],
    seedCode: [
      "<canvas id=pane width=300 height=200></canvas>",
      "<script type='text/javascript'>",
      "var canvas = document.getElementById('pane');",
      "var context = canvas.getContext('2d');",
      "context.fillStyle = 'rgb(250,0,0)';",
      "context.fillRect(10, 10, 55, 50);",
      "context.fillStyle = 'rgba(0, 0, 250, 0.5)';",
      "context.fillRect(30, 30, 55, 50);",
      "</script>"
    ],
    // array of functions to test the challenge?
    tests: []
  },
  {
    number: 2,
    name: "#2 This be the Second Challenge",
    instructions: [
      "Here's another instruction set",
      "This one also has some <i>italics</i>.",
      "It has <b>bold</b> too!"
    ],
    seedCode: [
      "<p>Yay, challenge2!</p>",
      "<canvas id=pane width=300 height=200></canvas>",
      "<script type='text/javascript'>",
      "var canvas = document.getElementById('pane');",
      "var context = canvas.getContext('2d');",
      "context.fillStyle = 'rgb(0,0,0)';",
      "context.fillRect(10, 10, 55, 50);",
      "context.fillStyle = 'rgba(0, 0, 250, 0.5)';",
      "context.fillRect(30, 30, 55, 50);",
      "</script>"
    ],
    tests: []
  }
  // so on ...
];