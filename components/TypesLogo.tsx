import { ArrowRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

function TypesLogo() {
    return (
        <div>
            <div className='items-center pt-10 pb-10 text-center'>
                <p className='text-4xl font-semibold text-black'>What Type Is your Logo?</p>
                <p>Expertly Designed Logo Design Services to Boost Brand Identity.

                </p>

                <div className='flex flex-row items-center justify-center text-center'>
                    {/**Row of 3three column */}
                    <div className='p-2'>
                        <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/logo-type1.webp" alt="" width={350} height={240} />
                        <div className='absolute -mt-20 text-left bg-white w-80'>
                        <p className='p-3 text-gray-600'>3D Logo design gives a logo the depth that a 2D logo fails to give. 3D logo designs almost bring the logo to life giving it realistic lusters.
                        

                        </p>
                        </div>
                        <button className='flex flex-row float-right p-3 mt-10 text-white transition-transform  duration-300 bg-black hover:bg-[#fc893c]' >
                            <p>Let's Get Started</p>
                        
                        <span><ArrowRightIcon color='white' className='w-5 h-5 ' /></span>
                        </button>

                    </div>
                    <div className='p-2'>
                        <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/logo-type1.webp" alt="" width={350} height={240} />
                        <div className='absolute -mt-20 text-left bg-white w-80'>
                        <p className='p-3 text-gray-600'>3D Logo design gives a logo the depth that a 2D logo fails to give. 3D logo designs almost bring the logo to life giving it realistic lusters.
                        

                        </p>
                        </div>
                        <button className='flex flex-row float-right p-3 mt-10 text-white bg-black' >
                            <p>Let's Get Started</p>
                        
                        <span><ArrowRightIcon color='white' className='w-5 h-5' /></span>
                        </button>

                    </div>
                    <div className='p-2'>
                        <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/logo-type1.webp" alt="" width={350} height={240} />
                        <div className='absolute -mt-20 text-left bg-white w-80'>
                        <p className='p-3 text-gray-600'>3D Logo design gives a logo the depth that a 2D logo fails to give. 3D logo designs almost bring the logo to life giving it realistic lusters.
                        

                        </p>
                        </div>
                        <button className='flex flex-row float-right p-3 mt-10 text-white bg-black' >
                            <p>Let's Get Started</p>
                        
                        <span><ArrowRightIcon color='white' className='w-5 h-5' /></span>
                        </button>

                    </div>
                   
                </div>


                {/** 2nd row three col */}

                <div className='flex flex-row items-center justify-center text-center'>
                    {/**Row of 3three column */}
                    <div className='p-2'>
                        <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/logo-type1.webp" alt="" width={350} height={240} />
                        <div className='absolute -mt-20 text-left bg-white w-80'>
                        <p className='p-3 text-gray-600'>3D Logo design gives a logo the depth that a 2D logo fails to give. 3D logo designs almost bring the logo to life giving it realistic lusters.
                        

                        </p>
                        </div>
                        <button className='flex flex-row float-right p-3 mt-10 text-white bg-black' >
                            <p>Let's Get Started</p>
                        
                        <span><ArrowRightIcon color='white' className='w-5 h-5' /></span>
                        </button>
                        

                    </div>
                    <div className='p-2'>
                        <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/logo-type1.webp" alt="" width={350} height={240} />
                        <div className='absolute -mt-20 text-left bg-white w-80'>
                        <p className='p-3 text-gray-600'>3D Logo design gives a logo the depth that a 2D logo fails to give. 3D logo designs almost bring the logo to life giving it realistic lusters.
                        

                        </p>
                        </div>
                        <button className='flex flex-row float-right p-3 mt-10 text-white bg-black' >
                            <p>Let's Get Started</p>
                        
                        <span><ArrowRightIcon color='white' className='w-5 h-5' /></span>
                        </button>

                    </div>
                    <div className='p-2'>
                        <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/logo-type1.webp" alt="" width={350} height={240} />
                        <div className='absolute -mt-20 text-left bg-white w-80'>
                        <p className='p-3 text-gray-600'>3D Logo design gives a logo the depth that a 2D logo fails to give. 3D logo designs almost bring the logo to life giving it realistic lusters.
                        

                        </p>
                        </div>
                        <button className='flex flex-row float-right p-3 mt-10 text-white bg-black' >
                            <p>Let's Get Started</p>
                        
                        <span><ArrowRightIcon color='white' className='w-5 h-5' /></span>
                        </button>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default TypesLogo