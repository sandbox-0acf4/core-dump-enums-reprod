import { Foo } from "./constants";
// export function Home() { // npm rum build fails
export default function Home() { // also fails
  return <div>{Foo.BAR}</div> // fails
  // return "Works"; // works
}
