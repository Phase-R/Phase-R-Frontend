import React from "react"
import PageSection from "../PageSection"
import PageHeader from "../PageHeader"

export default function Sports() {
    return (
        <div>

            <PageHeader headerHeading="Gym" headerColor="bg-button-greenp" headerDesc="A routine for the gym often helps in regulating the mindset and muscles. The gym is a go-to place to lose fat, gain muscle and get into a fit healthy shape. We provide workout routines for specific muscle groups" bgImage={'/gym_page/gym-bg.png'} headerSubtextArray={["power", "strength", "endurance"]} />
            
            <div>
                <PageSection imageUrl="/gym_page/gym-page-benchpress.png" desc="The application provides specific workouts to increase the size and strength in the chest muscle. Providing a variety of exercises for upper, middle and lower chest" heading={"BUILD YOUR STRONG CHEST"}  />
                <PageSection direction="right" imageUrl="/gym_page/gym-page-strongback.png" heading="GET BACK: STRONGER AND BIGGER" desc="The applications provide a well-rounded workout to target all parts of the back. It is aimed at increasing the thickness and strength in the back" />
                <PageSection imageUrl="/gym_page/gym-page-arms.png" heading="DEFINE YOUR PRIDE, GROW YOUR ARMS" desc="AIim at growing your biceps,triceps and shoulders through well planned,meticulous arm routines and exercies which suit different programs of hypertrophy and strength building" />
                <PageSection direction="right" imageUrl="/gym_page/gym-page-legs.png" heading="DONT SKIP LEG DAYS" desc="Want to get those large quads and greek god calves? you arent far away from achieving your goal. by hitting legs  through exercises well suited for flexibility,functionality and strength, the lower body you dream off isnt too far away" />
            </div>

        </div>
    )
}