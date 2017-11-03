function drawPyramid(vertices, verticesItemSize, verticesNumItems, colors, colorsItemSize, colorsNumItems) {
	return drawElement(vertices, verticesItemSize, verticesNumItems, colors, colorsItemSize, colorsNumItems);
}

function drawElement(vertices, verticesItemSize, verticesNumItems, colors, colorsItemSize, colorsNumItems) {
	var vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	vertexBuffer.itemSize = verticesItemSize;
	vertexBuffer.numItems = verticesNumItems;
	
	var colorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
	colorBuffer.itemSize = colorsItemSize;
	colorBuffer.numItems = colorsNumItems;
	
	return {
		"vertexBuffer": vertexBuffer,
		"colorBuffer": colorBuffer
	};
}

function degToRad(degrees) {
	return degrees * Math.PI / 180;
}

//https://stackoverflow.com/a/5344074/4314686
function customClone(oldObject) {
	return JSON.parse(JSON.stringify(oldObject));
}