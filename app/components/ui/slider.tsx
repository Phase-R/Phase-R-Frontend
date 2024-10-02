"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400'],
  style: 'italic'
});

interface SliderProps {
  description?: string[];
  images: string[];
  sideText?: string[];
}

// added optional props for mental health review carousel
const Slider: React.FC<SliderProps> = ({ description = [], images, sideText = [] }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeDescription, setDescription] = useState(0);
  const [activeSideText, setSideText] = useState(0);

  const clickNext = () => {
    setActiveImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
    setDescription(prev => (prev === description.length - 1 ? 0 : prev + 1));
    setSideText(prev => (prev === sideText.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage, activeDescription, activeSideText]);

  if (description.length > 0 && sideText.length > 0) {
    return (
      <div className="flex flex-col justify-center items-center mt-10 md:mt-12 lg:mt-16">
        <div className="bg-white p-8 rounded-lg h-72 w-72 md:w-80 md:h-80 lg:w-96 lg:h-96 max-w-md flex flex-col justify-between">
          {description.map((elem, idx) => (
            <p
              key={`description-${idx}`}
              className={`${poppins.className} ${idx === activeDescription
                ? "italic text-gray-700 text-lg md:text-xl lg:text-2xl text-center mt-6" // Adjusted margin-top here
                : "hidden"
                }`}
            >
              {elem}
            </p>
          ))}

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center space-x-4">
              {images.map((elem, idx) => (
                <img
                  key={`image-${idx}`}
                  src={elem}
                  alt="Profile"
                  className={`${idx === activeImage
                    ? "w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full object-cover"
                    : "hidden"
                    }`}
                />
              ))}

              {sideText.map((elem, idx) => (
                <span
                  key={`sideText-${idx}`}
                  className={`${idx === activeSideText
                    ? "font-bold text-gray-800 text-md md:text-lg lg:text-xl"
                    : "hidden"
                    }`}
                >
                  {elem}
                </span>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-12">
              {images.map((_, idx) => (
                <div
                  key={`dot-${idx}`}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-gray-400 transition-all duration-300 ${idx === activeImage ? "bg-gray-800 w-2 h-2 lg:w-3 lg:h-3" : ""}`}
                  onClick={() => {
                    setActiveImage(idx);
                    setDescription(idx);
                    setSideText(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );



  } else {
    return (
      <main className="place-items-center w-full mx-auto p-10 shadow-2xl rounded-2xl">
        <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0">
          {images.map((elem, idx) => (
            <div
              key={`sliderImage-${idx}`}
              className={`${idx === activeImage
                ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
                }`}
            >
              <img
                src={elem}
                alt=""
                className="w-full h-full object-cover rounded-xl md:rounded-3xl"
              />
            </div>
          ))}
        </div>
      </main>
    );
  }
};

export default Slider;
