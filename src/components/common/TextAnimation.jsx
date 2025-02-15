'use client'
import React from 'react'
import { motion } from 'framer-motion'

const TextAnimation = ({ content }) => {
  const text = content
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }
  return (
    <>
      <motion.span variants={container} initial="hidden" animate="visible">
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={child} className=" py-2">
            {char}
          </motion.span>
        ))}
      </motion.span>
    </>
  )
}

export default TextAnimation
