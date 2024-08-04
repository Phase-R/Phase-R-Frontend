import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '300', '400'],
});

interface MCQProps {
    question: string[];
}

const MCQ: React.FC<MCQProps> = ({ question }) => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(new Array(question.length).fill(null));

    const clickNext = () => {
        // Store the selected option in the array
        setSelectedOptions(prev => {
            const updated = [...prev];
            updated[activeQuestion] = selectedOptions[activeQuestion];
            return updated;
        });

        // Move to the next question
        setActiveQuestion(prev => (prev === question.length - 1 ? 0 : prev + 1));
    };

    const clickPrev = () => {
        // Move to the previous question
        setActiveQuestion(prev => (prev === 0 ? question.length - 1 : prev - 1));
    };

    const handleOptionClick = (option: string) => {
        // Update the selected option for the current question
        setSelectedOptions(prev => {
            const updated = [...prev];
            updated[activeQuestion] = option;
            return updated;
        });
    };

    return (
        <>
            <div className="rounded-lg overflow-hidden max-w-xs md:max-w-md lg:max-w-lg mx-auto mt-16 bg-gradient-to-b from-[#7E401E] via-[#E3C016] to-[#2A2102]">
                <div className="p-4 md:p-10 lg:p-10">
                    <h3 className={`${poppins.className} text-white text-xl lg:text-3xl md:text-2xl font-semibold mb-6 text-center`} style={{ textShadow: '2px 2px 3px black' }}>
                        {question[activeQuestion]}
                    </h3>
                </div>
                <div className="bg-black p-4 md:p-10 lg:p-10">
                    <div className="flex flex-col items-center space-y-2 md:space-y-2 lg:space-y-4 mt-4 md:mt-0 lg:mt-0">
                        {["ALL OF THE TIME", "MOST OF THE TIME", "SOME OF THE TIME", "NONE OF THE TIME"].map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className={`${poppins.className} w-3/5 md:w-1/2 lg:w-1/2 py-1 md:py-1 lg:py-2 rounded-full text-sm md:text-md lg:text-lg font-bold text-white ${selectedOptions[activeQuestion] === option ? 'bg-[#4AC847]' : 'bg-[#d9d9d9]'} hover:bg-[#4AC847]`}
                                style={{ textShadow: '2px 2px 3px black' }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <button onClick={clickPrev}>
                            <img src="/mental_health/left-arrow.png" alt="Left Arrow" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        </button>
                        <button onClick={clickNext} className={`${poppins.className} rounded-full ml-4 mr-4 md:ml-6 md:mr-6 lg:ml-8 lg:mr-8 py-1 px-6 md:px-8 lg:py-2 lg:px-10 font-bold bg-[#d9d9d9] text-white text-sm md:text-md lg:text-lg drop-shadow-lg`} style={{ textShadow: '2px 2px 3px black' }}>
                            SKIP
                        </button>
                        <button onClick={clickNext}>
                            <img src="/mental_health/right-arrow.png" alt="Right Arrow" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MCQ;
