function degToRad(degrees) {
	return degrees * Math.PI / 180;
}

//https://stackoverflow.com/a/5344074/4314686
function customClone(oldObject) {
	return JSON.parse(JSON.stringify(oldObject));
}