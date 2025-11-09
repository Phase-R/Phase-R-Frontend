import React from 'react';
import Image from 'next/image';

interface InfoSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText?: string;
  // Optional prop to reverse layout (image on right, text on left)
  reverse?: boolean; 
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  description,
  imageSrc,
  buttonText = "Take me there>>",
  reverse = false // Default to image on left, text on right
}) => {
  return (
    // Removed max-w-7xl, added max-w-screen-2xl for overall page content size control
    // Added 2xl:px-32 for extra large screen padding
    <div className={`flex flex-col md:flex-row items-center gap-8 py-16 md:py-24 px-6 md:px-16 2xl:px-32 max-w-screen-2xl mx-auto
                     ${reverse ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Image Half */}
      {/* REVERTED: Using explicit heights to make them large, as requested.
          object-cover ensures they fill the container uniformly. */}
      <div className="w-full md:w-1/2 relative h-[350px] md:h-[600px] rounded-3xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center" // object-center is a good default for uniformity
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Text Half */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-7 md:space-y-8">
        {/* INCREASED TEXT SIZES: Globally bumped up */}
        <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-bold text-[#D97706] uppercase leading-tight">
          {title}
        </h2>
        {/* INCREASED TEXT SIZES: Globally bumped up */}
        <p className="text-base md:text-lg 2xl:text-xl text-gray-200 leading-relaxed max-w-md md:max-w-none">
          {description}
        </p>
        <button className="px-10 py-4 border-2 border-[#F59E0B] text-[#F59E0B] rounded-full hover:bg-[#F59E0B] hover:text-black transition-all duration-300 uppercase text-base font-semibold">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default InfoSection;