import React from "react"
import PageSection from "../../PageSection"
import PageHeader from "../../PageHeader"


export default function Cardio() {
    return (
        <div>

            <PageHeader
                headerHeading="Cardio"
                headerDesc="Did you know that your heart doesn't take a vacation? It beats around 100,000 times a day, whether you're awake, asleep, working, or relaxing. Show your heart some appreciation by fitting in a cardio workout—it's like a mini-vacation for your cardiovascular system!"
                headerColor="bg-orange-500"
                bgImage={'/physical-fitness-page/cardio_main_bgm.svg'}
                headerSubtextArray={["Simple Cardio", "HIIT Workout", "Advanced Cardio"]}
                headerDesctextArray={["(20-30 MINS)", "(30 MINS)", "(30-40 MINS)"]}
            />

            <div className="bg-gradient-to-b from-black via-orange-500 to-black py-10">

                <div className="space-y-0 lg:space-y-32 lg:mt-32 lg:mb-32 text-white text-lg">
                    <PageSection
                        linkTo="/physical-fitness/simple-cardio"
                        imageUrl="/physical-fitness-page/cardio_main_1.svg"
                        desc="Start with a light warm-up to prepare your body for the workout. Remember to stay hydrated throughout the workout, listen to your body, and modify the intensity as needed."
                        heading={"KICK OF WITH A SIMPLE CARDIO WORKOUT"}
                        borderColor=""
                        highlightWord=""
                        highlightColor=""
                    />
                    <PageSection
                        linkTo="/physical-fitness/hiit"
                        imageUrl="/physical-fitness-page/cardio_main_2.svg"
                        desc="Torch calories and burn fat with these total body HIIT workouts. This workout alternates between short bursts of intense exercise and periods of rest or lower-intensity activity."
                        heading="TAKE UP THE FAT-BURNING HIIT CHALLENGE"
                        borderColor=""
                        highlightWord=""
                        highlightColor=""
                    />
                    <PageSection
                        linkTo="/physical-fitness/swimming-and-cycling"
                        imageUrl="/physical-fitness-page/cardio_main_3.svg"
                        desc="This advanced cardio workout is challenging, so ensure you have a solid fitness foundation before attempting it. If you are ready, so are we, let’s begin!"
                        heading="LAUNCH INTO SWIMMING AND CYCLING"
                        borderColor=""
                        highlightWord=""
                        highlightColor=""
                    />
                </div>
            </div>

        </div>
    )
}