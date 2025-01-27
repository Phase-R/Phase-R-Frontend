import PageHeader from "@/app/(user)/PageHeader";
import VidComponent from "../../../VidsComponent";

export default function kickboxing() {
    const kickBoxingVids = [
        {title: "1) Jab", desc: "Some random description", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye"},
        {title: "2) Cross", desc: "Some random description", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye"},
    ]

    return(
        <div>
            <PageHeader headerHeading="kickboxing" headerDesc="Originated in the 1960s and 1970s as a hybrid martial art. It emerged when practitioners from different disciplines, such as karate, boxing, and Muay Thai, began to blend their techniques. This fusion led to the development of a dynamic and versatile sport that we now know as kickboxing." bgImage={"/physical-fitness-page/martial_kickboxing_main_3_edited.png"} headerColor="bg-red-800" headerSubtextArray={["Discipline", "self-defense", "focus"]} headerDesctextArray={["(20-30 MINS)", "(30 MINS)", "(30-40 MINS)"]} />
            <VidComponent miniTitle="unleash strength through" pageTitle="kickboxing" pageTitleColor="text-red-800" pageDesc="While there is a technical difference in competition between Muay Thai and Kickboxing, the primary difference is that you can’t throw elbows in kickboxing. The movement is slightly different but not worth stressing over for beginners." videos={kickBoxingVids} />
        </div>
    );
}