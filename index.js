document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("signature-canvas");
  var signaturePad = new SignaturePad(canvas, {
    minWidth: 0,
    maxWidth: 1,
    penColor: "rgb(0, 0, 0)", // black ink
  });

  var clearButton = document.getElementById("clear-button");
  var saveButton = document.getElementById("save-button");
  var colorPicker = document.getElementById("color-picker");
  var penSizeInput = document.getElementById("pen-size");
  var applySettingsButton = document.getElementById("apply-settings");

  clearButton.addEventListener("click", function () {
    signaturePad.clear();
  });

  saveButton.addEventListener("click", function () {
    if (signaturePad.isEmpty()) {
      alert("Please provide your signature first.");
    } else {
      var dataURL = signaturePad.toDataURL();
      download(dataURL, "signature.png");
    }
  });

  applySettingsButton.addEventListener("click", function () {
    var penColor = colorPicker.value;
    var penSize = parseInt(penSizeInput.value);

    signaturePad.penColor = penColor;
    signaturePad.minWidth = penSize;
    signaturePad.maxWidth = penSize;
  });

  // Function to download the signature
  function download(dataURL, filename) {
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
