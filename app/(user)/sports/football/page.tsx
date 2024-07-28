import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import SubPageSection from "@/app/(user)/sports/cricket/SubPageSection";

export default function Football() {
    return (
        <div>                       
            <PageHeader headerColor="bg-blue-500" headerHeading="Football" headerDesc="Football is a globally beloved sport demanding exceptional teamwork, strategy, and endurance. Players exhibit high skill levels in passing, dribbling, and scoring goals to outmaneuver their opponents." bgImage={'/sports_page/football_bg.png'} headerSubtextArray={["Strategy", "Patience", "Resilience"]} />
            <SubPageSection imageUrl="/sports_page/football_page_attacking.png" dispText="ATTACKING" />
            <SubPageSection imageUrl="/sports_page/football_page_midfield.png" dispText="MIDFIELD" />
            <SubPageSection imageUrl="/sports_page/football_page_defending.png" dispText="DEFENSE" />
            <SubPageSection imageUrl="/sports_page/football_page_goal_keeping.png" dispText="GOAL KEEPING" />
        </div>
    )
}