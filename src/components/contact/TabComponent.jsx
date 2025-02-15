import { MailCheckIcon, PhoneCallIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TabComponent = () => {
  return (
    <div className="md:max-w-7xl w-full mx-auto flex md:flex-row flex-col gap-6 md:py-12 items-center justify-stretch">
      <Link
        href="tel:6371790702"
        className="w-96 md:h-96  h-auto p-2 flex flex-col justify-center items-center bg-white  border-dashed border-orange-200 border-4 rounded-lg shadow hover:bg-orange-100 hover:scale-95"
      >
        <PhoneCallIcon className="text-3xl" />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Call us Now
        </h5>
        <p className="font-normal text-gray-700">6371790702</p>
      </Link>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.2186359193!2d78.0321915!3d28.4089125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b947ea64b99ab%3A0xe5f5c2db6d78798a!2sMoradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1684478482503!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Contact-page"
        className="rounded-lg shadow-lg w-96 md:h-96 h-auto "
      ></iframe>

      <Link
        href="mailto:637golusingh@gmail.com"
        className="w-96 md:h-96 p-2  h-auto  flex flex-col justify-center items-center bg-white  border-dashed border-orange-200 border-4 rounded-lg shadow hover:bg-orange-100 hover:scale-95"
      >
        <MailCheckIcon className="text-3xl" />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          Drop an Email
        </h5>
        <p className="font-normal text-gray-700 "> 637golusingh@gmail.com</p>
      </Link>
    </div>
  )
}

export default TabComponent
