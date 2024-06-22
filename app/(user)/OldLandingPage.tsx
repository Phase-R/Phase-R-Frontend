import React from "react"
export default function OldLanding() {
    return (
        <div>
            <div className="flex flex-col h-screen md:h-[80vh] sm:h-[70vh] relative">
                <div className="flex flex-col text-white" style={{transform: "translateY(50%)"}}>
                    <p className="text-white text-base font-bold lg:text-7xl sm:text-xl text-center">Rework.Rebuild.Revitalize</p>
                    <p className="text-center">lorem ipsum why the hell did my lorem ipsum stop working!!!</p>
                    <div className="lg:inline-flex h-40 justify-center" style={{transform: "translateY(30%)"}}>
                        <div className="inline-flex w-full h-36 sm:h-40">
                            <button className="font-bold lg:text-2xl w-full hover:bg-orange-400 active:bg-orange-400 border-t-8 border-b-8 border-orange-400 rounded-3xl">Mental Health</button>
                            <button className="font-bold lg:text-2xl w-full hover:bg-red-500 active:bg-red-500 border-t-8 border-b-8 border-red-500 rounded-3xl" >Physical Fitness</button>
                        </div>
                        <div className="inline-flex w-full h-36 sm:h-40 mt-5 sm:mt-0">
                            <button className="font-bold lg:text-2xl w-full hover:bg-green-500 active:bg-green-500 border-t-8 border-b-8 border-green-500 rounded-3xl" >Nutrition</button>
                            <button className="font-bold lg:text-2xl w-full hover:bg-blue-700 active:bg-blue-700 border-t-8 border-b-8 border-blue-700 rounded-3xl" >Daily Goals</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="flex flex-col h-screen relative md:max-lg:pt-[60vh]">
                <div className="lg:inline-flex xl:inline-flex">
                    <div className="w-full">
                        <img src="/landing_page/phaser-mentalhealth.jpeg"  alt="mental health" className="sm:rounded-r-full bg-center lg:h-[100vh]" />
                    </div>
                    <div className="text-white transform translate-y-20 lg:translate-y-1/3 w-full">
                        <p className="text-base text-center font-bold lg:text-4xl sm:text-xl w-full">Mental Health</p>
                        <p className="w-[90%] overflow text-center">Mental health is the cornerstone of our well-being, shaping how we perceive, interact, and navigate life is challenges. It is the compass guiding emotions, thoughts, and behaviors, influencing relationships, work, and overall quality of life. Acknowledging its significance fosters resilience and self-awareness, enabling individuals to cope with stress, adapt to change, and seek support when needed. Prioritizing mental health cultivates a society that values empathy, understanding, and inclusivity, reducing stigma and promoting healthier mindsets</p>
                        <div className="flex w-full justify-center pt-4">
                            <button className="font-bold hover:bg-orange-400 active:bg-orange-400 border-orange-400 text-center rounded-full w-60 border-t-4 border-b-4 p-2">Explore More &gt;&gt;</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col h-screen relative">
                <div className="lg:inline-flex">
                    <div className="w-full">
                        <img src="/landing_page/phaser-workout.jpeg" alt="Physical Fitness" className="sm:rounded-r-full bg-center lg:h-[100vh]" />
                    </div>
                    <div className="text-white transform translate-y-20 lg:translate-y-1/3 w-full">
                        <p className="text-base text-center font-bold lg:text-4xl sm:text-xl w-full">Physical Fitness</p>
                        <p className="w-[90%] overflow text-center">LOREM IPSUM FJLADSF JDHFLJA HFKJAHDF KJAHSF KJAHSFK JAHSFK JAHSFKJA</p>
                        <div className="flex w-full justify-center pt-4">
                            <button className="font-bold hover:bg-red-500 active:bg-red-500 border-red-500 text-center rounded-full w-60 border-t-4 border-b-4 p-2">Explore More &gt;&gt;</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col h-screen relative">
                <div className="lg:inline-flex">
                    <div className="w-full">
                        <img src="/landing_page/phaser-nutrition.jpeg" alt="Nutrition" className="sm:rounded-r-full bg-center lg:h-[100vh]" />
                    </div>
                    <div className="text-white transform translate-y-20 lg:translate-y-1/3 w-full">
                        <p className="text-base text-center font-bold lg:text-4xl sm:text-xl w-full">Nutrition</p>
                        <p className="w-[90%] overflow text-center">Nutrition is the deal breaker to make real progress in the fields of muscle building, maintaining fitness or sports. A good diet plan and nutrition sheet go hand in hand with progress in the realm of physical activity.</p>
                        <div className="flex w-full justify-center pt-4">
                            <button className="font-bold hover:bg-green-500 active:bg-green-500 border-green-500 text-center rounded-full w-60 border-t-4 border-b-4 p-2">Explore More &gt;&gt;</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col h-screen relative">
                <div className="lg:inline-flex">
                    <div className="w-full">
                        <img src="/landing_page/phaser-goals.jpeg" alt="Goals" className="sm:rounded-r-full bg-center lg:h-[100vh]" />
                    </div>
                    <div className="text-white transform translate-y-20 lg:translate-y-1/3 w-full">
                        <p className="text-base text-center font-bold lg:text-4xl sm:text-xl w-full">Goals</p>
                        <p className="w-[90%] overflow text-center">LOREM IPSUM FJLADSF JDHFLJA HFKJAHDF KJAHSF KJAHSFK JAHSFK JAHSFKJA</p>
                        <div className="flex w-full justify-center pt-4">
                            <button className="font-bold hover:bg-blur-700 active:bg-blue-700 border-blue-700 text-center rounded-full w-60 border-t-4 border-b-4 p-2">Explore More &gt;&gt;</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
