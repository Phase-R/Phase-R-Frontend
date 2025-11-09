import React from 'react';
import BasketballHero from './BasketballHero';
import InfoSection from './InfoSection';

// Data for the sections to keep the main JSX clean
const sectionsData = [
  {
    id: 1,
    title: "Player Performance Stats",
    description: "Player performance stats in basketball provide a detailed view of an athlete's impact on the game. These metrics go beyond just scoring points—they capture every aspect of a player's contribution, including assists, rebounds, steals, and blocks.",
    imageSrc: "/sports_page/basketball2.jpg" // Replace with actual path
  },
  {
    id: 2,
    title: "Tutorial Videos Section",
    description: "Master the skills, techniques, and strategies that make champions. Watch exclusive PHASE-REV tutorials from coaches and players to elevate your game to the next level.",
    imageSrc: "/sports_page/basketball3.jpg" // Replace with actual path
  },
  {
    id: 3,
    title: "TRACK YOUR GAME",
    description: "Upload your clips and take help of our top trainers to improve and focus on your game. Analyze your movements and get personalized feedback.",
    imageSrc: "/sports_page/basketball4.jpg" // Replace with actual path
  }
];

export default function BasketballPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* 1. Hero Section at the top */}
      <BasketballHero />

      {/* 2. Main Content Gradient Background */}
      {/* This gradient matches the mockup: Dark top, Orange middle, Dark bottom */}
      <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-[#92400E] to-black">
        <div className="flex flex-col gap-10 md:gap-0">
            {sectionsData.map((section) => (
            <InfoSection
                key={section.id}
                title={section.title}
                description={section.description}
                imageSrc={section.imageSrc}
            />
            ))}
        </div>
      </div>

       {/* Optional: Spacer at the bottom if needed before footer */}
       <div className="h-20 bg-black"></div>
    </main>
  );
}