// Example: 1
function convertToArray<T>(input: T): T[] {
  return [input];
}

convertToArray("hello");
convertToArray(5);
convertToArray({ name: "Junais" });

// Example: 2
function getIndexOfArrayItem<T>(array: T[], arrayItem: T) {
  return array.findIndex((item) => item === arrayItem); // this return a number only
}

const arr = [23, 5, 82, 65, 12];
getIndexOfArrayItem(arr, 5);

// Example: 3
const createArrayPair = <T, K>(input1: T, input2: K): [T, K] => {
  return [input1, input2];
};

createArrayPair("hello", 5);
createArrayPair(100, 5);

// Example: 4
// -> Restrict Types -> by using extends
function convertToArray2<T extends number | string>(input: T): T[] {
  return [input];
}

// Number | String only allow
convertToArray2("Hey");
convertToArray2(5);
