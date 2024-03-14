'use client'
import { useState } from 'react'
import NavLink from './NavLink'
import NavUser from './NavUser'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menu = isMenuOpen ? 'flex' : 'h-0 overflow-hidden'
  const inNav = isMenuOpen ? 'gap-5' : 'gap-0'

  return (
    <nav
      className={`flex flex-col ${inNav} items-center p-4 lg:flex-row lg:justify-between lg:gap-5`}
    >
      <figure className="flex w-full items-center justify-between self-start lg:w-fit">
        <span
          className="icon-brand h-12 w-12 bg-black lg:hidden"
          onClick={handleMenu}
        />
        <Link href="/" className="flex w-fit items-center gap-3">
          <div className="flex w-fit items-center gap-3">
            <img src="/logo.svg" alt="logo" className="h-20 w-20" />
            <h2 className="text-brand w-fit text-3xl font-bold">PLANNI</h2>
          </div>
        </Link>
      </figure>
      <div
        className={`${menu} w-full flex-col gap-5 transition-all lg:flex lg:h-full lg:w-fit lg:flex-row lg:overflow-auto`}
      >
        <ul className="flex flex-col gap-2 lg:flex-row">
          <NavLink>Inicio</NavLink>
          <NavLink>Paquetes</NavLink>
          <NavLink>Nosotros</NavLink>
        </ul>
        <NavUser />
      </div>
    </nav>
  )
}

export default Navbar
