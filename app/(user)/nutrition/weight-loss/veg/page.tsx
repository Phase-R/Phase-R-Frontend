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
            first_title="Basis for weight loss"
            second_title="DONT LIKE WHAT YOU SEE ON THE SCALE? THE ANSWER’S HERE"
            hero_desc1="Recommendation and tips for weight loss"
            hero_desc2="Weight loss involves shedding excess body mass and fat through a combination of calorie control, exercise, and lifestyle changes."
            hero_desc3="Achieving weight loss through nutrition involves a balanced approach that focuses on creating a caloric deficit while ensuring adequate nutrient intake. Start by incorporating whole, nutrient-dense foods like fruits, vegetables, lean proteins, and whole grains into your diet. Portion control is crucial; paying attention to serving sizes helps manage overall calorie intake. Limiting processed foods, sugary drinks, and high-fat snacks can aid in reducing excess calories. Additionally, staying hydrated."
            hero_img1="/nutrition_page/weight_loss_hero.png"
            hero_img2="/nutrition_page/weighing_scale.png"
            hero_img3="/nutrition_page/nuts_salad.png"
            diet_desc="A vegetarian diet can be a highly effective approach for weight loss when planned thoughtfully. Emphasizing a variety of vegetables, fruits, whole grains, legumes, nuts, and seeds forms the foundation of a nutritious plant-based eating plan. These foods are rich in fiber, vitamins, minerals, and antioxidants while often being lower in calories and saturated fats. Incorporating protein sources such as tofu,, lentils, and beans helps maintain muscle mass and promotes satiety. To optimize weight loss on a vegetarian diet, focus on portion control, minimize processed foods and added sugars, and consider incorporating regular exercise for overall health and sustainable weight management"
            sources_list={protein_sources}
        />
    );
}
