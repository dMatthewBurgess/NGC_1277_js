// Write Your Code Below


function equal(x, y) {
    if (x === y) {
        console.log("They are equal in type and value");
    } else if (x == y) {
        console.log("They are equal in value");
    } else {
        console.log("The values are not equal");
    }
    return;
}



// function isEqual(x, y) {
//     if (x === y) {
//       console.log('They are equal in type and value');
//     } else if (x == y) {
//       console.log('They are equal in value');
//     } else {
//       console.log('They are not equal');
//     }
//     return;
//   }

  equal(10, 10);
  equal(10, "10");