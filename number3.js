function checkString(string) {
  let stringReverse = [];

  for (let i = string.length - 1; i >= 0; i--) {
    stringReverse.push(string[i]);
  }

  for (let i = 0; i < string.length; i++) {
    if(stringReverse[i] == string[i]) {
      return true;
    } else {
      return false;
    }
  }

}

console.log(checkString("nusantech"));