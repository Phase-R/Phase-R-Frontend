import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import SubPageSection from "@/app/(user)/sports/cricket/SubPageSection";

export default function Cricket() {
    return (
        <div>

            <PageHeader headerColor="bg-[#28AABD]" headerHeading="Cricket" headerDesc="Cricket is a very old game which requires the utmost of wits, tenacity and discipline combined with a high skill level either with the bat, ball or both" bgImage={'/sports_page/cricket/hero.svg'} headerSubtextArray={["Strategy", "Patience", "Resilience"]} />
            <div className="bg-gradient-to-b from-[#000000] via-[#28AABD] to-[#071c1f] min-h-screen py-20 md:py-30 lg:py-40">

                <SubPageSection imageUrl="/sports_page/cricket/land_1.svg" dispText="Batting" />
                <SubPageSection imageUrl="/sports_page/cricket/land_2.svg" dispText="Bowling" />
                <SubPageSection imageUrl="/sports_page/cricket/land_3.svg" dispText="Fielding" />
            </div>
        </div>
    )
}