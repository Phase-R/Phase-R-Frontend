import React from "react"
import PageSection from "../../PageSection"
import PageHeader from "../../PageHeader"

export default function Marital_arts() {
    return (
        <div>

            <PageHeader headerHeading="Martial arts" headerDesc="Martial arts encompass a diverse range of disciplined combat practices, originating from cultures worldwide. Characterized by structured techniques, forms, and philosophies, these arts promote physical fitness, self-defense, and mental resilience" headerColor="bg-red-800" bgImage={'/physical-fitness-page/martial_arts_main_bgm.png'} headerSubtextArray={["Discipline", "Self-Defense", "Focus"]} headerDesctextArray={["(20-30 MINS)", "(30 MINS)", "(30-40 MINS)"]} />


            <div className="bg-gradient-to-b from-[#100101] via-[#430404] to-[#130303] py-10">
                <div className="space-y-0 lg:space-y-32 lg:mt-32 lg:mb-32">
                    <PageSection
                        linkTo="/"
                        imageUrl="/physical-fitness-page/martial_boxing_main_1.png"
                        desc="Start with a light warm-up to prepare your body for the workout. Remember to stay hydrated throughout the workout, listen to your body, and modify the intensity as needed."
                        heading={"GLOVE UP AND BEGIN YOUR BOXING JOURNEY"}
                        borderColor=""
                        highlightWord=""
                        highlightColor="" />
                    <PageSection
                        linkTo="/"
                        imageUrl="/physical-fitness-page/martial_muay-thai_main_2.png"
                        desc="Muay Thai, also known as the 'Art of Eight Limbs,' is a martial art and combat sport originating from Thailand. It utilizes eight points of contact—fists, elbows, knees, and shins."
                        heading="ENTER THE WORLD OF MUAY-THAI"
                        borderColor=""
                        highlightWord=""
                        highlightColor="" />
                    <PageSection
                        linkTo="/"
                        imageUrl="/physical-fitness-page/martial_kickboxing_main_3.png"
                        desc="In this adrenaline-fueled sport, athletes engage in a dance of discipline and determination, delivering lightning-fast kicks and punches that showcase the perfect blend of strength and skill. Get ready for a thrilling journey into the heart of the fight."
                        heading="KICKBOXING, WHERE POWER MEETS POISE"
                        borderColor=""
                        highlightWord=""
                        highlightColor="" />
                </div>
            </div>
        </div>
    )
}