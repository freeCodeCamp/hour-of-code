/*global $ CodeMirror:true*/
// Same as $(document).ready(function(){ ... });
$(() => {

var delay = 0;
// Initialize CodeMirror editor with a nice html5 canvas demo.
var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
  mode: 'text/html',
  lineNumbers: true,
  htmlMode: true,
  theme: "mdn-like"
});

function updatePreview() {
  var previewFrame = document.getElementById('preview');
  var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
  preview.open();
  preview.write(editor.getValue());
  preview.close();
}

editor.on("change", function() {
  clearTimeout(delay);
  delay = setTimeout(updatePreview, 300);
});

setTimeout(updatePreview, 300);

});
