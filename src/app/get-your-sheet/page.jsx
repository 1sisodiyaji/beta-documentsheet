'use client'
import React, { useState, useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { clearPaymentDetails } from '../../store/slices/paymentSlice'
import { Star } from 'lucide-react'

const SuccessPage = () => {
  const navigate = useRouter()
  const dispatch = useDispatch()
  const paymentDetails = useSelector((state) => state.payment.paymentDetails)
  const hasFetched = useRef(false)
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!paymentDetails) {
      toast.error('Missing or invalid payment details!')
      navigate.push('/create-new-sheet')
    }
  }, [paymentDetails, navigate])

  if (!paymentDetails) {
    return null
  }

  const { name, sheetID } = paymentDetails

  const handleRatingClick = (star) => {
    setRating(star)
  }

  const handleSubmit = async () => {
    if (!rating || !description) {
      toast.error(
        'Please fill in both rating and description before submitting.'
      )
      return
    }

    setIsSubmitting(true)
    const email = 'testimonial@documentsheet.com'
    const mobile = '0000000000'
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/create-testimonial`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            mobile,
            rating,
            message: description,
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to submit feedback')
      }

      toast.success('Feedback submitted successfully!')
      setRating(0)
      setDescription('')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const DownloadSheet = async (sheetID) => {
    if (!sheetID) {
      toast.error('Sheet Not Found')
      return
    }
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/genrate-Sheet/${sheetID}`,
        { responseType: 'blob' }
      )
      if (response.status === 200) {
        const fileBlob = new Blob([response.data], { type: 'application/pdf' })
        const fileURL = URL.createObjectURL(fileBlob)
        const link = document.createElement('a')
        link.href = fileURL
        link.download = `Document-Sheet${sheetID}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(fileURL)
        toast.success('Your Sheet has been downloaded')
      } else {
        toast.error('Failed to Download Sheet')
      }
    } catch (error) {
      console.error(error)
      toast.error('Failed to Download Sheet')
    }
  }

  const DownloadBill = async (sheetID) => {
    if (!sheetID) {
      toast.error('Sheet Not Found')
      return
    }
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/genrate-bill/${sheetID}`,
        { responseType: 'blob' }
      )
      if (response.status === 200) {
        const fileBlob = new Blob([response.data], { type: 'application/pdf' })
        const fileURL = URL.createObjectURL(fileBlob)
        const link = document.createElement('a')
        link.href = fileURL
        link.download = `Invoice-${sheetID}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(fileURL)
        toast.success('Your Invoice has been downloaded')
      } else {
        toast.error('Failed to Download Invoice')
      }
    } catch (error) {
      console.error(error)
      toast.error('Failed to Download Invoice')
    }
  }

  useEffect(() => {}, [navigate])

  const ShiftToHome = (route) => {
    dispatch(clearPaymentDetails())
    navigate.push(route)
  }

  useEffect(() => {
    if (!sheetID) {
      navigate.push('/')
      return
    }
    if (hasFetched.current) return
    hasFetched.current = true
    DownloadSheet(sheetID)
    DownloadBill(sheetID)
  }, [sheetID, navigate])

  return (
    <div className="pt-8 min-h-screen bg-[url('https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734580950/Checker_euvc9v.png')] bg-no-repeat bg-cover bg-center mx-auto">
      {/* Get Invoice Button */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end pr-8">
          <button
            onClick={() => DownloadBill(sheetID)}
            className="px-6 py-2 rounded-md bg-green-200 text-green-800 font-medium hover:bg-green-300 transition"
          >
            Get Invoice
          </button>
        </div>

        {/* Thank You Message */}
        <h1 className="text-center text-lg md:text-xl font-medium text-gray-800 mt-8 mx-2">
          Thank you for connecting with us. Please share your journey.
        </h1>

        <div className="flex justify-center items-center mt-8">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
            {/* Star Rating */}
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  className={`cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} text-2xl`}
                />
              ))}
            </div>

            {/* Description */}
            <div className="p-1">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                placeholder="Share your feedback..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none resize-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="button"
                className={`px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-center mt-12 space-x-6">
          <div
            onClick={() => ShiftToHome('/create-new-sheet')}
            className="flex flex-col justify-center items-center bg-yellow-100 p-6 rounded-xl shadow-md hover:bg-yellow-200 transition w-1/2 h-64 cursor-pointer"
          >
            <img
              src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1733941760/image_19_gsh3ic.png"
              alt="new sheet"
              loading="lazy"
            />
            <h1 className="text-gray-800 font-medium md:text-3xl overflow-hidden mt-4">
              Create New Sheet
            </h1>
          </div>
          <div
            onClick={() => ShiftToHome('/')}
            className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-xl shadow-md hover:bg-gray-200 transition w-1/2 h-64 cursor-pointer"
          >
            <img
              src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1733940865/Simplification_1_hkqulx.png"
              alt="home"
              loading="lazy"
            />
            <h1 className="text-gray-800 font-medium md:text-3xl overflow-hidden mt-4">
              Back To Home
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
