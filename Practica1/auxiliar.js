function degToRad(degrees) {
	return degrees * Math.PI / 180;
}

//https://stackoverflow.com/a/5344074/4314686
function customClone(oldObject) {
	return JSON.parse(JSON.stringify(oldObject));
}

function resize(canvas) {
  // Lookup the size the browser is displaying the canvas.
  var displayWidth  = canvas.clientWidth;
  var displayHeight = canvas.clientHeight;
 
  // Check if the canvas is not the same size.
  if (canvas.width  != displayWidth ||
	  canvas.height != displayHeight) {	 
	// Make the canvas the same size
	canvas.width  = displayWidth;
	canvas.height = displayHeight;
  }
}