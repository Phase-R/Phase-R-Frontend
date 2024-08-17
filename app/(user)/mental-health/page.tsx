"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Poppins } from "next/font/google";
import { SlVolume2 } from "react-icons/sl";
import Slider from '@/app/components/ui/carousel';
import FlipCard from "@/app/components/ui/flipcard";

//Import Poppins font
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const profile_pics = ["/mental_health/guy.png", "/mental_health/guy.png", "/mental_health/guy.png"];
const desc_arr = ['"good review"', '"ok review"', '"bad review"'];
const names = ["john jacob", "percy jackson", "thor ragnarok"];
const questions = ["question 1?", "question 2", "question 3"];

export default function Page() {


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
                    <div className="relative w-1/5 p-2 sm:p-3">
                        <Image
                            src="/mental_health/forest-sunset.png"
                            alt="forest-sunset"
                            width={75}
                            height={50}
                            className="w-full h-auto"
                        />
                        <SlVolume2 className="sm:text-lg absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                    <div className="relative w-1/5 p-2 sm:p-3">
                        <Image
                            src="/mental_health/bonfire.png"
                            alt="bonfire"
                            width={75}
                            height={50}
                            className="w-full h-auto"
                        />
                        <SlVolume2 className="sm:text-lg absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                    <div className="relative w-1/5 p-2 sm:p-3">
                        <Image
                            src="/mental_health/leaf.png"
                            alt="leaf"
                            width={75}
                            height={50}
                            className="w-full h-auto"
                        />
                        <SlVolume2 className="sm:text-lg absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                </div>

                <div className="flex justify-evenly max-w-3xl mx-auto gap-2 sm:gap-3 md:gap-4">
                    <div className="relative w-1/5 p-2 sm:p-3">
                        <Image
                            src="/mental_health/beach.png"
                            alt="Beach"
                            width={75}
                            height={50}
                            className="w-full h-auto"
                        />
                        <SlVolume2 className="sm:text-lg absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                    <div className="relative w-1/5 p-2 sm:p-3">
                        <Image
                            src="/mental_health/waterfall.png"
                            alt="Waterfall"
                            width={75}
                            height={50}
                            className="w-full h-auto"
                        />
                        <SlVolume2 className="sm:text-xl absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                </div>

                <FlipCard question={questions} />

                <div className="flex justify-center mx-auto mt-24 lg:mt-96 mb-12">
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black">
                        <Image
                            src="/mental_health/combined_2.png"
                            alt="combined_2"
                            layout="responsive"
                            height={1}
                            width={1}
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
                            <img src="/mental_health/yoga.png" alt="yoga" className="w-8 h-8 lg:w-16 lg:h-16" />
                        </div>
                        <h2 className={`${poppins.className} text-white text-lg md:text-xl font-bold text-center mt-2`}>
                            YOGA
                        </h2>
                    </div>
                </div>

                <h2 className={`${poppins.className} text-white text-lg md:text-xl lg:text-2xl font-light italic text-center mt-2`}>
                    Glowing testimonials from our valued users..
                </h2>

                <Slider description={desc_arr} images={profile_pics} sideText={names} />

            </div>
        </>
    );
}
