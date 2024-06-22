import Image from "next/image";

import { Poppins } from "next/font/google"
import { transform } from "next/dist/build/swc";
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function Goals() {
    return (
        <div>
            <div className="flex flex-row w-full">
                <Image src="/goals/goals_main_1.png" alt="goals_main_1" width={60} height={10} className="w-full mx-auto opacity-40"></Image>
                <Image src="/goals/goals_main_2.png" alt="goals_main_2" width={60} height={10} className="w-full mx-auto opacity-40"></Image>
                <Image src="/goals/goals_main_3.png" alt="goals_main_3" width={60} height={10} className="w-full mx-auto opacity-40"></Image>
                <Image src="/goals/goals_main_4.png" alt="goals_main_4" width={60} height={10} className="w-full mx-auto opacity-40"></Image>
                <Image src="/goals/goals_main_5.png" alt="goals_main_5" width={60} height={10} className="w-full mx-auto opacity-40"></Image>
            </div>
            <h1 className={`z-10 absolute inset-0 w-f   ull lg:min-h-[74vh] text-center text-white font-bold ${poppins.className} py-[35%] md:py-[30%] lg:py-[25%] text-xl md:text-3xl lg:text-5xl xl:text-7xl`} >TRACK YOUR GOALS</h1>
            <br />
            <br />
            <div className="flex">
                <Image src="/goals/long_cardio.png" alt="goals_main_cardio" width={60} height={60} className="w-full object-contain mx-auto p-2 md:p-8 lg:p-16 opacity-40"></Image>
                

                <Image src="/goals/long_gym.png" alt="goals_main_gym" width={60} height={60} className="w-full object-contain mx-auto p-2 md:p-8 lg:p-16 opacity-40"></Image>
                
                
                <Image src="/goals/long_sports.png" alt="goals_main_sport" width={60} height={60} className="w-full object-contain mx-auto p-2 md:p-8 lg:p-16 opacity-40"></Image>
                
                
                <Image src="/goals/long_martial_arts.png" alt="goals_main_martial_arts" width={60} height={60} className="w-full object-contain mx-auto p-2 md:p-8 lg:p-16 opacity-40"></Image>
                
            
            </div>
            <p className="text-center text-white p-4 md:p-8 text-lg md:text-xl lg:text-2xl">Tracking physical goals across diverse activities like martial arts, sports, gym sessions, and cardio workouts is pivotal for holistic progress. With tailored metrics for each discipline, one can monitor improvements in technique, strength, endurance, and flexibility. Whether aiming for a higher belt in martial arts, enhancing performance in sports, increasing weights at the gym, or improving cardio endurance, meticulous tracking allows for targeted adjustments, motivating milestones, and an insightful roadmap toward overall fitness and skill development.</p>

            <Image src="/goals/track_diet.png" alt="goals_track_diet" width={100} height={100} className="w-full pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16" />
            <p className="text-center text-white p-4 md:p-8 text-lg md:text-xl lg:text-2xl">Embark on a transformative health journey with our Track Your Diet feature. Empower yourself with real-time insights into your nutrition, enabling you to make informed choices and achieve your wellness goals. Our user-friendly interface makes tracking a breeze, ensuring you stay committed to a healthier lifestyle. Whether you are aiming for weight management, fitness milestones, or simply better nutrition, our platform equips you with the tools to succeed. Take control of your well-being – Track Your Diet, and watch as positive changes unfold on your path to a healthier, happier you.</p>

            <Image src="/goals/goals_notes.png" alt="goals_notes" width={100} height={100} className="w-full pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16" />
        
            <p className="text-center text-white p-4 md:p-8 text-lg md:text-xl lg:text-2xl">Journaling significantly influences mental health and overall well-being. This practice serves as a cathartic outlet, aiding in processing emotions, reducing stress, and fostering self-awareness. . the application provides a secure space to jot down thoughts and goals and track your feelings and emotions</p>
        
            <div className="flex h-full">
                <Image src="/goals/coming_soon_1.svg" alt="coming soon 1" width={50} height={50} className="w-1/3 mx-auto" />
                <Image src="/goals/coming_soon_2.svg" alt="coming soon 2" width={50} height={50} className="w-1/3 mx-auto" />
                <Image src="/goals/coming_soon_3.svg" alt="coming soon 3" width={50} height={50} className="w-1/3 mx-auto" />
            </div>

            <p className="text-white text-center p-4 md:p-8 text-lg md:text-xl lg:text-2xl">Exciting Developments Await! At Phase-R, we are thrilled to share a sneak<br /> peek into the future of our platform. Brace yourself for a wave<br /> of innovative features designed with you in mind.</p>
        
        </div>
    )
}