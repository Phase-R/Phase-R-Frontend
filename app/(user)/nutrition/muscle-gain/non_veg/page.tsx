"use client";

import { MuscleGainPage } from "../../components/FoodPages";
import { FoodCategory } from "../../components/FoodPages";
import { Poppins } from "next/font/google"
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function muscleGain_NonVeg() {
    const protein_sources = [
        { name: "Chicken Breast", amount: 31.0 },
        { name: "Turkey Breast", amount: 29.0 },
        { name: "Lean Beef", amount: 26.0 },
        { name: "Salmon", amount: 25.0 },
        { name: "Tuna", amount: 30.0 },
        { name: "Eggs", amount: 13.0 },
        { name: "Greek Yogurt", amount: 10.0 },
        { name: "Cottage Cheese", amount: 11.0 },
        { name: "Whey Protein", amount: 80.0 },
        { name: "Casein Protein", amount: 76.0 },
        { name: "Shrimp", amount: 24.0 },
        { name: "Tilapia", amount: 26.0 },
        { name: "Cod", amount: 20.0 },
        { name: "Pork Tenderloin", amount: 22.0 },
        { name: "Bison", amount: 24.0 },
        { name: "Duck", amount: 19.0 },
        { name: "Venison", amount: 24.0 },
        { name: "Lamb", amount: 25.0 },
        { name: "Oysters", amount: 9.0 },
        { name: "Mussels", amount: 24.0 },
        { name: "Clams", amount: 12.0 },
        { name: "Scallops", amount: 20.0 },
        { name: "Crab", amount: 18.0 },
        { name: "Lobster", amount: 19.0 },
        { name: "Ham", amount: 16.0 },
        { name: "Sausage", amount: 13.0 },
        { name: "Pepperoni", amount: 22.0 },
        { name: "Anchovies", amount: 29.0 },
        { name: "Sardines", amount: 25.0 },
        { name: "Herring", amount: 18.0 }
    ];

    const pageProps = {
        color: "red",
        category: FoodCategory.NonVeg,
        first_title: "Basis for Muscle Gain",
        second_title: "Start here to become the Greek God of your dreams!",
        hero_desc1: "Recommendation and tips for a healthy muscle gain",
        hero_desc2: "Muscle gain, also known as muscle hypertrophy, refers to the process of increasing muscle size, strength, and overall mass through targeted exercise and proper nutrition",
        hero_desc3: "Achieving muscle gain requires a combination of resistance training and a well-rounded diet that emphasizes protein, carbohydrates, healthy fats, and essential micronutrients. By fueling your body with the right nutrients and engaging in appropriate exercise, you can support muscle growth, strength, and overall physical performance.",
        hero_img1: "/nutrition_page/muscle_gain_hero.png",
        hero_img2: "/nutrition_page/greekgod.png",
        hero_img3: "/nutrition_page/musclegain_veg_hero.png",
        diet_desc: "A non-vegetarian diet for weight loss can be effective when approached with balance and mindful choices. Lean sources of protein like poultry, fish, and eggs offer satiety while supporting muscle maintenance and repair. Incorporating these proteins alongside a variety of vegetables, whole grains, and healthy fats can create a balanced meal plan. However, it's crucial to moderate the intake of higher-calorie meats and processed meats, opting for lean cuts and healthier cooking methods like grilling, baking, or steaming. ",
        sources_list: protein_sources,
        diet_img_1: "/path/to/non-vegetarian-image1.png",
        diet_img_2: "/path/to/non-vegetarian-image2.png"
    };

    return <MuscleGainPage {...pageProps} />;
}
