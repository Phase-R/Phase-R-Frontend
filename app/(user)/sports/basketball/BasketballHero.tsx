import React from 'react';
import Image from 'next/image';

const BasketballHero = () => {
  return (
    // FIX #1: Added md:h-[70vh] and, most importantly, md:max-h-[750px]
    // This caps the hero's height to a max of 750px, solving the "too large" problem.
    <div className="relative min-h-[60vh] md:h-[70vh] md:max-h-[750px] flex flex-col-reverse md:flex-row items-center bg-black overflow-hidden">
      
      {/* Text Content - No changes needed here */}
      <div className="w-full md:w-1/2 p-8 md:p-16 z-10 flex flex-col items-start justify-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Basketball
        </h1>
        
        <p className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed">
          Basketball is a fast-paced team sport played between two teams of five players each. The main objective is to score points by shooting a ball through the opponent's hoop.
        </p>
        
        <button className="bg-[#F59E0B] text-black font-bold px-8 py-3 rounded-full hover:bg-[#D97706] transition-colors">
          Learn More >>
        </button>
      </div>

      {/* Hero Image Container - This part is fine, it will respect the parent's new max-height */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-full relative md:absolute md:right-0 md:top-0">
        <Image
          src="/sports_page/hoopBallLayup.jpg" // Your image path
          alt="Basketball Hoop"
          fill
          // FIX #2: Changed "object-center md:object-left-top" to just "object-center"
          // This keeps the hoop (the subject) in the middle of the frame.
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay to blend image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent md:via-black/50" />
      </div>
    </div>
  );
};

export default BasketballHero;