/**
 * Implement a generic that returns the first type
 * in a tuple.
 *
 * Hint: How would you do it if `Tuple` was a value?
 */

type First<Tuple extends any[]> = Tuple[0];

/**
 * Implement a generic that adds a type to the end
 * of a tuple.
 */
type Append<Tuple extends any[], Element> = [...Tuple, Element];

/**
 * Implement a generic that concatenates two tuples.
 */
type Concat<Tuple1 extends any[], Tuple2 extends any[]> = [
  ...Tuple1,
  ...Tuple2
];

/**
 * Implement a generic taking a tuple and returning
 * an array containing the union of all values in this tuple.
 */
type TupleToArray<Tuple extends any[]> = Tuple[number][];

/**
 * Create a generic `NonEmptyArray` type that represents
 * Arrays that contain at least one element.
 */
type NonEmptyArray<T> = [T, ...T[]];

/**
 * Implement a generic that gets the length
 * of a tuple type.
 *
 * Hint:
 * How would you get the length of an array in JavaScript?
 * The type-level version is very similar :)
 */
type Length<Tuple extends any[]> = Tuple["length"];

/**
 * Implement a generic that gets the length
 * of a tuple type, and adds one to it.
 *
 * This challenge may seem a bit random, but
 * this is actually the basis of representing
 * numbers and doing arithmetics at the type level!
 */
type LengthPlusOne<Tuple extends any[]> = [...Tuple, any]["length"];
