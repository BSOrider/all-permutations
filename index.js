// Testear obtenerPermutaciones
const obtenerPermutacionesTest = function() {
  // casos para probar
  let casos = [
  {
    "desc": "solamente un valor en cada arreglo",
    "input": [[3],['a'],[5],['hola']],
    "correctRes": ['3a5hola']
  }, {
    "desc": "hay valores que no son arreglos",
    "input": [[1, 3],['a'],[4, 5],"imastring!"],
    "correctRes": null
  }, {
    "desc": "un solo valor",
    "input": [[1, 3, "bla", 8]],
    "correctRes": [1, 3, "bla", 8]
  }, {
    "desc": "puros numeros",
    "input": [[1, 3],[1, 3]],
    "correctRes": ["11","31","13","33"]
  }, {
    "desc": "contenido raro",
    "input": [[true, false],[null]],
    "correctRes": ["truenull","falsenull"]
  }, {
    "desc": "muchos valores",
    "input": [[11, "dji"],[11, "dji"],[11, "dji"],[11, "dji"],[11, "dji"],[11, "dji"],[11, "dji"],],
    "correctRes": ["11111111111111","dji111111111111","11dji1111111111","djidji1111111111","1111dji11111111","dji11dji11111111","11djidji11111111","djidjidji11111111","111111dji111111","dji1111dji111111","11dji11dji111111","djidji11dji111111","1111djidji111111","dji11djidji111111","11djidjidji111111","djidjidjidji111111","11111111dji1111","dji111111dji1111","11dji1111dji1111","djidji1111dji1111","1111dji11dji1111","dji11dji11dji1111","11djidji11dji1111","djidjidji11dji1111","111111djidji1111","dji1111djidji1111","11dji11djidji1111","djidji11djidji1111","1111djidjidji1111","dji11djidjidji1111","11djidjidjidji1111","djidjidjidjidji1111","1111111111dji11","dji11111111dji11","11dji111111dji11","djidji111111dji11","1111dji1111dji11","dji11dji1111dji11","11djidji1111dji11","djidjidji1111dji11","111111dji11dji11","dji1111dji11dji11","11dji11dji11dji11","djidji11dji11dji11","1111djidji11dji11","dji11djidji11dji11","11djidjidji11dji11","djidjidjidji11dji11","11111111djidji11","dji111111djidji11","11dji1111djidji11","djidji1111djidji11","1111dji11djidji11","dji11dji11djidji11","11djidji11djidji11","djidjidji11djidji11","111111djidjidji11","dji1111djidjidji11","11dji11djidjidji11","djidji11djidjidji11","1111djidjidjidji11","dji11djidjidjidji11","11djidjidjidjidji11","djidjidjidjidjidji11","111111111111dji","dji1111111111dji","11dji11111111dji","djidji11111111dji","1111dji111111dji","dji11dji111111dji","11djidji111111dji","djidjidji111111dji","111111dji1111dji","dji1111dji1111dji","11dji11dji1111dji","djidji11dji1111dji","1111djidji1111dji","dji11djidji1111dji","11djidjidji1111dji","djidjidjidji1111dji","11111111dji11dji","dji111111dji11dji","11dji1111dji11dji","djidji1111dji11dji","1111dji11dji11dji","dji11dji11dji11dji","11djidji11dji11dji","djidjidji11dji11dji","111111djidji11dji","dji1111djidji11dji","11dji11djidji11dji","djidji11djidji11dji","1111djidjidji11dji","dji11djidjidji11dji","11djidjidjidji11dji","djidjidjidjidji11dji","1111111111djidji","dji11111111djidji","11dji111111djidji","djidji111111djidji","1111dji1111djidji","dji11dji1111djidji","11djidji1111djidji","djidjidji1111djidji","111111dji11djidji","dji1111dji11djidji","11dji11dji11djidji","djidji11dji11djidji","1111djidji11djidji","dji11djidji11djidji","11djidjidji11djidji","djidjidjidji11djidji","11111111djidjidji","dji111111djidjidji","11dji1111djidjidji","djidji1111djidjidji","1111dji11djidjidji","dji11dji11djidjidji","11djidji11djidjidji","djidjidji11djidjidji","111111djidjidjidji","dji1111djidjidjidji","11dji11djidjidjidji","djidji11djidjidjidji","1111djidjidjidjidji","dji11djidjidjidjidji","11djidjidjidjidjidji","djidjidjidjidjidjidji"]
  }
  ];

  // Testear!
  for (let i = casos.length - 1; i >= 0; i--) {
  	// resultado actual
    let testRes = JSON.stringify(obtenerPermutaciones(casos[i].input));
    // resultado esperado
    let correctRes = JSON.stringify(casos[i].correctRes);
    // comparar
    if (testRes == correctRes) {
      console.log('Test "' + casos[i].desc + '" Passing!');
    } else {
      console.log('Test "' + casos[i].desc + '" Failing, expected ' + testRes + ' to be ' + casos[i].correctRes);
    }
  }
};


/**
 * 
 * Se desea obtener todas las permutaciones entre las listas. Generar las permutaciones de un arreglo de listas.
 *
 * Ejemplo de uso:
 * obtenerPermutaciones([[1,3],['a',[4,5]]);
 * 
 * @test {ok} solamente un valor en cada arreglo
 * @test {ok} hay valores que no son arreglos
 * @test {ok} un solo valor
 * @test {ok} puros numeros
 * @test {ok} contenido raro
 * @test {ok} muchos valores
 * 
 * @param arreglo de arreglos
 * 
 */
const obtenerPermutaciones = function(arrOriginal) {
  if (arrOriginal) { /* si existe... */
    if (Array.isArray(arrOriginal)) { /* si es arreglo... */
      if (arrOriginal.every(Array.isArray)) { /* si todos los valores son arreglos */
        if (arrOriginal.length > 1) { /* si hay mas de un valor */
          // preparar resultado
          let result = [];
          // volver a procesar el arreglo sin el primer valor
          let sliced = obtenerPermutaciones(arrOriginal.slice(1));
          for (let i = 0; i < sliced.length; i++) {
            for (let y = 0; y < arrOriginal[0].length; y++) {
              // forzar a string
              arrOriginal[0][y] += "";
              // crear permutaciones y guardarlos
              result.push(arrOriginal[0][y] + sliced[i]);
            }
          }
          return result;
        } else { /* hay solo un valor dentro del arreglo */
          return arrOriginal[0];
        }
      } else { /* si no todos los valores son arreglos */
      	return null;
      }
    } else { /* si no es arreglo */
      return null;
    }
  } else { /* si no existe */
    return null;
  }
};

