import PageHeader from "@/app/(user)/PageHeader";
import VidComponent from "../../../VidsComponent";

export default function swimming_and_cycling() {
    const swimming_and_cycling_Vids = [
        {title: "1) Burpees (3 x 12)", desc: "Some random description", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye"},
        {title: "2) Barbell Front Squat (3 x 12)", desc: "Some random description", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye"},
    ]

    return(
        <div>
            <PageHeader headerHeading="swimming and cycling" headerDesc="Did you know that your heart doesn't take a vacation? It beats around 100,000 times a day, whether you're awake, asleep, working, or relaxing. Show your heart some appreciation by fitting in a cardio workout—it's like a mini-vacation for your cardiovascular system!" bgImage={"/physical-fitness-page/swimming_and_cycling_bgm.png"} headerColor="bg-orange-500" headerSubtextArray={["SIMPLE CARDIO", "HIIT Workout", "Advanced CARDIO"]} headerDesctextArray={["(20-30 MINS)", "(30 MINS)", "(30-40 MINS)"]} />
            <VidComponent miniTitle="explore cardio further with" pageTitle="swimming and cycling" pageTitleColor="text-orange-500" pageDesc="Whether you’re working on boosting your fitness or you want to improve your mental health, HIIT is a great form of exercise. You will be allowed only 20 seconds of rest between sets and 60 seconds between exercises." videos={swimming_and_cycling_Vids} />
        </div>
    );
}