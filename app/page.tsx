import { Foo } from "./constants.ts";
export function Home() {
  return <div>{Foo.BAR}</div> // fails
  // return "Works"; // works
}
