import Link from "next/link"
export default function Home() {
  return (
    <>
     <h1>Abbas</h1>
     <h1>Ali</h1>
     <ul>
      <li><Link href="/Blog"> Blog</Link></li>
      <li><Link href="/products"> Products</Link> </li>
      <li><Link href="/items"> Items</Link></li>
      </ul> 
    </> 
  )
};
