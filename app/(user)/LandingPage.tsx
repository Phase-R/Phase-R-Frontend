import Sidebar from "./Sidebar";
import { SparklesCore } from "../components/ui/sparkles";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
    const words = [
        {text: "Rework.", className: "text-white"},
        {text: "Rebuild.", className: "text-white"},
        {text: "Revitalize.", className: "text-white"},
    ]

    const features = [
        {name: "Gym", route: "/gym"}, 
        {name: "Nutrition", route: "/nutrition"}, 
        {name: "Mental Health", route: "/mental-health"},
        {name: "Sports", route: "/sports"}  // New feature added
    ]
    const activities = [{name: "Basketball", route: "/", status: "locked"}, {name: "Cricket", route: "/sports/cricket", status: "unlocked"}, {name: "Badminton", route: "/sports/badminton", status: "unlocked"}, {name: "Cardio", route: "/physical-fitness/cardio", status: "unlocked"}, {name: "Football", route: "/sports/football", status: "unlocked"}, {name: "Martial Arts", route: "/", status: "locked"}]

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={100}
                    className="w-full h-full absolute"
                    particleColor="#FFFFFF"
                />
                <div className="absolute inset-0 z-0 bg-black [mask-image:radial-gradient(circle,transparent_20%,black)]" />
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white z-10 mb-8">
                    <TypewriterEffectSmooth words={words} />
                </h1>
                <p className="text-white text-sm md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto z-10">
                    UNLOCK YOUR BEST SELF WITH PHASE-R: IGNITE YOUR BODY, INSPIRE YOUR MIND.
                </p>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <Link href={feature.route} key={feature.name}>
                                <div className="bg-black border rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                                    <div className="overflow-hidden">
                                        <img 
                                            src={`landing_page/landing_${feature.name.toLowerCase().replace(' ', '_')}.png`} 
                                            alt={`${feature.name} image`} 
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
                                        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section id="activities" className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">Activities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {activities.map((activity) => (
                            <Link href={activity.route} key={activity.name}>
                                <div className="bg-black border rounded-lg overflow-hidden shadow-lg group cursor-pointer relative">
                                    <div className="overflow-hidden">
                                        <img 
                                            src={`landing_page/landing_${activity.name.toLowerCase().replace(' ', '_')}.png`} 
                                            alt={`${activity.name} image`} 
                                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        {activity.status === "locked" && (
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                <Image src="/landing_page/lock-icon.jpg" alt="Locked" width={40} height={40} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-white">{activity.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                        ELEVATE YOUR SPIRIT WITH PHASE-R: UNLEASH STRENGTH, EMBRACE CHANGE! 💪🚀
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12">
                        #PHASERevolution
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="/signup" className="bg-white text-black font-bold text-lg md:text-xl px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300">
                            SIGN ME UP
                        </Link>
                        <Link href="/goals" className="bg-white text-black font-bold text-lg md:text-xl px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300 flex">
                            DAILY GOALS
                            <img src="landing_page/landing_goals_icon.png" alt="Goals icon" className="w-6 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
