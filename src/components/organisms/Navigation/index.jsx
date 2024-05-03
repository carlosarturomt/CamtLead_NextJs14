"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Switcher } from "@/components/molecules/Buttons"
import useWindowSize from "@/hooks/useWindowSize"
import { ICONS } from "@/assets/icons"
import './navigationStyles.scss'

export default function Navigation() {
  const size = useWindowSize()
  const [toogle, setTogle] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    if (size.width < 640) {
      setTogle(true)
    } else {
      setTogle(false)
    }
  }, [size])


  return (
    <footer className="navigation_bottom">
      <nav className='navigation_bottom-nav'>
        <Link href="/" className="h-6">
          {ICONS.home.rect}
        </Link>

        <Link href="/search" className="h-6">
          {ICONS.search.rect}
        </Link>

        <button onClick={() => setOpenNav((prev) => !prev)}>
          <span className='logo border-l-2 border-r-2 border-purple-300 dark:border-purple-550'
          >
            {ICONS.logo.camt}
          </span>
        </button>

        <Link href="/alert" className="h-6">
          {ICONS.alert.rect}
        </Link>

        <Link href="/user" className="h-6">
          {ICONS.user.rect}
        </Link>
      </nav>

      <ul className='navigation_bottom-float'>
        <Link href='/message' className={openNav ? 'btn1--active' : 'btn1'}>
          <span className={openNav ? 'transition' : 'hidden'}>
            {ICONS.message.fill}
          </span>
        </Link>

        <Link href='/people' className={openNav ? 'btn2--active' : 'btn2'}>
          <span className={openNav ? 'transition' : 'hidden'}>
            {ICONS.people.fill}
          </span>
        </Link>

        <span className={openNav ? 'btn3--active' : 'btn3'}>
          <Switcher />
        </span>
      </ul>
    </footer>
  )
}
