'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/scan-qr', label: 'Scan QR' },
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact-us', label: 'Contact Us' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollTop / docHeight) * 100
      setScrollWidth(scrollPercentage)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header>
        <nav
          className={`fixed w-full z-20 top-0 start-0 ${
            isScrolled
              ? 'bg-white shadow-md text-black duration-300'
              : 'bg-transparent text-black'
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/logo.png"
                width={40}
                height={40}
                loading="lazy"
                alt="logo"
              />
              <span className="self-center text-2xl font-regular whitespace-nowrap hidden md:flex">
                Document Sheet
              </span>
            </Link>

            <div className="hidden md:flex space-x-6 rtl:space-x-reverse font-regular">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-3 ${
                    pathname === link.href
                      ? 'border-b   border-green-500 text-black'
                      : 'text-black hover:border-green-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
              <Link href="/create-new-sheet">
                <button
                  type="button"
                  className="text-white bg-[#219B9D] hover:bg-[#1A776F] font-regular rounded-2xl text-sm px-4 py-2 text-center"
                >
                  Get Your Sheet
                </button>
              </Link>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="h-[2px] bg-green-500 absolute bottom-0 left-0"
            style={{ width: `${scrollWidth}%` }}
          ></div>
        </nav>

        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <ul className="mt-4 flex flex-col space-y-4 font-regular">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 px-3 rounded-md ${
                      pathname === link.href
                        ? 'bg-green-300 text-black shadow-md'
                        : 'text-black hover:bg-green-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <Link
                href={'/privacy-policy'}
                className={`block py-2 px-3 rounded-md ${
                  pathname === '/privacy-policy'
                    ? 'bg-green-300 text-black shadow-md'
                    : 'text-black hover:bg-green-200'
                }`}
              >
                Privacy Policy
              </Link>
              <Link
                href={'/terms-condition'}
                className={`block py-2 px-3 rounded-md ${
                  pathname === '/terms-condition'
                    ? 'bg-green-300 text-black shadow-md'
                    : 'text-black hover:bg-green-200'
                }`}
              >
                Terms & Condition
              </Link>
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-30 z-10"
          ></div>
        )}
      </header>
    </>
  )
}

export default Navbar
