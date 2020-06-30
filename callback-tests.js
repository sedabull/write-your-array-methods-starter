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
let nums = [-3, -1, 0, 1, 2, 30, 45, 678];

console.groupCollapsed("newForEach");
console.log("Your newForEach output:");
newForEach(nums, echo);
console.log("Should match built in forEach output:");
nums.forEach(echo);
console.groupEnd();

function testingHelper(testnum, condition) {
  if (condition) {
    let string1 = `%cTest ${testnum}: PASS`;
    let string2 = "color: green";
    console.groupCollapsed(string1, string2);
  } else {
    let string1 = `%cTest ${testnum}: FAIL`;
    let string2 = "color: red";
    console.groupCollapsed(string1, string2);
  }
}

console.group("newSome");
const passedSomeTest1 =
  JSON.stringify(newSome(nums, isNegative)) ===
  JSON.stringify(nums.some(isNegative));
testingHelper(1, passedSomeTest1);
console.log("Your test1 newSome output:");
console.log(newSome(nums, isNegative));
console.log("Should match built in some output:");
console.log(nums.some(isNegative));
console.groupEnd();

const passedSomeTest2 =
  JSON.stringify(newSome(nums, isPositive)) ===
  JSON.stringify(nums.some(isPositive));
testingHelper(2, passedSomeTest2);
console.log("Your test2 newSome output:");
console.log(newSome(nums, isPositive));
console.log("Should match built in some output:");
console.log(nums.some(isPositive));
console.groupEnd();

const passedSomeTest3 =
  JSON.stringify(newSome(nums, isAbove10)) ===
  JSON.stringify(nums.some(isAbove10));
testingHelper(3, passedSomeTest3);
console.log("Your test3 newSome output:");
console.log(newSome(nums, isAbove10));
console.log("Should match built in some output:");
console.log(nums.some(isAbove10));
console.groupEnd();

const passedSomeTest4 =
  JSON.stringify(newSome(nums, isAbove678)) ===
  JSON.stringify(nums.some(isAbove678));
testingHelper(4, passedSomeTest4);
console.log("Your test4 newSome output:");
console.log(newSome(nums, isAbove678));
console.log("Should match built in some output:");
console.log(nums.some(isAbove678));
console.groupEnd();
console.groupEnd();

console.group("newEvery");
const passedEveryTest1 =
  JSON.stringify(newEvery(nums, isNegative)) ===
  JSON.stringify(nums.every(isNegative));
testingHelper(1, passedEveryTest1);
console.log("Your test1 newEvery output:");
console.log(newEvery(nums, isNegative));
console.log("Should match built in every output:");
console.log(nums.every(isNegative));
console.groupEnd();

const passedEveryTest2 =
  JSON.stringify(newEvery(nums, isPositive)) ===
  JSON.stringify(nums.every(isPositive));
testingHelper(2, passedEveryTest2);
console.log("Your test2 newEvery output:");
console.log(newEvery(nums, isPositive));
console.log("Should match built in every output:");
console.log(nums.every(isPositive));
console.groupEnd();

const passedEveryTest3 =
  JSON.stringify(newEvery(nums, isAbove10)) ===
  JSON.stringify(nums.every(isAbove10));
testingHelper(3, passedEveryTest3);
console.log("Your test3 newEvery output:");
console.log(newEvery(nums, isAbove10));
console.log("Should match built in every output:");
console.log(nums.every(isAbove10));
console.groupEnd();

const passedEveryTest4 =
  JSON.stringify(newEvery(nums, isAbove678)) ===
  JSON.stringify(nums.every(isAbove678));
testingHelper(4, passedEveryTest4);
console.log("Your test4 newEvery output:");
console.log(newEvery(nums, isAbove678));
console.log("Should match built in every output:");
console.log(nums.every(isAbove678));
console.groupEnd();
console.groupEnd();

console.group("newFind");
const passedFindTest1 =
  JSON.stringify(newFind(nums, isNegative)) ===
  JSON.stringify(nums.find(isNegative));
testingHelper(1, passedFindTest1);
console.log("Your test1 newFind output:");
console.log(newFind(nums, isNegative));
console.log("Should match built in find output:");
console.log(nums.find(isNegative));
console.groupEnd();

const passedFindTest2 =
  JSON.stringify(newFind(nums, isPositive)) ===
  JSON.stringify(nums.find(isPositive));
testingHelper(2, passedFindTest2);
console.log("Your test2 newFind output:");
console.log(newFind(nums, isPositive));
console.log("Should match built in find output:");
console.log(nums.find(isPositive));
console.groupEnd();

const passedFindTest3 =
  JSON.stringify(newFind(nums, isAbove10)) ===
  JSON.stringify(nums.find(isAbove10));
