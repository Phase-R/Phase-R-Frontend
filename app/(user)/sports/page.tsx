import React from "react"
import PageSection from "../PageSection"
import PageHeader from "../PageHeader"

export default function Sports() {
    return (
        <div>

            <PageHeader headerHeading="Sports" bgImage={"/sports_page/sportsHeaderBg.svg"} headerDesc="Sports provide numerous physical and mental benefits. They promote fitness, teamwork, discipline, and mental resilience. Engaging in sports enhances cardiovascular health, fosters social connections, and instills essential life skills" headerColor='bg-[#62A0BF]' headerSubtextArray={["team work", "passion", "resilience"]} />

            <div className="bg-gradient-to-b from-[#000000] via-[#62a0bf] to-[#191a1b] py-10">
                <PageSection borderColor="border-[#62a0bf]" highlightWord="cricket" highlightColor="#62a0bf" imageUrl="/sports_page/cricket_ball.png" heading="CRICKET: BAT, BOWL, SCORE, ROAR" desc='Cricket is a very old game which requires the utmost of wits, tenacity and discipline combined with a high skill level either with the bat, ball or both.. This application aims at improving the fundamentals of the game' linkTo="/sports/cricket" />
                <PageSection borderColor="border-[#62a0bf]" highlightWord="football" highlightColor="#62a0bf" direction="right" imageUrl="/sports_page/Football.jpg" heading="FOOTBALL FEVER, THE GLOBAL PASSION" desc="Football, known for its physical and mental benefits, promotes fitness, teamwork, and discipline. It enhances cardiovascular health, agility, and strength. Beyond the field, it fosters camaraderie and sportsmanship, teaching valuable life skills like communication and perseverance" linkTo="/sports/football" />
                <PageSection borderColor="border-[#62a0bf]" highlightWord="badminton" highlightColor="#62a0bf" imageUrl="/sports_page/badminton.png" heading="THE BADMINTON AIM" desc="Badminton is the fastest sport in the world and it requires a great deal of hand-eye coordination and great levels of mental toughness coupled with skill and fitness levels." linkTo="/sports/badminton" />
                <PageSection borderColor="border-[#62a0bf]" highlightWord="basketball" highlightColor="#62a0bf" direction="right" imageUrl="/sports_page/Basketball.webp" heading="DRIBBLE & SHOOT BASKETBALL" desc="Basketball offers numerous physical and mental benefits. It improves cardiovascular health, agility, and endurance through constant movement. The sport fosters teamwork, communication, and sportsmanship, teaching valuable life skills. Playing basketball boosts self-esteem and confidence as players overcome challenges and celebrate achievements." linkTo="/sports/basketball" />
            </div>
        </div>
    )
}