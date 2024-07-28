import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import SubPageSection from "@/app/(user)/sports/cricket/SubPageSection";

export default function Cricket() {
    return (
        <div>
            <PageHeader headerColor="bg-button-greenp" headerHeading="Cricket" headerDesc="Cricket is a very old game which requires the utmost of wits, tenacity and discipline combined with a high skill level either with the bat, ball or both" bgImage={'/sports_page/cricket_ball_bg.png'} headerSubtextArray={["Strategy", "Patience", "Resilience"]} />
            <SubPageSection imageUrl="/sports_page/cricket_page_batting.png" dispText="Batting" />
            <SubPageSection imageUrl="/sports_page/cricket_page_bowling.png" dispText="Bowling" />
            <SubPageSection imageUrl="/sports_page/cricket_page_keeping.png" dispText="Wicket Keeping" />
            <SubPageSection imageUrl="/sports_page/cricket_page_fielding.png" dispText="Fielding" />
        </div>
    )
}