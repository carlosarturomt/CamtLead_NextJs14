import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';

export default function ActiveLink({ href, active, inactive }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link href={href} onClick={handleClick} className='h-6' >
      {pathname === href ? active : inactive}
    </Link>
  )
}