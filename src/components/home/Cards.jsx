'use client'
import React from 'react'
import FlipCard from '../common/Flipcard'
import { motion } from 'framer-motion'

const animationVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
}

const Cards = () => {
  return (
    <>
      <section className="my-12">
        <article>
          <h1 className="md:text-4xl text-xl font-semibold text-center p-1">
            Why Choose Document Sheet !!
          </h1>
        </article>

        <section className="flex flex-wrap justify-center items-center md:py-12  gap-6  p-1">
          <motion.div
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={animationVariants}
          >
            <FlipCard
              title={'Digital Document'}
              text={
                'Effortlessly create secure, standardized document sheets tailored to your real estate needs.'
              }
              src={
                'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732427156/agreement_kowcaf.png'
              }
            />
          </motion.div>

          <motion.div
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={animationVariants}
          >
            <FlipCard
              title={'Integrated QR Code'}
              text={
                'Each document includes a unique QR code and serial number, ensuring easy digital access to your data.'
              }
              src={
                'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732426939/qr-code_1_gjvyr7.png'
              }
            />
          </motion.div>

          <motion.div
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={animationVariants}
          >
            <FlipCard
              title={'Secure Data Storage'}
              text={
                'Enjoy peace of mind with secure storage,accessible only to authorized users for complete protection.'
              }
              src={
                'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732427014/folder_d3xpkj.png'
              }
            />
          </motion.div>

          <motion.div
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={animationVariants}
          >
            <FlipCard
              title={'Simple User Process'}
              text={
                'Easily manage your documents with a quick and simple process designed for everyone.'
              }
              src={
                'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732427083/iteration_zfcgid.png'
              }
            />
          </motion.div>
        </section>
      </section>
    </>
  )
}

export default Cards
