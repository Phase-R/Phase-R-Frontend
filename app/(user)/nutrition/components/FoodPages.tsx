"use client";

import { useState } from "react";
import customIcon from "../muscle-gain/icon/icon";
import { Poppins } from "next/font/google";
import Pyramid from "./Pyramid";
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

interface ProteinSource {
    name: string;
    amount: number;
}

enum FoodCategory {
    Veg = 'veg',
    NonVeg = 'non_veg',
}

interface PageProps {
    color: string;
    category: FoodCategory;
    first_title: string;
    second_title: string;
    hero_desc1: string;
    hero_desc2: string,
    hero_desc3: string,
    hero_img1: string,
    hero_img2: string,
    hero_img3: string,
    diet_desc: string;
    sources_list: ProteinSource[];
}

const MuscleGainPage: React.FC<PageProps> = ({
    color,
    category,
    first_title,
    second_title,
    hero_desc1,
    hero_desc2,
    hero_desc3,
    hero_img1,
    hero_img2,
    hero_img3,
    diet_desc,
    sources_list,
}) => {
    const [selected, setSelected] = useState<ProteinSource[]>([]);

    const handleCheckBoxInput = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const isChecked = event.target.checked;
        const updatedProteins = [...selected];
        const protein_source = sources_list[index];

        if (isChecked) {
            updatedProteins.push(protein_source);
        } else {
            const indexOfRemoved = updatedProteins.findIndex((item) => item.name === protein_source.name);
            updatedProteins.splice(indexOfRemoved, 1);
        }

        setSelected(updatedProteins);
    };

    return (
        <div className="bg-black max-w-screen overflow-hidden">
            <h2 className={`text-${color}-500 flex justify-start m-4 sm:mx-6 md:mx-10 lg:mx-20 text-sm sm:text-base md:text-lg lg:text-xl border-b-4 p-2`}>
                Nutrition
            </h2>
            <div className="text-white m-4 sm:mx-6 md:mx-10 lg:mx-20 pr-4 flex flex-col md:flex-row md:space-x-4 lg:space-x-8">
                <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">{first_title}</h3>
                    <br />
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl">{hero_desc1}</p>
                    <br />
                    <img src={`${hero_img1}`} alt="muscle gain hero" className="w-full md:w-auto" />
                    <br />
                </div>
                <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">{second_title}</h4>
                    <br />
                    <div className="flex flex-col md:flex-row m-4">
                        <div>
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg">{hero_desc2}</p>
                            <br />
                            <img src={`${hero_img2}`} alt="greek sculpture" className="w-full md:w-auto" />
                            <br />
                        </div>
                        <img src={`${hero_img3}`} alt="muscle gain veg hero" className="w-full md:w-auto" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                        {hero_desc3}
                    </p>
                </div>
            </div>


            <div className="flex flex-row border-b-4 p-2 m-4 sm:mx-6 md:mx-10 lg:mx-20 text-sm sm:text-base md:text-lg lg:text-xl pr-4">
                <h3 className={`text-${color}-500 flex-grow`}>Choose your diet</h3>
                {customIcon(color)}
            </div>

            <div className="flex flex-col md:flex-row items-start md:space-x-4 mx-4 md:mx-10 lg:mx-20 lg:space-x-10">
                <img src={`/nutrition_page/${color}s_food_1.svg`} alt="diet image 1" className="w-full max-w-lg md:w-1/3 lg:w-1/4" />

                <div className="flex flex-col w-full md:w-2/3 lg:w-3/4">
                    <h4 className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-${color}-500`}>
                        {category === FoodCategory.Veg ? "A vegetarian Diet" : "A non vegetarian Diet"}
                    </h4>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg">
                        {diet_desc}
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:space-x-4 mx-4 md:mx-10 lg:mx-20 lg:space-x-10 mt-6 md:mt-10">
                <h1 className="w-full md:w-1/2 text-base sm:text-2xl md:text-5xl lg:text-7xl  font-bold text-white tracking-wide">
                    {category === FoodCategory.Veg ? "The Vegetarian Diet" : "The Non Vegetarian Diet"}
                </h1>
                <img src={`/nutrition_page/${color}s_food_2.svg`} alt="green food 2" className="w-full md:w-2/3 lg:w-3/4 max-w-xs sm:max-w-sm lg:max-w-lg" />
            </div>




            <div>
                <h3 className={`text-${color}-500 flex justify-center m-4 sm:mx-6 md:mx-10 lg:mx-20 text-sm sm:text-base md:text-lg lg:text-xl border-b-4 p-2 font-bold`}>{category === FoodCategory.Veg ? "Vegetarian Sources" : "Non Vegetarian Sources"}</h3>
                <h4 className={`text-${color}-500 flex justify-center m-4 sm:mx-6 md:mx-10 lg:mx-20 text-sm sm:text-base md:text-lg lg:text-xl`}>CHOOSE YOUR PROTEIN SOURCES</h4>
                <div className="flex justify-center">
                    <div className={`flex flex-col justify-start text-${color}-500 space-y-2 md:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl`}>
                        {sources_list.map((source, index) => (
                            <div key={source.name} className="flex">
                                <label htmlFor={source.name}>
                                    <p>{index + 1}. {source.name} <span className="text-white">: {source.amount} grams</span></p>
                                </label>
                                <input className="ml-auto md:w-8 md:h-8" type="checkbox" id={source.name} checked={selected.some(item => item.name === source.name)} onChange={(event) => handleCheckBoxInput(event, index)} />
                            </div>
                        ))}
                        <br />
                        <div className="flex justify-center">
                            <button className="w-[50%] py-2 mt-4 text-white font-bold bg-[#4AC847] rounded-md">
                                Generate Diet
                            </button>
                        </div>
                        {/* Table with diet Generated coming from backend */}
                        <br />
                        <div className="flex justify-center">
                            <button className="w-[50%] py-2 mt-4 text-white font-bold bg-[#4AC847] rounded-md">
                                Customize Diet
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pb-10 pt-10">
                    <Pyramid size="h-64"/>
                </div>
            </div>
        </div>
    );


};

export { MuscleGainPage, FoodCategory };
