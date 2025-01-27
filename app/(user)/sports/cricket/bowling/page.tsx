import VidComponent from "@/app/(user)/VidsComponent";
import PageHeader from "@/app/(user)/PageHeader";
// import SubPageSection from "../SubPageSection";
import Image from "next/image";

export default function Bowling() {
    const bowlingVids = [
        { title: "GRIP", desc: "gripper gripper", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "BOWLING ACTION", desc: "bowling action maadu", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
        { title: "RELEASE POINT", desc: "which position and where to release the ballz", videoUrl: "https://www.youtube.com/embed/eWLVBP3VrO4?si=ImHHtesOQWzzIfye" },
    ]

    return (
        <div>
            <PageHeader headerHeading="BOWLING" headerDesc="Cricket is a very old game which requires the utmost of wits, tenacity and discipline combined with a high skill level either with the bat, ball or both" bgImage={"/sports_page/bowling_page_bg.png"} headerColor="bg-orange-500" headerSubtextArray={["Spin", "Release", "Pace"]} />
            <div className="bg-gradient-to-b from-[#000000] via-[#28AABD] to-[#071c1f] min-h-screen py-10">
                <VidComponent miniTitle="FUNDAMENTALS OF BOWLING" pageTitle="" pageTitleColor="text-orange-500" pageDesc="" videos={bowlingVids} />

                <div className="text-white">
                    <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-bold">CHOOSE THE TYPE OF BOWLING</h2>
                    <div className="flex flex-col lg:flex-row justify-center items-center text-lg md:text-xl lg:text-2xl">

                        {/*these two are Subpagesection components, minor changes since both are in same row for this page*/}
                        <div className="flex justify-center items-center m-10">
                            <div className="relative group md:m-20 lg:m-20">
                                <Image
                                    src="/sports_page/Pace_bowling.png"
                                    alt="SubPage section photo"
                                    width={700}
                                    height={700}
                                    className="rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-25 pl-10 pr-10 lg:p-0" /*here lg:p-0 is the only addition, rest it same*/
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-auto text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                    <p className="text-white text-sm md:text-lg lg:text-2xl font-bold">Pace Bowling</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center m-10">
                            <div className="relative group md:m-20 lg:m-20">
                                <Image
                                    src="/sports_page/Spin_bowling.png"
                                    alt="SubPage section photo"
                                    width={700}
                                    height={700}
                                    className="rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-25 pl-10 pr-10 lg:p-0" /*here lg:p-0 is the only asddition, rest it same*/
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-auto text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                    <p className="text-white text-sm md:text-lg lg:text-2xl font-bold">Spin Bowling</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}