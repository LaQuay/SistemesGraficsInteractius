function clickLateralElement(type, elem){
	console.log("Element clicked: " + type + ", " + elem);
	
	for (i = 0; i < modelObjects.pyramidsTG.length; ++i){
		modelObjects.pyramidsTG[i].selected = (type == "P" && i == elem);
	}
	
	for (i = 0; i < modelObjects.spheresTG.length; ++i){
		modelObjects.spheresTG[i].selected = (type == "S" && i == elem);
	}
	writeLateralElements();
}

function onButtonClick(ev) {
	if (ev == "buttonAddPyramid") {
		console.log("Adding Pyramid");
		
		var actualNumberOfPyramids = modelObjects.pyramidsTG.length;			
		modelObjects.pyramidsTG[actualNumberOfPyramids] = newObjectValues();
		
		// Marcamos la primera piramide como seleccionada
		if (actualNumberOfPyramids == 0) {
			modelObjects.pyramidsTG[0].selected = true;
		}

		drawScene();
	} else if (ev == "buttonAddSphere") {
		console.log("Adding Sphere");
		
		var actualNumberOfSpheres = modelObjects.spheresTG.length;			
		modelObjects.spheresTG[actualNumberOfSpheres] = newObjectValues();

		drawScene();
	}
	
	writeLateralElements();
}

function setKeyboardListener() {
	document.body.addEventListener('keydown', function(evt) {
		var key = evt.key;
		console.log('Key click: ' + key);

		// Se trata de hacer una dependencia circular, el objeto no es un array así que automaticamente
		// no es capaz de hacerlo, cuando llegue al final de los pyramids pasará a los spheres
		if (key == 'ArrowRight') {
		  var isPyramidSelected = false;
		  for (i = 0; i < modelObjects.pyramidsTG.length; ++i){
			if (modelObjects.pyramidsTG[i].selected) {
				isPyramidSelected = true;
				modelObjects.pyramidsTG[i].selected = false;
				
				if (i < modelObjects.pyramidsTG.length - 1) {
					modelObjects.pyramidsTG[i + 1].selected = true;					
				} else {
					if (modelObjects.spheresTG.length != 0) {
						modelObjects.spheresTG[0].selected = true;	
					} else {
						modelObjects.pyramidsTG[0].selected = true;							
					}
				}
				break;
			}
		  }
		  
		  if (!isPyramidSelected){
			  for (i = 0; i < modelObjects.spheresTG.length; ++i){
				if (modelObjects.spheresTG[i].selected) {
					modelObjects.spheresTG[i].selected = false;
					
					if (i < modelObjects.spheresTG.length - 1) {
						modelObjects.spheresTG[i + 1].selected = true;					
					} else {
						if (modelObjects.pyramidsTG.length != 0) {
							modelObjects.pyramidsTG[0].selected = true;	
						} else {
							modelObjects.spheresTG[0].selected = true;							
						}
					}
					break;
				}
			  }
		  }
		  writeLateralElements();
		} else if (key == 'ArrowLeft') {
		  var isPyramidSelected = false;
		  for (i = 0; i < modelObjects.pyramidsTG.length; ++i){
			if (modelObjects.pyramidsTG[i].selected) {
				isPyramidSelected = true;
				modelObjects.pyramidsTG[i].selected = false;
				
				if (i != 0) {
					modelObjects.pyramidsTG[i - 1].selected = true;					
				} else {
					if (modelObjects.spheresTG.length != 0) {
						modelObjects.spheresTG[modelObjects.spheresTG.length - 1].selected = true;	
					} else {
						modelObjects.pyramidsTG[modelObjects.pyramidsTG.length - 1].selected = true;							
					}
				}
				break;
			}
		  }
		  
		  if (!isPyramidSelected){
			  for (i = 0; i < modelObjects.spheresTG.length; ++i){
				if (modelObjects.spheresTG[i].selected) {
					modelObjects.spheresTG[i].selected = false;
					
					if (i != 0) {
						modelObjects.spheresTG[i - 1].selected = true;					
					} else {
						if (modelObjects.pyramidsTG.length != 0) {
							modelObjects.pyramidsTG[modelObjects.pyramidsTG.length - 1].selected = true;	
						} else {
							modelObjects.spheresTG[0].selected = true;							
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
