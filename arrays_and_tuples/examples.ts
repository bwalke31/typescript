// Tuples are essentially lists of types
// Fixed size and known datatypes
type SomeTuple = [1, "bob", 2];
type SomeNumberAndString = SomeTuple[0 | 1]; // => 1, 'bob'

// Getting all the values of a tuple
type Values = SomeTuple[number]; // => 1, 'bob', 2

// Merging two tuples
type Tuple1 = [1, 2, 3];
type Tuple2 = [4, 5, 6];
type Tuple3 = [...Tuple1, ...Tuple2];

// Can also give indicies names
type Username = [firstname: string, lastname: string];

// Optional indicies
type OptTuple = [string, number?];
const tuple: OptTuple = ["bob", 23];
const tuple2: OptTuple = ["bob"];

// Arrays
type SomeArray = boolean[];
const arr1: SomeArray = [true, false];
type ArrayContent = SomeArray[number]; // => boolean

// Mixing arrays and tuples
// number[] that starts with 0
type PhoneNumber = [0, ...number[]];
// string[] that ends with a `!`
type Exclamation = [...string[], "!"];
// starts and ends with a zero
type Padded = [0, ...number[], 0];

// Tuples and function arguements
// addresses can be empty
type UserTuple = [name: string, age?: number, ...addresses: string[]];
function createUser(...args: UserTuple) {
  const [name, age, ...addresses] = args;
}
createUser("Gabriel", 29, "28 Central Ave", "7500 Greenback Ln");
