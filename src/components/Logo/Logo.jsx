import React from "react";
import Nu from "./Nu";
import Do from "./Do";


const Logo = () => {
    return (
        <div className="justify-center text-center w-full 
        grid gap-0 grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2
        pt-3 xs:pt-3 sm:pt-3 md:pt-4 lg:pt-5">
            <Nu/>
            <Do/>
        </div>
    )
}

export default Logo;