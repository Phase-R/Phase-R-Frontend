'use client';
import Image from "next/image";
import { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { Poppins } from "next/font/google";

interface SliderDataInterface {
    description: string;
    exercises: string[];
    bodyPart: string;
    setsAndReps: string;
    days: string[]; // Added missing property
    cycles: string[];
  }
  
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function Workout() {
  const [sliderValue, setSliderValue] = useState(2);
  const [sliderData, setSliderData] = useState<SliderDataInterface>({
    description: '',
    exercises: [],
    bodyPart: '',
    setsAndReps: '',
    days: [], // Added missing property
    cycles: [],
  });
  

  const handleSliderChange = (value: number) => {
    setSliderValue(value); 
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/api/getWorkoutByDays", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ numberOfDays: sliderValue })
    });
    const data: { workoutData: SliderDataInterface } = await response.json();
    setSliderData(data.workoutData);
    console.log(data.workoutData,sliderData)
  };

  return (
    <div>
      <div className="relative">
        <Image src="/gym_page/gym-inner-bg.png" alt="Gym Inner BGM" width={700} height={700} className="z-10 w-full mx-auto" />
        <div className="z-100 absolute inset-0 px-20 py-[15%] w-full lg:min-h-[74vh]">
          <h1 className={`text-center text-md xl:text-7xl lg:text-5xl md:text-3xl font-bold ${poppins.className}`}>Customize your <span className="text-white">workout</span> and <br /> release your inner <span className="text-white">beast</span></h1>
          <div className="flex space-x-20 justify-center mx-auto p-2 md:p-10">
            <button className="text-white bg-black px-4 py-2 md:px-10 md:py-5 rounded-xl font-bold">Start Now</button>
            <button className="text-white bg-black px-4 py-2 md:px-10 md:py-5 rounded-xl font-bold">Return Home</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:h-[100vh] w-full p-[10%] space-y-10">
        <h2 className={`text-center text-3xl xl:text-7xl lg:text-5xl font-bold ${poppins.className} text-gym-brown`}>Select <span className="text-white">The Number Of</span> Days</h2>
        <ul className="list-disc text-white text-xl xl:text-3xl lg:text-2xl">
          <li>One rest day minimum</li>
          <li>Minimum 2 days workout</li>
        </ul>
        <div className="flex flex-row bg-black rounded-xl h-[50%]">
          <div className="flex flex-col justify-center bg-gym-brown rounded-xl">
            <CircularSlider
              width={200}
              label="Day Split"
              min={2}
              max={6}
              knobColor="#FFFFFF"
              progressColorFrom="#F0F0F0" 
              progressColorTo="#F0F0F0" 
              labelColor="#FFFFFF"
              trackColor="#000000"
              onChange={handleSliderChange}
            />
            {/* Submit button */}
            <button className="text-white bg-black font-bold px-10 py-5 rounded-xl" onClick={handleSubmit}>Submit</button>
            <div className="flex flex-col justify-center bg-gym-brown rounded-xl">
                {sliderData.description}
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl text-white p-[5%]">
          <h3 className="text-xl font-bold">Split Plan:</h3>
          <p>Text to be rendered based on user decision</p>
        </div>
      </div>
    </div>
  );
}
