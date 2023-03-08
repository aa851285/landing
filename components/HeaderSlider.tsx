import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'
import RounedHeaderCircle from './RounedHeaderCircle'

function HeaderSlider() {
  return (
    <div>
      <div style={{
        backgroundImage: `url("https://logowizz.com/offer-25/wp-content/uploads/2021/12/main-banner.webp")`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }} className="flex flex-col items-center">
        <p style={{ fontFamily:"Poppins" }} className='text-6xl text-white'>Premium Custom <span className='font-semibold'>Logo Design Service</span></p>

        <div className='flex flex-row' >
          {/**Three column q for logo center for text last for logo */}
          <div>
            <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/discount-img.webp" width="160" height="180" alt='image-logo' />
          </div>
          <div className='mt-10 text-center'>
            <p className='text-[#EBFF06] text-6xl' >In Just 24 Hours
            </p>
            <p className='text-white'>Get your custom logo designed, from the most reliable Design Agency

            </p>
          </div>
          <div>
            <Image src="https://logowizz.com/offer-25/wp-content/uploads/2022/01/25-768x604.png" width="160" height="180" alt='image-logo' />
          </div>
        </div>



        <div className='items-center text-center bg-[#E4F0F0] px-10 rounded-md p-3 m-3'>
          {/**column row form */}
          <p>SIGNUP NOW TO RESERVE 70% DISCOUNT</p>

          <div>
            {/** form */}
            <form action="/send-data-here" method="post">
             <div className='flex flex-row'>
              <div className='p-5 pr-4 space-x-4'>

                <input  className='p-2 space-x-4 text-gray-500 bg-white rounded-md w-80'
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder='Emter Name'

                />
              </div>
              <div className='p-5 pr-4 space-x-4'>

                <input className='p-2 space-x-4 text-gray-500 bg-white rounded-md w-80' placeholder='Emter Email' type="email" id="email" name="email" required />
              </div>


              <div className='p-5 pr-4 space-x-4'>

                <input className='p-2 space-x-4 text-gray-500 bg-white rounded-md w-80' placeholder='Phone Number' type="text" id="phone" name="phone" required />
              </div>

              <div className='p-5 pr-4 space-x-4'>

                <button className='bg-[#F49C20] p-2 space-x-4 text-white rounded-md w-80' name='submit' type="submit">Submit </button>
              </div>
              </div>
            </form>
          </div>

         

          

        </div>
         {/**Header Circle logo start here */}
         
            <RounedHeaderCircle />
        

      </div>

    </div>
  )
}

export default HeaderSlider