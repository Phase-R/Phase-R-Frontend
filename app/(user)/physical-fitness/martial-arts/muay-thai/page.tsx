import PageHeader from "@/app/(user)/PageHeader";
import VidComponent from "../../VidsComponent";

export default function muay_thai() {
    const muayThaiVids = [
        {title: "1) Jab", desc: "Some random description", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye"},
        {title: "2) Cross", desc: "Some random description", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye"},
    ]

    return(
        <div>
            <PageHeader headerHeading="muay thai" headerDesc="Unlike traditional boxing, Muay Thai fighters use not only their fists and feet but also their elbows and knees, making it a martial art that engages eight points of contact. This unique aspect emphasizes a holistic and versatile approach to combat." bgImage={"/physical-fitness-page/muay-thai_bg.jpg"} headerColor="bg-red-800" headerSubtextArray={["Discipline", "self-defense", "focus"]} headerDesctextArray={["(20-30 MINS)", "(30 MINS)", "(30-40 MINS)"]} />
            <VidComponent miniTitle="train like a" pageTitle="muay-thai champion" pageTitleColor="text-red-800" pageDesc="Muay Thai and Boxing are worlds apart in terms of movement, stance and defense but considering that the purpose of this document is to use martial arts as a source of fitness, the techniques mentioned above for punches would be fine. This section will focus on the strikes that are unique to Muay Thai." videos={muayThaiVids} />
        </div>
    );
}