import PageHeader from "@/app/(user)/PageHeader";
import VidComponent from "@/app/(user)/physical-fitness/VidsComponent";

export default function Keeping() {
    const keepingBowlingVids = [
        { title: "GRIP", desc: "gripper gripper", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "BOWLING ACTION", desc: "bowling action maadu", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "RELEASE POINT", desc: "which position and where to release the ballz", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
    ]

    return (
        <div>
            <PageHeader headerHeading="KEEPING" headerDesc="Cricket is a very old game which requires the utmost of wits, tenacity and discipline combined with a high skill level either with the bat, ball or both" bgImage={"/sports_page/keeping_bg.svg"} headerColor="bg-orange-500" />
            <VidComponent miniTitle="Keeping Drills" pageTitle="" pageTitleColor="text-orange-500" pageDesc="" videos={keepingBowlingVids} />
        </div>
    )
}