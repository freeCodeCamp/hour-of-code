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

function setupEditor(challenge) {
  var editorVal = '';
  for (var i = 0; i < challenge.seedCode.length; i++) {
    if (i === 0) editorVal += challenge.seedCode[i];
    else editorVal += `\n${challenge.seedCode[i]}`;
  }
  editor.setValue(editorVal);
  //editor.markText({line: 0}, {line: 1}, {inclusiveRight: true, inclusiveLeft: true, collapsed: true});
  //editor.markText({line: 16}, {line: 21}, {inclusiveRight: true, inclusiveLeft: true, collapsed: true});
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