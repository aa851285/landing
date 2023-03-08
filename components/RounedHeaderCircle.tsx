import Image from 'next/image'
import React from 'react'

function RounedHeaderCircle() {
    return (
        <div>
            <div className='flex flex-row mt-10'>
                {/**circle logos 5 colmn */}
                <div>

                    <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/ban-logo1.webp" width={310} height={296} alt="circle logo" />
                </div>
                <div>
                    <div className='flex flex-row'>

                        <div>
                            <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/ban-logo3.webp" width={136} height={136} alt="circle logo" />
                        </div>
                        <div className='mt-20'>
                            <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/ban-logo2.webp" width={136} height={136} alt="circle logo" />
                        </div>
                        <div>
                            <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/ban-logo4.webp" width={136} height={136} alt="circle logo" />
                        </div>
                    </div>
                </div>
                <div>

                    <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/ban-logo5.webp" width={310} height={296} alt="circle logo" />
                </div>
                <div>
                    <div className='flex flex-row'>
                        <div>
                            <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/ban-logo6.webp" width={136} height={136} alt="circle logo" />
                        </div>
                        <div className='mt-20'>
                            <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/ban-logo7.webp" width={136} height={136} alt="circle logo" />
                        </div>
                        <div>
                            <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/ban-logo8.webp" width={136} height={136} alt="circle logo" />
                        </div>
                    </div>
                </div>
                <div>

                    <Image src="https://logowizz.com/offer-25/wp-content/uploads/2021/12/ban-logo9.webp" width={310} height={296} alt="circle logo" />
                </div>
            </div>
        </div>
    )
}

export default RounedHeaderCircle