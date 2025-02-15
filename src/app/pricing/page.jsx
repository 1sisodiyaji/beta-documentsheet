'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BoxIcon } from 'lucide-react'

const Header = () => (
  <motion.header
    className="text-orange-500  py-10 px-6 text-center"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="md:text-3xl text-xl font-bold p-1">
      Document Package - 5 Sheets with High-Quality File
    </h1>
    <p className="mt-4 text-lg">
      Comprehensive document package for your needs.
    </p>
  </motion.header>
)

const ProductDetails = () => (
  <motion.section
    className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8 items-center"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex justify-center items-center">
      <BoxIcon className="w-48 overflow-hidden text-green-500" />
    </div>
    <div>
      <h2 className="text-2xl font-bold">Product Details</h2>
      <p className="mt-4 text-gray-700">
        Our document package includes 5 premium-quality sheets designed for
        durability and accuracy. Each document is securely stored in a fireproof
        and waterproof file.
      </p>
      <ul className="mt-6 space-y-3">
        <li className="flex items-center space-x-3">
          <span className="text-orange-500">✔</span>
          <p>High-Quality Material</p>
        </li>
        <li className="flex items-center space-x-3">
          <span className="text-orange-500">✔</span>
          <p>Right Format for Professional Use</p>
        </li>
        <li className="flex items-center space-x-3">
          <span className="text-orange-500">✔</span>
          <p>Waterproof & Fireproof File</p>
        </li>
      </ul>
    </div>
  </motion.section>
)

const PricingPage = () => (
  <motion.section
    className="bg-gray-100 py-16 px-6 text-center"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-2xl font-bold">Pricing</h2>
    <p className="mt-4 text-gray-700 text-lg">
      Get the complete package for just{' '}
      <span className="text-orange-500 font-bold">₹100</span>.
    </p>
    <p className="mt-2 text-sm text-gray-500">
      Includes Money-back guarantee on all orders.
    </p>
  </motion.section>
)

const Contact = () => (
  <motion.section
    className="max-w-7xl mx-auto py-16 px-6 text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-2xl font-bold">Contact Us</h2>
    <p className="mt-4 text-gray-700">Call us to order this package:</p>
    <div className="mt-6 space-y-3">
      <p className="text-lg">📞 Phone: +91-1234567890</p>
      <p className="text-lg">📧 Email: example@example.com</p>
      <p className="text-lg">
        💬 WhatsApp:{' '}
        <a
          href="https://wa.me/1234567890"
          className="text-orange-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat Now
        </a>
      </p>
    </div>
  </motion.section>
)

const Payment = () => (
  <motion.section
    className="bg-gray-100 py-16 p-6 text-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-2xl font-bold">Payment Options</h2>
    <p className="mt-4 text-gray-700">
      All payments will be processed manually. Use the details below:
    </p>
    <div className="mt-6 space-y-4">
      <p className="text-lg">📲 UPI: example@upi</p>
      <p className="text-lg">📲 PhonePe: +91-1234567890</p>
    </div>
    <div className="mt-8">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VBLw-BV3_yEWM19Ni3ICTS92w1GgFL4bqQ&s"
        alt="QR Code"
        className="mx-auto w-40 h-40"
      />
    </div>
  </motion.section>
)

const Pricing = () => (
  <div className="mt-12">
    <Header />
    <ProductDetails />

    <div className="flex md:flex-row flex-col">
      <PricingPage />
      <Contact />
      <Payment />
    </div>
  </div>
)

export default Pricing
