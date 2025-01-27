import PageHeader from "@/app/(user)/PageHeader";
import VidComponent from "../../../VidsComponent";

export default function boxing() {
    const boxingVids = [
        {title: "1) Jab", desc: "Some random description", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye"},
        {title: "2) Cross", desc: "Some random description", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye"},
    ]

    return(
        <div>
            <PageHeader headerHeading="boxing" headerDesc="Did you know that the term 'boxing' originated from the ancient Greeks who introduced it as an Olympic sport in 688 BC? Back then, fighters wrapped their hands in leather thongs called 'himantes,' and the matches had no rounds or time limits, making it a raw and intense test of endurance." bgImage={"/physical-fitness-page/boxing_bgm.png"} headerColor="bg-red-800" headerSubtextArray={["Discipline", "self-defense", "focus"]} headerDesctextArray={["(20-30 MINS)", "(30 MINS)", "(30-40 MINS)"]} />
            <VidComponent miniTitle="POWER PACKED" pageTitle="BASIC BOXING DRILL" pageTitleColor="text-red-800" pageDesc="If you’re right handed this is the style that you’d want to follow. Hands up, left foot forward and right foot back. Your lead hook will be your left hand. Keep your front foot facing the opponent at all times, your back foot should be pointing towards your opponent at an angle." videos={boxingVids} />
        </div>
    );
}