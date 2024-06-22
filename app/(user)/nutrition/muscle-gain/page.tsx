"use client"

import { Poppins } from "next/font/google"
import Link from "next/link"
import { useState } from "react"
const poppins = Poppins({subsets: ['latin'], weight : ['100', '200', '300','400', '500', '600', '700', '800', '900']})

// interface PropTypes {

// }

const Calculator = () => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [targetweight, setTargetWeight] = useState('')
    const [bmi, setBmi] = useState(0);
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // bmi calculation
        event.preventDefault();
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);
        if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
            const bmiValue = weightNum / Math.pow(heightNum / 100, 2);
            setBmi(bmiValue);
        }
        setSubmitted(true);
    }

    return (
        <div>
            <img src="/nutrition_page/weight_loss_bg.png" className="w-full brightness-50 max-h-[90vh]"/>
            <h1 className="absolute inset-0 mt-[20vh] sm:mt-[25vh] md:mt-[30vh] lg:mt-[35vh] xl:mt-[40vh] w-full text-center text-3xl xl:text-7xl md:text-5xl font-bold text-white"><span className="text-green-600">MUSCLE</span> GAIN</h1>

            <div className="flex w-full justify-center m-2 sm:m-8">
                <div className="flex flex-col w-full md:w-1/2 space-y-4">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div className="flex flex-col items-center text-md sm:text-lg md:text-xl lg:text-2xl">
                            <p className="text-white">ENTER YOUR HEIGHT</p>
                            <input type="number" className="rounded-md w-1/2" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} required/>
                        </div>
                        <div className="flex flex-col items-center text-md sm:text-lg md:text-xl lg:text-2xl">
                            <p className="text-white">ENTER YOUR WEIGHT</p>
                            <input type="number" className="rounded-md w-1/2" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} required/>
                        </div>
                        <div className="flex flex-col items-center text-md sm:text-lg md:text-xl lg:text-2xl">
                            <p className="text-white">ENTER YOUR TARGET WEIGHT</p>
                            <input type="number" className="rounded-md w-1/2" placeholder="Weight (kg)" value={targetweight} onChange={(e) => setTargetWeight(e.target.value)} required/>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-green-500 text-white rounded-full p-2 font-bold w-40">Generate BMI</button>
                        </div>
                    </form>

                    {submitted && (
                        <div className="flex flex-col items-center text-md sm:text-lg md:text-xl lg:text-2xl">
                            <p className="text-white">Your BMI is: {bmi.toFixed(2)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Calculator;
