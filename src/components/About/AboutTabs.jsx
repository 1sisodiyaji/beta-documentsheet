'use client'
import React, { useState } from 'react'

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState('Vision')

  const tabsContent = {
    Vision: {
      title: 'Simplifying Documentation for Everyone',
      text: 'Our vision is to create a world where documentation processes are effortless, eliminating the need for waiting in long lines or dealing with cumbersome paperwork. We aim to empower individuals and businesses with accessible, user-friendly solutions.',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732550942/3_i27vzr.png',
    },
    Mission: {
      title: 'Secure and Accessible Documentation Online',
      text: 'Our mission is to provide safe, secure, and efficient online document services. We prioritize data integrity and accessibility, ensuring that all documents are easy to access, store, and share without compromising safety.',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732550953/1a_3_kxpb9k.png',
    },
    Approach: {
      title: 'Reimagining the Future of Documentation',
      text: 'Our approach is centered around innovation. We’re redefining how documents are created, managed, and presented by incorporating cutting-edge technology to offer seamless solutions for businesses and individuals alike.',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732550943/8_wjsz9r.png',
    },
  }
  return (
    <>
      <section className=" md:my-36 p-1">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h4 className="text-orange-500 font-semibold uppercase text-sm tracking-wide">
            Vision & Mission
          </h4>
          <h2 className="md:text-4xl text-xl font-bold text-gray-800 mt-2 p-1">
            Revolutionizing Documentation with Efficiency and Security
          </h2>

          {/* Tabs */}
          <div className="md:mt-8 mt-4 flex space-x-4">
            {['Vision', 'Mission', 'Approach'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`md:px-6 px-3 py-2 rounded-full font-semibold md:text-sm text-xs transition-colors ${
                  activeTab === tab
                    ? 'bg-orange-500 text-white'
                    : 'bg-orange-100 text-orange-500'
                }`}
              >
                Our {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="md:mt-12 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <div>
              <h3 className="md:text-2xl text-lg font-bold text-gray-800">
                {tabsContent[activeTab].title}
              </h3>
              <p className="text-gray-600 mt-4 md:text-base text-xs">
                {tabsContent[activeTab].text}
              </p>
            </div>

            {/* Right: Image */}
            <div>
              <img
                src={tabsContent[activeTab].image}
                alt={activeTab}
                className="w-full rounded-lg shadow-lg"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutTabs
