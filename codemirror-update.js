/*global $ CodeMirror:true*/
// Same as $(document).ready(function(){ ... });
$(() => {

var delay = 0;

var currentChallenge = 0;

var title = document.getElementById('title');
var instructions = document.getElementById('instructions');
var nextChallenge = document.getElementById('next-button');
var checkBtn = document.getElementById('check-button');

var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
  mode: 'htmlmixed',
  lineNumbers: false,
  theme: "mdn-like"
});

function updatePreview() {
  var previewFrame = document.getElementById('preview');
  var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
  preview.open();
  preview.write(editor.getValue());
  preview.close();
  editor.refresh();
}

editor.on("change", function() {
  clearInterval(delay);
  delay = setTimeout(updatePreview, 300);
});


/*checkBtn.onclick = function() {
  updatePreview();
}*/


nextChallenge.onclick = function() {
  currentChallenge++;
  constructPage(currentChallenge);
}

constructPage(currentChallenge);

function constructPage(challengeNumber) {
  var challenge = _.find(challenges, c => c.number === challengeNumber);
  setupEditor(challenge);
  setupText(challenge);
}

/**
 * Set up preview seed and hide lines irrelevant to learner
 */
function setupEditor(challenge) {
  var editorVal = '';
  for (var i = 0; i < challenge.seed.code.length; i++) {
    if (i === 0) editorVal += challenge.seed.code[i];
    else editorVal += `\n${challenge.seed.code[i]}`;
  }
  editor.setValue(editorVal);
  for (var j = 0; j < challenge.seed.hiddenLines.length; j++) {
    var range = challenge.seed.hiddenLines[j];
    editor.markText({line: range.start}, {line: range.end}, {inclusiveRight: true, inclusiveLeft: true, collapsed: true});
  }
}

/**
 * Set up instructions for current challange
 */
function setupText(challenge) {
  title.innerText = challenge.name;

  // Clear old instructions
  while(instructions.firstChild) {
    instructions.removeChild(instructions.firstChild);
  }
  
  for (var i = 0; i < challenge.instructions.length; i++) {
    var p = document.createElement("p");
    p.innerHTML = challenge.instructions[i];
    instructions.appendChild(p);
  }
}

});
