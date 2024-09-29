let i = 1;
while (i <= 9) {
  let resultArray = []
  for (let j = 1; j <= i; j++) {
    let result = i * j;
    let lineResult = i + ' * ' + j + ' = ' + result;
    resultArray.push(lineResult);
  }

  console.log(resultArray.join('； '));
  resultArray.length = 0;
  i++;
}