testingHelper(3, passedFindTest3);
console.log("Your test3 newFind output:");
console.log(newFind(nums, isAbove10));
console.log("Should match built in find output:");
console.log(nums.find(isAbove10));
console.groupEnd();

const passedFindTest4 =
  JSON.stringify(newFind(nums, isAbove678)) ===
  JSON.stringify(nums.find(isAbove678));
testingHelper(4, passedFindTest4);
console.log("Your test4 newFind output:");
console.log(newFind(nums, isAbove678));
console.log("Should match built in find output:");
console.log(nums.find(isAbove678));
console.groupEnd();
console.groupEnd();

console.group("newFindIndex");
const passedFindIndexTest1 =
  JSON.stringify(newFindIndex(nums, isNegative)) ===
  JSON.stringify(nums.findIndex(isNegative));
testingHelper(1, passedFindIndexTest1);
console.log("Your test1 newFindIndex output:");
console.log(newFindIndex(nums, isNegative));
console.log("Should match built in findIndex output:");
console.log(nums.findIndex(isNegative));
console.groupEnd();

const passedFindIndexTest2 =
  JSON.stringify(newFindIndex(nums, isPositive)) ===
  JSON.stringify(nums.findIndex(isPositive));
testingHelper(2, passedFindIndexTest2);
console.log("Your test2 newFindIndex output:");
console.log(newFindIndex(nums, isPositive));
console.log("Should match built in findIndex output:");
console.log(nums.findIndex(isPositive));
console.groupEnd();

const passedFindIndexTest3 =
  JSON.stringify(newFindIndex(nums, isAbove10)) ===
  JSON.stringify(nums.findIndex(isAbove10));
testingHelper(3, passedFindIndexTest3);
console.log("Your test3 newFindIndex output:");
console.log(newFindIndex(nums, isAbove10));
console.log("Should match built in findIndex output:");
console.log(nums.findIndex(isAbove10));
console.groupEnd();

const passedFindIndexTest4 =
  JSON.stringify(newFindIndex(nums, isAbove678)) ===
  JSON.stringify(nums.findIndex(isAbove678));
testingHelper(4, passedFindIndexTest4);
console.log("Your test4 newFindIndex output:");
console.log(newFindIndex(nums, isAbove678));
console.log("Should match built in findIndex output:");
console.log(nums.findIndex(isAbove678));
console.groupEnd();
console.groupEnd();

console.group("newMap");
const passedMapTest1 =
  JSON.stringify(newMap(nums, isNegative)) ===
  JSON.stringify(nums.map(isNegative));
testingHelper(1, passedMapTest1);
console.log("Your Test1 newMap output:");
console.log(JSON.stringify(newMap(nums, isNegative)));
console.log("Should match built in map output:");
console.log(JSON.stringify(nums.map(isNegative)));
console.groupEnd();

const passedMapTest2 =
  JSON.stringify(newMap(nums, addTwo)) === JSON.stringify(nums.map(addTwo));
testingHelper(2, passedMapTest2);
console.log("Your Test2 newMap output:");
console.log(JSON.stringify(newMap(nums, addTwo)));
console.log("Should match built in map output:");
console.log(JSON.stringify(nums.map(addTwo)));
console.groupEnd();
console.groupEnd();

console.group("newFilter");
const passedFilterTest1 =
  JSON.stringify(newFilter(nums, isNegative)) ===
  JSON.stringify(nums.filter(isNegative));
testingHelper(1, passedFilterTest1);
console.log("Your test1 newFilter output:");
console.log(newFilter(nums, isNegative));
console.log("Should match built in filter output:");
console.log(nums.filter(isNegative));
console.groupEnd();

const passedFilterTest2 =
  JSON.stringify(newFilter(nums, isPositive)) ===
  JSON.stringify(nums.filter(isPositive));
testingHelper(2, passedFilterTest2);
console.log("Your test2 newFilter output:");
console.log(newFilter(nums, isPositive));
console.log("Should match built in filter output:");
console.log(nums.filter(isPositive));
console.groupEnd();

const passedFilterTest3 =
  JSON.stringify(newFilter(nums, isAbove10)) ===
  JSON.stringify(nums.filter(isAbove10));
testingHelper(3, passedFilterTest3);
console.log("Your test3 newFilter output:");
console.log(newFilter(nums, isAbove10));
console.log("Should match built in filter output:");
console.log(nums.filter(isAbove10));
console.groupEnd();

const passedFilterTest4 =
  JSON.stringify(newFilter(nums, isAbove678)) ===
  JSON.stringify(nums.filter(isAbove678));
testingHelper(4, passedFilterTest4);
console.log("Your test4 newFilter output:");
console.log(newFilter(nums, isAbove678));
console.log("Should match built in filter output:");
console.log(nums.filter(isAbove678));
console.groupEnd();
console.groupEnd();
