function firstOccurence(haystack, needle) {
  return haystack.indexOf(needle);
}
console.log(firstOccurence("safbuts", "sad"));

function sqrt(n) {
  if (n == 0 || isNaN(n)) {
    return n;
  }
  let i = 1;
  let result = 1;
  while (result <= n) {
    i++;
    result = i * i;
  }
  return i - 1;
}
console.log(sqrt(8));

function singleElement(array) {
  let singleNum = 0;
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count += 1;
      }
    }

    if (count < 2) {
      singleNum = array[i];
    }
  }
  return singleNum;
}
console.log(singleElement([4, 1, 2, 1, 2]));

function isHappy(num) {
  const obj = {};
  const recursion = (number) => {
    const array = number.toString().split("");
    let newNumber = 0;

    for (let i = 0; i < array.length; i++) {
      newNumber += Number(array[i]) ** 2;
    }

    if (newNumber === 1) return true;

    if (obj[newNumber]) return false;
    obj[newNumber] = newNumber;
    return recursion(newNumber);
  };

  return recursion(num);
}
console.log(isHappy(19));
