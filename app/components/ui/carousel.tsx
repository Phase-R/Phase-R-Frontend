"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = ({images}: {images: string[]}) => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <main className="place-items-center w-full mx-auto p-10 shadow-2xl rounded-2xl">
      <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0">
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <img
              src={elem}
              alt=""
              // width={400}
              // height={400}
              className="w-full h-full object-cover rounded-xl md:rounded-3xl"
            />
          </div>
        ))}
      </div>
      {/* <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      /> */}
    </main>
  );
};

export default Slider;