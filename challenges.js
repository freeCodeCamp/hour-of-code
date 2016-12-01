/* global animal color name1 name2 iFrame $*/


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
    callbacks: []
  },
  {
    number: 2,
    name: "#2 Names for Everyone",
    instructions: [
      () => `You know, it's a bit boring calling this guy "${animal}".\nWe wouldn't be able to tell who was who in that last challenge.`,
      "How about we give him a <i>name</i> ? We can create variables that hold information like this:",
      `<pre class='codeblock'>
      var name = "value";</pre>`,
      "Now whenever we access <span class='inline-code'>name</span> we get <span class='inline-code'>\"value\"</span>.",
      () => `When we want to change the name we change what's inside the quotes. Let's try and name two ${animal}s.`
    ],
    seed: {
      code: [
        // div must be put before JS or the DOM won't be available to manipulate
        () => `<body class='${color}'>
          <div><p id="name1"></p><img src="assets/${animal}.svg"></div>
          <div><p id="name2"></p><img src="assets/${animal}.svg"></div>`,
        `<script>`,
        `// Remember to add a ; to the end of each line`,
        `var name1 = `,
        `var name2 = `,
        "",
        `if (name1) { document.getElementById("name1").textContent = name1 }; if (name2) { document.getElementById("name2").textContent = name2 }; parent.iFrame = window;`,
        `</script><style>`,
          `body { height: 90%; display: flex; justify-content: center; align-items: center; }`,
          `img { width: 150px; height: 150px; text-align: center;}`,
          `p { font-size: 20px; font-family: arial; font-weight: bold; text-align: center; margin: 0; }`,
          `.red { background-color: palevioletred; }
          .green { background-color: palegreen; }
          .blue { background-color: paleturquoise; }`,
        `</style></body>`,
      ],
      hiddenLines: [{start: -1, end: 3}, {start: 7, end: 16}]
    },
    tests: [{
      test: "(typeof iFrame.name1 === 'string') && (typeof iFrame.name2 === 'string')",
      message: "Did you add quotation marks around your values?"
    }, {
      test: "($('#preview').contents().find('#name1')[0].textContent.length > 0) && ($('#preview').contents().find('#name2')[0].textContent.length > 0)",
      message: "Are you sure both of the animals have names?"
    }, {
      test: "$('#preview').contents().find('#name1')[0].textContent !== $('#preview').contents().find('#name2')[0].textContent",
      message: "Make sure their names are unique (different from each other)."
    }],
    callbacks: [
      () => { name1 = iFrame.name1; },
      () => { name2 = iFrame.name2; }
    ],
  },
  {
    number: 3,
    name: "#3 It's ALLIIIIVEEEE!",
    instructions: [
      "Hmm, I bet they're getting restless by now. How about we help them move around?",
      () => `You can select a ${animal} by typing <span class='inline-code'>$("#name")</span> with their proper name.`,
      'Now we can add animation by appending the selection with <span class="inline-code">.addClass("x")</span>',
      'replacing <span class="inline-code"x</span> with which animation you want.',
      `Here's some animations that work (there's more!): <span class="inline-code">bounce flash pulse rubberBand shake swing tada wobble jello</span>`,
      () => `Try to get both ${name1} and ${name2} moving!`
    ],
    seed: {
      // remember to add animation and infinite classes
      code: [

      ],
      hiddenLines: [

      ]
    },
    tests: [],
    callbacks: []
  },
  {
    number: 4,
    name: "#4 Introducing Borders",
    instructions: [
      "Now that they're moving around, we should probably make sure they don't run away!",
      "Let's remodel the room while they're gone."
      // introduce <style></style> tag, border radius, style, color, size
    ],
    seed: {
      code: [],
      hiddenLines: []
    },
    tests: [],
    callbacks: [],
  },
  {
    number: 5,
    name: "#5 A Change of Scenery",
    instructions: [
      "You're probably getting tired of that background by now... What about we use a picture instead?",
      // change background-image, filter?
    ],
    seed: {
      code: [],
      hiddenLines: []
    },
    tests: [],
    callbacks: [],
  },
  {
    number: 6,
    name: "#6 Making Signs",
    // introduce html element, maybe just <h1></h1>, font-size, color, background-color
    instructions: [
      "Hey, it's starting to look pretty spiffy. I think we 'ought to hang up a sign somewhere, so that people can find this place."
      // you can animate the title too!
    ],
    seed: {
      code: [],
      hiddenLines: []
    },
    tests: [],
    callbacks: [],
  },
  {
    number: 7,
    name: "#7 Let's Add Knickknacks",
    instructions: [
      "Since it's almost the holiday season I think we should decorate the place.",
      // introduce <img> tag with src, tell them to id all of them for next challenge
    ],
    seed: {
      code: [
      ],
      hiddenLines: [
      ]
    },
    tests: []
  },
  {
    number: 8,
    name: "#8 Positioning",
    instructions: [
      "It's dangerous having everything lumped up in the center like that. Let's reposition the decorations.",
      // absolute positioning, let them use top: left, etc. using id selectors
    ],
    seed: {
      code: [
      ],
      hiddenLines: [
      ]
    },
    tests: []
  },
  {
    number: 9,
    name: "#9 Let's Resize!",
    instructions: [
      "",
      // height, width, z-index
    ],
    seed: {
      code: [
      ],
      hiddenLines: [
      ]
    },
    tests: []
  },
  {
    number: 10,
    name: "#10 HTML Animals",
    instructions: [
      "OK, I think we're ready to let the animals back in.",
      // Use img to create the elements
      // Use jQuery to select/give them animations
    ],
    seed: {
      code: [
      ],
      hiddenLines: [
      ]
    },
    tests: []
  }
  // so on ...
];
