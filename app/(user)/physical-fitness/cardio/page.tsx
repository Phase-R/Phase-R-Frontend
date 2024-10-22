import React from "react"
import PageSection from "../../PageSection"
import PageHeader from "../../PageHeader"

export default function Cardio() {
    return (
        <div>

            <PageHeader headerHeading="Cardio" headerDesc="Did you know that your heart doesn't take a vacation? It beats around 100,000 times a day, whether you're awake, asleep, working, or relaxing. Show your heart some appreciation by fitting in a cardio workout—it's like a mini-vacation for your cardiovascular system!" headerColor="bg-button-greenp" bgImage={'/physical-fitness-page/cardio_main_bgm.png'} headerSubtextArray={["Simple Cardio", "HIIT Workout", "Advanced Cardio"]} headerDesctextArray={["(20-30 MINS)", "(30 MINS)", "(30-40 MINS)"]} />
            
            <div>
                <PageSection linkTo="/physical-fitness/simple-cardio" imageUrl="/physical-fitness-page/cardio_main_1.png" desc="Start with a light warm-up to prepare your body for the workout. Remember to stay hydrated throughout the workout, listen to your body, and modify the intensity as needed." heading={"KICK OF WITH A SIMPLE CARDIO WORKOUT"}  />
                <PageSection linkTo="/physical-fitness/hiit" imageUrl="/physical-fitness-page/cardio_main_2.png" desc="Torch calories and burn fat with these total body HIIT workouts. This workout alternates between short bursts of intense exercise and periods of rest or lower-intensity activity." heading="TAKE UP THE FAT-BURNING HIIT CHALLENGE" />
                <PageSection linkTo="/physical-fitness/swimming-and-cycling" imageUrl="/physical-fitness-page/cardio_main_3.png" desc="This advanced cardio workout is challenging, so ensure you have a solid fitness foundation before attempting it. If  you are ready, so are we, let’s begin!" heading="LAUNCH INTO SWIMMING AND CYCLING" />
            </div>

        </div>
    )
}