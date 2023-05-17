import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



const nudoImages = {
    amigurumi: [
        {
            imgAlt:"Foto amigurimi 1",
            imgUrl:"https://placehold.co/400",
        },
        {
            imgAlt:"Foto amigurimi 1",
            imgUrl:"https://placehold.co/400",
        },
        {
            imgAlt:"Foto amigurimi 1",
            imgUrl:"https://placehold.co/400",
        },
        {
            imgAlt:"Foto amigurimi 1",
            imgUrl:"https://placehold.co/400",
        },
        {
            imgAlt:"Foto amigurimi 1",
            imgUrl:"https://placehold.co/400",
        },
        {
            imgAlt:"Foto amigurimi 1",
            imgUrl:"https://placehold.co/400",
        },
    ],
}

const SwiperSlider = () => {
    return (
        <>
                <Swiper slidesPerView={1}
                spaceBetween={0} className="mySwiper"
                breakpoints={{
                    475: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}>
                    {nudoImages.amigurumi.map((image) => (
                        <SwiperSlide key={image.imgAlt}>
                            <img src={image.imgUrl} alt={image.imgAlt}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </>

    );
};

export default SwiperSlider;