import { useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

interface MCQProps {
    question: string[];
}

const FlipCard: React.FC<MCQProps> = ({ question }) => {
    const [flipped, setFlipped] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(new Array(question.length).fill(null));

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleNext = () => {
        if (activeQuestion < question.length - 1) {
            setActiveQuestion(prev => prev + 1);
            setFlipped(true);
        } else {
            setActiveQuestion(0);
            setFlipped(false);
        }
    };

    const handlePrev = () => {
        if (activeQuestion > 0) {
            setActiveQuestion(prev => prev - 1);
            setFlipped(true);
        } else {
            setFlipped(false);
        }
    };

    const handleOptionClick = (option: number) => {
        setSelectedOptions(prev => {
            const updated = [...prev];
            updated[activeQuestion] = option.toString();
            return updated;
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/evaluate_answers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answers: selectedOptions }),
				credentials: 'include'	
            });
            if (response.ok) {
                console.log('Answers submitted successfully');
            } else {
                console.error('Failed to submit answers');
            }
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    }; 

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="h-[500px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-transparent cursor-pointer perspective">
                <div className={`mt-24 backface-hidden relative preserve-3d w-full h-full duration-1000 ${flipped ? 'my-rotate-y-180' : ''}`}>
                    <div className="absolute backface-hidden" onClick={handleFlip}>
                        <div className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black">
                            <Image
                                src="/mental_health/combined_1.png"
                                alt="combined_1"
                                layout="responsive"
                                height={500}
                                width={500}
                                className="object-cover opacity-70"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <h2 className={`${poppins.className} text-white sm:text-lg text-2xl md:text-4xl font-bold text-center`}>
                                    WELL-BEING<br className="block" />
                                    QUESTIONNAIRE
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden">
                        <div className="absolute backface-hidden w-full h-full mx-auto">
                            <div className="rounded-lg overflow-hidden w-full bg-gradient-to-b from-[#7E401E] via-[#E3C016] to-[#2A2102]">
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
                                                onClick={() => handleOptionClick(index)}
                                                className={`${poppins.className} w-3/5 md:w-1/2 lg:w-1/2 py-1 md:py-1 lg:py-2 rounded-full text-sm md:text-md lg:text-lg font-bold text-white ${selectedOptions[activeQuestion] === index.toString() ? 'bg-[#4AC847]' : 'bg-[#d9d9d9]'} hover:bg-[#4AC847]`}
                                                style={{ textShadow: '2px 2px 3px black' }}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex justify-center items-center mt-8">
                                        <button onClick={handlePrev}>
                                            <img src="/mental_health/left-arrow.png" alt="Left Arrow" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                        </button>
                                        {activeQuestion === question.length - 1 ? (
                                            <button onClick={handleSubmit} className={`${poppins.className} rounded-full ml-4 mr-4 md:ml-6 md:mr-6 lg:ml-8 lg:mr-8 py-1 px-6 md:px-8 lg:py-2 lg:px-10 font-bold bg-[#4AC847] text-white text-sm md:text-md lg:text-lg drop-shadow-lg`} style={{ textShadow: '2px 2px 3px black' }}>
                                                SUBMIT
                                            </button>
                                        ) : (
                                            <button onClick={handleNext} className={`${poppins.className} rounded-full ml-4 mr-4 md:ml-6 md:mr-6 lg:ml-8 lg:mr-8 py-1 px-6 md:px-8 lg:py-2 lg:px-10 font-bold bg-[#d9d9d9] text-white text-sm md:text-md lg:text-lg drop-shadow-lg`} style={{ textShadow: '2px 2px 3px black' }}>
                                                SKIP
                                            </button>
                                        )}
                                        <button onClick={handleNext}>
                                            <img src="/mental_health/right-arrow.png" alt="Right Arrow" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
