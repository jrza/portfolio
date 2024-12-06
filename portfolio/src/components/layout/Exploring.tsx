import Explore from "@/static/Explore";
import ContactButton from "../menu/elements/ContactButton";

function Exploring(){
    return <div id="Learning" className="flex text-pink-500 min-h-full flex-col items-center bg-amber-50" >
        <img className="w-full h-44" src="/Transitions/gradient-transition.svg" alt="transition" />
        <p className="flex text-4xl my-8 justify-center text-black font-bold">Currently learning more about...</p>
        <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
            <Explore hl="Cloud Implementation" desc="Implementing scalable solutions on AWS and Azure to drive innovation with secure and efficient cloud infrastructure." img="/icons/Cloud.svg" />
            <Explore hl="Datalake Architecture" desc="Designing data lake solutions with Databricks and Microsoft Fabric for seamless data integration and analytics." img="/icons/Layers.svg" />
            <Explore hl="AI/ML Solutions" desc="Creating solutions powered by AI/ML and LLM API integrations to enhance automation and drive data-driven insights." img="/icons/Box.svg" />
        </div>
        <p className="text-black desktop:text-[30px] mobile:text-[18px] font-bold text-center mt-8 mb-4">Let's get in touch!</p>
        <ContactButton title={"Contact Me"} />
    </div>

}

export default Exploring;