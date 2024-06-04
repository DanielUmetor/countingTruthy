function countTruthy() {
    let inputValues = document.getElementById('inputValues').value;
    let valuesArray = inputValues.split(',');
    let count = 0;
    valuesArray.forEach(value => {
      if (value.trim()) {
        count++;
      }
    });
    document.getElementById('result').textContent = count;
  }