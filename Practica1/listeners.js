function clickLateralElement(type, elem){
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
	writeLateralElements();
}

// TODO Implementar posición por defecto
function onButtonClick(ev) {
	if (ev == "buttonAddPyramid") {
		console.log("Adding Pyramid");
			
		var actualNumberOfCubes = modelObjects.cubesTG.length;			
		var actualNumberOfSpheres = modelObjects.spheresTG.length;	
		var actualNumberOfPyramids = modelObjects.pyramidsTG.length;	
		
		modelObjects.pyramidsTG[actualNumberOfPyramids] = newObjectValues();
	
		// Marcamos la primera piramide como seleccionada
		if ((actualNumberOfCubes + actualNumberOfSpheres + actualNumberOfPyramids) == 0) {
			modelObjects.pyramidsTG[0].selected = true;
		}

		drawScene();
	} else if (ev == "buttonAddSphere") {
		console.log("Adding Sphere");
		
		var actualNumberOfCubes = modelObjects.cubesTG.length;			
		var actualNumberOfSpheres = modelObjects.spheresTG.length;	
		var actualNumberOfPyramids = modelObjects.pyramidsTG.length;
		modelObjects.spheresTG[actualNumberOfSpheres] = newObjectValues();
		
		// Marcamos la primera sphere como seleccionada
		if ((actualNumberOfCubes + actualNumberOfSpheres + actualNumberOfPyramids) == 0) {
			modelObjects.spheresTG[0].selected = true;
		}

		drawScene();
	} else if (ev == "buttonAddCube") {
		console.log("Adding Cube");
		
		var actualNumberOfCubes = modelObjects.cubesTG.length;			
		var actualNumberOfSpheres = modelObjects.spheresTG.length;	
		var actualNumberOfPyramids = modelObjects.pyramidsTG.length;	
		modelObjects.cubesTG[actualNumberOfCubes] = newObjectValues();
		
		// Marcamos la primera cube como seleccionada
		if ((actualNumberOfCubes + actualNumberOfSpheres + actualNumberOfPyramids) == 0) {
			modelObjects.cubesTG[0].selected = true;
		}

		drawScene();
	}
	
	writeLateralElements();
}

function setKeyboardListener() {
	document.body.addEventListener('keydown', function(evt) {
		var key = evt.key;
		console.log('Key click: ' + key);

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
		  writeLateralElements();
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
		  writeLateralElements();
		}
	}, false);
}
