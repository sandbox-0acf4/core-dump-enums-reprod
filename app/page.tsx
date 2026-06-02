import { Foo } from "./constants.ts";
// export function Home() { // npm rum build fails
export default function Home() { // also fails
  return <div>{Foo.BAR}</div> // fails
  // return "Works"; // works
}
