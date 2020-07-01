// Callback functions used as arguments in tests
const echo = function (val) {
  console.log(val);
};
const addTwo = function (val) {
  return val + 2;
};
const negate = function (val) {
  return val * -1;
};
const isAbove10 = function (val) {
  return val > 10;
};
const isAbove678 = function (val) {
  return val > 678;
};
const isNegative = function (val) {
  return val < 0;
};
const isPositive = function (val) {
  return val > 0;
};
const isNumber = function (val) {
  return typeof val === "number";
};

// Array used as argument in tests
let nums = [-3, -1, 0, 1, 2, 30, 45, 678];

// Tests
console.groupCollapsed("newForEach");
console.log("Your newForEach output:");
newForEach(nums, echo);
console.log("Should match built in forEach output:");
nums.forEach(echo);
console.groupEnd();

console.group("newSome");
testOutputs(newSome(nums, isNegative), nums.some(isNegative), 1);

testOutputs(newSome(nums, isPositive), nums.some(isPositive), 2);

testOutputs(newSome(nums, isAbove10), nums.some(isAbove10), 3);

testOutputs(newSome(nums, isAbove678), nums.some(isAbove678), 4);
console.groupEnd();

console.group("newEvery");
testOutputs(newEvery(nums, isNegative), nums.every(isNegative), 1);

testOutputs(newEvery(nums, isPositive), nums.every(isPositive), 2);

testOutputs(newEvery(nums, isAbove10), nums.every(isAbove10), 3);

testOutputs(newEvery(nums, isAbove678), nums.every(isAbove678), 4);
console.groupEnd();

console.group("newFind");
testOutputs(newFind(nums, isNegative), nums.find(isNegative), 1);

testOutputs(newFind(nums, isPositive), nums.find(isPositive), 2);

testOutputs(newFind(nums, isAbove10), nums.find(isAbove10), 3);

testOutputs(newFind(nums, isAbove678), nums.find(isAbove678), 4);
console.groupEnd();

console.group("newFindIndex");
testOutputs(newFindIndex(nums, isNegative), nums.findIndex(isNegative), 1);

testOutputs(newFindIndex(nums, isPositive), nums.findIndex(isPositive), 2);

testOutputs(newFindIndex(nums, isAbove10), nums.findIndex(isAbove10), 3);

testOutputs(newFindIndex(nums, isAbove678), nums.findIndex(isAbove678), 4);
console.groupEnd();

console.group("newMap");
testOutputs(newMap(nums, isNegative), nums.map(isNegative), 1);

testOutputs(newMap(nums, addTwo), nums.map(addTwo), 2);
console.groupEnd();

console.group("newFilter");
testOutputs(newFilter(nums, isNegative), nums.filter(isNegative), 1);

testOutputs(newFilter(nums, isPositive), nums.filter(isPositive), 2);

testOutputs(newFilter(nums, isAbove10), nums.filter(isAbove10), 3);

testOutputs(newFilter(nums, isAbove678), nums.filter(isAbove678), 4);
console.groupEnd();

// Test helper function
function testOutputs(actual, expected, testnum = "") {
  const condition = JSON.stringify(actual) === JSON.stringify(expected);
  if (condition) {
    console.groupCollapsed(`%cTest ${testnum}: PASS`, "color:green");
  } else {
    console.groupCollapsed(`%cTest ${testnum}: FAIL`, "color: red");
  }
  console.log("Expected: ");
  console.log(expected);
  console.log("Actual: ");
  console.log(actual);
  console.groupEnd();
}
