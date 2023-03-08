import Image from "next/image";
import Slider from "react-slick";

interface Image {
    src: string;
    alt: string;
    width:string;
    height: string;
}

interface CarouselProps {
    images: Image[];
}


const Carousel = ({ images }: CarouselProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // add this line for auto-play
        autoplaySpeed: 3000, // set auto-play speed to 3 seconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="container mx-auto">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <Image width="500" height="500"
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-64"
              style={{ width: "500px", height: "500px" }}
            />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;