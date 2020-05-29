function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
<<<<<<< HEAD
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(num) {
  let i = 0;
  
  function incrementVariable () {
    i = i + 1;
    return i;
  }
  
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
=======
      array.push(`I am ${i} strange loop.`)
    }
  }
>>>>>>> bf112cabdb836bdbec856cabfe0af9673b22fb16
}