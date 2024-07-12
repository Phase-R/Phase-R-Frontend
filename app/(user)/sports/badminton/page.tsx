import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import SubPageSection from "@/app/(user)/sports/cricket/SubPageSection";

export default function Cricket() {
    return (
        <div>                       
            <PageHeader headerColor="bg-blue-500" headerHeading="Badminton" headerDesc="Badminton is a fast-paced sport requiring agility, precision, and strategy. Players need exceptional skill to dominate with powerful smashes, deft net shots, and tactical positioning." bgImage={'/sports_page/badminton_bg.png'} headerSubtextArray={["Strategy", "Patience", "Resilience"]} />
            <SubPageSection imageUrl="/sports_page/cricket_page_batting.png" dispText="Batting" />
            <SubPageSection imageUrl="/sports_page/cricket_page_bowling.png" dispText="Bowling" />
            <SubPageSection imageUrl="/sports_page/cricket_page_keeping.png" dispText="Wicket Keeping" />
            <SubPageSection imageUrl="/sports_page/cricket_page_fielding.png" dispText="Fielding" />
        </div>
    )
}