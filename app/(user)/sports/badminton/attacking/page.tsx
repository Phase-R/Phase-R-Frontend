import PageHeader from "@/app/(user)/PageHeader";
import VidComponent from "@/app/(user)/physical-fitness/VidsComponent";

export default function Badminton_Attacking() {
    const vids = [
        { title: "GRIP", desc: "gripper gripper", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "BOWLING ACTION", desc: "bowling action maadu", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "RELEASE POINT", desc: "which position and where to release the ballz", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
    ]

    return (
        <div>
            <PageHeader headerHeading="Attacking and Downward Shots" headerDesc="Badminton is a fast-paced sport requiring agility, precision, and strategy. Players need exceptional skill to dominate with powerful smashes, deft net shots, and tactical positioning." bgImage={"/sports_page/badminton_bg.png"} headerColor="bg-blue-500" />
            <VidComponent miniTitle="Attacking and Downward Shots"   pageTitle="" pageTitleColor="text-orange-500" pageDesc="" videos={vids} />   
        </div>      
    )
}