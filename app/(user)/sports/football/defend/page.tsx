import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import VidComponent from "@/app/(user)/VidsComponent";

export default function Football_defending() {
    const vids = [
        { title: "GRIP", desc: "gripper gripper", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "BOWLING ACTION", desc: "bowling action maadu", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "RELEASE POINT", desc: "which position and where to release the ballz", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
    ]
    
    return(
        <div>
            <PageHeader headerHeading="Defending" headerDesc="Football is a globally beloved sport demanding exceptional teamwork, strategy, and endurance. Players exhibit high skill levels in passing, dribbling, and scoring goals to outmaneuver their opponents." bgImage={'/sports_page/defending_page_bg.png'} headerColor="bg-button-greenp" headerSubtextArray={["Balance", "Timing", "Movement"]} />
            <VidComponent miniTitle="Defender Drills" pageTitle="" pageTitleColor="text-orange-500" pageDesc="" videos={vids} />    
        </div>
    )   
}
