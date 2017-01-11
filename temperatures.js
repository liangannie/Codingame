/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526
//var tempsArr = temps.split(" ");

var tempsArr =  temps.split(" ");

// Write an action using print()
// To debug: printErr('Debug messages...');


function closestNumber (tempsArr) {
  var lowestTemp = tempsArr[1];
  
  if (lowestTemp === undefined) {
      lowestTemp = 0;
  }
  
  for (var i = 0; i < tempsArr.length; i++) {
    
    var thisTemp = tempsArr[i];

    if (Math.abs(thisTemp) < Math.abs(lowestTemp)) {
        lowestTemp = thisTemp;
      
      } else if (Math.abs(thisTemp) == Math.abs(lowestTemp) && thisTemp > lowestTemp) {
        lowestTemp = thisTemp;
      }
  }
  return lowestTemp;
}

console.log(closestNumber(tempsArr));



//print(closestTo0(tempsArr));
