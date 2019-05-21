'use strict';

let arithmetic = module.exports = {};
//Atempt at refactoring 

// function anaylizeThis (a,b) {
//   let bool = true;
//   if( typeof a !== "number" || typeof b !== "number" ) { return bool = false; }
//   else { return bool = true};
// }

arithmetic.add = function(a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  return a+b;
  // Atempt at doing deeper calculations
  // console.log(parseInt(args));
  // for (let i = 0; i <= args.length; i++){
  //   if (typeof args[i] !== 'number' /*|| typeof args[i+1] !== 'number'*/ ) { return null}
  // }
  //return args;
};

arithmetic.subtract = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  return a-b;
};

arithmetic.multiply = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  return a*b;
};

arithmetic.division = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  if ( b === 0) {return null; }
  return a/b;
}
