import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Carousel from "../components/Carousel";

const images = [
  {
    src: "https://logowizz.com/offer-25/wp-content/uploads/2023/01/Dialpad02.jpeg",
    alt: "First Image",
    width:"472",
    height:"472",
  },
  {
    src: "https://logowizz.com/offer-25/wp-content/uploads/2023/01/JOSE-WIFE-LION-AND-LAMB-NEW-final-tdi.jpg",
    alt: "Second Image",
    width:"472",
    height:"472",
  },
  {
    src: "https://logowizz.com/offer-25/wp-content/uploads/2023/01/dialpad01.jpeg",
    alt: "Third Image",
    width:"472",
    height:"472",
  },
  {
    src: "https://logowizz.com/offer-25/wp-content/uploads/2023/01/JP-whole-new-TDI.jpg",
    alt: "Fourth Image",
    width:"472",
    height:"472",
  },
  {
    src: "https://logowizz.com/offer-25/wp-content/uploads/2023/01/JOSE-WIFE-CLOCK-MIC-LOGO-silverrr-TDI.jpg",
    alt: "Fifth Image",
    width:"500",
    height:"500",
  },
];










function PortfolioRow() {
    return (
        <div>

            <div className='flex flex-col items-center content-center'>
                <p>Our Portfolio</p>
                <p className='p-5'>LogoWizz is loved and chosen by its clients because of the creative, aesthetically-pleasing and crisp design. All the design ninjas at our company are industry-experienced and out of the box thinkers.

                </p>
                <div>
                    
             
                <div className="bg-gray-100 ">
      <Carousel images={images} />
      <Carousel images={images} />
    </div>


                </div>
            </div>
        </div>
    )
}

export default PortfolioRow