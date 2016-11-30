/* global animal color $*/


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
    tests: [
      {
        test: "$('#preview').contents().find('#img-cont')[0].src.match('monkey') || $('#preview').contents().find('#img-cont')[0].src.match('horse') || $('#preview').contents().find('#img-cont')[0].src.match('tiger')",
        message: "Did you change animal to either monkey, horse or tiger?"
      },
      {
        test: "$('#preview').contents().find('body')[0].className === 'red' || $('#preview').contents().find('body')[0].className === 'green' || $('body').className === 'green' || $('#preview').contents().find('body')[0].className === 'blue'",
        message: "Did you change color to either red, green or blue?"
      }
    ],
    callbacks: [
      () => { animal = /\/(\w+)\.svg/.exec($('#preview').contents().find('#img-cont')[0].src)[1]; },
      () => { color = $('#preview').contents().find('body')[0].className; },
    ]
  },
  {
    number: 1,
    name: "#1 Making Friends",
    instructions: [
      () => `Your ${animal} must be a bit lonely here! You can create more ${animal}s quickly by running a loop. This loop makes 5 animals.`,
      "<pre class='codeblock'>var num = 1;\n\nwhile (num <= 5) {\n   createAnimal('animal');\n   num = num + 1; \n}</pre>",
      "Try playing around with <span class='inline-code'>num = 1</span> and <span class='inline-code'>num <= 5</span>!"
    ],
    seed: {
      code: [
        () => `<body class='${color}' style="padding:50px;"><link rel='stylesheet' href='preview-style.css'>`,
        "<style>img { width: 33%; margin: auto; }</style>",
        "<script type='text/javascript'>",
        "var cont = document.body;",
        "function createAnimal(animal) {cont.appendChild(document.createElement('img')); cont.lastElementChild.src = `assets/${animal.toLowerCase()}.svg`; cont.lastElementChild.class = 'animal'}",
        "var num = 1;",
        "",
        "while (num <= 1) {",
        () => `  createAnimal('${animal}');`,
        "",
        "// Don't touch this next line or",
        "// you might get caught in the loop!",
        "  num = num + 1;",
        "}",
        "</script></body>",
      ],
      hiddenLines: [
        {start: -1, end: 4}, {start: 13, end: 14}
      ]
    },
    tests: [{
      test: "$('#preview').contents().find('img').length > 1",
      message: "It looks like your animal is still alone.\nDid you try modifying the number next to the while loop?"
    }],
    callbacks: [

    ]
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
