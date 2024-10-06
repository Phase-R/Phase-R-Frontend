"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import { Poppins } from "next/font/google";
import { SlVolume2 } from "react-icons/sl";
import Slider from '@/app/components/ui/slider';
import FlipCard from "@/app/components/ui/flipcard";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
  } from "@/app/components/ui/animated-modal";

// Import Poppins font
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const profile_pics = ["/mental_health/guy.png", "/mental_health/guy.png", "/mental_health/guy.png"];
const desc_arr = ['"good review"', '"ok review"', '"bad review"'];
const names = ["john jacob", "percy jackson", "thor ragnarok"];
const quests = ["hi?", "hii??", "hiiii??"];

//thought therapy component
function TextEditorModal() {
    const [text, setText] = useState(""); // State to hold the user input
  
    return (
      <div className="py-40 flex items-center justify-center">
        <Modal>
          <ModalTrigger className="bg-black max-w-lg m-4 dark:bg-white dark:text-black text-white flex justify-center">
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
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4">
                Your Thoughts
              </h4>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start typing your thoughts here..."
                className="w-full h-64 md:h-96 p-4 rounded-lg border border-gray-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </ModalContent>
            <ModalFooter className="gap-4">
              <button
                onClick={() => setText("")} // Clear the text when cancel is clicked
                className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:text-white border border-gray-300 rounded-md text-sm"
              >
                Clear
              </button>
              <button
                className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md text-sm"
              >
                Save
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    );
  }  

export default function Page() {
    const [questions, setQuestions] = useState<string[]>([]);

    const forestAudioRef = useRef<HTMLAudioElement | null>(null);
    const bonfireAudioRef = useRef<HTMLAudioElement | null>(null);
    const leafAudioRef = useRef<HTMLAudioElement | null>(null);
    const beachAudioRef = useRef<HTMLAudioElement | null>(null);
    const waterfallAudioRef = useRef<HTMLAudioElement | null>(null);

    const playAudio = (audioRef: React.RefObject<HTMLAudioElement>) => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    };

    useEffect(() => {
        // Fetch questions when the component mounts
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:8080/fetch_questions', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    setQuestions(data.question_set); // Set the question_set array
                } else {
                    console.error('Failed to fetch questions');
                }
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);
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
                    <h1 className={`${poppins.className} text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold drop-shadow-md`}>
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
                            <source src='/mental_health/GreenNoise.mp3' />
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
                            <source src='/mental_health/Beach.mp3' />
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
                            <source src='/mental_health/Waterfall.mp3' />
                        </audio>
                        <SlVolume2 className="sm:text-xl absolute inset-0 m-auto text-white md:text-3xl lg:text-4xl font-bold drop-shadow-lg" />
                    </div>
                </div>

                <FlipCard question={questions} />

                <TextEditorModal />

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

                <h2 className={`${poppins.className} text-white text-lg md:text-xl lg:text-2xl font-light italic text-center mt-2`}>
                    Glowing testimonials from our valued users..
                </h2>

                <Slider description={desc_arr} images={profile_pics} sideText={names} />

            </div>


        </>
    );
}
