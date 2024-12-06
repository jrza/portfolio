'use client'

import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/typing";
import Arrow from "@/static/arrow";
import Link from "next/link";

function Hero() {
    return (
        <div id="Hero" className="flex items-center min-h-screen px-20 bg-gradient-to-r from-gradientLeft to-gradientRight">
            <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse items-center w-full">
                <div className="flex flex-col z-20 pointer-events-none text-white w-3/5 mobile:w-full mobile:text-center">
                    <p className="text-[5vw] font-bold text-amber-50 w-full">Hello, I&apos;m Jazib</p>
                    <p className="text-[3vw]">a person who loves creating stuff and working with  <Typing /></p>
                    <div className="flex mt-6 justify-start w-[17vw]">
                        <SocialMedia size={175} />
                    </div>
                </div>
                <img className="w-2/5 object-contain self-center" src="/potrait-1.svg" alt="Portrait" />
            </div>
            <div className="desktop:absolute desktop:bottom-10 inset-0 flex items-end py-2 justify-center z-10">
                <Link href={"/#About"} aria-label="About">
                    <Arrow />
                </Link>
            </div>
        </div>
    );
}

export default Hero;
