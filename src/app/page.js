import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      Hell React
      <br />
      <Link href="/">Index</Link>
      <br />
      <Link href="/about">About</Link>
    </main>
  )
}
