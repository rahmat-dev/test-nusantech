function fishBash(number) {
  for(var i = 1; i <= number; i++) {
    if(i % 3 == 0) {
      console.log("fish");
    }

    if(i % 5 == 0) {
      console.log("bash");
    }

    if(i % 15 == 0) {
      console.log("fish bash");
    }
  }
}

fishBash(20);