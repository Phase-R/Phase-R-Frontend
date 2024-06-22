"use client";

import { MuscleGainPage, FoodCategory } from "../../components/FoodPages";

export default function muscleGain_Veg() {
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

    return (
        <MuscleGainPage
            color="red"
            category={FoodCategory.NonVeg}
            first_title="Basis for weight loss"
            second_title="DONT LIKE WHAT YOU SEE ON THE SCALE? THE ANSWER’S HERE"
            hero_desc1="Recommendation and tips for weight loss"
            hero_desc2="Weight loss involves shedding excess body mass and fat through a combination of calorie control, exercise, and lifestyle changes."
            hero_desc3="Achieving weight loss through nutrition involves a balanced approach that focuses on creating a caloric deficit while ensuring adequate nutrient intake. Start by incorporating whole, nutrient-dense foods like fruits, vegetables, lean proteins, and whole grains into your diet. Portion control is crucial; paying attention to serving sizes helps manage overall calorie intake. Limiting processed foods, sugary drinks, and high-fat snacks can aid in reducing excess calories. Additionally, staying hydrated."
            hero_img1="/nutrition_page/weight_loss_hero.png"
            hero_img2="/nutrition_page/weighing_scale.png"
            hero_img3="/nutrition_page/nuts_salad.png"
            diet_desc="A non-vegetarian diet for weight loss can be effective when approached with balance and mindful choices. Lean sources of protein like poultry, fish, and eggs offer satiety while supporting muscle maintenance and repair. Incorporating these proteins alongside a variety of vegetables, whole grains, and healthy fats can create a balanced meal plan. However, it's crucial to moderate the intake of higher-calorie meats and processed meats, opting for lean cuts and healthier cooking methods like grilling, baking, or steaming. "
            sources_list={protein_sources}
        />
    );
}
