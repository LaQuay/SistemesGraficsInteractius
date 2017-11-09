function updateElementClicked(type, elem){
	console.log("Element clicked: " + type + ", " + elem);
	
	for (i = 0; i < modelObjects.pyramidsTG.length; ++i){
		modelObjects.pyramidsTG[i].selected = (type == "P" && i == elem);
	}
	
	for (i = 0; i < modelObjects.spheresTG.length; ++i){
		modelObjects.spheresTG[i].selected = (type == "S" && i == elem);
	}
	
	for (i = 0; i < modelObjects.cubesTG.length; ++i){
		modelObjects.cubesTG[i].selected = (type == "C" && i == elem);
	}
	updateVisualElements();
}

// ev, id del boton
// objectTG, transformaciones geometricas y tipo, por ejemplo 'pyramidsTG'
function onButtonAddObjectClick(ev) {
	var objectAdded = null;
	if (ev == "buttonAddPyramid") {
		console.log("Adding Pyramid");
		isObjectAdded = true;
			
		var actualNumberOfCubes = modelObjects.cubesTG.length;			
		var actualNumberOfSpheres = modelObjects.spheresTG.length;	
		var actualNumberOfPyramids = modelObjects.pyramidsTG.length;	
		
		modelObjects.pyramidsTG[actualNumberOfPyramids] = newObjectValues();
		
		objectAdded = modelObjects.pyramidsTG[actualNumberOfPyramids];
		
		modifyObjectTGFromControls(objectAdded);
	
		// Marcamos la actual piramide como seleccionada
		updateElementClicked("P", actualNumberOfPyramids);
	} else if (ev == "buttonAddSphere") {
		console.log("Adding Sphere");
		isObjectAdded = true;
		
		var actualNumberOfCubes = modelObjects.cubesTG.length;			
		var actualNumberOfSpheres = modelObjects.spheresTG.length;	
		var actualNumberOfPyramids = modelObjects.pyramidsTG.length;
		
		modelObjects.spheresTG[actualNumberOfSpheres] = newObjectValues();
		
		objectAdded = modelObjects.spheresTG[actualNumberOfSpheres];
		
		modifyObjectTGFromControls(objectAdded);
		
		// Marcamos la actual sphere como seleccionada		
		updateElementClicked("S", actualNumberOfSpheres);
	} else if (ev == "buttonAddCube") {
		console.log("Adding Cube");
		isObjectAdded = true;
		
		var actualNumberOfCubes = modelObjects.cubesTG.length;			
		var actualNumberOfSpheres = modelObjects.spheresTG.length;	
		var actualNumberOfPyramids = modelObjects.pyramidsTG.length;	
		
		modelObjects.cubesTG[actualNumberOfCubes] = newObjectValues();
		
		objectAdded = modelObjects.cubesTG[actualNumberOfCubes];
		
		modifyObjectTGFromControls(objectAdded);
		
		// Marcamos la actual cube como seleccionada		
		updateElementClicked("C", actualNumberOfCubes);
	}
	
	if (objectAdded != null) {		
		drawScene();
	}
	
	updateVisualElements();
}

