import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import SubPageSection from "@/app/(user)/sports/cricket/SubPageSection";

export default function Badminton() {
    return (
        <div>                       
            <PageHeader headerColor="bg-[#24A28B]" headerHeading="Badminton" headerDesc="Badminton is a fast-paced sport requiring agility, precision, and strategy. Players need exceptional skill to dominate with powerful smashes, deft net shots, and tactical positioning." bgImage={'/sports_page/badminton_bg.png'} headerSubtextArray={["Strategy", "Patience", "Resilience"]} />
            <div className="bg-gradient-to-b from-black from-0% via-[#24A28B] to-black to-100% min-h-screen py-10">
                <SubPageSection imageUrl="/sports_page/badminton_page_fundamentals.png" dispText="FUNDAMENTALS, MOVEMENT AND NETPLAY" />
                <SubPageSection imageUrl="/sports_page/badminton_page_attacking.png" dispText="ATTACKING AND DOWNWARD SHOTS" />
                <SubPageSection imageUrl="/sports_page/badminton_page_defense.png" dispText="DEFENSE" />
            </div>
        </div>
    )
}