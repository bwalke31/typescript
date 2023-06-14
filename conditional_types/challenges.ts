/**
 * Implement a generic that checks if
 * a type is an array.
 */

type IsArray<T> = T extends any[] ? true : false;

/**
 * Implement a generic returning:
 *  - the 2nd parameter if the 1st one is `true`
 *  - the 3rd parameter if the 1st one is `false`
 */

type If<Condition, Branch1, Branch2> = Condition extends true
  ? Branch1
  : Condition extends false
  ? Branch2
  : never;

/**
 * Type the `getWithDefault` function. It takes a key, an object
 * and a default value.
 *  - If the key exists on the object, it returns the corresponding
 *    value with the right type.
 *  - Otherwise, it returns the default value.
 *
 * Note: The type of the property and the type of the default value
 * can be different.
 */
type GetWithDefault<Key, Obj, Default> = Key extends keyof Obj
  ? Obj[Key]
  : Default;

function getWithDefault<K extends string, O extends {}, D>(
  key: K,
  obj: O,
  defaultValue: D
): GetWithDefault<K, O, D> {
  return (obj as any)[key] ?? defaultValue;
}

/**
 * implement a generic to extract the type of the
 * `name` property from an object type.
 *
 * Note: This generic must also accept objects that
 *       Don't have a name property, and return
 *       `undefined` in this case.
 */
type GetName<Input> = Input extends { name: infer Name } ? Name : never;

/**
 * implement a generic to extract the
 * type parameter of a Promise.
 */

type UnwrapPromise<Input> = Input extends Promise<infer P> ? P : Input;

/**
 * Implement a generic that drops the first
 * element of a tuple and returns all other
 * elements.
 */

type DropFirst<Tuple extends any[]> = Tuple extends [any, ...infer F] ? F : [];

/**
 * Implement a generic that extracts
 * the last element of a tuple.
 */
type Last<Tuple extends any[]> = Tuple extends [...any, infer F] ? F : never;

/**
 * Implement the AND logical door:
 * AND<true, true> => true
 * AND<false, false> => false
 * AND<true, false> => false
 * AND<false, true> => false
 *
 */

type AND<A, B> = [A, B] extends [true, true] ? true : false;

/**
 * The `flatten` function can take arrays of values,
 * Or arrays containing other arrays.
 * When given a nested array, `flatten` removes
 * one level of nesting. Make it generic!
 */
type Flatten<Arr extends any[]> = Arr extends (infer Item)[][] ? Item[] : Arr;
