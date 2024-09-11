"use client"

import { Poppins } from "next/font/google";
import { useState } from "react";
import { useRouter } from 'next/navigation'; // Updated to use the correct router import
import { useNutritionStore } from "@/app/store/store";

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

const Calculator = () => {
    const { BMI, setBMI, Goal_weight, setGoalWeight, Diet, setDiet, EstimatedTime, setEstimatedTime, Calories, setCalories, ActivityLevel, setActivityLevel } = useNutritionStore();

    const [targetweight, setTargetWeight] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [height, setHeight] = useState<number | null>(null);
    const [weight, setWeight] = useState<number | null>(null);
    const [bmi, setBmi] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const router = useRouter(); // Correct hook

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const dietPage = Diet === 'Veg' ? 'veg' : 'non-veg';
        router.push(`/nutrition/muscle-gain/${dietPage}`); // Correct navigation usage
    };

    const handleBMI = (e: React.FormEvent) => {
        e.preventDefault();
        if (height && weight) {
            const heightInMeters = height / 100;
            const calculatedBmi = weight / (heightInMeters * heightInMeters);
            setBmi(parseFloat(calculatedBmi.toFixed(2)));
            setBMI(parseFloat(calculatedBmi.toFixed(2)));

            if (calculatedBmi < 16 || calculatedBmi > 27) {
                setErrorMessage('Height or weight in invalid metrics');
            } else {
                setErrorMessage('');
            }
        } else {
            setErrorMessage('Please enter valid height and weight');
        }
    };

    return (
        <div className={`${poppins.className} bg-black overflow-x-hidden min-h-screen`}>
            <div className="relative w-full max-h-[90vh]">
                <img src="/nutrition_page/weight_loss_bg.png" className="w-full brightness-50 max-h-[90vh]" />
                <h1 className="absolute inset-0 flex items-center justify-center text-3xl xl:text-7xl md:text-5xl font-bold text-white">
                    <span className="text-green-600 mr-2 lg:mr-4 md:mr-3">MUSCLE</span> GAIN
                </h1>
            </div>

            <div className="flex w-full justify-center">
                <div className="flex flex-col w-full md:w-1/2 space-y-4">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
                            <div className="space-y-4 w-full max-w-md mx-auto">
                                <div className="space-y-2 w-3/4 md:w-full mx-auto">
                                    <label htmlFor="height" className="block text-sm font-medium">
                                        Enter Your Height (in cm)
                                    </label>
                                    <input
                                        type="text"
                                        value={height ?? ''}
                                        onChange={(e) => setHeight(Number(e.target.value))}
                                        className="w-full p-2 border border-gray-300 rounded-md bg-black text-white"
                                    />
                                </div>

                                <div className="space-y-2 w-3/4 md:w-full mx-auto">
                                    <label htmlFor="weight" className="block text-sm font-medium">
                                        Enter Your Weight (in kg)
                                    </label>
                                    <input
                                        type="text"
                                        value={weight ?? ''}
                                        onChange={(e) => setWeight(Number(e.target.value))}
                                        className="w-full p-2 border border-gray-300 rounded-md bg-black text-white"
                                    />
                                </div>

                                <div className="space-y-2 w-3/4 md:w-full mx-auto">
                                    <label htmlFor="target-weight" className="block text-sm font-medium">
                                        Enter Your Target Weight (in kg)
                                    </label>
                                    <input
                                        type="text"
                                        value={targetweight}
                                        onChange={(e) => {
                                            setTargetWeight(e.target.value);
                                            setGoalWeight(e.target.value);
                                        }}
                                        className="w-full p-2 border border-gray-300 rounded-md bg-black text-white"
                                    />
                                </div>

                                <div className="flex justify-center">
                                    <button onClick={handleBMI} className="w-[50%] py-2 mt-4 text-white font-bold bg-[#4AC847] rounded-md">
                                        Generate BMI
                                    </button>
                                </div>

                                {/* Display BMI result */}
                                {bmi !== null && (
                                    <div className="text-center mt-4">
                                        <h1 className="text-3xl font-bold">
                                            Your BMI is: <span className="text-green-600">{bmi}</span>
                                        </h1>
                                        {errorMessage && (
                                            <p className="text-red-600 mt-2">{errorMessage}</p>
                                        )}
                                    </div>
                                )}

                                {/* Estimated Time Input */}
                                <div className="space-y-2 w-3/4 md:w-full mx-auto">
                                    <label htmlFor="estimated-time" className="block text-sm font-medium">
                                        Estimated time to reach target weight (in weeks)
                                    </label>
                                    <input
                                        type="text"
                                        value={EstimatedTime}
                                        onChange={(e) => setEstimatedTime(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md bg-black text-white"
                                    />
                                </div>

                                {/* Calories Input */}
                                <div className="space-y-2 w-3/4 md:w-full mx-auto">
                                    <label htmlFor="calories" className="block text-sm font-medium">
                                        Calories to be consumed to reach target weight
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="A calculated value should be entered here"
                                        value={Calories}
                                        onChange={(e) => setCalories(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md bg-black text-white"
                                    />
                                </div>

                                {/* Activity Level Dropdown */}
                                <div className="space-y-2 w-3/4 md:w-full mx-auto">
                                    <label htmlFor="activity-level" className="block text-sm font-medium">
                                        Activity level
                                    </label>
                                    <select
                                        id="activity-level"
                                        value={ActivityLevel}
                                        onChange={(e) => setActivityLevel(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md bg-black text-white"
                                    >
                                        <option value="low">Low (1-2 times a week)</option>
                                        <option value="moderate">Moderate (3-4 times a week)</option>
                                        <option value="high">High (5-6 times a week)</option>
                                        <option value="intense">Intense (7 times a week)</option>
                                    </select>
                                </div>

                                {/* Diet and activity options */}
                                <div className="space-y-2 w-3/4 md:w-full mx-auto">
                                    <label htmlFor="diet" className="block text-sm font-medium">
                                        Select Diet Type
                                    </label>
                                    <select
                                        id="diet"
                                        value={Diet}
                                        onChange={(e) => setDiet(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md bg-black text-white"
                                    >
                                        <option value="Veg">Veg</option>
                                        <option value="Non Veg">Non Veg</option>
                                    </select>
                                </div>
                                <div className="flex justify-center">
                                    <button onClick={handleSubmit} className="w-[50%] py-2 mt-4 text-white font-bold bg-[#4AC847] rounded-md">
                                        Generate Diet
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
