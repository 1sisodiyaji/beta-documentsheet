'use client'
import { Copy, Facebook } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { Icons } from '../components/common/Icons'

const handleCopyText = (url) => {
  navigator.clipboard
    .writeText(url)
    .then(() => toast.success('Link Copied Successfully'))
    .catch((err) => console.error('Failed to copy: ', err))
}

const handleShareWhatsApp = (url) => {
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`
  window.open(whatsappUrl, '_blank')
}

const handleShareFacebook = (url) => {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  window.open(facebookUrl, '_blank')
}

const ShareButton = ({ url }) => {
  return (
    <div>
      <ul className="bg-white flex  text-sm">
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800"
          onClick={() => {
            handleCopyText(url)
          }}
        >
          <Copy size={18} />
        </li>
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800 w-8"
          onClick={() => {
            handleShareWhatsApp(url)
          }}
        >
          <Icons.Whatsapp className="w-full h-full" />
        </li>
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800"
          onClick={() => {
            handleShareFacebook(url)
          }}
        >
          <Facebook />
        </li>
      </ul>
    </div>
  )
}

export default ShareButton
