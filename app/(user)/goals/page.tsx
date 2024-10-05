import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });


export default function Fitness() {

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


            <div className="relative bg-gradient-to-b from-[#130C14] via-[#B672C1] to-[#815188] py-10">
                <div className="relative z-10 flex justify-between items-center pl-4 pr-4 mt-12 md:mt-16 lg:mt-20">
                    <Image
                        src="/goals/cardio.svg"
                        alt="goals_main_cardio"
                        width={200}
                        height={150}
                        className="object-contain p-1 w-1/4 md:w-1/5 lg:w-1/6"
                    />
                    <Image
                        src="/goals/gym.svg"
                        alt="goals_main_gym"
                        width={200}
                        height={150}
                        className="object-contain p-1 w-1/4 md:w-1/5 lg:w-1/6"
                    />
                    <Image
                        src="/goals/sports.svg"
                        alt="goals_main_sport"
                        width={200}
                        height={150}
                        className="object-contain p-1 w-1/4 md:w-1/5 lg:w-1/6"
                    />
                    <Image
                        src="/goals/arts.svg"
                        alt="goals_main_martial_arts"
                        width={200}
                        height={150}
                        className="object-contain p-1 w-1/4 md:w-1/5 lg:w-1/6"
                    />
                </div>

                <p className="relative z-10 text-center text-white p-4 md:p-8 text-lg md:text-xl lg:text-2xl">
                    Tracking physical goals across diverse activities like martial arts, sports, gym sessions, and cardio workouts is pivotal for holistic progress. With tailored metrics for each discipline, one can monitor improvements in technique, strength, endurance, and flexibility. Whether aiming for a higher belt in martial arts, enhancing performance in sports, increasing weights at the gym, or improving cardio endurance, meticulous tracking allows for targeted adjustments, motivating milestones, and an insightful roadmap toward overall fitness and skill development.
                </p>

                <div className="relative z-10 mt-12 md:mt-18 lg:mt-24">
                    <img
                        src="/goals/diet_track.svg"
                        alt="goals_track_diet"
                        width={100}
                        height={100}
                        className="relative w-full pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center z-30">
                        <h1 className={`${poppins.className} text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold drop-shadow-md`}>
                            TRACK YOUR DIET
                        </h1>
                    </div>
                </div>

                <p className="relative z-10 text-white text-bold text-center p-4 md:p-8 text-lg md:text-xl lg:text-2xl">
                    Embark on a transformative health journey with our Track Your Diet feature. Empower yourself with real-time insights into your nutrition, enabling you to make informed choices and achieve your wellness goals. Our user-friendly interface makes tracking a breeze, ensuring you stay committed to a healthier lifestyle. Whether you're aiming for weight management, fitness milestones, or simply better nutrition, our platform equips you with the tools to succeed. Take control of your well-being – Track Your Diet, and watch as positive changes unfold on your path to a healthier, happier you.
                </p>

                <div className="relative z-10 mt-12 md:mt-18 lg:mt-24">
                    <img
                        src="/goals/notes.svg"
                        alt="goals_track_diet"
                        width={100}
                        height={100}
                        className="relative w-full pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center z-30">
                        <h1 className={`${poppins.className} text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold drop-shadow-md`}>
                            MY NOTES
                        </h1>
                    </div>
                </div>

                <p className="relative z-10 text-white text-bold text-center p-4 md:p-8 text-lg md:text-xl lg:text-2xl">
                    Journaling significantly influences mental health and overall well-being. This practice serves as a cathartic outlet, aiding in processing emotions, reducing stress, and fostering self-awareness. . the application provides a secure space to jot down thoughts and goals and track your feelings and emotions
                </p>



            </div>


            <div className="relative flex h-screen">
                <Image
                    src="/goals/coming_soon_1.svg"
                    alt="goals_main_1"
                    width={40}
                    height={10}
                    className="w-1/3 h-full object-cover opacity-40"
                />
                <Image
                    src="/goals/coming_soon_2.svg"
                    alt="goals_main_2"
                    width={40}
                    height={10}
                    className="w-1/3 h-full object-cover opacity-40"
                />
                <Image
                    src="/goals/coming_soon_3.svg"
                    alt="goals_main_3"
                    width={40}
                    height={10}
                    className="w-1/3 h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center z-30">
                    <h1 className={`${poppins.className} text-white text-2xl md:text-5xl lg:text-7xl font-bold drop-shadow-md`}>
                        COMING SOON
                    </h1>
                </div>
            </div>

            <p className="text-white text-bold text-center p-4 md:p-8 text-lg md:text-xl lg:text-2xl">Exciting Developments Await! At Phase-R, we are thrilled to share a sneak peek into the future of our platform. Brace yourself for a wave of innovative features designed with you in mind.</p>
        </div>
    );
}
