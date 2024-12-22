'use state'
import React from "react"
import PageSection from "../PageSection"
import PageHeader from "../PageHeader"
import WaterTracker from "./components/WaterTrack"
export default function Sports() {
    return (
        <div>
            <PageHeader headerHeading="Nutrition" headerDesc="Nutrition is the deal breaker to make real progress in the fields of muscle building, maintaining fitness or sports. A good diet plan and nutrition sheet go hand in hand with progress in the realm of physical activity." headerColor="bg-[#4AC847]" bgImage={'/sports_page/nutritionHeaderBg.svg'} headerSubtextArray={["easy diet", "lose weight", "muscle tone"]} />

            <div className="bg-gradient-to-b from-[#000000] via-[#4AC847] to-[#0D220C] py-10">
                <PageSection
                    borderColor="border-[#4AC847]"
                    imageUrl="/nutrition_page/Diet_Pic.svg"
                    desc="A balanced diet is the cornerstone of optimal health, comprising diverse nutrients essential for bodily functions. It sustains energy levels, supports organ function, and boosts immunity."
                    heading="STAY FIT WITH A BALANCED DIET"
                    linkTo="/nutrition/balanced-diet"
                    highlightWord="balanced"
                    highlightColor="#4AC847"
                />

                <PageSection
                    borderColor="border-[#4AC847]"
                    direction="right"
                    imageUrl="/nutrition_page/Weight_Loss_Pic.svg"
                    desc="Weight loss diets focus on calorie control and nutrient balance. They often involve reducing calorie intake, emphasizing whole foods, and regulating portion sizes. Effective weight loss diets promote gradual, sustainable changes in eating habits, encouraging physical activity while considering individual preferences and health goals for long-term success."
                    heading="KICKSTART YOUR WEIGHT LOSS JOURNEY"
                    linkTo="/nutrition/weight-loss"
                    highlightWord="weight loss"
                    highlightColor="#4AC847"
                />

                <PageSection
                    borderColor="border-[#4AC847]"
                    imageUrl="/nutrition_page/No_Pain_Pic.svg"
                    desc="While exercise is crucial, nutrition plays a vital role in supporting muscle development and optimizing performance. The application offers a variety of vegetarian and non-vegetarian options to see visible growth in muscles and increase in strength."
                    heading="NO GAIN NO PAIN!"
                    linkTo="/nutrition/muscle-gain"
                    highlightWord="gain"
                    highlightColor="#4AC847"
                />
                <WaterTracker initialIntake={100} dailyGoal={1000} />
            </div>

        </div>
    )
}