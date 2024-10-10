"use client";

import { useState } from "react";
import customIcon from "../muscle-gain/icon/icon";
import Button from "../components/button";
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
        <div className="bg-black">
            <h2 className={`text-${color}-500 flex justify-start m-4 sm:mx-6 md:mx-10 lg:mx-20 text-lg sm:text-xl md:text-3xl lg:text-5xl border-b-4 p-2`}>
                Nutrition
            </h2>
            <div className="text-white m-4 sm:mx-6 md:mx-10 lg:mx-20 flex flex-col md:flex-row md:space-x-4 lg:space-x-8">
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">{first_title}</h3>
                    <br />
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl">{hero_desc1}</p>
                    <br />
                    <img src={`${hero_img1}`} alt="muscle gain hero" />
                    <br />
                </div>
                <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold">{second_title}</h4>
                    <br />
                    <div className="flex flex-col md:flex-row m-4">
                        <div>
                            <p className="text-md sm:text-lg md:text-xl lg:text-3xl">{hero_desc2}</p>
                            <br />
                            <img src={`${hero_img2}`} alt="greek sculpture" />
                            <br />
                        </div>
                        <img src={`${hero_img3}`} alt="muscle gain veg hero" />
                    </div>
                    <p className="text-md sm:text-lg md:text-xl lg:text-3xl">
                        {hero_desc3}
                    </p>
                </div>
            </div>
            <div className="flex flex-row border-b-4 p-2 m-4 sm:mx-6 md:mx-10 lg:mx-20 text-lg sm:text-xl md:text-3xl lg:text-5xl">
                <h3 className={`text-${color}-500 flex-grow`}>Choose your diet</h3>
                {customIcon(color)}
            </div>

            <div className="flex flex-col text-white md:flex-row w-[90%] md:w-full m-4 sm:mx-6 md:mx-10 lg:mx-24 md:space-x-4 lg:space-x-8">
                <img src={`/nutrition_page/${color}s_food_1.png`} alt="diet image 1" className="w-full md:w-auto md:max-w-xs" />
                <div className="flex flex-col w-full">
                    <h4 className={`text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold m-4 text-${color}-500`}>{category === FoodCategory.Veg ? "A vegetarian Diet" : "A non vegetarian Diet"}</h4>
                    <p className="text-md sm:text-lg md:text-xl lg:text-3xl mr-20">
                        {diet_desc}
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-full md:flex-row m-4 sm:mx-6 md:mx-10 lg:mx-24 md:space-x-4 lg:space-x-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-white">{category === FoodCategory.Veg ? "The Vegetarian Diet" : "The Non Vegetarian Diet"}</h2>
                <img src={`/nutrition_page/${color}s_food_2.png`} alt="green food 2" className="ml-auto"/>
            </div>
            <div>
                <h3 className={`text-${color}-500 flex justify-center m-4 sm:mx-6 md:mx-10 lg:mx-20 text-lg sm:text-xl md:text-3xl lg:text-5xl border-b-4 p-2 font-bold`}>{category === FoodCategory.Veg ? "Vegetarian Sources" : "Non Vegetarian Sources"}</h3>
                <h4 className={`text-${color}-500 flex justify-center m-4 sm:mx-6 md:mx-10 lg:mx-20 text-lg sm:text-xl md:text-3xl lg:text-5xl`}>CHOOSE YOUR PROTEIN SOURCES</h4>
                <div className="flex justify-center">
                    <div className={`flex flex-col justify-start text-${color}-500 space-y-2 md:space-y-4 text-md sm:text-lg md:text-xl lg:text-2xl`}>
                        {sources_list.map((source, index) => (
                            <div key={source.name} className="flex">
                                <label htmlFor={source.name}>
                                    <p>{index + 1}. {source.name} <span className="text-white">: {source.amount} grams</span></p>
                                </label>
                                <input className="ml-auto md:w-10 md:h-10" type="checkbox" id={source.name} checked={selected.some(item => item.name === source.name)} onChange={(event) => handleCheckBoxInput(event, index)} />
                            </div>
                        ))}
                        <br />
                        <Button color={color} text="Generate Diet" />
                        {/* Table with diet Generated coming from backend */}
                        <br />
                        <Button color={color} text="Customize Diet" />
                    </div>
                </div>
                <Pyramid size="h-64"/>
            </div>
        </div>
    );
};

export { MuscleGainPage, FoodCategory };
