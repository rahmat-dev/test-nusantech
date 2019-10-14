function asc(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if(data[i] > data[j]) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }

  console.log(data);
}

function desc(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if(data[i] < data[j]) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }

  console.log(data);
}

asc([2, 4, 1, 3, 5, 7, 8, 3, 0, 9]);
desc([2, 4, 1, 3, 5, 7, 8, 3, 0, 9]);