import { toast } from 'react-hot-toast'

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
          <i className="fi fi-rr-copy-alt"></i>
        </li>
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800"
          onClick={() => {
            handleShareWhatsApp(url)
          }}
        >
          <i className="fi fi-brands-whatsapp"></i>
        </li>
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800"
          onClick={() => {
            handleShareFacebook(url)
          }}
        >
          <i className="fi fi-brands-facebook"></i>
        </li>
      </ul>
    </div>
  )
}

export default ShareButton
