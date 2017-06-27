function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function named() {
    console.log('named');
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('anonymous');
  }
}



// runFiveMiles(() => console.log("Go for a five-mile run"));
//
// liftWeights(() => console.log("Pump iron"));
//
// swimFortyLaps(() => console.log("Swim 40 laps"));
//
// function excerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }
//
// function Monday() {
//   excerciseRoutine(liftWeights);
// }
//
// function Tuesday() {
//   excerciseRoutine(() => console.log('Stretch! Work that core!'));
// }
//
// function Wednesday() {
//   excerciseRoutine(runFiveMiles);
// }
//
// function Thursday() {
//   excerciseRoutine(liftWeights);
// }
//
// function Friday() {
//   excerciseRoutine(swimFortyLaps);
// }
//
// function morningRoutine(excercise) {
//   var breakfast = null;
//
//   if (exercise === liftWeights) {
//     breakfast = 'protein bar';
//   } else if (exercise === swimFortyLaps) {
//     breakfast = 'kale smoothie';
//   } else {
//     breakfast = 'granola';
//   }
//
//   excerciseRoutine(excercise);
//
//   return function() {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//   };
// }
//
// var afterExercise = morningRoutine(liftWeights);
// afterExercise();
