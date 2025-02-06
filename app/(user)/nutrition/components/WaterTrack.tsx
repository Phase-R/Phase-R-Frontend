"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface WaterTrackerProps {
  initialIntake?: number
  dailyGoal?: number
}

const WaterTracker: React.FC<WaterTrackerProps> = ({ initialIntake = 1400, dailyGoal = 2500 }) => {
  const [currentIntake, setCurrentIntake] = useState<number>(initialIntake)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const addIntake = (amount: number) => {
    setCurrentIntake(currentIntake + amount)
  }

  const handleCurrentIntakeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(event.target.value, 10)
    if (!isNaN(value)) {
      setCurrentIntake(value)
    }
  }

  const handleCurrentIntakeBlur = () => {
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-900 p-4 sm:p-6 rounded-lg text-white max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <p className="text-sm text-gray-400 mb-4 text-center">Click on current intake to log your water</p>
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Water Intake Tracker</h2>
        <div className="mb-2 flex items-center justify-center">
          <span className="text-gray-500 text-xs sm:text-sm mr-2">Total Volume</span>
          {isEditing ? (
            <input
              ref={inputRef}
              type="number"
              value={currentIntake}
              onChange={handleCurrentIntakeChange}
              onBlur={handleCurrentIntakeBlur}
              className="bg-gray-800 text-white text-xl sm:text-2xl font-bold w-20 sm:w-24 px-2 py-1 rounded"
            />
          ) : (
            <span className="text-xl sm:text-2xl font-bold cursor-pointer" onClick={() => setIsEditing(true)}>
              {currentIntake}
            </span>
          )}
          <span className="text-xl sm:text-2xl font-bold ml-2">ml</span>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 text-center">Your Daily Goal: {dailyGoal} ml</p>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <button
            className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center hover:bg-gray-700 transition text-xs sm:text-sm"
            onClick={() => addIntake(250)}
          >
            <span>250 ml</span>
          </button>
          <button
            className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center hover:bg-gray-700 transition text-xs sm:text-sm"
            onClick={() => addIntake(500)}
          >
            <span>500 ml</span>
          </button>
          <button
            className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center hover:bg-gray-700 transition text-xs sm:text-sm"
            onClick={() => addIntake(1000)}
          >
            <span>1000 ml</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WaterTracker