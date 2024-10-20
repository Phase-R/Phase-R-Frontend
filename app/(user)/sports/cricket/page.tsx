import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import SubPageSection from "@/app/(user)/sports/cricket/SubPageSection";

export default function Cricket() {
    return (
        <div>

            <PageHeader headerColor="bg-button-greenp" headerHeading="Cricket" headerDesc="Cricket is a very old game which requires the utmost of wits, tenacity and discipline combined with a high skill level either with the bat, ball or both" bgImage={'/sports_page/cricket/hero.svg'} headerSubtextArray={["Strategy", "Patience", "Resilience"]} />
            <div className="bg-gradient-to-b from-[#000000] via-[#28AABD] to-[#071c1f] min-h-screen py-10">

                <div className="flex justify-center mx-12 my-8">
                    {/* Left container */}
                    <div className="flex-1 max-w-[300px] bg-[#191919] text-white text-center py-8 rounded-l-lg">
                        <p className="font-bold">STRATEGY</p>
                    </div>

                    {/* Center container */}
                    <div className="flex-1 max-w-[300px] bg-[#28aabd] text-white text-center py-8">
                        <p className="font-bold">PATIENCE</p>
                    </div>

                    {/* Right container */}
                    <div className="flex-1 max-w-[300px] bg-[#191919] text-white text-center py-8 rounded-r-lg">
                        <p className="font-bold">RESILIENCE</p>
                    </div>
                </div>
                <SubPageSection imageUrl="/sports_page/cricket/land_1.svg" dispText="Batting" />
                <SubPageSection imageUrl="/sports_page/cricket/land_2.svg" dispText="Bowling" />
                <SubPageSection imageUrl="/sports_page/cricket/land_3.svg" dispText="Fielding" />
            </div>
        </div>
    )
}