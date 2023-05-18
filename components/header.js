import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        <img src="/img/logo-white.png" className='w-20 h-auto' />
      </Link>
    </h2>
  )
}
