"use client";
import React, { useRef } from 'react';
import Image from "next/image";
import { Poppins } from "next/font/google";
import { SlVolume2 } from "react-icons/sl";
import Slider from '@/app/components/ui/carousel';
import MCQ from "@/app/components/ui/mcq";

// Import Poppins font
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const profile_pics: string[] = ["/mental_health/guy.png", "/mental_health/guy.png", "/mental_health/guy.png"];
const desc_arr: string[] = ['"good review"', '"ok review"', '"bad review"'];
const names: string[] = ["john jacob", "percy jackson", "thor ragnarok"];
const questions: string[] = ["How u feeling bud?", "How are u little guy?", "Are u really lonely?"]

export default function Page() {
    const forestAudioRef = useRef<HTMLAudioElement | null>(null);
    const bonfireAudioRef = useRef<HTMLAudioElement | null>(null);
    const leafAudioRef = useRef<HTMLAudioElement | null>(null);
    const beachAudioRef = useRef<HTMLAudioElement | null>(null);
    const waterfallAudioRef = useRef<HTMLAudioElement | null>(null);

    const playAudio = (audioRef: React.RefObject<HTMLAudioElement>) => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <>
            <div className="relative">
                <div className="relative w-full h-screen">
                    <Image
                        src="/mental_health/holdingHands.png"
                        alt="Mental Health Header"
                        layout="fill"
                        objectFit="cover"
                        className="z-10"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center text-center z-30">
                    <h1 className={`${poppins.className} text-white text-5xl lg:text-7xl font-bold drop-shadow-md`}>
                        MENTAL HEALTH
                    </h1>
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#7E401E] via-[#E3C016] to-[#2A2102] py-10">
                <h1 className={`${poppins.className} text-white text-xl md:text-3xl lg:text-5xl font-bold text-center drop-shadow mb-10`}>
                    WELCOME TO A SPACE WHERE <br className="md:block sm:block lg:block" />
                    MENTAL HEALTH IS NURTURED <br className="md:block sm:block lg:block" />
                    AND PRIORITIZED
                </h1>

                <div className="flex justify-around max-w-3xl mx-auto gap-2 sm:gap-3 md:gap-4">
                    <div className="relative w-1/5 p-2 sm:p-3" onClick={() => playAudio(forestAudioRef)}>
                        <Image
                            src="/mental_health/forest-sunset.png"
                            alt="forest-sunset"
                            width={75}
                            height={50}
                            className="w-full h-auto"
                        />
                        <audio ref={forestAudioRef}>
                            <source src='/mental_health/Forest.mp3' />
                        </audio>
                        <SlVolume2 className="sm:text-lg absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                    <div className="relative w-1/5 p-2 sm:p-3" onClick={() => playAudio(bonfireAudioRef)}>
                        <Image
                            src="/mental_health/bonfire.png"
                            alt="bonfire"
                            width={75}
                            height={50}
                            className="w-full h-auto"
                        />
                        <audio ref={bonfireAudioRef}>
                            <source src='/mental_health/Fireplace_sounds.mp3' />
                        </audio>
                        <SlVolume2 className="sm:text-lg absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                    <div className="relative w-1/5 p-2 sm:p-3" onClick={() => playAudio(leafAudioRef)}>
                        <Image
                            src="/mental_health/leaf.png"
                            alt="leaf"
                            width={75}
                            height={50}
                            className="w-full h-auto"
                        />
                        <audio ref={leafAudioRef}>
                            <source src='/mental_health/Leaf_sounds.mp3' />
                        </audio>
                        <SlVolume2 className="sm:text-lg absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                </div>

                <div className="flex justify-evenly max-w-3xl mx-auto gap-2 sm:gap-3 md:gap-4">
                    <div className="relative w-1/5 p-2 sm:p-3" onClick={() => playAudio(beachAudioRef)}>
                        <Image
                            src="/mental_health/beach.png"
                            alt="Beach"
                            width={75}
                            height={50}
                            className="w-full h-auto"
                        />
                        <audio ref={beachAudioRef}>
                            <source src='/mental_health/Beach_sounds.mp3' />
                        </audio>
                        <SlVolume2 className="sm:text-lg absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                    <div className="relative w-1/5 p-2 sm:p-3" onClick={() => playAudio(waterfallAudioRef)}>
                        <Image
                            src="/mental_health/waterfall.png"
                            alt="Waterfall"
                            width={75}
                            height={50}
                            className="w-full h-auto"
                        />
                        <audio ref={waterfallAudioRef}>
                            <source src='/mental_health/Waterfall_sounds.mp3' />
                        </audio>
                        <SlVolume2 className="sm:text-xl absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                </div>

                <div className="flex justify-center mx-auto mt-24">
                    <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black">
                        <Image
                            src="/mental_health/combined_1.png"
                            alt="combined_1"
                            layout="responsive"
                            height={500}
                            width={500}
                            className="object-cover opacity-70"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <h2 className={`${poppins.className} text-white sm:text-lg text-2xl md:text-4xl font-bold text-center`}>
                                WELL-BEING<br className="block" />
                                QUESTIONNAIRE
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mx-auto mt-24 mb-12">
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black">
                        <Image
                            src="/mental_health/combined_2.png"
                            alt="combined_2"
                            layout="responsive"
                            height={500}
                            width={500}
                            className="object-cover opacity-70"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <h2 className={`${poppins.className} text-white sm:text-lg text-2xl md:text-4xl font-bold text-center`}>
                                THOUGHT<br className="block" />
                                THERAPY
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly items-center max-w-lg mx-auto mt-24 space-x-2 md:space-x-4 lg:space-x-6 mb-24">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 bg-[#FF8A00] rounded-full">
                            <img src="/mental_health/clipboard.png" alt="clipboard" className="w-8 h-8 lg:w-16 lg:h-16" />
                        </div>
                        <h2 className={`${poppins.className} text-white text-lg md:text-xl font-bold text-center mt-2`}>
                            MY NOTES
                        </h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 bg-[#FFE500] rounded-full">
                            <img src="/mental_health/meditate.png" alt="meditation" className="w-8 h-8 lg:w-16 lg:h-16" />
                        </div>
                        <h2 className={`${poppins.className} text-white text-lg md:text-xl font-bold text-center mt-2`}>
                        MEDITATION
                        </h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 bg-[#FF8A00] rounded-full">
                            <img src="/mental_health/yoga.png" alt="exercise" className="w-8 h-8 lg:w-16 lg:h-16" />
                        </div>
                        <h2 className={`${poppins.className} text-white text-lg md:text-xl font-bold text-center mt-2`}>
                            EXERCISE
                        </h2>
                    </div>
                </div>

                <div className="mt-24 mb-12">
                    <Slider
                        images={profile_pics}
                        description={desc_arr}
                        sideText={names}
                    />
                </div>

                <div className="mt-24 mb-12">
                    <MCQ question={questions} />
                </div>
            </div>
        </>
    );
}
