function fishBash(number) {
  for(var i = 1; i <= number; i++) {
    if(i % 3 == 0) {
      console.log(i, "fish");
    }

    if(i % 5 == 0) {
      console.log(i, "bash");
    }

    if(i % 15 == 0) {
      console.log(i, "fish bash");
    }
  }
}

fishBash(20);