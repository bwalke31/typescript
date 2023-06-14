// Conditional types
type IsMeaningOfLife<N> = N extends 42 ? true : false;
type OK = IsMeaningOfLife<42>; // => true
type NotOK = IsMeaningOfLife<41>; // => false

// Type constraints
const createStringOrBool = <S extends string | boolean>(name: S) => ({ name });
const string1 = createStringOrBool("Hello");
const bool1 = createStringOrBool(true);
// const num1 = createStringOrBool(1); // Won't work!

// Infer as a tuple
const inferAsTuple = <T extends [unknown, ...unknown[]]>(tuple: T) => ({
  tuple,
});
const tuple1 = inferAsTuple([1]);
// const tuple2 = inferAsTuple([]); // Won't work! Need at least one element

// Nesting conditions
type GetColor<I> = I extends 0
  ? "black"
  : I extends 1
  ? "white"
  : I extends 2
  ? "cyan"
  : I extends 3
  ? "blue"
  : "purple";

type Blue = GetColor<3>;
type Cyan = GetColor<2>;

// Pattern matching => Checking to see if a type is assignable to a data structure
type IsUser<T> = T extends { name: string; age: number } ? true : false;
type T1 = IsUser<{ name: "Brendan" }>; // => false
type T2 = IsUser<{ name: "Brendan"; age: 25 }>; // => true

// Checking several type parameters at once
type Plan = "basic" | "pro" | "premium";
type Role = "viewer" | "editor" | "admin";
type CanEdit<P extends Plan, R extends Role> = [P, R] extends [
  "basic" | "pro",
  "viewer" | "admin"
]
  ? true
  : false;

type T3 = CanEdit<"basic", "viewer">; // => true

// 'infer' keyword
type GetRole<User> = User extends { name: string; role: infer Role }
  ? Role
  : never;

type T4 = GetRole<{ name: "Brendan"; role: "admin" }>; // => 'admin'

// Can also work with tuples
type GetFirst<Tuple> = Tuple extends [infer First, ...any] ? First : never;
type GetFirstAndLast<Tuple> = Tuple extends [infer First, ...any, infer Last]
  ? [First, Last]
  : never;

type T5 = GetFirstAndLast<[1, 2, 3]>; // => [1,3]

// Retrieving the parameters
type GetParams<F> = F extends (...params: infer Param) => any ? Param : never;
// Retrieving the return type
type GetOutput<F> = F extends (...params: any[]) => infer Output
  ? Output
  : never;

type fn = (name: string, age: number) => boolean;

type T6 = GetParams<fn>; // => [name: string, age: number]
type T7 = GetOutput<fn>; // => boolean

// infer with generics
type CustomGeneric<A, B> = { a: A; b: B[] };
// Gets whatever A and B are
type ExtractParams<S> = S extends CustomGeneric<infer A, infer B>
  ? [A, B]
  : never;
