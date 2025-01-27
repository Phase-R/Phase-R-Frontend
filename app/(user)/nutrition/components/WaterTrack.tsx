'use client';
import React, { useState } from 'react';

interface WaterTrackerProps {
    initialIntake?: number;
    dailyGoal?: number;
}

const WaterTracker: React.FC<WaterTrackerProps> = ({ initialIntake = 1400, dailyGoal = 2500 }) => {
    const [currentIntake, setCurrentIntake] = useState<number>(initialIntake);
    const [customAmount, setCustomAmount] = useState<number | null>(null);

    const addIntake = (amount: number) => {
        setCurrentIntake(currentIntake + amount);
        setCustomAmount(null);
    };

    const handleCustomAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setCustomAmount(isNaN(value) ? null : value);
    };

    const handleSave = () => {
        if (customAmount !== null) {
            addIntake(customAmount);
        }
    };

    return (
        <div className="container mx-auto">
            <div className="bg-gray-900 p-6 rounded-lg text-white">
                <h2 className="text-xl font-semibold mb-4">Log your water intake.</h2>
                <div className="mb-2">
                    <span className="text-gray-500 text-sm">Total Volume</span>
                    <span className="text-2xl font-bold ml-2">{currentIntake} ml</span>
                </div>
                <p className="text-gray-500 mb-4">Your Daily Goal: {dailyGoal} ml</p>
                <div className="flex gap-4 mb-4">
                    <button
                        className="bg-gray-800 rounded-lg p-3 flex flex-col items-center hover:bg-gray-700 transition"
                        onClick={() => addIntake(250)}
                    >
                        <span>250 ml</span>
                    </button>
                    <button
                        className="bg-gray-800 rounded-lg p-3 flex flex-col items-center hover:bg-gray-700 transition"
                        onClick={() => addIntake(500)}
                    >
                        <span>500 ml</span>
                    </button>
                    <button
                        className="bg-gray-800 rounded-lg p-3 flex flex-col items-center hover:bg-gray-700 transition"
                        onClick={() => addIntake(1000)}
                    >
                        <span>1000 ml</span>
                    </button>
                    <div className="bg-gray-800 rounded-lg p-2 flex items-center flex-grow">
                        <input
                            type="number"
                            placeholder="Custom Amount (ml)"
                            className="bg-transparent border-none text-white focus:outline-none flex-grow"
                            value={customAmount === null ? "" : customAmount.toString()}
                            onChange={handleCustomAmountChange}
                        />
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default WaterTracker;