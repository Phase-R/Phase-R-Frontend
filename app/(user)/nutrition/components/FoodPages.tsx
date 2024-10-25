"use client";

import { useState, useEffect } from "react";
import customIcon from "../muscle-gain/icon/icon";
import { Poppins } from "next/font/google";
import Pyramid from "./Pyramid";
import CountryDropdown from "./CountryDD";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface ProteinSource {
  name: string;
  amount: number;
}

enum FoodCategory {
  Veg = "veg",
  NonVeg = "non_veg",
}

interface PageProps {
  color: string;
  category: FoodCategory;
  first_title: string;
  second_title: string;
  hero_desc1: string;
  hero_desc2: string;
  hero_desc3: string;
  hero_img1: string;
  hero_img2: string;
  hero_img3: string;
  diet_desc: string;
  sources_list: ProteinSource[];
  color1: string;
  color2: string;
  color3: string;
}

const MuscleGainPage: React.FC<PageProps> = ({
  color,
  category,
  first_title,
  second_title,
  hero_desc1,
  hero_desc2,
  hero_desc3,
  hero_img1,
  hero_img2,
  hero_img3,
  diet_desc,
  sources_list,
  color1,
  color2,
  color3,
}) => {
  const [selected, setSelected] = useState<ProteinSource[]>([]);
    const [dietHtml, setDietHtml] = useState<string>("");

  const handleCheckBoxInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const isChecked = event.target.checked;
    const updatedProteins = [...selected];
    const protein_source = sources_list[index];

    if (isChecked) {
      updatedProteins.push(protein_source);
    } else {
      const indexOfRemoved = updatedProteins.findIndex(
        (item) => item.name === protein_source.name,
      );
      updatedProteins.splice(indexOfRemoved, 1);
    }

    setSelected(updatedProteins);
  };

    const generateDiet = async () => {
        const params = {
            plan: "Muscle Gain",
            activity: "Moderate",
            cuisine: "Italian",
            meal_choice: "Vegetarian"
        };

        try {
            const response = await fetch("http://localhost:8000/generate_diet", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let result = "";
            if (!reader) return;

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                // Decode the chunk and split by lines
                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split('\n');

                // Process each line
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const message = line.slice(6); // Remove 'data: ' prefix
                        const parsedMessage = JSON.parse(message);
                        result += parsedMessage.message; // Append the message content
                        setDietHtml(prev => prev + parsedMessage.message);
                    }
                }
            }

        } catch (error) {
            console.error("Error fetching diet data:", error);
        }
    };

  return (
    <div
      className={`bg-gradient-to-b from-${color1} via-${color2} to-${color3} min-h-screen text-white text-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className={`text-${color}-500 text-3xl font-bold mb-8 pb-2 border-b-4`}
        >
          Nutrition
        </h2>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">{first_title}</h3>
              <p className="mb-4 text-xl">{hero_desc1}</p>
              <img
                src={hero_img1}
                alt="muscle gain hero"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">{second_title}</h4>
              <p className="mb-4 text-xl">{hero_desc2}</p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={hero_img2}
                  alt="greek sculpture"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src={hero_img3}
                  alt="muscle gain veg hero"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <p className="mt-4 text-xl">{hero_desc3}</p>
            </div>
          </div>
        </section>

        {/* Diet Section */}
        <section className="mb-16">
          <h3
            className={`text-${color}-500 text-2xl font-bold mb-4 flex items-center`}
          >
            Choose your diet
            {customIcon(color)}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <img
              src={`/nutrition_page/${color}s_food_1.svg`}
              alt="diet image 1"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="md:col-span-2">
              <h4 className={`text-${color}-500 text-xl font-bold mb-2`}>
                {category === FoodCategory.Veg
                  ? "A vegetarian Diet"
                  : "A non vegetarian Diet"}
              </h4>
              <p className="text-xl">{diet_desc}</p>
            </div>
          </div>
        </section>

        {/* Protein Sources Section */}
        <section>
          <h3
            className={`text-${color}-500 text-2xl font-bold mb-4 text-center`}
          >
            {category === FoodCategory.Veg
              ? "Vegetarian Sources"
              : "Non Vegetarian Sources"}
          </h3>
          <div>
            <h4
              className={`text-${color}-500 text-xl font-semibold mb-4 text-center`}
            >
              CHOOSE YOUR COUNTRY
            </h4>
          </div>
          <div className="flex justify-center items-center h-14 bg-transparent">
            <CountryDropdown />
          </div>
          <br />
          <br />
          <h4
            className={`text-${color}-500 text-xl font-semibold mb-4 text-center`}
          >
            CHOOSE YOUR PROTEIN SOURCES
          </h4>
          <div className="max-w-md mx-auto">
            {sources_list.map((source, index) => (
              <div
                key={source.name}
                className="flex items-center justify-between mb-2"
              >
                <label htmlFor={source.name} className="flex-grow text-lg">
                  <span className={`text-${color}-500`}>
                    {index + 1}. {source.name}
                  </span>
                  <span className="text-white ml-2">
                    : {source.amount} grams
                  </span>
                </label>
                <input
                  className="w-6 h-6"
                  type="checkbox"
                  id={source.name}
                  checked={selected.some((item) => item.name === source.name)}
                  onChange={(event) => handleCheckBoxInput(event, index)}
                />
              </div>
            ))}
            <div className="flex flex-col items-center mt-8 space-y-4">
              <button onClick={generateDiet} className="w-full py-3 text-white text-xl font-bold bg-[#4AC847] rounded-md">
                Generate Diet
              </button>
              <button className="w-full py-3 text-white text-xl font-bold bg-[#4AC847] rounded-md">
                Customize Diet
              </button>
            </div>
          </div>
          <div className="mt-16">
            <Pyramid size="h-64" />
          </div>
                    <div className="mt-4">
                    {dietHtml && (
                        <div dangerouslySetInnerHTML={{ __html: dietHtml }} /> // Render the HTML table
                    )}
                    </div>
        </section>
      </div>
    </div>
  );
};

export { MuscleGainPage, FoodCategory };