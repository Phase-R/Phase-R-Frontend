import VidComponent from "@/app/(user)/physical-fitness/VidsComponent";
import PageHeader from "@/app/(user)/PageHeader";
import SubPageSection from "../SubPageSection";

export default function Bowling() {
    const bowlingVids = [
        { title: "GRIP", desc: "gripper gripper", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "BOWLING ACTION", desc: "bowling action maadu", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "RELEASE POINT", desc: "which position and where to release the ballz", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
    ]

    return(
        <div>
            <PageHeader headerHeading="BOWLING" headerDesc="Cricket is a very old game which requires the utmost of wits, tenacity and discipline combined with a high skill level either with the bat, ball or both" bgImage={"/sports_page/bowling_page_bg.png"} headerColor="bg-orange-500" headerSubtextArray={["Spin", "Release", "Pace"]}  />
            <VidComponent miniTitle="FUNDAMENTALS OF BOWLING" pageTitle="" pageTitleColor="text-orange-500" pageDesc="" videos={bowlingVids} />

            <div className="text-white">
                <h2 className="text-center text-lg md:text-xl lg:text-2xl font-bold">CHOOSE THE TYPE OF BOWLING</h2>
                <div className="flex justify-center items-center            text-lg md:text-xl lg:text-2xl">
                    <SubPageSection imageUrl="/sports_page/Pace_bowling.png" dispText="Pace Bowling" />
                    <SubPageSection imageUrl="/sports_page/Spin_bowling.png" dispText="Spin Bowling" />
                </div>
                <br />
            </div>
        </div>
    );
}