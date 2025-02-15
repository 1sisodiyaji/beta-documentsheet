'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PlusIcon } from 'lucide-react'

const FiveCards = () => {
  // Animation variants for fade-left and fade-right effects
  const fadeLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: 'spring' },
    },
    hover: {
      scale: 0.95,
      rotateY: 10,
      rotateX: 10,
      transition: { duration: 0.3 },
    },
  }

  const fadeRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: 'spring' },
    },
    hover: {
      scale: 0.95,
      rotateY: -10,
      rotateX: 10,
      transition: { duration: 0.3 },
    },
  }

  return (
    <>
      <div className="my-24">
        <h1 className="text-center md:text-2xl text-xl my-6 font-semibold">
          We Made Your Journey So Simple and Innovative for Better Experience.
        </h1>

        {/* Row 1 */}
        <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-center gap-4">
          {/* Card 1 with fade-left */}
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center w-96 min-h-48 bg-green-200 rounded-md shadow-lg"
          >
            <h1 className="w-8 h-8 bg-orange-200 flex justify-center items-center rounded-full p-1">
              1
            </h1>
            <img
              src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1733941760/image_19_gsh3ic.png"
              alt="creating"
              className="w-24 h-24"
              loading="lazy"
            />
            Create Your Sheet
          </motion.div>

          {/* Card 2 with no animation */}
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center w-96 min-h-48 bg-orange-200 rounded-md shadow-lg"
          >
            <h1 className="w-8 h-8 bg-white flex justify-center items-center rounded-full p-1">
              2
            </h1>
            <img
              src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734194029/image_16_iokvq8.png"
              alt="payment"
              className="w-24 h-24"
              loading="lazy"
            />
            Pay Online
          </motion.div>

          {/* Card 3 with fade-left */}
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center w-96 min-h-48 border-2 border-slate-200 rounded-md shadow-lg"
          >
            <h1 className="w-8 h-8 bg-orange-200 flex justify-center items-center rounded-full p-1">
              3
            </h1>
            <img
              src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734190122/Simplification_2_agko2f.png"
              alt="feedback"
              className="w-24 h-24"
              loading="lazy"
            />
            Share Your Experience
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-center gap-4 my-2">
          {/* Card 4 with fade-right */}
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center w-96 min-h-48 border-2 border-green-200 rounded-md shadow-lg"
          >
            <h1 className="w-8 h-8 bg-orange-200 flex justify-center items-center rounded-full p-1">
              4
            </h1>
            <img
              src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png"
              alt="history"
              className="w-24 h-24"
              loading="lazy"
            />
            See Your Sheet Details By Search or Scan
          </motion.div>

          {/* Card 5 (Link) with fade-right */}
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center w-96 min-h-48 bg-orange-400 rounded-md shadow-lg"
          >
            <Link
              href={'/create-new-sheet'}
              className="text-center flex flex-col justify-center items-center"
            >
              <PlusIcon className="text-2xl text-white" />
              <h1 className="text-white">Create Your Sheet</h1>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default FiveCards
