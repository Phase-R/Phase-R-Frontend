import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import VidComponent from "@/app/(user)/physical-fitness/VidsComponent";

export default function Batting() {
    const vids = [
        { title: "GRIP", desc: "gripper gripper", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "BOWLING ACTION", desc: "bowling action maadu", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "RELEASE POINT", desc: "which position and where to release the ballz", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
    ]

    return (
        <div>
            <PageHeader headerHeading="batting" headerDesc="Cricket is a very old game which requires the utmost of wits, tenacity and discipline combined with a high skill level either with the bat, ball or both" bgImage={'/sports_page/batting_page_bg.png'} headerColor="bg-button-greenp" headerSubtextArray={["Balance", "Timing", "Movement"]} />
            <div className="bg-gradient-to-b from-[#000000] via-[#28AABD] to-[#071c1f] min-h-screen py-10">
                <VidComponent miniTitle="Wicket Keeping Drills" pageTitle="" pageTitleColor="text-orange-500" pageDesc="" videos={vids} />
            </div>
        </div>
    )
}
