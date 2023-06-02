import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <img src="/img/logo-white.png" className='h-8 w-auto mx-auto md:mx-0' />
      </Link>
    </h2>
  )
}
