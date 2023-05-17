import React from "react";
import Logo from "../Logo/Logo";
import SwiperSlider from "../SwiperSlider/SwiperSlider";

const Header = () => {
    return (
        <>
        <div className="w-full h-screen flex flex-col justify-between">
            <div className="">
                <Logo/>
            </div>
            <div className="px-5">
                <SwiperSlider/>
            </div>
            <footer className="flex flex-row justify justify-between p-5">
                <a rel="noreferrer" href="http://www.instagram.com/nudobycris" target="_blank" className="text-nudoRed text-xl xs:text-xl sm:text-3xl md:text-4xl lg:text-6xl flex-start">@nudobycris</a>
                <p className="text-nudoRed text-xl xs:text-xl sm:text-3xl md:text-4xl lg:text-6xl flex-end">nudobycris[at]gmail.com</p>
        </footer>
        </div>
        {/* <footer className="fixed inset-x-0 bottom-0 flex flex-row justify justify-between p-5">
            <a rel="noreferrer" href="http://www.instagram.com/nudobycris" target="_blank" className="text-nudoRed text-xl xs:text-xl sm:text-3xl md:text-4xl lg:text-6xl flex-start">@nudobycris</a>
            <p className="text-nudoRed text-xl xs:text-xl sm:text-3xl md:text-4xl lg:text-6xl flex-end">nudobycris[at]gmail.com</p>
        </footer> */}
        </>
    )
}

export default Header;