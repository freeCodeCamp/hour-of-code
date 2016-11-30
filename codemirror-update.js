/*global $ CodeMirror challenges _*/

var animal = "";
var color = "";
var name1 = "";
var name2 = "";
var delay = 0;
var currentChallenge = 0;

$(() => {

// DOM items
var title = document.getElementById('title');
var instructions = document.getElementById('instructions');
var nextChallenge = document.getElementById('next-button');
var checkBtn = document.getElementById('check-button');
var resetBtn = document.getElementById('reset-button');
var successMsg = document.getElementById('success-msg');
var failMsg = document.getElementById('fail-msg');

var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
  mode: 'htmlmixed',
  lineNumbers: true,
  lineNumberFormatter: () => "",
  theme: "mdn-like elegant"
});

// Get website URL for linkback at top

var url = window.location.origin;
$('#linkback').html(`<a href="${url}">Return to Start</a>`);

$('#linkback').click(e => {
  if (!(confirm("Are you sure you want to restart? You'll lose any progress.")))
    e.preventDefault();
});

// Set up preview seed and hide lines irrelevant to learner

function setupEditor(challenge) {
 var editorVal = '';
 for (var i = 0; i < challenge.seed.code.length; i++) {
   editorVal += (typeof challenge.seed.code[i] === "function") ? challenge.seed.code[i]() : challenge.seed.code[i];
   if (!(i === challenge.seed.code.length - 1)) {
     editorVal += "\n";
   }
 }
 editor.setValue(editorVal);
 for (var j = 0; j < challenge.seed.hiddenLines.length; j++) {
   var range = challenge.seed.hiddenLines[j];
   editor.markText({line: range.start}, {line: range.end}, {inclusiveRight: true, inclusiveLeft: true, collapsed: true});
 }
}

// Set up instructions for current challange

function setupText(challenge) {
 successMsg.className = 'hidden';
 title.innerText = challenge.name;

 // Clear old instructions
 while(instructions.firstChild) {
   instructions.removeChild(instructions.firstChild);
 }

 for (var i = 0; i < challenge.instructions.length; i++) {
   var p = document.createElement("p");
   (typeof challenge.instructions[i] === "function") ?
   p.innerHTML = challenge.instructions[i]() :
   p.innerHTML = challenge.instructions[i];
   instructions.appendChild(p);
 }
}

function updatePreview() {
  var previewFrame = document.getElementById('preview');
  var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
  preview.open();
  preview.write(editor.getValue());
  preview.close();
  editor.refresh();
}

function constructPage(challengeNumber) {
  var challenge = _.find(challenges, c => c.number === challengeNumber);
  nextChallenge.className += " hidden"
  setupEditor(challenge);
  setupText(challenge);
}

editor.on("change", function() {
  clearInterval(delay);
  delay = setTimeout(updatePreview, 300);
});

nextChallenge.onclick = function() {
  currentChallenge++;
  constructPage(currentChallenge);
}

constructPage(currentChallenge);

resetBtn.onclick = function() {
  setupEditor(challenges[currentChallenge]);
}

// Display either a message of success or indication of error, based on test results

function displayResults(testMsgs) {
 if (testMsgs.length === 0) {
   challenges[currentChallenge].callbacks.forEach(func => {
     func();
   });
   successMsg.className = '';
   successMsg.innerText = "Well done! Click the Next Challenge button to continue.";
   nextChallenge.className = 'btn';
 } else {
   failMsg.className = '';
   for (var i = 0; i < testMsgs.length; i++) {
     var p = document.createElement('p');
     p.innerText = testMsgs[i];
     failMsg.appendChild(p);
   }
 }
}

function runChallengeTests(challengeNumber) {
  // Clear any existing error messages
  if (failMsg.firstChild) {
    failMsg.className = "hidden";
    while (failMsg.firstChild) {
      failMsg.removeChild(failMsg.firstChild);
    }
  }
  var challenge = _.find(challenges, c => c.number === challengeNumber);
  var testMsgs = [];
  for (var i = 0; i < challenge.tests.length; i++) {
    var testObj = challenge.tests[i];
    //console.log($('#preview').contents().find('#img-cont')[0].src);
    var pass = eval(testObj.test);
    if (!pass) {
      testMsgs.push(testObj.message);
    }
  }
  displayResults(testMsgs);
}

checkBtn.onclick = function() {
  runChallengeTests(currentChallenge);
}

});
