import PageHeader from "@/app/(user)/PageHeader";
import VidComponent from "../../../VidsComponent";

export default function SimpleCardio() {
    const simpleCardioVids = [
        {title: "1) Sprint Intervals", desc: "You know it is just sprinting bish", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye"},
        {title: "2) Stair Running", desc: "Running up the stairs!", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye"},
    ]

    // <iframe width="560" height="315" src="https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    return(
        <div>
            <PageHeader headerHeading="SIMPLE CARDIO" headerDesc="Did you know that your heart doesn't take a vacation? It beats around 100,000 times a day, whether you're awake, asleep, working, or relaxing. Show your heart some appreciation by fitting in a cardio workout—it's like a mini-vacation for your cardiovascular system!" bgImage={"/physical-fitness-page/simple_cardio_bgm.png"} headerColor="bg-orange-500" headerSubtextArray={["SIMPLE CARDIO", "HIIT Workout", "Advanced CARDIO"]} headerDesctextArray={["(20-30 MINS)", "(30 MINS)", "(30-40 MINS)"]} />
            <VidComponent miniTitle="25-MINUTE" pageTitle="simple cardio workout" pageTitleColor="text-orange-500" pageDesc="Running or jogging outdoors or on a treadmill is an excellent way to engage in cardio exercise. It requires minimal equipment and can be done at different intensities and distances based on individual fitness levels." videos={simpleCardioVids} />
        </div>
    );
}