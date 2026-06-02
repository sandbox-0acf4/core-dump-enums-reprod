type Value = 1 | 2;
export enum Foo {
  BAR = 1 satisfies Value, // fails
  // BAR = 1 satisfies Value  
  // BAR = 1 // works?
}