function setKeyboardListener() {
	document.body.addEventListener('keydown', function(evt) {
		var key = evt.key;
		console.log('Key click: ' + key);
		
		if (key == 'd') {
			var object = getSelectedObject();
			
			if (object != null) {
				modifyObjectTG(object, "position-x", object.translate[0] + 0.2, true);
			}
		} else if (key == 'a') {
			var object = getSelectedObject();
			
			if (object != null) {
				modifyObjectTG(object, "position-x", object.translate[0] - 0.2, true);
			}
		} else if (key == 'w') {
			var object = getSelectedObject();
			
			if (object != null) {
				modifyObjectTG(object, "position-y", object.translate[1] + 0.2, true);
			}
		} else if (key == 's') {
			var object = getSelectedObject();
			
			if (object != null) {
				modifyObjectTG(object, "position-y", object.translate[1] - 0.2, true);
			}
		}

		// Se trata de hacer una dependencia circular, el objeto no es un array así que automaticamente
		// no es capaz de hacerlo. Asi que itera por los cubos, cuando termina itera por spheres y
		// cuando termina itera por piramides
		if (key == 'ArrowRight') {
		  var isCubeSelected = false;
		  for (i = 0; i < modelObjects.cubesTG.length; ++i){
			if (modelObjects.cubesTG[i].selected) {
				isCubeSelected = true;
				modelObjects.cubesTG[i].selected = false;
				
				if (i < modelObjects.cubesTG.length - 1) {
					modelObjects.cubesTG[i + 1].selected = true;					
				} else {
					if (modelObjects.spheresTG.length != 0) {
						modelObjects.spheresTG[0].selected = true;	
					} else if (modelObjects.pyramidsTG.length != 0) {
						modelObjects.pyramidsTG[0].selected = true;	
					} else {
						modelObjects.cubesTG[0].selected = true;							
					}
				}
				break;
			}
		  }
		  
		  var isSphereSelected = false;
		  if (!isCubeSelected) {
			  for (i = 0; i < modelObjects.spheresTG.length; ++i){
				if (modelObjects.spheresTG[i].selected) {
					isSphereSelected = true;
					modelObjects.spheresTG[i].selected = false;
					
					if (i < modelObjects.spheresTG.length - 1) {
						modelObjects.spheresTG[i + 1].selected = true;					
					} else {
						if (modelObjects.pyramidsTG.length != 0) {
							modelObjects.pyramidsTG[0].selected = true;	
						} else if (modelObjects.cubesTG.length != 0) {
							modelObjects.cubesTG[0].selected = true;	
						} else {
							modelObjects.spheresTG[0].selected = true;							
						}
					}
					break;
				}
			  }
		  }
		  
		  if (!isCubeSelected && !isSphereSelected){
			  for (i = 0; i < modelObjects.pyramidsTG.length; ++i){
				if (modelObjects.pyramidsTG[i].selected) {
					isSphereSelected = true;
					modelObjects.pyramidsTG[i].selected = false;
					
					if (i < modelObjects.pyramidsTG.length - 1) {
						modelObjects.pyramidsTG[i + 1].selected = true;					
					} else {
						if (modelObjects.cubesTG.length != 0) {
							modelObjects.cubesTG[0].selected = true;	
						} else if (modelObjects.spheresTG.length != 0) {
							modelObjects.spheresTG[0].selected = true;	
						} else {
							modelObjects.pyramidsTG[0].selected = true;							
						}
					}
					break;
				}
			  }
			  
		  }
		  updateVisualElements();
		} else if (key == 'ArrowLeft') {
		  var isCubeSelected = false;
		  for (i = 0; i < modelObjects.cubesTG.length; ++i){
			if (modelObjects.cubesTG[i].selected) {
				isCubeSelected = true;
				modelObjects.cubesTG[i].selected = false;
				
				if (i != 0) {
					modelObjects.cubesTG[i - 1].selected = true;					
				} else {
					if (modelObjects.pyramidsTG.length != 0) {
						modelObjects.pyramidsTG[modelObjects.pyramidsTG.length - 1].selected = true;	
					} else if (modelObjects.spheresTG.length != 0) {
						modelObjects.spheresTG[modelObjects.spheresTG.length - 1].selected = true;	
					} else {
						modelObjects.cubesTG[modelObjects.cubesTG.length - 1].selected = true;							
					}
				}
				break;
			}
		  }
		  
		  var isSphereSelected = false;
		  if (!isCubeSelected) {
			  for (i = 0; i < modelObjects.spheresTG.length; ++i){
				if (modelObjects.spheresTG[i].selected) {
					isSphereSelected = true;
					modelObjects.spheresTG[i].selected = false;
					
					if (i != 0) {
						modelObjects.spheresTG[i - 1].selected = true;					
					} else {
						if (modelObjects.cubesTG.length != 0) {
							modelObjects.cubesTG[modelObjects.cubesTG.length - 1].selected = true;
						} else if (modelObjects.pyramidsTG.length != 0) {
							modelObjects.pyramidsTG[modelObjects.pyramidsTG.length - 1].selected = true;	
						} else {
							modelObjects.spheresTG[modelObjects.spheresTG.length - 1].selected = true;							
						}
					}
					break;
				}
			  }
		  }
		  
		  if (!isCubeSelected && !isSphereSelected){
			  for (i = 0; i < modelObjects.pyramidsTG.length; ++i){
				if (modelObjects.pyramidsTG[i].selected) {
					isSphereSelected = true;
					modelObjects.pyramidsTG[i].selected = false;
					
					if (i != 0) {
						modelObjects.pyramidsTG[i - 1].selected = true;					
					} else {
						if (modelObjects.spheresTG.length != 0) {
							modelObjects.spheresTG[modelObjects.spheresTG.length - 1].selected = true;							
						} else if (modelObjects.cubesTG.length != 0) {
							modelObjects.cubesTG[modelObjects.cubesTG.length - 1].selected = true;	
						} else {
							modelObjects.pyramidsTG[modelObjects.pyramidsTG.length - 1].selected = true;							
						}
					}
					break;
				}
			  }			  
		  }
		  updateVisualElements();
		}
	}, false);
}
