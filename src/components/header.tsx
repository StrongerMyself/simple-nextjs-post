import Link from "next/link";

interface Props {}

export function Header({}: Props) {
  return (
    <p>
      <Link href="/">Главная</Link>
    </p>
  )
}
