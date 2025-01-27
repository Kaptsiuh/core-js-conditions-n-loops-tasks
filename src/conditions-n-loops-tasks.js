/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = a;
  if (b > result) {
    result = b;
  } else if (c > result) {
    result = c;
  }
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let result = '';
  if (queen.x === king.x || queen.y === king.y) {
    result = true;
  } else if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result = false;
  if (a === b && Math.abs(c - a) <= 1) {
    result = true;
  } else if (b === c && Math.abs(a - b) <= 1) {
    result = true;
  } else if (c === a && Math.abs(b - a) <= 1) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumber = [
    { value: 10, roman: 'X' },
    { value: 9, roman: 'IX' },
    { value: 5, roman: 'V' },
    { value: 4, roman: 'IV' },
    { value: 1, roman: 'I' },
  ];
  let number = num;
  let result = '';
  for (let i = 0; i < romanNumber.length; i += 1) {
    for (let j = 0; number >= romanNumber[i].value; j += 1) {
      result += romanNumber[i].roman;
      number -= romanNumber[i].value;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const obj = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
    '.': 'point',
    ',': 'point',
    '-': 'minus',
  };
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (true) {
      case result.length === 0:
        result = obj[numberStr[i]];
        break;
      case result.length > 0:
        result += ` ${obj[numberStr[i]]}`;
        break;
      default:
        result = '';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = true;
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      result = false;
    }
  }
  return result;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;
  for (let i = 0; i < String(num).length; i += 1) {
    if (String(num)[i] === String(digit)) {
      result = true;
    }
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let left = 0;
  let right = 0;
  let result = -1;
  for (let i = 0; i < arr.length; i += 1) {
    right += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    right -= arr[i];
    if (left === right) {
      result = i;
    }
    left += arr[i];
  }
  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let x = 0;
  let y = 0;
  let xEnd = size - 1;
  let yEnd = size - 1;
  let acc = 1;
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }
  for (; x <= xEnd && y <= yEnd; ) {
    for (let i = y; i <= yEnd; i += 1) {
      arr[x][i] = acc;
      acc += 1;
    }
    x += 1;
    for (let i = x; i <= xEnd; i += 1) {
      arr[i][yEnd] = acc;
      acc += 1;
    }
    yEnd -= 1;
    for (let i = yEnd; i >= y; i -= 1) {
      arr[xEnd][i] = acc;
      acc += 1;
    }
    xEnd -= 1;
    for (let i = xEnd; i >= x; i -= 1) {
      arr[i][y] = acc;
      acc += 1;
    }
    y += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const cloneMatrix = [...matrix];
  const arr = [];
  for (let i = 0; i < cloneMatrix.length; i += 1) {
    arr[i] = [];
  }
  for (let i = cloneMatrix[0].length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < cloneMatrix.length; j += 1) {
      arr[j][cloneMatrix.length - 1 - i] = cloneMatrix[i][j];
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      cloneMatrix[i][j] = arr[i][j];
    }
  }
  return cloneMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const cloneArr = arr;
  let currentElement = [];
  for (let i = 1; i < cloneArr.length; i += 1) {
    currentElement = cloneArr[i];
    let j = i - 1;
    for (; j >= 0 && cloneArr[j] > currentElement; ) {
      cloneArr[j + 1] = cloneArr[j];
      j -= 1;
    }
    cloneArr[j + 1] = currentElement;
  }
  return cloneArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let cloneStr = str;
  for (let i = 0; i < iterations; i += 1) {
    let odd = '';
    let honest = '';
    for (let j = 1; j < cloneStr.length; j += 2) {
      honest += cloneStr[j - 1];
      odd += cloneStr[j];
    }
    cloneStr = honest + odd;
  }
  return cloneStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let numberClone = number;
  const arr = [];
  for (; numberClone > 0; ) {
    arr.unshift(numberClone % 10);
    numberClone = Math.floor(numberClone / 10);
  }
  let result = [];
  let index = arr.length - 2;
  let isLessIndex = false;
  for (index; isLessIndex === false; ) {
    if (arr[index] < arr[index + 1]) {
      isLessIndex = true;
    }
    if (isLessIndex === false) {
      index -= 1;
    }
  }
  let minIndex = index + 1;
  for (let j = index + 1; j < arr.length; j += 1) {
    if (arr[j] > arr[index] && arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
  for (let n = index + 1; n < arr.length - 1; n += 1) {
    for (let b = n + 1; b < arr.length; b += 1) {
      if (arr[n] > arr[b]) {
        [arr[n], arr[b]] = [arr[b], arr[n]];
      }
    }
  }
  result = [...arr];
  if (index < 0) {
    return number;
  }
  return +result.join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
