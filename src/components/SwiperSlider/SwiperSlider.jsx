import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const nudoImages = {
    amigurumi: [
        {
            imgAlt:"Foto amigurimi 4",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-4.jpg?raw=true",
        },
        {
            imgAlt:"Foto amigurimi 5",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-5.jpg?raw=true",
        },
        {
            imgAlt:"Foto amigurimi 6",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-6.jpg?raw=true",
        },
        {
            imgAlt:"Foto amigurimi 7",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-7.jpg?raw=true",
        },
        {
            imgAlt:"Foto amigurimi 8",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-8.jpg?raw=true",
        },
        {
            imgAlt:"Foto amigurimi 9",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-9.jpg?raw=true",
        },
        {
            imgAlt:"Foto amigurimi 10",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-10.jpg?raw=true",
        },
        {
            imgAlt:"Foto amigurimi 11",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-11.jpg?raw=true",
        },
        {
            imgAlt:"Foto amigurimi 1",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-1.jpg?raw=true",
        },
        {
            imgAlt:"Foto amigurimi 2",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-2.jpg?raw=true",
        },
        {
            imgAlt:"Foto amigurimi 3",
            imgUrl:"https://github.com/ivanabraz/nudo/blob/main/src/images/nudo-3.jpg?raw=true",
        },
    ],
}

const SwiperSlider = () => {
    return (
        <>
                <Swiper slidesPerView={1} navigation={true} modules={[Navigation]}
                spaceBetween={0} className="mySwiper"
                breakpoints={{
                    475: {
                        slidesPerView: 1,
                        spaceBetween: 10,
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