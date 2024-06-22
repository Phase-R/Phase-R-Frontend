import Sidebar from "./Sidebar";
import { SparklesCore } from "../components/ui/sparkles";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export default function LandingPage() {
    const words = [
        {text: "Rework.", className: "text-white"},
        {text: "Rebuild.", className: "text-white"},
        {text: "Revitalize.", className: "text-white"},
    ]

    return (
        <div className="bg-black">
            <div className="h-[50vh] md:h-[75vh] lg:h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                <div className="w-full h-full relative">
                    <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={500}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    //   particleColor={sparkleColor}
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 z-0 w-full h-full bg-black [mask-image:radial-gradient(circle,transparent_1%,white)]">
                    
                    </div>
                    <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold flex align-middle items-center justify-center text-white mt-[-30vh] md:mt-[-45vh] lg:mt-[-65vh] opacity-100 z-20">
                        <TypewriterEffectSmooth words={words} />
                    </h1>
                </div>
            </div>
            <p className="text-center text-white font-bold m-6 md:m-10 lg:m-20 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">UNLOCK YOUR BEST SELF WITH PHASE-R: IGNITE YOUR BODY, INSPIRE YOUR MIND.</p>
            <div className="grid grid-cols-3 grid-rows-1 gap-4 p-2 sm:p-4 lg:p-8 xl:p-16">
                <img src="landing_page/landing_gym.png" alt="gym png" className="w-full h-auto" />
                <img src="landing_page/landing_nutrition.png" alt="nutrition png" className="w-full h-auto" />
                <img src="landing_page/landing_muay-thai.png" alt="muay thai png" className="w-full h-auto" />
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 p-2 sm:p-4 lg:p-8 xl:p-16">
                <img src="landing_page/landing_basketball.png" alt="basketball png" className="w-full h-auto" />
                <img src="landing_page/landing_cricket.png" alt="cricket png" className="w-full h-auto" />
                <img src="landing_page/landing_badminton.png" alt="badminton png" className="w-full h-auto" />
                <img src="landing_page/landing_cardio.png" alt="cardio png" className="w-full h-auto" />
                <img src="landing_page/landing_football.png" alt="football png" className="w-full h-auto" />
                <img src="landing_page/landing_mental_health.png" alt="mental health png" className="w-full h-auto" />
            </div>
            <div className="w-full flex justify-center">
                <button className="bg-white font-bold flex text-black text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-xl p-4 ">DAILY GOALS <img src="landing_page/landing_goals_icon.png" className="w-6 md:w-6 lg:w-8 xl:w-10" /></button>
            </div>
            <br/ >
            <p className="font-bold text-white mx-6 md:mx-10 lg:mx-20 text-left text-lg sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl">
            ELEVATE YOUR SPIRIT WITH PHASE-R: UNLEASH STRENGTH, EMBRACE CHANGE! 💪🚀 #PHASERevolution
            </p>
            <br />
            <div className="w-full flex justify-center">
                <button className="text-white bg-black font-bold text-md sm:text-lg md:text-xl lg:text-3xl xl:text-5xl border-white rounded-xl border-4 p-2 flex">SIGN ME UP</button>
            </div>
            <br />
        </div>
    )
}