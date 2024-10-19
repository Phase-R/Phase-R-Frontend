import React from "react";

interface PyramidProps {
  size: string; // Size prop to adjust the height
}

const Pyramid: React.FC<PyramidProps> = ({ size }) => {
  return (
    <div
      className={`relative ${size} mx-auto pt-8 pb-10`} // Added margin-bottom (mb-20) to avoid getting hidden by footer
      style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", width: "350px", height: "300px" }}
    >
      {/* Fats */}
      <div className="absolute top-0 w-full h-20 bg-blue-700 text-white text-center flex items-center justify-center">
        Fats
      </div>

      {/* Proteins */}
      <div className="absolute top-[25%] w-full bg-red-600 text-white text-center flex items-center justify-center"
      style={{height:"25%"}}>
        Proteins
      </div>

      {/* Vitamins and Minerals */}
      <div className="absolute top-[50%] w-full bg-green-500 text-white text-center flex items-center justify-center"
      style={{height:"25%"}}>
        Vitamins And Minerals
      </div>

      {/* Carbohydrates */}
      <div className="absolute top-[75%] w-full bg-yellow-400 text-white text-center flex items-center justify-center"
      style={{height:"25%"}}>
        Carbohydrates
      </div>
    </div>
  );
};

export default Pyramid;