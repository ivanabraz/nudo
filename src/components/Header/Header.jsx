import React from "react";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-between p-5">
            <Logo/>
            {/* <div className="flex flex-row justify-center">
                <div className="w-full grid gap-5 grid-cols-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
                    <img alt="Imagen 1" src="https://placehold.jp/300x300.png" />
                    <img alt="Imagen 1" src="https://placehold.jp/300x300.png" />
                    <img alt="Imagen 1" src="https://placehold.jp/300x300.png" />
                    <img alt="Imagen 1" src="https://placehold.jp/300x300.png" />
                    <img alt="Imagen 1" src="https://placehold.jp/300x300.png" />
                    <img alt="Imagen 1" src="https://placehold.jp/300x300.png" />
                </div>
            </div> */}
            <div className="flex flex-row justify justify-between">
                <a rel="noreferrer" href="http://www.instagram.com/nudobycris" target="_blank" className="text-nudoRed text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl flex-start">@nudobycris</a>
                <p className="text-nudoRed text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl flex-end">nudobycris[at]gmail.com</p>
            </div>
        </div>
    )
}

export default Header;