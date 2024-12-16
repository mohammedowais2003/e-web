'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className="bg-[#FBEBB5] px-4 py-3 sm:px-6">
      <div className="flex items-center justify-between">
        {/* Left Section - Brand/Logo */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-lg font-bold text-gray-800"></span>
          </Link>
        </div>

        {/* Center Section - Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLinks />
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-4">
          <NavIcons />
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FBEBB5] space-y-2 mt-3 pb-3 text-center">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? 'block py-2 text-sm font-medium text-gray-800'
    : 'text-sm font-medium text-gray-800 hover:text-gray-600'

  return (
    <>
      <Link className={linkClass} href="/">
        Home
      </Link>
      <Link className={linkClass} href="/shop">
        Shop
      </Link>
      <Link className={linkClass} href="/about">
        About
      </Link>
      <Link className={linkClass} href="/contact">
        Contact
      </Link>
    </>
  )
}

function NavIcons() {
  return (
    <>
      <Link href="/account">
        <button className="p-2" aria-label="Account">
          <User className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </button>
      </Link>
      <button className="p-2" aria-label="Search">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </button>
      <button className="p-2" aria-label="Wishlist">
        <Heart className="h-5 w-5" />
        <span className="sr-only">Wishlist</span>
      </button>
      <Link href="/cart">
        <button className="p-2" aria-label="Cart">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </button>
      </Link>
    </>
  )
}


