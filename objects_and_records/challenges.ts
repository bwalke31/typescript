/**
 * 1. implement a generic to get the union of all keys of an object type.
 */

type Key<Obj> = keyof Obj;

/**
 * 2. implement a generic to get the union of all values in an object type.
 */

type Key2<Obj> = Obj[keyof Obj];

/**
 * 3. Create a generic that removes the `id` key
 * from an object type.
 */

type RemoveId<Obj> = Omit<Obj, "id">;

type res1 = RemoveId<{
  id: number;
  name: string;
  age: unknown;
}>;

/**
 * 4. Combine Partial, Omit and Pick to create a generic
 * that makes the `id` key of an object type optional.
 */

/*
 * 1. Pick the ID and make it partial (optional)
 * 2. Intersect it with everything else from Omit<Obj, 'id'>
 */
type MakeIdOptional<Obj extends { id: unknown }> = Partial<Pick<Obj, "id">> &
  Omit<Obj, "id">;

/**
 * 5. Since intersections are applied recursively,
 * how would you write an `Assign<A, B>` type-level
 * function that matches the behavior of `{...a, ...b}`,
 * and overrides properties of `A` with properties of `B`?
 */

/**
 * 1. Remove all keys from A that are in B
 * 2. Intersect A with B
 */

type Assign<A, B> = Omit<A, keyof B> & B;

const assign = <A, B>(obj1: A, obj2: B): Assign<A, B> => ({
  ...obj1,
  ...obj2,
});
