import Link from "next/link";

export default function Header() {
  return (<>
  <table>
    <tbody>
    <tr>
    <td><Link href="/"> Home </Link> </td>
      <td><Link href="about"> About </Link></td>
      <td> Contact</td>
      <td> Registration</td>
      <td> login</td>
    </tr>
    </tbody>
  </table>
  </>
  )
}