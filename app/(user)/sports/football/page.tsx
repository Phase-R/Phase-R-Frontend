import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import SubPageSection from "@/app/(user)/sports/cricket/SubPageSection";

export default function Football() {
    return (
        <div>                       
            <PageHeader headerColor="bg-[#0BC107]" headerHeading="Football" headerDesc="Football is a globally beloved sport demanding exceptional teamwork, strategy, and endurance. Players exhibit high skill levels in passing, dribbling, and scoring goals to outmaneuver their opponents." bgImage={'/sports_page/football_bg.png'} headerSubtextArray={["Strategy", "Patience", "Resilience"]} />
            <div className="bg-gradient-to-b from-black from-0% via-[#0BC107] to-black to-100% min-h-screen py-10">
                <SubPageSection imageUrl="/sports_page/football_page_attacking.png" dispText="ATTACKING" />
                <SubPageSection imageUrl="/sports_page/football_page_midfield.png" dispText="MIDFIELD" />
                <SubPageSection imageUrl="/sports_page/football_page_defending.png" dispText="DEFENSE" />
                <SubPageSection imageUrl="/sports_page/football_page_goal_keeping.png" dispText="GOAL KEEPING" />
            </div>
        </div>
    )
}