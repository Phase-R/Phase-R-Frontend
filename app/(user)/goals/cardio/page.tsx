import Image from "next/image"
import { Poppins } from "next/font/google"
import SlidingImages from "../Sliding_images"

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

const cardio_imgs = ["/goals/cardio_slider_1.svg", "/goals/cardio_slider_2.svg", "/goals/cardio_slider_3.svg", "/goals/cardio_slider_4.svg"]

export default function cardioGoals() {
    return(
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
            <br />
            <br />
            <br />

            <SlidingImages images={cardio_imgs} />
            <br />
            <h2 className={`w-full text-center text-white ${poppins.className} font-bold text-lg md:text-2xl lg:text-4xl xl:text-6xl`}>PLAN YOUR WORKOUT</h2>
            <br />
        </div>
    )
}