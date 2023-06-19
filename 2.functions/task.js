function getArrayParams(...arr) {
  let min, max = arr[0];
  let avg;
  max = Math.max(...arr);
  min = Math.min(...arr);
  let total = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0); 
  avg = Number((total / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr == 0) { 
    return 0 
  } else {
  let total = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0); 
  return total;
  }
}

function differenceMaxMinWorker(...arr) {
  let min, max = arr[0];
  if (arr == 0) { 
    return 0 
  } else {
    max = Math.max(...arr);
    min = Math.min(...arr);
    return max - min;
  }

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr == 0) { 
    return 0 
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      } 
    }
  return sumEvenElement - sumOddElement;
  }  
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr == 0) { 
    return 0 
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      } 
    }
    return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
