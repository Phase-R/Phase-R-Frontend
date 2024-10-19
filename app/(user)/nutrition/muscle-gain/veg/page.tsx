"use client";

import { MuscleGainPage, FoodCategory } from "../../components/FoodPages";

export default function muscleGain_Veg() {
    const protein_sources = [
        { name: "Lentils", amount: 9.0 },
        { name: "Chickpeas", amount: 19.0 },
        { name: "Quinoa", amount: 4.4 },
        { name: "Tofu", amount: 8.0 },
        { name: "Greek Yogurt", amount: 10.0 },
        { name: "Cottage Cheese", amount: 11.0 },
        { name: "Almonds", amount: 21.0 },
        { name: "Chia Seeds", amount: 17.0 },
        { name: "Hemp Seeds", amount: 31.0 },
        { name: "Pumpkin Seeds", amount: 19.0 },
        { name: "Spirulina", amount: 57.0 },
        { name: "Edamame", amount: 11.0 },
        { name: "Seitan", amount: 24.0 },
        { name: "Tempeh", amount: 18.0 },
        { name: "Oats", amount: 17.0 },
        { name: "Brown Rice", amount: 2.6 },
        { name: "Black Beans", amount: 21.0 },
        { name: "Quorn", amount: 14.0 },
        { name: "Green Peas", amount: 5.0 },
        { name: "Peanut Butter", amount: 25.0 },
        { name: "Spinach", amount: 3.0 },
        { name: "Broccoli", amount: 2.8 },
        { name: "Brussels Sprouts", amount: 3.4 },
        { name: "Kale", amount: 4.3 },
        { name: "Asparagus", amount: 2.9 },
        { name: "Avocado", amount: 2.0 },
        { name: "Sweet Potatoes", amount: 1.6 },
        { name: "Mushrooms", amount: 3.1 },
        { name: "Whole Grain Bread", amount: 10.0 },
        { name: "Eggs", amount: 13.0 }
    ];

    return (
        <MuscleGainPage
            color="green"
            category={FoodCategory.Veg}
            first_title="Basis for Muscle Gain"
            second_title="Start here to become the Greek God of your dreams!"
            hero_desc1="Recommendation and tips for a healthy muscle gain"
            hero_desc2="Muscle gain, also known as muscle hypertrophy, refers to the process of increasing muscle size, strength, and overall mass through targeted exercise and proper nutrition"
            hero_desc3="Achieving muscle gain requires a combination of resistance training and a well-rounded diet that emphasizes protein, carbohydrates, healthy fats, and essential micronutrients. By fueling your body with the right nutrients and engaging in appropriate exercise, you can support muscle growth, strength, and overall physical performance."
            hero_img1="/nutrition_page/muscle_gain_hero.png"
            hero_img2="/nutrition_page/greek_god.svg"
            hero_img3="/nutrition_page/muscle_gain_veg.svg"
            diet_desc="A vegetarian diet for muscle gain emphasizes plant-based proteins like tofu and lentils for essential amino acids. Incorporating whole grains, nuts, and healthy fats provides energy and supports muscle repair, making it vital to balance nutrient intake for effective muscle growth. Optimal Caloric Intake: Ensure you're consuming enough calories to support your workouts and muscle growth. Nutrient Timing: Pay attention to when you consume your nutrients. Eating protein-rich meals/snacks before and after workouts can enhance muscle recovery and growth."
            sources_list={protein_sources}
            color1="[#000000]"
            color2="[#468F2D]"
            color3="[#000000]"
        />
    );
}
