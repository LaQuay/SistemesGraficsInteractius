function getObjectTG() {
	var pyramidsTG = [];

	return {
		pyramidsTG
	}
}

var objectTG = {
	"rotateAng": 0,
	"rotate": [0,0,0],
	"translate": [0,0,0],
	"scale": [0,0,0]	
}

function getBasePyramid() {
	var pyramid = {
		"vertices": DEFAULT_VERTICES_PYRAMID,
		"verticesItemSize": DEFAULT_VERTICES_ITEM_SIZE,
		"verticesNumItems": DEFAULT_VERTICES_NUM_ITEMS,
		"vertexPositionBuffer": 0,
		"colors": DEFAULT_COLORS_PYRAMID,
		"colorsItemSize": DEFAULT_COLORS_ITEM_SIZE,
		"colorsNumItems": DEFAULT_COLOR_NUM_ITEMS,
		"vertexColorBuffer": 0 
	}
	
	return pyramid;
}

var DEFAULT_VERTICES_PYRAMID = [
	// Front face
	 0.0,  1.0,  0.0,
	-1.0, -1.0,  1.0,
	 1.0, -1.0,  1.0,
	// Right face
	 0.0,  1.0,  0.0,
	 1.0, -1.0,  1.0,
	 1.0, -1.0, -1.0,
	// Back face
	 0.0,  1.0,  0.0,
	 1.0, -1.0, -1.0,
	-1.0, -1.0, -1.0,
	// Left face
	 0.0,  1.0,  0.0,
	-1.0, -1.0, -1.0,
	-1.0, -1.0,  1.0
];

var DEFAULT_COLORS_PYRAMID = [
	// Front face
	1.0, 0.0, 0.0, 1.0,
	0.0, 1.0, 0.0, 1.0,
	0.0, 0.0, 1.0, 1.0,
	// Right face
	1.0, 0.0, 0.0, 1.0,
	0.0, 0.0, 1.0, 1.0,
	0.0, 1.0, 0.0, 1.0,
	// Back face
	1.0, 0.0, 0.0, 1.0,
	0.0, 1.0, 0.0, 1.0,
	0.0, 0.0, 1.0, 1.0,
	// Left face
	1.0, 0.0, 0.0, 1.0,
	0.0, 0.0, 1.0, 1.0,
	0.0, 1.0, 0.0, 1.0
];
	
var DEFAULT_VERTICES_ITEM_SIZE = 3;
var DEFAULT_VERTICES_NUM_ITEMS = 12;		
var DEFAULT_COLORS_ITEM_SIZE = 4;
var DEFAULT_COLOR_NUM_ITEMS = 12;