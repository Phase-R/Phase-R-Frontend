import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import VidComponent from "@/app/(user)/VidsComponent";

export default function Batting() {
    const vids = [
        { title: "DRILL 1", desc: "DRILL 1", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "DRILL 2", desc: "DRILL 2", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "DRILL 3", desc: "DRILL 3", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
    ]

    return (
        <div>
            <PageHeader headerColor="bg-[#28AABD]"  headerDesc="Cricket is a very old game which requires the utmost of wits, tenacity and discipline combined with a high skill level either with the bat, ball or both" bgImage={'/sports_page/batting_page_bg.png'} headerSubtextArray={["Balance", "Timing", "Movement"]} />
            <div className="bg-gradient-to-b from-[#000000] via-[#28AABD] to-[#071c1f] min-h-screen py-10">
                <VidComponent miniTitle="Batting Drills" pageTitle="" pageTitleColor="text-orange-500" pageDesc="" videos={vids} />
            </div>
        </div>
    )
}
