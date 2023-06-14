type FourKindsOfDataStructures =
  | { key1: boolean; key2: number } // objects
  | { [key: string]: number } // records
  | [boolean, number] // tuples
  | number[]; // arrays

// Creating type User
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

// Creating an object that is in the 'User' set
const brendan: User = {
  name: "Brendan",
  age: 25,
  isAdmin: true,
};

// Objects with more properties are assignable to objects with fewer properties
const looksLikeAUser = {
  name: "Alice",
  age: 40,
  isAdmin: false,
  bio: "...",
};

// This is okay
const alice: User = looksLikeAUser;

// This is NOT okay
// const looksLikeAUser2 : User = {
//   name: "Alice",
//   age: 40,
//   isAdmin: false,
//   bio: "...",
// };

// Reading properties
// Cannout use User.age etc notation
type Age = User["age"]; // --> number
type Name = User["name"]; // --> string
type NameOrAge = User["name" | "age"]; // --> string | number
// keyof retrieves union of all keys
type Keys = keyof User; // --> 'name' | 'age' | 'isAdmin' (string literals)
type UserValues = User[keyof User]; // --> string | number | boolean

// Very common to get values
type ValueOf<Obj> = Obj[keyof Obj];
type UserValues2 = ValueOf<User>; // --> string | number | boolean

// Optional properties
type BlogPost = {
  name: string;
  bio?: "...";
};

// Merging with intersections
// intersections create types with all properties of intersected types
type WithName = { name: string };
type WithAge = { age: number };
type WithRole = { isAdmin: boolean };

type User2 = WithName & WithAge & WithRole;

// We are not intersecting their keys
// We are intersecting the sets of values they represent
type A = { a: string };
type B = { b: number };
type C = A & B;
type KeyOfC = keyof C; // => 'a' | 'b' (The union of their keys)

// The union of two values is the intersection of their keys
type A2 = { a: string; c: boolean };
type KeyOfA = keyof A; // => 'a' | 'c'

type B2 = { b: number; c: boolean };
type KeyOfB = keyof B; // => 'b' | 'c'

type C2 = A | B;
type KeyOfC2 = keyof C; // => ('a' | 'c') & ('b' | 'c') <=> 'c'

// If some property is present on both intersected types, both will be intersected too
// type WithName = { name: string; id: string };
// type WithAge = { age: number; id: number };
// type User = WithName & WithAge;

// id is present in both types, but don't overlap
// type Id = User["id"]; // => string & number <=> never

// If your type definitions are static (they don't depend on type parameters),
// you can achieve the same results with interfaces and extend
// Interfaces have better performance
interface Organization extends WithName, WithAge {}

// Records are like objects, but their keys must share the same type
type RecordOfBoolens = Record<string, boolean>;
// Can also do => type RecordOfBooleans = { [key: string]: boolean };

// Can extract the type of a Record's values
type ValueType = RecordOfBoolens[string]; // => boolean

// The Partial generic takes an object type and returns another one that's identical,
// except that all of its properties are optional:
type Props = { value: string; focused: boolean; edited: boolean };

type PartialProps = Partial<Props>;
// is equivalent to:
type PartialProps2 = { value?: string; focused?: boolean; edited?: boolean };

// The Required generic does the opposite of Partial. It takes an object and returns another one that's identical,
// except that all of its properties are required:
type Props2 = { value?: string; focused?: boolean; edited?: boolean };

type RequiredProps = Required<Props2>;
// is equivalent to:
type RequiredProps2 = { value: string; focused: boolean; edited: boolean };

// The Pick generic removes all keys that aren't assignable to the
// type of key given as the second argument
type ValueProps = Pick<Props, "value">;
// is equivalent to:
type ValueProps2 = { value: string };

// The Omit generic is the opposite from the Pick generic
// It removes all properties thar are assignable to the type given
// in the second argument
type OmitProps = Omit<Props, "value">;
// is equivalent to:
type OmitProps2 = { edited: boolean; focused: boolean };
