import Image from "next/image";
import { Poppins } from "next/font/google";
import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel"
import hiit from "../../physical-fitness/cardio/hiit/page";
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export default function Fitness() {
    const cardio_imgs = [
        { src: "/goals/fitness/cardio/day1.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/cardio/day2.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/cardio/day3.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/cardio/day4.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/cardio/day5.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/cardio/day6.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/cardio/day7.svg", alt: "Image 1 description" },
    ];

    const hiit_imgs = [
        { src: "/goals/fitness/hiit/day1.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/hiit/day2.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/hiit/day3.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/hiit/day4.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/hiit/day5.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/hiit/day6.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/hiit/day7.svg", alt: "Image 1 description" },
    ];

    const swim_imgs = [
        { src: "/goals/fitness/swimming/swim_1.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/swimming/swim_2.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/swimming/swim_3.svg", alt: "Image 1 description" },
    ];

    const cycle_imgs = [
        { src: "/goals/fitness/cycling/day1.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/cycling/day2.svg", alt: "Image 1 description" },
        { src: "/goals/fitness/cycling/day3.svg", alt: "Image 1 description" },
    ];

    return (
        <div>
            <div className="relative flex md:h-[90vh] lg:h-[90vh]">
                <Image
                    src="/goals/main_goals_1.svg"
                    alt="goals_main_1"
                    width={40}
                    height={10}
                    className="w-1/5 h-full object-cover opacity-40"
                />
                <Image
                    src="/goals/main_goals_2.svg"
                    alt="goals_main_2"
                    width={40}
                    height={10}
                    className="w-1/5 h-full object-cover opacity-40"
                />
                <Image
                    src="/goals/main_goals_3.svg"
                    alt="goals_main_3"
                    width={40}
                    height={10}
                    className="w-1/5 h-full object-cover opacity-40"
                />
                <Image
                    src="/goals/main_goals_4.svg"
                    alt="goals_main_4"
                    width={40}
                    height={10}
                    className="w-1/5 h-full object-cover opacity-40"
                />
                <Image
                    src="/goals/main_goals_5.svg"
                    alt="goals_main_5"
                    width={40}
                    height={10}
                    className="w-1/5 h-full object-cover opacity-40"
                />

                <div className="absolute inset-0 flex items-center justify-center z-30">
                    <h1 className={`${poppins.className} text-white text-2xl md:text-5xl lg:text-7xl font-bold drop-shadow-md`}>
                        TRACK YOUR GOALS
                    </h1>
                </div>
            </div>

            <div className="relative mt-12 md:mt-18 lg:mt-24">
                <img src="/goals/fitness/cardio.svg" alt="goals_track_diet" width={100} height={100} className="relative w-full" />
                <div className="absolute inset-0 flex items-center justify-center text-center z-30">
                    <h1 className={`${poppins.className} text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold drop-shadow-md`}>
                        CARDIO
                    </h1>
                </div>
            </div>

            <div className="relative bg-black p-10 md:p-15 lg:p-20 w-full h-20vh">
                <div className="absolute inset-0 flex items-center justify-center text-center z-30">
                    <h1 className={`${poppins.className} text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold drop-shadow-md`}>
                        TRACK YOUR WORKOUT
                    </h1>
                </div>
            </div>

            <div className="relative bg-gradient-to-b from-[#331708] via-[#B0511C] to-[#160A03] py-10">

                <h1 className={`${poppins.className} text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-md mb-6 pl-4`}>
                    CARDIO
                </h1>

                <div className="flex items-center justify-center relative mx-auto">
                    <Carousel className="w-full md:max-w-2xl lg:max-w-4xl">
                        <CarouselContent className="-ml-1">
                            {cardio_imgs.map((image, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/3">
                                    <div className="p-1">
                                        <img src={image.src} alt={image.alt} className="aspect-square object-cover w-full h-full" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="bg-[#191919] p-4 md:p-6 rounded-lg shadow-lg max-w-lg mx-auto text-white mt-6 md:mt-10 mx-4">
                    <p className="text-sm md:text-base leading-relaxed">
                        Cardiovascular exercise, or cardio, is highly effective for overall health and fitness. It enhances heart and lung function, promoting better circulation and oxygen delivery. Regular cardio sessions burn calories, aiding weight management, and contribute to reduced stress levels. Additionally, cardio boosts mood by releasing endorphins, fostering a healthier, happier lifestyle.
                    </p>
                </div>

                <h1 className={`${poppins.className} text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-md mb-6 pl-4 mt-10`}>
                    HIIT
                </h1>

                <div className="flex items-center justify-center relative mx-auto">
                    <Carousel className="w-full md:max-w-2xl lg:max-w-4xl">
                        <CarouselContent className="-ml-1">
                            {hiit_imgs.map((image, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/3">
                                    <div className="p-1">
                                        <img src={image.src} alt={image.alt} className="aspect-square object-cover w-full h-full" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="bg-[#191919] p-4 md:p-6 rounded-lg shadow-lg max-w-lg mx-auto text-white mt-6 md:mt-10 mx-4">
                    <p className="text-sm md:text-base leading-relaxed">
                        High-Intensity Interval Training (HIIT) is incredibly effective for fat burning and fitness. Its short bursts of intense effort followed by brief rest periods elevate the heart rate, maximizing calorie burn during and after the workout. HIIT promotes lean muscle growth, enhancing metabolism and aiding fat loss.
                    </p>
                </div>

                <h1 className={`${poppins.className} text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-md mb-6 pl-4 mt-10`}>
                    SWIMMING
                </h1>

                <div className="flex items-center justify-center relative mx-auto">
                    <Carousel className="w-full md:max-w-2xl lg:max-w-4xl">
                        <CarouselContent className="-ml-1">
                            {swim_imgs.map((image, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/3">
                                    <div className="p-1">
                                        <img src={image.src} alt={image.alt} className="aspect-square object-cover w-full h-full" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="bg-[#191919] p-4 md:p-6 rounded-lg shadow-lg max-w-lg mx-auto text-white mt-6 md:mt-10 mx-4">
                    <p className="text-sm md:text-base leading-relaxed">
                        Swimming has a rich history, with the breaststroke dating back over 7,000 years and being the oldest known swimming stroke. In 1828, the first indoor swimming pool, the St. George&apos;s Baths, was constructed in Liverpool, England, equipped with a pioneering heating system.
                    </p>
                </div>

                <h1 className={`${poppins.className} text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-md mb-6 pl-4 mt-10`}>
                    CYCLING
                </h1>

                <div className="flex items-center justify-center relative mx-auto">
                    <Carousel className="w-full md:max-w-2xl lg:max-w-4xl">
                        <CarouselContent className="-ml-1">
                            {cycle_imgs.map((image, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/3">
                                    <div className="p-1">
                                        <img src={image.src} alt={image.alt} className="aspect-square object-cover w-full h-full" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="bg-[#191919] p-4 md:p-6 rounded-lg shadow-lg max-w-lg mx-auto text-white mt-6 md:mt-10 mx-4">
                    <p className="text-sm md:text-base leading-relaxed">
                        Cycling, like swimming, has a fascinating history, and one of the most iconic events is the creation of the first practical bicycle, known as the &apos;boneshaker,&apos; in the 1860s. The evolution of cycling facilities has been remarkable, with the Netherlands boasting the world&apos;s first dedicated cycle path in 1885.
                    </p>
                </div>
            </div>

        </div>
    );
}
