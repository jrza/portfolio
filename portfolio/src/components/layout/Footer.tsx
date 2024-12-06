import SocialMedia from "@/static/SocialMedia";

function Footer(){
    return <div className="bg-gradient-to-r from-gradientLeft to-gradientRight">
        <img className="w-full h-44" src="/Transitions/gradient-bg.svg" alt="transition"/>
        <footer className="flex flex-col items-center">
            <div className="pt-5">
                <SocialMedia size={35} />
            </div>
            <hr className="flex-grow" />
            <div className="flex text-amber-50 text-center p-5">&copy; {new Date().getFullYear()} All rights reserved.</div>
        </footer>
    </div>
}

export default Footer;