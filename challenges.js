const challenges = [
  {
    number: 0,
    name: "#0 Welcome to 'Hour of Code'!",
    instructions: [
      "In this adventure, we will be playing with an animal using code!",
      "Choose your animal, and your color.",
      "<div class='animal-container'><div class='monkey'><span>Monkey</span> <img class='animal' src='assets/monkey.svg' alt='monkey'></div><div class='horse'><span>Horse</span> <img class='animal' src='assets/horse.svg' alt='horse'></div><div class='tiger'><span>Tiger</span> <img class='animal' src='assets/tiger.svg' alt='tiger'></div></div>",
      "<div class='color-container'><div class='red'>Red</div><div class='green'>Green</div><div class='blue'>Blue</div></div>",
      "Create your animal below by changing <span class='inline-code'>animal</span> and <span class='inline-code'>color</span> to your selection, leaving the quotes."
    ],
    seed: {
      code: [
        "<div id='preview-container'>",
        "<link rel='stylesheet' href='preview-style.css'>",
        "<img style='width: 150px; height: 150px' id='img-cont'>",
        "<script type='text/javascript'>",
        "var img = document.getElementById('img-cont');var body = document.getElementsByTagName('body')[0];",
        "function createAnimal(animal) {img.src = `assets/${animal.toLowerCase()}.svg`;}",
        "function chooseColor(color) {body.className=color;}",
        "createAnimal('animal');",
        "chooseColor('color');",
        "</script>",
        "</div>"
      ],
      hiddenLines: [
        {start: -1, end: 6}, {start: 8, end: 12}
      ]
    },
    // array of functions to test the challenge?
    tests: [
      {
        test: "$('#preview').contents().find('#img-cont')[0].src.match('monkey') || $('#preview').contents().find('#img-cont')[0].src.match('horse') || $('#preview').contents().find('#img-cont')[0].src.match('tiger')",
        message: "Did you change animal to either monkey, horse or tiger?"
      },
      {
        test: "$('#preview').contents().find('body')[0].className === 'red' || $('#preview').contents().find('body')[0].className === 'green' || $('body').className === 'green' || $('#preview').contents().find('body')[0].className === 'blue'",
        message: "Did you change color to either red, green or blue?"
      }
    ]
  },
  {
    number: 1,
    name: "#1 Welcome to 'Hour of Code'!",
    instructions: [
      "First part of instructions for first challenge",
      "Second part of instructions with code: <span class='inline-code'>console.log('awesome')</span>",
      "Final set of instructions for this challenge"
    ],
    seed:{
      code: [
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
      hiddenLines: [
      ]
    },
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
    seed: {
      code: [
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
      hiddenLines: [
      ]
    },
    tests: []
  }
  // so on ...
];