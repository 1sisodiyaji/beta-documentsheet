import { Home, Plus, ScanBarcode } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#C2E9DB] rounded-lg shadow hidden md:block">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
          <span className="text-sm text-black sm:text-center">
            © 2024{' '}
            <Link href="/" className="hover:underline">
              Document Sheet
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-regular sm:mt-0 justify-evenly">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-condition"
                className="hover:underline me-4 md:me-6"
              >
                Terms & Condition
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      <div className="flex justify-center items-center">
        <footer className="w-80   rounded-full  md:hidden flex justify-around items-center bg-[#C2E9DB] z-[20] fixed bottom-1 py-2 shadow-md">
          <Link href={'/'}>
            <Home className="text-2xl" />
          </Link>
          <Link
            href={'/create-new-sheet'}
            className="text-white bg-green-600 rounded-full w-10 h-10  p-1 flex justify-center items-center animate-bounce"
          >
            <Plus className="text-xl " />
          </Link>
          <Link href={'/scan-qr'}>
            <ScanBarcode className="text-2xl" />
          </Link>
        </footer>
      </div>
    </>
  )
}

export default Footer
