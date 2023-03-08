import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ChatIcon, PhoneIcon } from "@heroicons/react/solid"


function Header_Header() {
  return (
    <div className='flex flex-row items-center px-5 bg-black justify-evenly'>
              <div>
                <Image className='p-3' src="https://logowizz.com/offer-25/wp-content/uploads/2023/01/without7-768x381.png" width="160" height="180" alt='image-logo' />
              </div>

            <div className='flex flex-row'>
              <div className='pt-3 pr-3'>
              <PhoneIcon className='w-5 h-5 text-white' />
              </div>
              <div className='flex flex-col'>
              <p className='text-white'>call us</p>
              <p className='text-blue-500'>212 560-5943</p>
              </div>
            </div>

            <div className='flex flex-row'>
              <div className='pt-3 pr-3'>
              <ChatIcon  className='w-5 h-5 text-white' />
              </div>
              <div className='flex flex-col'>
              <p className='text-white'>24/7 Available</p>
              <p className='text-blue-500'>Live Chat</p>
              </div>
            </div>
    

     
    </div>

  )
}

export default Header_Header