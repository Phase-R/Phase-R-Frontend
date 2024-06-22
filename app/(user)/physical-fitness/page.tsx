import React from "react"
import PageSection from "../PageSection"
import PageHeader from "../PageHeader"

export default function Sports() {
    return (
        <div>

            <PageHeader headerHeading="Physical Fitness" headerColor="bg-button-greenp" headerDesc="Physical fitness is a holistic pursuit that extends beyond aesthetics, encompassing the physical, mental, and emotional well-being of an individual. It involves regular exercise routines that challenge the body's strength, flexibility, and endurance" bgImage={'/physical-fitness-page/physical-fitness-page-basketball.svg'} headerSubtextArray={["strength", "stamina", "skill"]} />
            
            <div>
                <PageSection imageUrl="/physical-fitness-page/fitness-page-cardio.png" desc="Cardio is one of the best ways to build fitness and stamina while regulating heart health. The Application will provide different simple customized cardio routines with respect to the requirement of the user" heading={"SET THE RHYTHM WITH SOME CARDIO"}  />
                <PageSection direction="right" imageUrl="/physical-fitness-page/fitness-page-dumbells.png" heading="HIT THE GYM" desc="A routine for the gym often helps in regulating the mindset and muscles. The gym is a go-to place to lose fat, gain muscle and get into a fit healthy shape. We provide workout routines for specific muscle groups" />
                <PageSection imageUrl="/physical-fitness-page/fitness-page-football.png" heading="TRY SOME SPORTS" desc="Sports are an integral part of fitness. They provide a good balance between competitiveness and fitness. This application looks at enhancing the skill level in different sports through training routines. There are 5 different sports as of now for which different skill descriptions are provided" />
                <PageSection direction="right" imageUrl="/physical-fitness-page/fitness-page-martial-arts.png" heading="MASTERING MARTIAL ARTS:DISCIPLINE, POWER AND GRACE" desc="Martial arts are a great way to harness extra strength, momentum and power from all parts of the body and use them in a way to defend yourself from various attacks. Martial arts have taken various forms over the years from kalarippayattu to jiu jitsu and karate." />
            </div>

        </div>
    )
}